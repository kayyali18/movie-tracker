import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './Reducers/index.js';
import * as serviceWorker from './serviceWorker';

const devTools = window.devToolsExtension && window.devToolsExtension()
const store = createStore(rootReducer, devTools)

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter >
      <App />
    </BrowserRouter>
  </Provider>,

  document.getElementById('root'));
serviceWorker.unregister();
