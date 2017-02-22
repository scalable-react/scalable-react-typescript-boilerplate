import * as types from './constants';
import { Action } from './reducers';

export const appSetMobile =
  (isMobile: boolean):
    Action<{ isMobile: boolean }> => ({
      type: types.SET_MOBILE,
      payload: {
        isMobile,
      },
    });
