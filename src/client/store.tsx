import { createStore, applyMiddleware } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';
import { rootReducer, initialState as clientState } from './reducers';
import client from './apolloClient';

const isClient = typeof document !== 'undefined';

declare var window: { __INITIAL_STATE__: any };
const initialState = isClient ? window.__INITIAL_STATE__ : clientState;

function createThunkMiddleware() {
  return ({ dispatch, getState }) => (next) => (action) => {
    if (typeof action === 'function') {
      return action(dispatch, getState);
    }

    return next(action);
  };
}

const thunk = createThunkMiddleware();
const middlewares = [thunk, client.middleware()];
const middleWare = applyMiddleware(...middlewares);

const store = createStore(
  rootReducer,
  initialState,
  middleWare,
);

export const history = isClient ?
  syncHistoryWithStore(browserHistory, store) : undefined;

export default store;
