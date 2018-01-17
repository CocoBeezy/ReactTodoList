import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import Root from './Root';
import configureStore from './Store';

let store = configureStore({});

ReactDOM.render(
  <AppContainer>
    <Root store={ store }/>
  </AppContainer>,
  document.querySelector('.render-target')
);

if (module.hot) {
  module.hot.accept('./Root', () => {
    const NextRoot = require('./Root').default;
    ReactDOM.render(
      <AppContainer>
        <NextRoot store={ store }/>
      </AppContainer>,
      document.querySelector('.render-target')
    );
  });
}