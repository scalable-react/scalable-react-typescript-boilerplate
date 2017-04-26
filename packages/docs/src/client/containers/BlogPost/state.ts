import { Input } from './types';

export interface State {
  input?: Input;
}

export const initialState: State = {
  input: '',
};

export default State;
