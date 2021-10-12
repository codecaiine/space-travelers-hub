import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from './redux/configureStore';
import NavBar from './components/NavBar';
import './App.css';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store} />
    <BrowserRouter>
      <NavBar />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
