import { Action } from 'redux';
export { ThemeColorMap } from './theming/types';
import * as TodoAppTypes from 'containers/TodoApp/types';
import * as BlogPostTypes from 'containers/BlogPost/types';
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
  BlogPostTypes,
};
