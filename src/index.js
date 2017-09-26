import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger';
import { injectGlobal } from 'styled-components';

import Root from 'src/containers/Root';
import sagas from 'src/containers/Root/saga';
import reducer from 'src/containers/Root/reducer';

import proximaNovaRegular from 'static/font/ProximaNovaRegular.otf';
import proximaNovaBold from 'static/font/ProximaNovaSemiBold.otf';
import proximaNovaThin from 'static/font/proximaNovaThin.otf';

const production = process.env.NODE_ENV === 'production';
const logger = createLogger();
const reduxSaga = createSagaMiddleware();
const middleware = production ? [logger, reduxSaga] : [reduxSaga];
const store = createStore(reducer, applyMiddleware(...middleware));

reduxSaga.run(sagas);

injectGlobal`
  @font-face {
    font-family: ProximaNovaRegular;
    src: url(${proximaNovaRegular});
  }

  @font-face {
    font-family: ProximaNovaBold;
    src: url(${proximaNovaBold});
  }

  @font-face {
    font-family: ProximaNovaThin;
    src: url(${proximaNovaThin});
  }

  body {
    font-family: ProximaNovaRegular;
    text-transform: uppercase;
    background-color: #f7f7f7;
    color: white;
    margin: 0;
  }
`;

ReactDOM.render(
  <Provider store={store}>
    <Root />
  </Provider>,
  document.getElementById('app'),
);
