import * as types from './constants';
import { DocsAction } from './actions';
import { State, initialState } from './state';

const docsReducer = (state: State = initialState, action: DocsAction): State => {
  switch (action.type) {
  case types.LOAD_INTIATION:
    return Object.assign({}, state, {
      isLoading: true,
    });
  case types.LOAD_SUCCESS:
    return Object.assign({}, state, {
      isLoading: false,
      markdownContent: action.payload,
    });
  case types.LOAD_FAILURE:
    return Object.assign({}, state, {
      isLoading: false,
      error: action.payload,
    });
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
