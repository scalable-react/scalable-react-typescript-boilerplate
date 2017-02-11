import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
/* GENERATOR-IMPORT */
import app, { initialState as appState, IAppState } from 'containers/App/reducers';
import docs, { initialState as docsState, IDocsState } from 'containers/Docs/reducers';

export interface IInitialState {
  /* GENERATOR-EXPORT-STATE-TYPE */
  app: IAppState;
  docs: IDocsState;
}

export const initialState: IInitialState = {
  /* GENERATOR-EXPORT-STATE */
  app: appState,
  docs: docsState,
};

export const rootReducer = combineReducers({
  /* GENERATOR-EXPORT-REDUCER */
  app,
  docs,
  routing: routerReducer,
});
