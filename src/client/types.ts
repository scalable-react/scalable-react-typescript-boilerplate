import { Action } from 'redux';
export { ThemeColorMap } from './styles/theming/types';

export interface PayloadAction<P> extends Action {
  type: string;
  payload?: P;
}
