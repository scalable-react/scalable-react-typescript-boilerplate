/* GENERATOR-IMPORT-STATE */
import { initialState as appState, AppState } from 'containers/App/reducers';
import { initialState as docsState, State as DocsState } from 'containers/Docs/state';

export interface State {
  /* GENERATOR-EXPORT-STATE-TYPE */
  app: AppState;
  docs: DocsState;
}

export const initialState: State = {
  /* GENERATOR-EXPORT-STATE */
  app: appState,
  docs: docsState,
};
