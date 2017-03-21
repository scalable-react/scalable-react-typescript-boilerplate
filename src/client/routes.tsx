import * as React from 'react';
import { ApolloProvider } from 'react-apollo';
import { ThemeProvider } from 'styled-components';
import { Route, IndexRoute, Router as ReactRouter } from 'react-router';
import client from './apolloClient';
import store, { history } from './store';
import { App, Home } from './containers';
import colors from './theming';

const scrollToTop = () => {
  if (typeof window !== 'undefined') {
    window.scrollTo(0, 0);
  }
};

export const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="*" component={Home} />
  </Route>
);

const RouterApp = () => (
  <ApolloProvider store={store} client={client}>
    <ThemeProvider theme={colors}>
      <ReactRouter
        onUpdate={scrollToTop}
        history={history}
        routes={routes}
      />
    </ThemeProvider>
  </ApolloProvider>
);

export default RouterApp;
