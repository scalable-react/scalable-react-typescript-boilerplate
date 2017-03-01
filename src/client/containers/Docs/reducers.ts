import { Reducer } from 'redux';
import * as types from './constants';
import { DocsAction } from './actions';
import { defaultAction } from './actionCreators';
import { State, initialState } from './state';

const reducer: Reducer<State> = (state: State = initialState, action: DocsAction = defaultAction()) => {
  switch (action.type) {
  case types.LOAD_INITIATION:
    return {
      ...state,
      isLoading: true,
    };
  case types.LOAD_SUCCESS:
    return {
      ...state,
      isLoading: false,
      markdownContent: action.payload,
    };
  case types.LOAD_FAILURE:
    return {
      ...state,
      isLoading: false,
      error: action.error,
    };
  case types.CLEAR_ERROR:
    return {
      ...state,
      error: null,
    };
  case types.LOAD_CANCEL:
    return initialState;
  default:
    return state;
  }
};

export default reducer;
