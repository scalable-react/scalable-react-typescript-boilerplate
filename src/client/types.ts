import { Action } from 'redux';
/* GENERATOR-IMPORT */
import * as HomeTypes from './containers/Home/types';
import * as AppTypes from 'containers/App/types';
export { ThemeColorMap } from './theming/types';

export interface PayloadAction<P> extends Action {
  type: string;
  payload?: P;
}

export interface FormControlEventTarget extends EventTarget {
  value: string;
}

export {
  /* GENERATOR-EXPORT */
  HomeTypes,
  AppTypes,
};
