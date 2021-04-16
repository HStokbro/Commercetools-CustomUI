/**
 * Simplifying redux with redux toolkit https://redux-toolkit.js.org/.
 */
import { Status } from '../../types';
import { projectStatus } from './generic-types';
import { createGenericSlice } from './createGenericSlice';

const initialState: projectStatus = {
  status: Status.INITIAL,
  data: null,
};

export const customAppProject = createGenericSlice({
  name: 'customAppProject',
  initialState,
});

export const { loading, success, error } = customAppProject.actions;

export default customAppProject.reducer;
