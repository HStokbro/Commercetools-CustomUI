import React from 'react';
import DataTable, { useRowSelection } from '@commercetools-uikit/data-table';
import CheckboxInput from '@commercetools-uikit/checkbox-input';
import PrimaryButton from '@commercetools-uikit/primary-button';

const ProductsTable = ({ rows, returnSelection }) => {
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

  const doneSelecting = () => {
    const selected = rowsWithSelection.filter((row) => row.checkbox === true);
    returnSelection(selected);
  };

  const noneSelected = getNumberOfSelectedRows() === 0;

  return (
    <>
      <DataTable
        rows={rowsWithSelection}
        columns={columns}
        maxHeight="max(400px, calc(100vh - 300px))"
      />
      <div>
        <PrimaryButton
          label="Next"
          onClick={() => doneSelecting()}
          isDisabled={noneSelected}
        />
      </div>
    </>
  );
};

ProductsTable.displayName = 'ProductsTable';
export default ProductsTable;
