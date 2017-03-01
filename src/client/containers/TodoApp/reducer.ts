import { Reducer } from 'redux';
import * as T from './constants';
import { ActionTypes } from './actions';
import { State, initialState } from './state';

const reducer: Reducer<State> = (state: State = initialState, action: ActionTypes) => {
  switch (action.type) {
  case T.ADD_TODO:
    return {
      ...state,
      input: '',
      todos: [
        ...state.todos,
        action.todo,
      ],
    };
  case T.INPUT:
    return {
      ...state,
      input: action.input,
    };
  case T.DELETE_TODO:
    return {
      ...state,
      todos: [
        ...state.todos.slice(0, action.index),
        ...state.todos.slice(action.index + 1),
      ],
    };
  default:
    return state;
  }
};

export default reducer;
