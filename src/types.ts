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

export enum ReferenceType {
  SUBSCRIPTION = 'SUBSCRIPTION',
  PAYMENT = 'PAYMENT',
  UPSELLINGROUP = 'UPSELLINGROUP',
  UPSELL = 'UPSELL',
}

export enum ReferenceLinkType {
  PRODUCT = 'PRODUCT',
  PRODUCTTYPE = 'PRODUCTTYPE',
  CATEGORY = 'CATEGORY',
}

export type ReferenceProduct = {
  id: string;
  variantIds?: string[];
};

export type ReferenceLink = {
  ids: string[];
} & (
  | { linkType: ReferenceLinkType.PRODUCT; variantIds?: string[] }
  | {
      linkType: Exclude<ReferenceLinkType, ReferenceLinkType.PRODUCT>;
    }
);

export type Reference = {
  variantId?: string;
  type: ReferenceType;
  links: ReferenceLink[];
};

// export interface GenericState<T> {
//   data?: T;
//   status: Status;
// }

// export type projectStatus = GenericState<GetProjectQuery>;
// export type productsStatus = GenericState<GetProductsQuery>;
// export type productTypesStatus = GenericState<GetProductTypeDefinitionsQuery>;
// export type categoriesStatus = GenericState<GetCategoriesQuery>;

export type ReduxState = {
  projectQuery: GetProjectQuery;
  productsQuery: GetProductsQuery;
  productTypesQuery: GetProductTypeDefinitionsQuery;
  categoriesQuery: GetCategoriesQuery;

  references: Reference[];
};
