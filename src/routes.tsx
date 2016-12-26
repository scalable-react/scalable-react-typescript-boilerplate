import * as React from 'react';
import * as Router from 'react-router';
import { Provider } from 'react-redux';
import { Route, IndexRoute, Router as ReactRouter } from 'react-router';
import store, { history } from './store';
import { App, Home } from 'containers';

const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Home}/>
  </Route>
);

const RouterApp = () => (
  <Provider store={store}>
    <ReactRouter history={history}>
      {routes}
    </ReactRouter>
  </Provider>
);

export default RouterApp;
