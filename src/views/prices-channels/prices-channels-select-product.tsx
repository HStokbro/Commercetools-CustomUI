import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { InfoModalPage } from '@commercetools-frontend/application-components';
import { setSelectedProduct } from '../../redux/customAppPrices';
import ProductsTable from '../../components/products-table';
import { ListProduct, ReduxState } from '../../types';
import PricesChannelsLoadPrices from './prices-channels-load-prices';

const PricesChannelsSelectProduct = (): JSX.Element => {
  const dispatch = useDispatch();

  const products = useSelector((state) => (state.customAppPrices as ReduxState)?.productsQuery.products.results);
  const selectedProduct = useSelector((state) => (state.customAppPrices as ReduxState)?.selectedProduct);
  const hasSelectedProduct = !!selectedProduct;

  return (
    <>
      <ProductsTable
        rows={products}
        setSelectedRows={(selectedRows: ListProduct[]) => {
          const product: ListProduct = selectedRows[0] || null; // It might be an empty array
          dispatch(setSelectedProduct(product));
        }}
      />

      <InfoModalPage
        title={`Prices: ${selectedProduct?.masterData.current.name}`}
        isOpen={hasSelectedProduct}
        onClose={() => dispatch(setSelectedProduct(null))}
        topBarCurrentPathLabel={selectedProduct?.masterData.current.name}
        topBarPreviousPathLabel="Back"
      >
        <PricesChannelsLoadPrices />
      </InfoModalPage>
    </>
  );
};

PricesChannelsSelectProduct.displayName = 'PricesChannelsSelectProduct';
export default PricesChannelsSelectProduct;
