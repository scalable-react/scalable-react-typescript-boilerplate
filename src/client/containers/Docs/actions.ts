import * as types from './constants';

export interface LoadInitiationAction {
  type: types.LOAD_INTIATION_TYPE,
};

export interface LoadSuccessAction  {
  type: types.LOAD_SUCCESS_TYPE,
  payload: string
};

export interface LoadFailureAction {
  type: types.LOAD_FAILURE_TYPE,
  payload: string
};

export interface LoadCancelAction {
  type: types.LOAD_CANCEL_TYPE,
};

export type DocsAction = LoadInitiationAction | LoadSuccessAction | LoadFailureAction | LoadCancelAction;
