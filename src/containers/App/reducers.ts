import * as types from './constants';
import { Action } from './actions';

interface AppState {
  isMobile: boolean,
  navLinks: [
    {
      text: string,
      url: string,
    }
  ],
  logo: string,
};

export const initialState: AppState = {
  isMobile: false,
  navLinks: [
    {
      text: 'Home',
      url: '/'
    },
    {
      text: 'Documentation',
      url: '/docs'
    },
  ],
  logo: 'React + TypeScript',
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
