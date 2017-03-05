import * as types from './constants';
import { Action } from './reducer';

export const appSetMobile =
  (isMobile: boolean):
    Action<{ isMobile: boolean }> => ({
      type: types.SET_MOBILE,
      payload: {
        isMobile,
      },
    });
