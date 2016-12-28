import * as types from './constants';
import { IAction } from './actions';

interface IAppState {
  isMobile: boolean,
  navLinks: [
    {
      text: string,
      url: string,
    }
  ],
  logoText: string,
};

export const initialState: IAppState = {
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
  logoText: 'React + TypeScript',
};

const app = (state: IAppState = initialState, action: IAction<any>): AppState => {
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
