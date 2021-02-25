import React, { useState } from 'react';
import Spacings from '@commercetools-uikit/spacings';
import ProductsTable from '../../components/products-table';
import { ListProduct } from '../../types';
import BundleAsAttributeButton from './bundle-as-attribute-button';
import BundleAsProductButton from './bundle-as-product-button';

type Props = {
  rows: ListProduct[];
  selection: ListProduct[];
};

const BundleAdd = (props: Props): JSX.Element => {
  const [selectionAddon, setSelectionAddon] = useState<ListProduct[]>([]);

  return (
    <Spacings.Stack scale="s">
      <ProductsTable
        rows={props.rows}
        setSelectedRows={(selectedRows: ListProduct[]) => setSelectionAddon(selectedRows)}
      />
      <BundleAsAttributeButton selection={props.selection} selectionAddon={selectionAddon} />
      <BundleAsProductButton selection={props.selection} selectionAddon={selectionAddon} />
    </Spacings.Stack>
  );
};

BundleAdd.displayName = 'BundleAdd';
export default BundleAdd;