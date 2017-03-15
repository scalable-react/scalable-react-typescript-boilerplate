import { Action } from 'redux';
import { Todo, Input, Index } from './types';
import * as T from './constants';

export interface AddTodoAction extends Action {
  type: T.ADD_TODO_TYPE;
  todo: Todo;
}

export interface InputAction extends Action {
  type: T.INPUT_TYPE;
  input: Input;
}

export interface DeleteTodoAction extends Action {
  type: T.DELETE_TODO_TYPE;
  index: Index;
}

export type ActionTypes = AddTodoAction | InputAction | DeleteTodoAction;
