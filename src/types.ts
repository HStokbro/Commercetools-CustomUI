import { Maybe, Product, ProductData, ProductTypeDefinition } from './generated/graphql';

export type ListProduct = Pick<Product, 'id' | 'version'> & {
  productType?: Maybe<Pick<ProductTypeDefinition, 'id' | 'key'>>;
  masterData: { current?: Maybe<Pick<ProductData, 'name'>> };
};

export type ListProductSelection = ListProduct & { checkbox: boolean };
