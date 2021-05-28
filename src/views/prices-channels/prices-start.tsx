/**
 * Handles loading project and products
 */
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import Text from '@commercetools-uikit/text';
import LoadingSpinner from '@commercetools-uikit/loading-spinner';
import { useGetProjectLazyQuery, useGetProductsLazyQuery, GetProductsQueryVariables } from '../../generated/graphql';
import { GQLQueryOptions, GQLCurrentLocale } from '../../utils/gqlHelpers';
import useNotify from '../../utils/useNotify';
import { setProductsQuery, setProjectQuery } from '../../redux/customAppPrices';
import PricesSelectProduct from './prices-select-product';

const PricesStart = (): JSX.Element => {
  const [isDataFetchStarted, setIsDataFetchStarted] = useState<boolean>(false);
  const [isDataReady, setIsDataReady] = useState<boolean>(false);
  const locale = GQLCurrentLocale();
  const dispatch = useDispatch();

  // Setup data fetching
  const [getProjectQuery, projectState] = useGetProjectLazyQuery(GQLQueryOptions);
  const [getProductsQuery, productsState] = useGetProductsLazyQuery(GQLQueryOptions);

  const hasError = projectState.error || productsState.error;
  const isLoading = projectState.loading || productsState.loading;

  // Start data fetch
  useEffect(() => {
    getProjectQuery();

    const variables: GetProductsQueryVariables = { locale };
    getProductsQuery({ variables });

    setIsDataFetchStarted(true);
  }, []);

  // CommerceTools UI Error handling
  const { notifyError } = useNotify();
  useEffect(() => {
    if (projectState.error) notifyError(`Error: "${projectState.error.message}"`);
  }, [projectState.error]);
  useEffect(() => {
    if (productsState.error) notifyError(`Error: "${productsState.error.message}"`);
  }, [productsState.error]);

  // Storing data in redux
  useEffect(() => {
    if (isDataFetchStarted && !isLoading && !hasError) {
      dispatch(setProjectQuery(projectState.data));
      dispatch(setProductsQuery(productsState.data));

      setIsDataReady(true);
    }
  }, [isLoading]);

  // UI
  if (hasError) return <>An error occurred</>;
  return (
    <>
      <Text.Headline as="h2">Prices</Text.Headline>

      {isLoading && <LoadingSpinner scale="s">Loading products</LoadingSpinner>}

      {isDataReady && (
        <>
          <Text.Body>Select a product</Text.Body>
          <PricesSelectProduct />
        </>
      )}
    </>
  );
};

PricesStart.displayName = 'PricesStart';
export default PricesStart;
