import * as React from 'react';
import { ApolloClient, createNetworkInterface } from 'apollo-client';
import { renderToString, renderToStaticMarkup } from 'react-dom/server';
import { match, RouterContext } from 'react-router';
import morgan from 'morgan';
import express from 'express';
import compression from 'compression';
import path from 'path';
import { ThemeProvider } from 'styled-components';
import theme from '../client/theming';
import { ApolloProvider, getDataFromTree } from 'react-apollo';
import store from '../client/store';
import { routes } from '../client/routes';
import Html from '../client/containers/Html';
import graphQlEntry from './graphqlEntry';
import 'isomorphic-fetch';

const env = require('node-env-file');
env(path.join(process.cwd(), '.env'));
require('./db');

const styleSheet = require('styled-components/lib/models/StyleSheet');
const manifest = require('../../public/manifest.json');

const expressApp = express();
graphQlEntry(expressApp).then((app) => {
  app.use(compression());

  // Need to set this to your api url
  const IP = process.env.IP || '0.0.0.0';
  const PORT = process.env.PORT || 1338;
  const API_URL = process.env.API_URL;
  const apiUrl = API_URL || `http://${IP}:${PORT}/api`;
  const debug = process.env.DEBUG === 'true' || false;
  if (debug) {
    app.use(morgan('combined'));
  }
  app.use('/public', express.static(path.join(__dirname, '../../public')));

  app.use((req, res) => {
    match({ routes, location: req.url },
      (error, redirectLocation, renderProps) => {
        if (redirectLocation) {
          res.redirect(redirectLocation.pathname + redirectLocation.search);
        } else if (error) {
          console.error('ROUTER ERROR:', error); // eslint-disable-line no-console
          res.status(500);
        } else if (renderProps) {
          const styles = !process.env.browser
            ? styleSheet.rules().map((rule) => rule.cssText).join('\n')
            : null;

          const networkInterface = createNetworkInterface({
            uri: apiUrl,
            opts: {
              headers: req.headers,
              credentials: 'same-origin',
            },
          });

          const client = new ApolloClient({
            networkInterface,
            ssrMode: true,
          });

          const component = (
            <ApolloProvider store={store} client={client}>
              <ThemeProvider theme={theme}>
                <RouterContext {...renderProps} />
              </ThemeProvider>
            </ApolloProvider>
          );
          getDataFromTree(component).then(() => {
            const content = renderToString(component);
            const state = { apollo: client.getInitialState() };
            const html = (
              <Html
                content={content}
                scriptHash={manifest['/main.js']}
                vendorHash={manifest['/vendor.js']}
                cssHash={manifest['/main.css']}
                styles={styles}
                state={state}
              />
            );
            res.status(200).send(`<!doctype html>\n${renderToStaticMarkup(html)}`);
          }).catch((err) => console.error(`Server rendering error: ${err}`));
        } else {
          res.status(404).send('Not found');
        }
      });
  });

  app.listen(PORT, IP, (err) => {
    if (err) {
      throw err;
    }
    return console.info(`==> 😎 Listening on port ${PORT}. Open http://${IP}:${PORT} in your browser.`);
  });
})
.catch((err) => console.error(err));
