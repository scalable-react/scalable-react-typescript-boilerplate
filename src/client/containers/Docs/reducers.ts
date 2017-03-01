import { Reducer } from 'redux';
import * as types from './constants';
import { DocsAction } from './actions';
import { State, initialState } from './state';

const docsReducer: Reducer<State> = (state: State = initialState, action: DocsAction) => {
  switch (action.type) {
  case types.LOAD_INITIATION:
    return {
      ...state,
      isLoading: true,
    };
  case types.LOAD_SUCCESS:
    return {
      isLoading: false,
      markdownContent: action.payload,
    };
  case types.LOAD_FAILURE:
    return {
      isLoading: false,
      error: action.payload,
    };
  case types.CLEAR_ERROR:
    return {
      ...state,
      error: null,
    };
  default:
    return state;
  }
};

export default docsReducer;
