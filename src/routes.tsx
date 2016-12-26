import * as React from 'react';
import * as Router from 'react-router';
import { Route, IndexRoute, browserHistory, Router as ReactRouter } from 'react-router';
import { App, Home } from 'containers';

const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Home}/>
  </Route>
);

const RouterApp = () => (
  <ReactRouter history={browserHistory}>
    {routes}
  </ReactRouter>
);

export default RouterApp;
