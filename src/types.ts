import {
  GetCategoriesQuery,
  GetProjectQuery,
  GetProductsQuery,
  GetProductTypeDefinitionsQuery,
  Maybe,
  Product,
  ProductData,
  ProductTypeDefinition,
  Category,
  ProductPricesFragment,
} from './generated/graphql';

// Copied from GetProductsQuery results in graphql.tsx
export type ListProduct = Pick<Product, 'id' | 'version'> & {
  productType?: Maybe<Pick<ProductTypeDefinition, 'id' | 'key'>>;
  masterData: { current?: Maybe<Pick<ProductData, 'name'>> };
};

// Copied from GetProductTypeDefinitionsQuery results in graphql.tsx
export type ListProductTypeDefinition = Pick<ProductTypeDefinition, 'key' | 'name' | 'description' | 'id'>;

// Copied from GetCategoriesQuery results in graphql.tsx
export type ListCategory = Pick<Category, 'id' | 'name' | 'description'> & {
  ancestors: Array<Pick<Category, 'id' | 'name'>>;
};

// Use as type in UIKit DataTable for selection
// Example: WithSelection<ListProduct>
export type WithSelection<T> = T & { checkbox: boolean };

export enum Status {
  INITIAL = 'INITIAL',
  LOADING = 'LOADING',
  SAVING = 'SAVING',
  ERROR = 'ERROR',
  SUCCESS = 'SUCCESS',
}

export type ReduxState = {
  projectQuery: GetProjectQuery;
  productsQuery: GetProductsQuery;
  productTypesQuery: GetProductTypeDefinitionsQuery;
  categoriesQuery: GetCategoriesQuery;
  productPrices: ProductPricesFragment;

  selectedProduct: ListProduct;
};
