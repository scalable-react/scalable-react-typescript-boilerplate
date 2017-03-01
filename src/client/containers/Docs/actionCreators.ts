import * as types from './constants';
import {
  LoadInitiationAction,
  LoadSuccessAction,
  LoadFailureAction,
  LoadCancelAction,
  ClearErrorAction,
  DefaultAction,
} from './actions';

export const loadInitiation = (): LoadInitiationAction => ({
  type: types.LOAD_INITIATION,
});

export const loadSuccess = (data: string): LoadSuccessAction => ({
  type: types.LOAD_SUCCESS,
  payload: data,
});

export const loadFailure = (error: string): LoadFailureAction => ({
  type: types.LOAD_FAILURE,
  error,
});

export const loadCancel = (): LoadCancelAction => ({
  type: types.LOAD_CANCEL,
});

export const clearError = (): ClearErrorAction => ({
  type: types.CLEAR_ERROR,
});

export const defaultAction = (): DefaultAction => ({ 
  type: types.DEFAULT_ACTION_TYPE,
});

export const actionCreators = {
  loadInitiation,
  loadSuccess,
  loadFailure,
  loadCancel,
  clearError,
  defaultAction,
};

export default actionCreators;
