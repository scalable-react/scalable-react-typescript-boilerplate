import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import app, { initialState as appState } from 'containers/App/reducers';

export const initialState = {
  app: appState,
};

export const rootReducer = combineReducers({
  app,
  routing: routerReducer,
});
