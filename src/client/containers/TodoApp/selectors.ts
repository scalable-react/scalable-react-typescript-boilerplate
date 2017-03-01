import { createSelector, Selector } from 'reselect';
import { State } from '../../state';
import { State as TodoAppState, Todo } from './types';

const selectTodoApp = () => (state: State): TodoAppState  => state.todoApp;

export const selectTodos: Selector<State, Todo[]> = createSelector(
  selectTodoApp(),
  (todoApp) => todoApp.todos,
);

export const selectInput: Selector<State, string> = createSelector(
  selectTodoApp(),
  (todoApp) => todoApp.input,
);
