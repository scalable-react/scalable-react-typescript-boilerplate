import * as React from 'react';
import { renderToString, renderToStaticMarkup } from 'react-dom/server';
import { match, RouterContext } from 'react-router';
import morgan from 'morgan';
import express from 'express';
import compression from 'compression';
import path from 'path';
import { ApolloProvider } from 'react-apollo';
import store from '../client/store';
import client from '../client/apolloClient';
import { routes } from '../client/routes';
import Html from '../client/containers/Html';
import graphQlEntry from './graphqlEntry';

const env = require('node-env-file');
env(path.join(process.cwd(), '.env'));
require('./db');

const styleSheet = require('styled-components/lib/models/StyleSheet');
const manifest = require('../../public/manifest.json');

const expressApp = express();
graphQlEntry(expressApp).then((app) => {
  app.use(compression());

  // Need to set this to your api url
  const IP = process.env.IP || 'localhost';
  const PORT = process.env.PORT || 1338;
  const debug = process.env.DEBUG === 'true' || false;
  if (debug) {
    app.use(morgan('combined'));
  }
  app.use('/public', express.static(path.join(__dirname, '../public')));

  app.use((req, res) => {
    match({ routes, location: req.url },
      (error, redirectLocation, renderProps) => {
        if (redirectLocation) {
          res.redirect(redirectLocation.pathname + redirectLocation.search);
        } else if (error) {
          console.error('ROUTER ERROR:', error); // eslint-disable-line no-console
          res.status(500);
        } else if (renderProps) {
          const styles = styleSheet.rules().map((rule) => rule.cssText).join('\n');
          const state = store.getState();

          const content = renderToString(
            <ApolloProvider store={store} client={client}>
              <RouterContext {...renderProps} />
            </ApolloProvider>,
          );
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
