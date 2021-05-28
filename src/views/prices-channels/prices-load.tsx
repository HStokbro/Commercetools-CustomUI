/**
 * Handles loading prices
 */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LoadingSpinner from '@commercetools-uikit/loading-spinner';
import { setProductPrices } from '../../redux/customAppPrices';
import useNotify from '../../utils/useNotify';
import { ListProduct, ReduxState } from '../../types';
import {
  useGetProductPricesLazyQuery,
  GetProductPricesQueryVariables,
  ProductPricesFragment,
} from '../../generated/graphql';
import { GQLQueryOptions, GQLCurrentLocale } from '../../utils/gqlHelpers';
import PricesUpdate from './prices-update';

const PricesLoad = (): JSX.Element => {
  const [isDataFetchStarted, setIsDataFetchStarted] = useState<boolean>(false);
  const locale = GQLCurrentLocale();
  const dispatch = useDispatch();

  const selectedProduct: ListProduct = useSelector(
    (state: any) => (state.customAppPrices as ReduxState)?.selectedProduct,
  );
  const productPrices: ProductPricesFragment = useSelector(
    (state: any) => (state.customAppPrices as ReduxState)?.productPrices,
  );

  // Setup data fetching
  const [getPricesQuery, pricesState] = useGetProductPricesLazyQuery(GQLQueryOptions);

  // Start data fetch
  useEffect(() => {
    const variables: GetProductPricesQueryVariables = {
      locale,
      id: selectedProduct.id,
    };
    getPricesQuery({ variables });

    setIsDataFetchStarted(true);
  }, []);

  // CommerceTools UI Error handling
  const { notifyError } = useNotify();
  useEffect(() => {
    if (pricesState.error) notifyError(`Error: "${pricesState.error.message}"`);
  }, [pricesState.error]);

  // Storing data in redux
  useEffect(() => {
    if (isDataFetchStarted && !pricesState.loading && !pricesState.error) {
      dispatch(setProductPrices(pricesState.data.product));
    }
  }, [pricesState.loading]);

  // UI
  if (pricesState.error) return <>An error occurred</>;
  if (pricesState.loading) return <LoadingSpinner scale="s">Loading prices</LoadingSpinner>;
  if (!productPrices) return null;

  return <PricesUpdate />;
};

PricesLoad.displayName = 'PricesLoad';
export default PricesLoad;
