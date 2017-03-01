import { Todo, Input } from './types';

export interface State {
  todos?: Todo[];
  input?: Input;
}

export const initialState: State = {
  todos: [],
  input: '',
};

export default State;
