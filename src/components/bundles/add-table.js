import React from 'react';
import DataTable, { useRowSelection } from '@commercetools-uikit/data-table';
import { GRAPHQL_TARGETS } from '@commercetools-frontend/constants';
import CheckboxInput from '@commercetools-uikit/checkbox-input';
import PrimaryButton from '@commercetools-uikit/primary-button';
import SecondaryButton from '@commercetools-uikit/secondary-button';
import Spacings from '@commercetools-uikit/spacings';
import { useMcMutation } from '@commercetools-frontend/application-shell';
import { UpdateAttributesPublishMutation } from '../../graphql/updateAttributesPublishMutation.graphql';
import useNotify from '../../utils/useNotify';

const AddTable = ({ rows, selectionLvl1 }) => {
  const [
    updateProduct,
    { loading: mutationLoading, error: mutationError },
  ] = useMcMutation(UpdateAttributesPublishMutation, {
    context: {
      target: GRAPHQL_TARGETS.COMMERCETOOLS_PLATFORM,
    },
  });
  const { notifySuccess, notifyError } = useNotify();

  const {
    rows: rowsWithSelection,
    toggleRow,
    getIsRowSelected,
    getNumberOfSelectedRows,
  } = useRowSelection('checkbox', rows);

  const columns = [
    {
      key: 'checkbox',
      label: '',
      shouldIgnoreRowClick: true,
      align: 'center',
      renderItem: (row) => (
        <CheckboxInput
          isChecked={getIsRowSelected(row.id)}
          onChange={() => toggleRow(row.id)}
        />
      ),
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
    let variables = {
      id: selectionLvl1[0].id,
      version: selectionLvl1[0].version,
      fieldName: 'product-bundle-data',
      value: `""`,
    };

    console.log('loading1', mutationLoading);
    const update = await updateProduct({
      variables,
    });
    console.log('loading2', mutationLoading);

    variables = {
      id: selectionLvl1[0].id,
      version: selectionLvl1[0].version,
      fieldName: 'variant-bundle-data',
      value: `""`,
    };

    await updateProduct({
      variables,
    });
  };

  const createBundleAsString = async (fieldName) => {
    const selected = rowsWithSelection
      .filter((row) => row.checkbox === true)
      .map((row) => {
        return {
          name: row.masterData.current.name,
        };
      });

    const variables = {
      id: selectionLvl1[0].id,
      version: selectionLvl1[0].version,
      fieldName,
      value: `"${JSON.stringify(selected).replaceAll('"', '\\"')}"`,
    };

    const result = await updateProduct({
      variables,
    });

    if (result) notifySuccess('Bundle created and published');
  };

  const noneSelected = getNumberOfSelectedRows() === 0;

  mutationError && notifyError(`Error: "${mutationError.message}"`);

  return (
    <Spacings.Stack scale="m">
      <DataTable
        rows={rowsWithSelection}
        columns={columns}
        maxHeight="max(400px, calc(100vh - 300px))"
      />
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
        {mutationLoading && <p>Loading...</p>}
      </div>
    </Spacings.Stack>
  );
};

AddTable.displayName = 'AddTable';
export default AddTable;
