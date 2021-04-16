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
import { ReduxState } from '../types';

const initialState: ReduxState = {
  projectQuery: null,
  productsQuery: null,
  productTypesQuery: null,
  categoriesQuery: null,

  references: null,
};

const cloneInitialState = (): ReduxState => JSON.parse(JSON.stringify(initialState));

const customAppPrices = createSlice({
  name: 'customAppPrices',
  initialState: cloneInitialState(),
  reducers: {
    setProject: (state, action: PayloadAction<GetProjectQuery>) => {
      state.projectQuery = action.payload;
    },
    setProducts: (state, action: PayloadAction<GetProductsQuery>) => {
      state.productsQuery = action.payload;
    },
    setProductTypes: (state, action: PayloadAction<GetProductTypeDefinitionsQuery>) => {
      state.productTypesQuery = action.payload;
    },
    setCategories: (state, action: PayloadAction<GetCategoriesQuery>) => {
      state.categoriesQuery = action.payload;
    },
  },
});

export const { setProject, setProducts, setProductTypes, setCategories } = customAppPrices.actions;
export default customAppPrices.reducer;
