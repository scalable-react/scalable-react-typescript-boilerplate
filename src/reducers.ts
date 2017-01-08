import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import app, { initialState as appState, IAppState } from 'containers/App/reducers';
import docs, { initialState as docsState, IDocsState } from 'containers/Docs/reducers';

export interface IInitialState {
  app: IAppState;
  docs: IDocsState;
}

export const initialState = {
  app: appState,
  docs: docsState,
};

export const rootReducer = combineReducers({
  app,
  docs,
  routing: routerReducer,
});
