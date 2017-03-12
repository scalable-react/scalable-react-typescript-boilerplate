import { DefaultAction } from 'shared/actions';
import * as types from './constants';
import { Action } from 'redux';

export interface LoadInitiationAction extends Action {
  type: types.LOAD_INITIATION_TYPE;
}

export interface LoadSuccessAction extends Action {
  type: types.LOAD_SUCCESS_TYPE;
  payload: string;
}

export interface LoadFailureAction extends Action {
  type: types.LOAD_FAILURE_TYPE;
  error: string;
}

export interface LoadCancelAction extends Action {
  type: types.LOAD_CANCEL_TYPE;
}

export interface ClearErrorAction extends Action {
  type: types.CLEAR_ERROR_TYPE;
}

export type FeatureAction =
  LoadInitiationAction |
  LoadSuccessAction |
  LoadFailureAction |
  LoadCancelAction |
  ClearErrorAction |
  DefaultAction;
