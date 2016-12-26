import { createStore, compose, combineReducers } from 'redux';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
import { browserHistory } from 'react-router';
import * as reactRouter from 'react-router';
import { rootReducer, initialState } from './reducers';

const isClient = typeof document !== 'undefined'

const store = createStore(
  rootReducer,
  initialState,
);

export const history = isClient ?
  syncHistoryWithStore(browserHistory, store) : undefined;

export default store;
