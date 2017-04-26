import { Action } from 'redux';
/* GENERATOR-IMPORT */
import * as LandingTypes from 'features/Landing/types';
import * as LayoutTypes from 'features/Layout/types';
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
  LandingTypes,
  LayoutTypes,
};
