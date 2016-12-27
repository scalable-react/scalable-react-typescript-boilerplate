import * as types from './constants';

export interface Action<P> {
  type: string,
  payload: P
}

export const appSetMobile =
  (isMobile: boolean):
    Action<{ isMobile: boolean }> => ({
      type: types.SET_MOBILE,
      payload: {
        isMobile,
      },
    });
