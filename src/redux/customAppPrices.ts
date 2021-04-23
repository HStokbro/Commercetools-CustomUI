/**
 * Simplifying redux with redux toolkit https://redux-toolkit.js.org/.
 */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  GetCategoriesQuery,
  GetProductsQuery,
  GetProductTypeDefinitionsQuery,
  GetProjectQuery,
} from '../generated/graphql';
import { ListProduct, ReduxState } from '../types';

const initialState: ReduxState = {
  projectQuery: null,
  productsQuery: null,
  productTypesQuery: null,
  categoriesQuery: null,

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
  },
});

export const {
  setProjectQuery,
  setProductsQuery,
  setProductTypesQuery,
  setCategoriesQuery,
  setSelectedProduct,
} = customAppPrices.actions;
export default customAppPrices.reducer;
