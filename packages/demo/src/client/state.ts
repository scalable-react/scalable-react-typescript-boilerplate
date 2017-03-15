/* GENERATOR-IMPORT-STATE */
import { initialState as appState, State as AppState } from 'containers/App/state';
import { initialState as docsState, State as DocsState } from 'containers/Docs/state';
import { initialState as todoAppState, State as TodoAppState } from 'containers/TodoApp/state';
import { initialState as blogPostState, State as BlogPostState } from 'containers/BlogPost/state';

export interface State {
  /* GENERATOR-EXPORT-STATE-TYPE */
  todoApp: TodoAppState;
  app: AppState;
  docs: DocsState;
  blogPost: BlogPostState;
}

export const initialState: State = {
  /* GENERATOR-EXPORT-STATE */
  app: appState,
  docs: docsState,
  todoApp: todoAppState,
  blogPost: blogPostState,
};
