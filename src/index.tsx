import * as React from 'react';
import { render } from 'react-dom';
import RouterApp from './routes';
const { AppContainer } = require('react-hot-loader');
import './styles/index.css';

declare var module: { hot: any };

const rootEl = document.getElementById('app');

render(
  <AppContainer>
    <RouterApp />
  </AppContainer>,
  rootEl,
);

if (module.hot) {
  module.hot.accept('./containers/App', () => {
    const NextApp = require('./containers/App').default;
    render(
      <AppContainer>
         <NextApp />
      </AppContainer>,
      rootEl,
    );
  });
}
