import ReactDOM from 'react-dom';
import App from './App';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import store from './redux/store'
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,

  document.querySelector('#root')
);
