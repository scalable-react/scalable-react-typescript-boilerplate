import { Reducer } from 'redux';
import * as types from './constants';
import { FeatureAction } from './actions';
import { defaultAction } from 'shared/actionCreators';
import { State, initialState } from './state';

const reducer: Reducer<State> = (state: State = initialState, action: FeatureAction = defaultAction()) => {
  switch (action.type) {
  case types.SET_MOBILE:
    return {
      ...state,
      isMobile: action.isMobile,
    };
  default:
    return state;
  }
};

export default reducer;
