import { SET_MOBILE } from './constants';

interface IAction<P> {
  type: string;
  payload: P;
};

export interface IAppState {
  isMobile: boolean;
  navLinks: [
    {
      text: string;
      url: string;
    }
  ];
  logoText: string;
};

export const initialState: IAppState = {
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

const appReducer = (state: IAppState = initialState, action: IAction<any>): IAppState => {
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
