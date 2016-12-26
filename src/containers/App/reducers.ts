import * as types from './constants';

interface AppState {
  isMobile: boolean
};

export const initialState: AppState = {
  isMobile: false,
};

const app = (state: AppState = initialState, action): AppState => {
  switch(action.type) {
    case types.TOGGLE_MOBILE:
      return {
        ...state,
        isMobile: !state.isMobile,
      };
    default:
      return state;
  }
};

export default app;
