import { Props, StateProps } from './';
import { State } from './state';
import { ActionCreatorTypes } from './actionCreators';
import { ActionTypes } from './actions';

export interface Todo {
  text: string;
}

export type Input = string;

export type Index = number;

export { Props, State, ActionCreatorTypes, ActionTypes, StateProps };
