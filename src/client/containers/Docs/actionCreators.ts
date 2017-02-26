import * as types from './constants';
import { LoadInitiationAction, LoadSuccessAction, LoadFailureAction, LoadCancelAction } from './actions';

export const loadInitiation = (): LoadInitiationAction => ({
  type: types.LOAD_INTIATION,
});

export const loadSuccess = (data: string): LoadSuccessAction => ({
  type: types.LOAD_SUCCESS,
  payload: data,
});

export const loadFailure = (error: string): LoadFailureAction => ({
  type: types.LOAD_FAILURE,
  payload: error,
});

export const loadCancel = (): LoadCancelAction => ({
  type: types.LOAD_CANCEL,
});

export const actionCreators = {
  loadInitiation,
  loadSuccess,
  loadFailure,
  loadCancel,
};

export default actionCreators;
