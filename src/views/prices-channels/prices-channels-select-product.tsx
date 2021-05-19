import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedProduct } from '../../redux/customAppPrices';
import ProductsTable from '../../components/products-table';
import { ListProduct, ReduxState } from '../../types';

const PricesChannelsSelectProduct = (): JSX.Element => {
  const dispatch = useDispatch();

  const products: ListProduct[] = useSelector(
    (state) => (state.customAppPrices as ReduxState)?.productsQuery.products.results,
  );

  return (
    <ProductsTable
      rows={products}
      setSelectedRows={(selectedRows: ListProduct[]) => {
        const product: ListProduct = selectedRows[0] || null; // It might be an empty array
        dispatch(setSelectedProduct(product));
      }}
    />
  );
};

PricesChannelsSelectProduct.displayName = 'PricesChannelsSelectProduct';
export default PricesChannelsSelectProduct;
