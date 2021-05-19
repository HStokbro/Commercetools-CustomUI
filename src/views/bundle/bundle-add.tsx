import React, { useState } from 'react';
import Spacings from '@commercetools-uikit/spacings';
import ProductsTable from '../../components/products-table';
import { ListProduct } from '../../types';
import BundleAsAttributeButton from './bundle-as-attribute-button';
import BundleAsProductButton from './bundle-as-product-button';

type Props = {
  rows: ListProduct[];
  selection: ListProduct[];
  onSuccess: () => void;
};

const BundleAdd = (props: Props): JSX.Element => {
  const [selectionAddon, setSelectionAddon] = useState<ListProduct[]>([]);

  return (
    <Spacings.Stack scale="s">
      <ProductsTable
        rows={props.rows}
        setSelectedRows={(selectedRows: ListProduct[]) => setSelectionAddon(selectedRows)}
        multiSelect
        maxHeight="max(300px, calc(100vh - 300px))"
      />

      <BundleAsAttributeButton
        selection={props.selection}
        selectionAddon={selectionAddon}
        onSuccess={props.onSuccess}
      />
      <BundleAsProductButton selection={props.selection} selectionAddon={selectionAddon} onSuccess={props.onSuccess} />
    </Spacings.Stack>
  );
};

BundleAdd.displayName = 'BundleAdd';
export default BundleAdd;
