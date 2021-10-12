import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/configureStore';
import Navbar from './components/NavBar';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store} />
    <Navbar />
  </React.StrictMode>,
  document.getElementById('root'),
);
