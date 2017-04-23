import { Action } from 'redux';
/* GENERATOR-IMPORT */
import * as AppTypes from 'containers/App/types';
import * as TodoAppTypes from 'containers/TodoApp/types';
import * as BlogPostTypes from 'containers/BlogPost/types';
import * as BlogTypes from 'containers/Blog/types';
import * as DocsTypes from 'containers/Docs/types';
import * as FeaturesTypes from 'containers/Features/types';
import * as HomeTypes from 'containers/Home/types';
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
  AppTypes,
  TodoAppTypes,
  DocsTypes,
  BlogPostTypes,
  BlogTypes,
  FeaturesTypes,
  HomeTypes,
};
