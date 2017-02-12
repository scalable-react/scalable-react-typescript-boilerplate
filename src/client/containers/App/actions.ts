import * as types from './constants';

interface IAction<P> {
  type: string;
  payload: P;
}

export const appSetMobile =
  (isMobile: boolean):
    IAction<{ isMobile: boolean }> => ({
      type: types.SET_MOBILE,
      payload: {
        isMobile,
      },
    });
