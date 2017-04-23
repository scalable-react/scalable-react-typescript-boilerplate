import { combineReducers, Reducer } from 'redux';
import { routerReducer } from 'react-router-redux';
import client from './apolloClient';
/* GENERATOR-IMPORT-REDUCER */

export const rootReducer = combineReducers({
  /* GENERATOR-EXPORT-REDUCER */
  routing: routerReducer,
  apollo: client.reducer() as Reducer<undefined>,
});
