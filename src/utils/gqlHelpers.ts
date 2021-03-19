/**
 * Constants and helpers for GraphQL
 */
import { Context, BaseQueryOptions } from '@apollo/client';
import { GRAPHQL_TARGETS } from '@commercetools-frontend/constants';
import { useApplicationContext } from '@commercetools-frontend/application-shell-connectors';

export const GQLContext: Context = {
  context: {
    target: GRAPHQL_TARGETS.COMMERCETOOLS_PLATFORM,
  },
};

export const GQLQueryOptions: BaseQueryOptions = {
  ...GQLContext,
  fetchPolicy: 'no-cache',
};

// Helpers for variables
export const GQLWhereHasNoParent = 'parent is not defined';

export const GQLWhereParentIdIs = (id: string): string => `parent(id="${id}")`;

export const GQLCurrentLocale = (): string | null => {
  const { locale } = useApplicationContext((applicationContext) => ({
    locale: applicationContext.dataLocale,
  }));
  return locale;
};
