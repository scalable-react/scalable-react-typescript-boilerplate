import { createStore } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';
import { rootReducer, initialState as clientState } from './reducers';

const isClient = typeof document !== 'undefined';

declare var window: { __INITIAL_STATE__: any };
const initialState = window.__INITIAL_STATE__ || clientState;

const store = createStore(
  rootReducer,
  initialState,
);

export const history = isClient ?
  syncHistoryWithStore(browserHistory, store) : undefined;

export default store;
