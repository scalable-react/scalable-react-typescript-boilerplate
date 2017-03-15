import { Action } from 'redux';
import { Input } from './types';
import * as T from './constants';

export interface InputAction extends Action {
  type: T.INPUT_TYPE;
  input: Input;
}

export type ActionTypes = InputAction;
