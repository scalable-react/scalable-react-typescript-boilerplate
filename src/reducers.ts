import { createStore, compose, combineReducers, applyMiddleware } from 'redux';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
import * as reactRouter from 'react-router';
import app, { initialState as appState } from 'containers/App/reducers';

export const initialState = {
  app: appState,
};

export const rootReducer = combineReducers({
  app,
  routing: routerReducer,
});
