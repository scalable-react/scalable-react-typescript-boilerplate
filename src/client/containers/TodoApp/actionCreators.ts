import { ActionCreator, ActionCreatorsMapObject } from 'redux';
import { Todo, Input, Index } from './types';
import * as types from './constants';
import {
  AddTodoAction,
  DeleteTodoAction,
  InputAction,
} from './actions';

type AddTodoActionCreator = ActionCreator<AddTodoAction>;
export const addTodo: AddTodoActionCreator = (todo: Todo) => ({
  type: types.ADD_TODO,
  todo,
});

type InputActionCreator = ActionCreator<InputAction>;
export const input: InputActionCreator = (input: Input) => ({
  type: types.INPUT,
  input,
});

type DeleteTodoActionCreator = ActionCreator<DeleteTodoAction>;
export const deleteTodo: DeleteTodoActionCreator = (index: Index) => ({
  type: types.DELETE_TODO,
  index,
});

export interface ActionCreatorTypes extends ActionCreatorsMapObject {
  addTodo: AddTodoActionCreator;
  input: InputActionCreator;
  deleteTodo: DeleteTodoActionCreator;
}
export const actionCreators: ActionCreatorTypes = {
  addTodo,
  input,
  deleteTodo,
};

export default actionCreators;
