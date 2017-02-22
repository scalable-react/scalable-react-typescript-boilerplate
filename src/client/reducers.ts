import { combineReducers, Reducer } from 'redux';
import { routerReducer } from 'react-router-redux';
import client from './apolloClient';
/* GENERATOR-IMPORT */
import app, { initialState as appState, AppState } from 'containers/App/reducers';
import docs, { initialState as docsState, DocsState } from 'containers/Docs/reducers';

export interface InitialState {
  /* GENERATOR-EXPORT-STATE-TYPE */
  app: AppState;
  docs: DocsState;
}

export const initialState: InitialState = {
  /* GENERATOR-EXPORT-STATE */
  app: appState,
  docs: docsState,
};

export const rootReducer = combineReducers({
  /* GENERATOR-EXPORT-REDUCER */
  app,
  docs,
  routing: routerReducer,
  apollo: client.reducer() as Reducer<any>,
});
