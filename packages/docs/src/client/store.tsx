import { createStore, applyMiddleware, Middleware, GenericStoreEnhancer, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';
import { createLogicMiddleware } from 'redux-logic';
import { rootReducer} from './reducers';
import { initialState as defaultInitialState} from './state';
import apolloClient from './apolloClient';
import rootLogic from './logic';
import axios from 'axios';

const isClient = typeof document !== 'undefined';

declare var window: { __INITIAL_STATE__: {} };
const initialState = isClient ? window.__INITIAL_STATE__ : defaultInitialState;

function createThunkMiddleware() {
  return ({ dispatch, getState }) => (next) => (action) => {
    if (typeof action === 'function') {
      return action(dispatch, getState);
    }

    return next(action);
  };
}

const dependencies = {
  httpClient: axios,
};

const thunk = createThunkMiddleware();
const logicMiddleware = createLogicMiddleware(rootLogic, dependencies);
const apolloClientMiddleware = apolloClient.middleware();

const middlewares: Middleware[] = [
  thunk,
  apolloClientMiddleware,
  logicMiddleware,
];

const enhancers: GenericStoreEnhancer[] = [
  applyMiddleware(...middlewares),
];

const ReduxExtentionComposeName: string = '__REDUX_DEVTOOLS_EXTENSION_COMPOSE__';
const composeEnhancers =
  process.env.NODE_ENV !== 'production' &&
  typeof window === 'object' &&
    window[ReduxExtentionComposeName] ?
    window[ReduxExtentionComposeName] : compose;

const store = createStore(
  rootReducer,
  initialState,
  composeEnhancers(...enhancers),
);

export const history = isClient ?
  syncHistoryWithStore(browserHistory, store) : undefined;

export default store;
