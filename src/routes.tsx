import * as React from 'react';
import { Provider } from 'react-redux';
import { Route, IndexRoute, Router as ReactRouter } from 'react-router';
import store, { history } from './store';
import { App, Home, Docs, About, TodoApp } from 'containers';

export const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Home}/>
    <Route path="/docs" component={Docs} />
    <Route path="/about" component={About} />
    <Route path="/todo-app" component={TodoApp} />
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
