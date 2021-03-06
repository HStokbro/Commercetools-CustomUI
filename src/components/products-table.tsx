/**
 * Displays products in a table
 * Can have multi or single selection of products. In any case. The selected gets returned as an array.
 */
import React, { useEffect } from 'react';
import DataTable, { useRowSelection } from '@commercetools-uikit/data-table';
import CheckboxInput from '@commercetools-uikit/checkbox-input';
import { ListProduct } from '../types';
import usePrevious from '../utils/usePrevious';

type Props = {
  rows: ListProduct[];
  setSelectedRows: (selectedRows: ListProduct[]) => void;
  multiSelect?: boolean;
  maxHeight?: string;
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

  const checkbox = {
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
  };

  const columns = [
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

  const allColumns = props.multiSelect ? [checkbox, ...columns] : columns;

  return (
    <DataTable
      rows={rowsWithSelection}
      columns={allColumns}
      maxHeight={props.maxHeight || 'max(300px, calc(100vh - 150px))'}
      onRowClick={props.multiSelect ? null : (item) => props.setSelectedRows([item])}
    />
  );
};

ProductsTable.defaultProps = {
  multiSelect: false,
  maxHeight: null,
};
ProductsTable.displayName = 'ProductsTable';
export default ProductsTable;
