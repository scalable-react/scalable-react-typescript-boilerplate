// Import React and React DOM
import * as React from 'react';
import { render } from 'react-dom';
// Import the Hot Module Reloading App Container – more on why we use 'require' below
const { AppContainer } = require('react-hot-loader');
import RouterApp from './routes';

declare var module: { hot: any };

const rootEl = document.getElementById('app');

render(
  <AppContainer>
    <RouterApp />
  </AppContainer>,
  rootEl
);

if (module.hot) {
  module.hot.accept('./containers/App', () => {
    const NextApp = require('./containers/App').default;
    render(
      <AppContainer>
         <NextApp />
      </AppContainer>,
      rootEl
    );
  })
}
