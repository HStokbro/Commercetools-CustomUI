import { Context } from '@apollo/client';
import { GRAPHQL_TARGETS } from '@commercetools-frontend/constants';

export const PERMISSIONS = {
  ManageProducts: 'ManageProducts',
  ViewProducts: 'ViewProducts',
};

export const FEATURE_FLAGS = {};

export const GQLTarget: Context = {
  context: {
    target: GRAPHQL_TARGETS.COMMERCETOOLS_PLATFORM,
  },
};
