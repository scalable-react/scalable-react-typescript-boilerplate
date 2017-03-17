import * as React from 'react';
import { ApolloProvider } from 'react-apollo';
import { ThemeProvider } from 'styled-components';
import { Route, IndexRoute, Router as ReactRouter } from 'react-router';
import client from './apolloClient';
import store, { history } from './store';
import { App, Home, Docs, About, TodoApp, Blog, BlogPost } from './containers';
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
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="/docs" component={Docs} />
    <Route path="/about" component={About} />
    <Route path="/blog" component={Blog} />
    <Route path="/blog/posts/:postId" component={BlogPost} />
    <Route path="/todo-app" component={TodoApp} />
    <Route path="*" component={Home} />
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
