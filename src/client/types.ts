export { ThemeColorMap } from './theming/types';
import * as AppTypes from 'containers/App/types';
import * as TodoAppTypes from 'containers/TodoApp/types';
import * as BlogPostTypes from 'containers/BlogPost/types';
import * as DocsTypes from 'containers/Docs/types';

export interface FormControlEventTarget extends EventTarget {
  value: string;
}

export {
  AppTypes,
  TodoAppTypes,
  DocsTypes,
  BlogPostTypes,
};
