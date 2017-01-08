import { createStore, applyMiddleware } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';
import { rootReducer, initialState as clientState } from './reducers';
const thunk = require('redux-thunk');

const middleware = [thunk];
const isClient = typeof document !== 'undefined';

declare var window: { __INITIAL_STATE__: any };
const initialState = isClient ? window.__INITIAL_STATE__ : clientState;

const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(middleware),
);

export const history = isClient ?
  syncHistoryWithStore(browserHistory, store) : undefined;

export default store;
