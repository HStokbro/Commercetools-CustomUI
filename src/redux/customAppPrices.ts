/**
 * Simplifying redux with redux toolkit https://redux-toolkit.js.org/.
 */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  GetCategoriesQuery,
  GetProductsQuery,
  GetProductTypeDefinitionsQuery,
  GetProjectQuery,
  BaseMoney,
  ProductPricesFragment,
} from '../generated/graphql';
import { ListProduct, ReduxState } from '../types';

const initialState: ReduxState = {
  projectQuery: null,
  productsQuery: null,
  productTypesQuery: null,
  categoriesQuery: null,
  productPrices: null,

  selectedProduct: null,
};

const cloneInitialState = (): ReduxState => JSON.parse(JSON.stringify(initialState));

const customAppPrices = createSlice({
  name: 'customAppPrices',
  initialState: cloneInitialState(),
  reducers: {
    setProjectQuery: (state, action: PayloadAction<GetProjectQuery>) => {
      state.projectQuery = action.payload;
    },
    setProductsQuery: (state, action: PayloadAction<GetProductsQuery>) => {
      state.productsQuery = action.payload;
    },
    setProductTypesQuery: (state, action: PayloadAction<GetProductTypeDefinitionsQuery>) => {
      state.productTypesQuery = action.payload;
    },
    setCategoriesQuery: (state, action: PayloadAction<GetCategoriesQuery>) => {
      state.categoriesQuery = action.payload;
    },
    setSelectedProduct: (state, action: PayloadAction<ListProduct>) => {
      state.selectedProduct = action.payload;
    },
    removeSelectedProduct: (state) => {
      state.selectedProduct = null;
      state.productPrices = null;
    },
    setProductPrices: (state, action: PayloadAction<ProductPricesFragment>) => {
      state.productPrices = action.payload;
    },
    updatePriceValue: (state, action: PayloadAction<{ variantId: number; priceId: string; priceValue: BaseMoney }>) => {
      const price = state.productPrices.masterData.current.allVariants
        .find((x) => x.id === action.payload.variantId)
        .prices.find((y) => y.id === action.payload.priceId);
      price.value = action.payload.priceValue;
    },
  },
});

export const {
  setProjectQuery,
  setProductsQuery,
  setProductTypesQuery,
  setCategoriesQuery,
  setSelectedProduct,
  removeSelectedProduct,
  setProductPrices,
  updatePriceValue,
} = customAppPrices.actions;
export default customAppPrices.reducer;
