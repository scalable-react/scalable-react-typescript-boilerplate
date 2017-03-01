import { PayloadAction } from '../../types';
import * as types from './constants';
import {Action} from 'redux';

export interface LoadInitiationAction extends Action {
  type: types.LOAD_INTIATION_TYPE,
};

export interface LoadSuccessAction extends PayloadAction<string> {
  type: types.LOAD_SUCCESS_TYPE;
  payload: string;
}

export interface LoadFailureAction extends Action {
  type: types.LOAD_FAILURE_TYPE;
  error: string;
}

export interface LoadCancelAction extends Action {
  type: types.LOAD_CANCEL_TYPE,
};


export interface ClearErrorAction extends PayloadAction<undefined> {
  type: types.CLEAR_ERROR_TYPE;
}

export interface DefaultAction extends Action {
  type: ''
}


export type DocsAction = 
LoadInitiationAction | 
LoadSuccessAction | 
LoadFailureAction | 
LoadCancelAction | 
ClearErrorAction
DefaultAction;
