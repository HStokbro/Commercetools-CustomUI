/**
 * Simplifying redux with redux toolkit https://redux-toolkit.js.org/
 * Generic slice:
 * https://redux-toolkit.js.org/usage/usage-with-typescript#wrapping-createslice
 */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { createSlice, PayloadAction, SliceCaseReducers, ValidateSliceCaseReducers } from '@reduxjs/toolkit';
import { Status } from '../../types';
import { GenericState } from './generic-types';

export const createGenericSlice = <T, Reducers extends SliceCaseReducers<GenericState<T>>>({
  name = '',
  initialState,
  reducers,
}: {
  name: string;
  initialState: GenericState<T>;
  reducers?: ValidateSliceCaseReducers<GenericState<T>, Reducers>;
}) =>
  createSlice({
    name,
    initialState,
    reducers: {
      loading(state) {
        state.status = Status.LOADING;
      },
      /**
       * If you want to write to values of the state that depend on the generic
       * (in this case: `state.data`, which is T), you might need to specify the
       * State type manually here, as it defaults to `Draft<GenericState<T>>`,
       * which can sometimes be problematic with yet-unresolved generics.
       * This is a general problem when working with immer's Draft type and generics.
       */
      success(state: GenericState<T>, action: PayloadAction<T>) {
        state.data = action.payload;
        state.status = Status.SUCCESS;
      },
      error(state: GenericState<T>) {
        state.status = Status.ERROR;
      },
      ...reducers,
    },
  });

export default createGenericSlice;
