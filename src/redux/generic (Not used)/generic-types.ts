import {
  GetCategoriesQuery,
  GetProductsQuery,
  GetProductTypeDefinitionsQuery,
  GetProjectQuery,
} from '../../generated/graphql';
import { Status } from '../../types';

export interface GenericState<T> {
  data?: T;
  status: Status;
}

export type projectStatus = GenericState<GetProjectQuery>;
export type productsStatus = GenericState<GetProductsQuery>;
export type productTypesStatus = GenericState<GetProductTypeDefinitionsQuery>;
export type categoriesStatus = GenericState<GetCategoriesQuery>;
