import * as React from 'react';
import { renderToString, renderToStaticMarkup } from 'react-dom/server';
import { match, RouterContext } from 'react-router';
import { Provider } from 'react-redux';
import store from './store';
import { routes } from './routes';
import Html from './containers/Html';

const express = require('express');
const path = require('path');
const morgan = require('morgan');
const styleSheet = require('styled-components/lib/models/StyleSheet');
const manifest = require('../public/manifest.json');

declare var process: { env: any };
declare var __dirname: any;
const app = express();
const compression = require('compression');
app.use(compression());

// Need to set this to your api url
const IP = process.env.IP || '0.0.0.0';
const PORT = process.env.PORT || 1337;

app.use(morgan('combined'));
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
          <Provider store={store}>
            <RouterContext {...renderProps} />
          </Provider>,
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
    return console.warn(err);
  }
  return console.info(`==> 😎 Listening on port ${PORT}. Open http://${IP}:${PORT} in your browser.`);
});
