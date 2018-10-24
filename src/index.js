import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
// import { createStore } from 'redux';
// import { rootReducer } from './reducers';
import * as serviceWorker from './serviceWorker';

// const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX__DEVTOOLS_EXTENSION__();
// const store = createStore(rootReducer, devTools)

ReactDOM.render(
  <Provider>
    <BrowserRouter >
      <App />
    </BrowserRouter>
  </Provider>,

  document.getElementById('root'));
serviceWorker.unregister();
