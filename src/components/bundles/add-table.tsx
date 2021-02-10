import React from 'react';
import DataTable, { useRowSelection } from '@commercetools-uikit/data-table';
import CheckboxInput from '@commercetools-uikit/checkbox-input';
import PrimaryButton from '@commercetools-uikit/primary-button';
import SecondaryButton from '@commercetools-uikit/secondary-button';
import Spacings from '@commercetools-uikit/spacings';
import { useSetProductAttributesMutation } from '../../generated/graphql';
import useNotify from '../../utils/useNotify';
import { GQLTarget } from '../../constants';
import { ListProduct } from '../../types';

type Props = {
  rows: ListProduct[];
  selectionLvl1: ListProduct[];
};

const AddTable = (props: Props): JSX.Element => {
  const [setProductAttributesMutation, { /* data, */ loading, error }] = useSetProductAttributesMutation({
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
      renderItem: (row) => <CheckboxInput isChecked={getIsRowSelected(row.id)} onChange={() => toggleRow(row.id)} />,
      disableResizing: true,
      width: '50px',
    },
    {
      key: 'name',
      label: 'Product name',
      renderItem: (item) => item.masterData.current.name,
      width: '250px',
    },
    {
      key: 'producttype',
      label: 'Product Type',
      renderItem: (item) => item.productType.key,
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
      .filter((row) => row.checkbox === true)
      .map((row) => ({
        name: row.masterData.current.name,
      }));

    const result = await setProductAttributesMutation({
      variables: {
        id: props.selectionLvl1[0].id,
        version: props.selectionLvl1[0].version,
        fieldName,
        // Value needs to be wrapped in quotes. TODO: Make util for this
        value: `"${JSON.stringify(selected).replaceAll('"', '\\"')}"`,
      },
    });

    if (result) notifySuccess('Bundle created and published');
  };

  const noneSelected = getNumberOfSelectedRows() === 0;

  if (error) notifyError(`Error: "${error.message}"`);

  return (
    <Spacings.Stack scale="m">
      <DataTable rows={rowsWithSelection} columns={columns} maxHeight="max(400px, calc(100vh - 300px))" />
      <div>
        <PrimaryButton
          label="Create bundle - data on product"
          onClick={() => createBundleAsString('product-bundle-data')}
          isDisabled={noneSelected}
        />
        &nbsp;&nbsp;
        <PrimaryButton
          label="- on variants"
          onClick={() => createBundleAsString('variant-bundle-data')}
          isDisabled={noneSelected}
        />
        <br />
        <br />
        <SecondaryButton label="Clear data" onClick={() => cleanFields()} />
        {loading && <p>Loading...</p>}
      </div>
    </Spacings.Stack>
  );
};

AddTable.displayName = 'AddTable';
export default AddTable;
