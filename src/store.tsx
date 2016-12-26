import { createStore, compose, combineReducers, applyMiddleware } from 'redux';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
import { browserHistory } from 'react-router';
import * as reactRouter from 'react-router';
import { rootReducer, initialState } from './reducers';

declare var process: { env: { NODE_ENV: string } };
declare var window: { devToolsExtension: any };
const isClient = typeof document !== 'undefined';
const isDeveloping = process.env.NODE_ENV !== 'production';

const enhancers = [];
if (isClient && isDeveloping) {
  const devToolsExtension = window.devToolsExtension;
  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension());
  }
}

const middlewares = applyMiddleware(...enhancers);

const store = createStore(
  rootReducer,
  initialState,
  middlewares,
);

export const history = isClient ?
  syncHistoryWithStore(browserHistory, store) : undefined;

export default store;
