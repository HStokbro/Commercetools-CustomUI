import { Context, BaseQueryOptions } from '@apollo/client';
import { GRAPHQL_TARGETS } from '@commercetools-frontend/constants';

export const PERMISSIONS = {
  ManageProducts: 'ManageProducts',
  ViewProducts: 'ViewProducts',
};

export const FEATURE_FLAGS = {};

export const GQLContext: Context = {
  context: {
    target: GRAPHQL_TARGETS.COMMERCETOOLS_PLATFORM,
  },
};

export const GQLQueryOptions: BaseQueryOptions = {
  ...GQLContext,
  fetchPolicy: 'no-cache',
};
