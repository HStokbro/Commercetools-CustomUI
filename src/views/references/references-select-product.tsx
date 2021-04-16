import React from 'react';
import { useSelector } from 'react-redux';
import ProductsTable from '../../components/products-table';
import { ListProduct, ReduxState } from '../../types';

const ReferencesSelectProduct = (): JSX.Element => {
  const products: ListProduct[] = useSelector(
    (state) => (state.customAppPrices as ReduxState)?.productsQuery.products.results,
  );

  return <ProductsTable rows={products} setSelectedRows={(selectedRows: ListProduct[]) => console.log(selectedRows)} />;
};

ReferencesSelectProduct.displayName = 'ReferencesSelectProduct';
export default ReferencesSelectProduct;
