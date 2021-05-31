/**
 * Handles listing products and product selection
 */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { InfoModalPage } from '@commercetools-frontend/application-components';
import { setSelectedProduct, removeSelectedProduct } from '../../redux/customAppPrices';
import ProductsTable from '../../components/products-table';
import { ListProduct, ReduxState } from '../../types';
import PricesLoad from './prices-load';

const PricesSelectProduct = (): JSX.Element => {
  const dispatch = useDispatch();

  const products = useSelector((state: any) => (state.customAppPrices as ReduxState)?.productsQuery.products.results);
  const selectedProduct = useSelector((state: any) => (state.customAppPrices as ReduxState)?.selectedProduct);
  const hasSelectedProduct = !!selectedProduct;

  // UI
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
        onClose={() => dispatch(removeSelectedProduct())}
        topBarCurrentPathLabel={selectedProduct?.masterData.current.name}
        topBarPreviousPathLabel="Back"
      >
        <PricesLoad />
      </InfoModalPage>
    </>
  );
};

PricesSelectProduct.displayName = 'PricesSelectProduct';
export default PricesSelectProduct;
