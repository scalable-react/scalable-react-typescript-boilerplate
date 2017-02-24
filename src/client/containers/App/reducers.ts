import { SET_MOBILE } from './constants';

export interface Action<P> {
  type: string;
  payload: P;
};

export interface AppState {
  isMobile: boolean;
  navLinks: [{
    text: string;
    url: string;
  }];
  logoText: string;
};

export const initialState: AppState = {
  isMobile: false,
  navLinks: [
    {
      text: 'Docs',
      url: '/docs',
    },
    {
      text: 'About',
      url: '/about',
    },
    {
      text: 'Blog',
      url: '/blog',
    },
  ],
  logoText: 'React + TypeScript',
};

const appReducer = (state: AppState = initialState, action: Action<any>): AppState => {
  switch (action.type) {
  case SET_MOBILE:
    return Object.assign({}, state, {
      isMobile: action.payload.isMobile,
    });
  default:
    return state;
  }
};

export default appReducer;
