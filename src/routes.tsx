import * as React from 'react';
import { Provider } from 'react-redux';
import { Route, IndexRoute, Router as ReactRouter } from 'react-router';
import store, { history } from './store';
import { App, Home, Docs, About, TodoApp } from './containers';

const ReactGA = require('react-ga');

if (typeof window !== 'undefined') {
  ReactGA.initialize('UA-89939143-1');
}

const logPage = () => {
  if (typeof window !== 'undefined') {
    window.scrollTo(0, 0);
    ReactGA.set({ page: window.location.pathname });
    ReactGA.pageview(window.location.pathname);
  }
};

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
      onUpdate={logPage}
      history={history}
      routes={routes}
    />
  </Provider>
);

export default RouterApp;
