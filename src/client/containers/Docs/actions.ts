import * as types from './constants';
import {Action} from 'redux';

export interface LoadInitiationAction extends Action {
  type: types.LOAD_INTIATION_TYPE,
};

export interface LoadSuccessAction extends Action {
  type: types.LOAD_SUCCESS_TYPE,
  payload: string
};

export interface LoadFailureAction extends Action {
  type: types.LOAD_FAILURE_TYPE,
  payload: string
};

export interface LoadCancelAction extends Action {
  type: types.LOAD_CANCEL_TYPE,
};

export type DocsAction = LoadInitiationAction | LoadSuccessAction | LoadFailureAction | LoadCancelAction;
