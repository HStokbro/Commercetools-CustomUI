import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LoadingSpinner from '@commercetools-uikit/loading-spinner';
import { setProductPricesQuery } from '../../redux/customAppPrices';
import useNotify from '../../utils/useNotify';
import { ListProduct, ReduxState } from '../../types';
import {
  useGetProductPricesLazyQuery,
  GetProductPricesQueryVariables,
  GetProductPricesQuery,
} from '../../generated/graphql';
import { GQLQueryOptions, GQLCurrentLocale } from '../../utils/gqlHelpers';
import PricesChannelsUpdatePrices from './prices-channels-update-prices';

const PricesChannelsLoadPrices = (): JSX.Element => {
  const [isDataFetchStarted, setIsDataFetchStarted] = useState<boolean>(false);
  const locale = GQLCurrentLocale();
  const dispatch = useDispatch();

  const selectedProduct: ListProduct = useSelector((state) => (state.customAppPrices as ReduxState)?.selectedProduct);
  const pricesQuery: GetProductPricesQuery = useSelector((state) => (state.customAppPrices as ReduxState)?.pricesQuery);

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
      dispatch(setProductPricesQuery(pricesState.data));
    }
  }, [pricesState.loading]);

  // UI
  if (pricesState.error) return <>An error occurred</>;
  if (pricesState.loading) return <LoadingSpinner size="s">Loading prices</LoadingSpinner>;
  if (!pricesQuery) return null;

  return <PricesChannelsUpdatePrices />;
};

PricesChannelsLoadPrices.displayName = 'PricesChannelsLoadPrices';
export default PricesChannelsLoadPrices;
