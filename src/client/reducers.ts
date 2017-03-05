import { combineReducers, Reducer } from 'redux';
import { routerReducer } from 'react-router-redux';
import client from './apolloClient';
/* GENERATOR-IMPORT-REDUCER */
import blogPostReducer from 'containers/BlogPost/reducer';
import appReducer from 'containers/App/reducer';
import docsReducer from 'containers/Docs/reducer';
import todoAppReducer from 'containers/TodoApp/reducer';

export const rootReducer = combineReducers({
  /* GENERATOR-EXPORT-REDUCER */
  todoApp: todoAppReducer,
  blogPost: blogPostReducer,
  app: appReducer,
  docs: docsReducer,
  routing: routerReducer,
  apollo: client.reducer() as Reducer<undefined>,
});
