import * as React from 'react';
import { Provider } from 'react-redux';
import { Route, IndexRoute, Router as ReactRouter } from 'react-router';
import { App, Home, Docs, About } from 'containers';
import store, { history } from './store';
const ReactGA = require('react-ga');

ReactGA.initialize('UA-89939143-1');

const logPage = () => {
  if (window) {
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
  </Route>
);

const RouterApp = () => (
  <Provider store={store}>
    <ReactRouter
      onUpdate={logPage}
      history={history}
    >
      {routes}
    </ReactRouter>
  </Provider>
);

export default RouterApp;
