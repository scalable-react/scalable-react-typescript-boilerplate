import * as types from './constants';
import { defaultAction } from 'shared/actionCreators';
import {
  LoadInitiationAction,
  LoadSuccessAction,
  LoadFailureAction,
  LoadCancelAction,
  ClearErrorAction,
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

export const actionCreators = {
  loadInitiation,
  loadSuccess,
  loadFailure,
  loadCancel,
  clearError,
  defaultAction,
};

export default actionCreators;
