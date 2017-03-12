import { Reducer } from 'redux';
import * as types from './constants';
import { FeatureAction } from './actions';
import { defaultAction } from 'shared/actionCreators';
import { State, initialState } from './state';

const reducer: Reducer<State> = (state: State = initialState, action: FeatureAction = defaultAction()) => {
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
    return {
      ...state,
      isLoading: false,
    };
  default:
    return state;
  }
};

export default reducer;
