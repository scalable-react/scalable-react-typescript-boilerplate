/* GENERATOR-IMPORT-STATE */
import { initialState as appState, AppState } from 'containers/App/reducers';
import { initialState as docsState, State as DocsState } from 'containers/Docs/state';
import { initialState as todoAppState, State as TodoAppState } from 'containers/TodoApp/state';

export interface State {
  /* GENERATOR-EXPORT-STATE-TYPE */
  todoApp: TodoAppState;
  app: AppState;
  docs: DocsState;
}

export const initialState: State = {
  /* GENERATOR-EXPORT-STATE */
  app: appState,
  docs: docsState,
  todoApp: todoAppState,
};
