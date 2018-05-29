import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import { Provider } from 'react-redux';
import store from './configureStore';

ReactDOM.render(
  <Router>
    <Provider store={store}>
    <App />
    </Provider>
  </Router>,
  document.getElementById('root')
);
registerServiceWorker();
