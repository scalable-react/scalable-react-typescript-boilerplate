import { combineReducers, Reducer } from 'redux';
import { routerReducer } from 'react-router-redux';
import client from './apolloClient';
import appReducer from 'containers/App/reducers';
import docsReducer from 'containers/Docs/reducers';

export const rootReducer = combineReducers({
  app: appReducer,
  docs: docsReducer,
  routing: routerReducer,
  apollo: client.reducer() as Reducer<any>,
});
