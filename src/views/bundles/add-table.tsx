import React from 'react';
import DataTable, { useRowSelection } from '@commercetools-uikit/data-table';
import CheckboxInput from '@commercetools-uikit/checkbox-input';
import PrimaryButton from '@commercetools-uikit/primary-button';
import SecondaryButton from '@commercetools-uikit/secondary-button';
import Spacings from '@commercetools-uikit/spacings';
import { useSetProductAttributesMutation, useAddProductBundleMutation } from '../../generated/graphql';
import useNotify from '../../utils/useNotify';
import { GQLTarget } from '../../constants';
import { ListProduct, ListProductSelection } from '../../types';

type Props = {
  rows: ListProduct[];
  selectionLvl1: ListProduct[];
};

const AddTable = (props: Props): JSX.Element => {
  const [setProductAttributesMutation, setProductAttributesState] = useSetProductAttributesMutation({
    ...GQLTarget,
  });

  const [addProductBundleMutation, addProductBundleState] = useAddProductBundleMutation({
    ...GQLTarget,
  });

  const { notifySuccess, notifyError } = useNotify();

  const { rows: rowsWithSelection, toggleRow, getIsRowSelected, getNumberOfSelectedRows } = useRowSelection(
    'checkbox',
    props.rows,
  );

  const columns = [
    {
      key: 'checkbox',
      label: '',
      shouldIgnoreRowClick: true,
      align: 'center',
      renderItem: (row: ListProduct) => (
        <CheckboxInput isChecked={getIsRowSelected(row.id)} onChange={() => toggleRow(row.id)} />
      ),
      disableResizing: true,
      width: '50px',
    },
    {
      key: 'name',
      label: 'Product name',
      renderItem: (item: ListProduct) => item.masterData.current.name,
      width: '250px',
    },
    {
      key: 'producttype',
      label: 'Product Type',
      renderItem: (item: ListProduct) => item.productType.key,
    },
  ];

  const cleanFields = async () => {
    const selection: ListProduct = props.selectionLvl1[0];
    await setProductAttributesMutation({
      variables: {
        id: selection.id,
        version: selection.version,
        fieldName: 'product-bundle-data',
        value: '""',
      },
    });

    await setProductAttributesMutation({
      variables: {
        id: selection.id,
        version: selection.version,
        fieldName: 'variant-bundle-data',
        value: '""',
      },
    });
  };

  const createBundleAsString = async (fieldName: string) => {
    const selected = rowsWithSelection
      .filter((row: ListProductSelection) => row.checkbox === true)
      .map((row) => ({
        name: row.masterData.current.name,
      }));

    const result = await setProductAttributesMutation({
      variables: {
        id: props.selectionLvl1[0].id,
        version: props.selectionLvl1[0].version,
        fieldName,
        // String values need to be wrapped in quotes. TODO: Make util for this
        value: `"${JSON.stringify(selected).replaceAll('"', '\\"')}"`,
      },
    });

    if (result) notifySuccess('Bundle created and published');
  };

  const createBundleAsNewProduct = async () => {
    const selectedAsRef = rowsWithSelection
      .filter((row: ListProductSelection) => row.checkbox === true)
      .map((row) => ({
        id: row.id,
        typeId: 'product',
      }));

    const result = await addProductBundleMutation({
      variables: {
        name: `bundle-${props.selectionLvl1[0].masterData.current.name}`,
        slug: `slug-${props.selectionLvl1[0].masterData.current.name.replaceAll(' ', '-')}`,
        // Need to stringify custom field value, as type is string
        productReferences: JSON.stringify(selectedAsRef),
      },
    });

    if (result) notifySuccess('Bundle created and published');
  };

  const noneSelected = getNumberOfSelectedRows() === 0;

  if (setProductAttributesState.error) notifyError(`Error: "${setProductAttributesState.error.message}"`);

  return (
    <Spacings.Stack scale="s">
      <DataTable rows={rowsWithSelection} columns={columns} maxHeight="max(400px, calc(100vh - 300px))" />
      <Spacings.Inline scale="m">
        <PrimaryButton
          label="Create bundle - set attribute on product"
          onClick={() => createBundleAsString('product-bundle-data')}
          isDisabled={noneSelected}
        />
        <PrimaryButton
          label="- on variants"
          onClick={() => createBundleAsString('variant-bundle-data')}
          isDisabled={noneSelected}
        />
        <SecondaryButton label="Clear data" onClick={() => cleanFields()} />
        {setProductAttributesState.loading && <span>Loading...</span>}
      </Spacings.Inline>
      <Spacings.Inline scale="m">
        <PrimaryButton
          label="Create bundle - new product"
          onClick={() => createBundleAsNewProduct()}
          isDisabled={noneSelected}
        />
        {addProductBundleState.loading && <span>Loading...</span>}
      </Spacings.Inline>
    </Spacings.Stack>
  );
};

AddTable.displayName = 'AddTable';
export default AddTable;
