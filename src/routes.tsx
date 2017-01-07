import * as React from 'react';
import { Provider } from 'react-redux';
import { Route, IndexRoute, Router as ReactRouter } from 'react-router';
import { App, Home, Docs, About } from 'containers';
import store, { history } from './store';
const { initialize, set, pageview } = require('react-ga');

initialize('UA-89939143-1');

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
      onUpdate={() => { // tslint:disable jsx-no-lambda
        window.scrollTo(0, 0);
        set({ page: window.location.pathname });
        pageview(window.location.pathname);
      }}
      history={history}
    >
      {routes}
    </ReactRouter>
  </Provider>
);

export default RouterApp;
