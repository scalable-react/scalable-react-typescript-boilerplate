import { DefaultAction } from 'shared/actions';
import * as types from './constants';
import { Action } from 'redux';

export interface SetIsMobileAction extends Action {
  type: types.SET_MOBILE_TYPE,
  isMobile: boolean
}

export type FeatureAction =
  SetIsMobileAction |
  DefaultAction;
