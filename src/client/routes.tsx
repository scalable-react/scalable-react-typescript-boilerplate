import * as React from 'react';
import { ApolloProvider } from 'react-apollo';
import { ThemeProvider } from 'styled-components';
import { Route, IndexRoute, Router as ReactRouter } from 'react-router';
import client from './apolloClient';
import store, { history } from './store';
import { Layout, Landing } from './containers';
import colors from './theming';

import ReactGA from 'react-ga';

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
  <Route path="/" component={Layout}>
    <IndexRoute component={Landing} />
  </Route>
);

const RouterApp = () => (
  <ApolloProvider store={store} client={client}>
    <ThemeProvider theme={colors}>
      <ReactRouter
        onUpdate={logPage}
        history={history}
        routes={routes}
      />
    </ThemeProvider>
  </ApolloProvider>
);

export default RouterApp;
