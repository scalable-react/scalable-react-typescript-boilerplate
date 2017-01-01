import * as React from 'react';
import { Provider } from 'react-redux';
import { Route, IndexRoute, Router as ReactRouter } from 'react-router';
import store, { history } from './store';
import { App, Home, Docs } from 'containers';

export const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Home}/>
    <Route path="/docs" component={Docs} />
  </Route>
);

const RouterApp = () => (
  <Provider store={store}>
    <ReactRouter
      history={history}
    >
      {routes}
    </ReactRouter>
  </Provider>
);

export default RouterApp;
