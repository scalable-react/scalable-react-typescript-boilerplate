import { initialState as appState, AppState } from 'containers/App/reducers';
import { initialState as docsState, State as DocsState } from 'containers/Docs/state';

export interface State {
  app: AppState;
  docs: DocsState;
}

export const initialState: State = {
  app: appState,
  docs: docsState,
};
