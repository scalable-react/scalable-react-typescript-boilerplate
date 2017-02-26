import { combineReducers, Reducer } from 'redux';
import { routerReducer } from 'react-router-redux';
import client from './apolloClient';
/* GENERATOR-IMPORT-REDUCER */
import appReducer from 'containers/App/reducers';
import docsReducer from 'containers/Docs/reducers';

export const rootReducer = combineReducers({
  /* GENERATOR-EXPORT-REDUCER */
  app: appReducer,
  docs: docsReducer,
  routing: routerReducer,
  apollo: client.reducer() as Reducer<undefined>,
});
