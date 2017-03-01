import { Action } from 'redux';
import * as TodoAppTypes from 'containers/TodoApp/types';
import * as DocsTypes from 'containers/Docs/types';

export interface PayloadAction<P> extends Action {
  type: string;
  payload?: P;
}

export interface FormControlEventTarget extends EventTarget {
  value: string;
}

export {
  TodoAppTypes,
  DocsTypes,
};
