import { Action } from 'redux';
import * as types from './constants';

export interface DefaultAction extends Action {
  type: types.DEFAULT_ACTION_TYPE
}

export interface PayloadAction<P> extends Action {
  type: string;
  payload?: P;
}
