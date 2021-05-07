import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import Text from '@commercetools-uikit/text';
import {
  useGetProjectLazyQuery,
  useGetProductsLazyQuery,
  useGetProductTypeDefinitionsLazyQuery,
  useGetCategoriesLazyQuery,
} from '../../generated/graphql';
import { GQLQueryOptions, GQLCurrentLocale } from '../../utils/gqlHelpers';
import useNotify from '../../utils/useNotify';
import {
  setCategoriesQuery,
  setProductsQuery,
  setProductTypesQuery,
  setProjectQuery,
} from '../../redux/customAppPrices';
import ReferencesSelectProduct from './references-select-product';

const ReferencesStart = (): JSX.Element => {
  const [isDataFetchStarted, setIsDataFetchStarted] = useState<boolean>(false);
  const [isDataReady, setIsDataReady] = useState<boolean>(false);
  const locale = GQLCurrentLocale();
  const dispatch = useDispatch();

  // Setup data fetching
  const [getProjectQuery, projectState] = useGetProjectLazyQuery(GQLQueryOptions);
  const [getProductsQuery, productsState] = useGetProductsLazyQuery(GQLQueryOptions);
  const [getProductTypesQuery, productTypesState] = useGetProductTypeDefinitionsLazyQuery(GQLQueryOptions);
  const [getCategoriesQuery, categoriesState] = useGetCategoriesLazyQuery(GQLQueryOptions);

  const hasError = projectState.error || productsState.error || productTypesState.error || categoriesState.error;
  const isLoading =
    projectState.loading || productsState.loading || productTypesState.loading || categoriesState.loading;

  // Start data fetch
  useEffect(() => {
    getProjectQuery();
    getProductsQuery({
      variables: {
        locale,
      },
    });
    getProductTypesQuery();
    getCategoriesQuery({
      variables: {
        locale,
      },
    });

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
  useEffect(() => {
    if (productTypesState.error) notifyError(`Error: "${productTypesState.error.message}"`);
  }, [productTypesState.error]);
  useEffect(() => {
    if (categoriesState.error) notifyError(`Error: "${categoriesState.error.message}"`);
  }, [categoriesState.error]);

  // Storing data in redux
  useEffect(() => {
    if (isDataFetchStarted && !isLoading && !hasError) {
      dispatch(setProjectQuery(projectState.data));
      dispatch(setProductsQuery(productsState.data));
      dispatch(setProductTypesQuery(productTypesState.data));
      dispatch(setCategoriesQuery(categoriesState.data));

      setIsDataReady(true);
    }
  }, [isLoading]);

  // UI
  if (hasError) return <>An error occurred</>;
  return (
    <>
      <Text.Headline as="h1">References</Text.Headline>

      {isLoading && <Text.Body>Loading...</Text.Body>}

      {isDataReady && <ReferencesSelectProduct />}
    </>
  );
};

ReferencesStart.displayName = 'ReferencesStart';
export default ReferencesStart;
