import { Reducer } from 'redux';
import * as T from './constants';
import { ActionTypes } from './actions';
import { State, initialState } from './state';

const reducer: Reducer<State> = (state: State = initialState, action: ActionTypes) => {
  switch (action.type) {
  case T.INPUT:
    return {
      ...state,
      input: action.input,
    };
  default:
    return state;
  }
};

export default reducer;
