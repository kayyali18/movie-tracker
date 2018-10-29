import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { composeWithDevTools } from "redux-devtools-extension";
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from '../node_modules/redux-thunk';
import './index.css';
import App from './Components/App';
import rootReducer from './Reducers/index.js';
import * as serviceWorker from './serviceWorker';

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter >
      <App />
    </BrowserRouter>
  </Provider>,

  document.getElementById('root'));
serviceWorker.unregister();
