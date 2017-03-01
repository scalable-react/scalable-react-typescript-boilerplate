import { combineReducers, Reducer } from 'redux';
import { routerReducer } from 'react-router-redux';
import client from './apolloClient';
/* GENERATOR-IMPORT-REDUCER */
import appReducer from 'containers/App/reducers';
import docsReducer from 'containers/Docs/reducers';
import todoAppReducer from 'containers/TodoApp/reducer';

export const rootReducer = combineReducers({
  /* GENERATOR-EXPORT-REDUCER */
  todoApp: todoAppReducer,
  app: appReducer,
  docs: docsReducer,
  routing: routerReducer,
  apollo: client.reducer() as Reducer<undefined>,
});
