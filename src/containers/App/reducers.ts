import * as types from './constants';
import { Action } from './actions';

interface AppState {
  isMobile: boolean
};

export const initialState: AppState = {
  isMobile: false,
};

const app = (state: AppState = initialState, action: Action<any>): AppState => {
  switch(action.type) {
    case types.SET_MOBILE:
      return {
        ...state,
        isMobile: action.payload.isMobile,
      };
    default:
      return state;
  }
};

export default app;
