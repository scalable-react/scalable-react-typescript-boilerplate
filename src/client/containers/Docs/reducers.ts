import * as types from './constants';
import { DocsAction, OtherAction } from './actions';
import { State, initialState } from './state';

const docsReducer = (state: State = initialState, action: DocsAction = OtherAction): State => {
  switch (action.type) {
  case types.LOAD_INTIATION:
    return { ...state, 
      isLoading: true,
    };
  case types.LOAD_SUCCESS:
    return { ...state, isLoading: false,
      markdownContent: action.payload,
    };
  case types.LOAD_FAILURE:
    return { ...state, 
      isLoading: false,
      error: action.payload,
    };
  default:
    return state;
  }
};

export default docsReducer;
