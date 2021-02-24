import React, { useEffect } from 'react';
import DataTable, { useRowSelection } from '@commercetools-uikit/data-table';
import CheckboxInput from '@commercetools-uikit/checkbox-input';
import { ListProduct } from '../types';
import usePrevious from '../utils/usePrevious';

type Props = {
  rows: ListProduct[];
  setSelectedRows: (selectedRows: ListProduct[]) => void;
};

const ProductsTable = (props: Props): JSX.Element => {
  const { rows: rowsWithSelection, toggleRow, getIsRowSelected } = useRowSelection('selected', props.rows);

  const lastSelectedRows = usePrevious(rowsWithSelection);
  useEffect(() => {
    if (JSON.stringify(lastSelectedRows) !== JSON.stringify(rowsWithSelection)) {
      const selectedRows = rowsWithSelection.filter((row) => row.selected);
      props.setSelectedRows(selectedRows);
    }
  }, [rowsWithSelection]);

  const columns = [
    {
      key: 'selected',
      label: '',
      shouldIgnoreRowClick: true,
      align: 'center',
      renderItem: (row) => (
        <CheckboxInput
          isChecked={getIsRowSelected(row.id)}
          onChange={async () => {
            await toggleRow(row.id);
          }}
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

  return <DataTable rows={rowsWithSelection} columns={columns} maxHeight="max(400px, calc(100vh - 300px))" />;
};

ProductsTable.displayName = 'ProductsTable';
export default ProductsTable;
