import { Action } from 'redux';

export interface DefaultAction extends Action {
  type: ''
}

export interface PayloadAction<P> extends Action {
  type: string;
  payload?: P;
}
