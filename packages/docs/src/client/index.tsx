import * as React from 'react';
import { render } from 'react-dom';
import RouterApp from './routes';
import { AppContainer } from 'react-hot-loader';
import './theming/globalCss';

declare var module: {
  hot: {
    accept: (s: string, f: () => void) => void,
  },
};

const rootEl = document.getElementById('app');

render(
  <AppContainer>
    <RouterApp />
  </AppContainer>,
  rootEl,
);

if (module.hot) {
  const NextApp = require('./routes').default;
  module.hot.accept('./routes', () => {
    render(
      <AppContainer>
        <NextApp />
      </AppContainer>,
      rootEl,
    );
  });
}
