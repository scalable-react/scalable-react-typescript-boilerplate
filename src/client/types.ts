import { Action } from 'redux';

export interface PayloadAction<P> extends Action {
  type: string;
  payload?: P;
}
