import { PayloadAction } from '../../types';
import * as types from './constants';

export interface LoadInitiationAction extends PayloadAction<undefined> {
  type: types.LOAD_INTIATION_TYPE;
}

export interface LoadSuccessAction extends PayloadAction<string> {
  type: types.LOAD_SUCCESS_TYPE;
  payload: string;
}

export interface LoadFailureAction extends PayloadAction<string> {
  type: types.LOAD_FAILURE_TYPE;
  payload: string;
}

export interface LoadCancelAction extends PayloadAction<string> {
  type: types.LOAD_CANCEL_TYPE;
}

export type DocsAction = LoadInitiationAction | LoadSuccessAction | LoadFailureAction | LoadCancelAction;
