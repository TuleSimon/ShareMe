import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './App';
import ErrorBoundary from './components/error/ErrorBoundary';
import './index.css';

ReactDOM.render(
  <Router>
    <ErrorBoundary>
    <App />
    </ErrorBoundary>
  </Router>,
  document.getElementById('root'),
);

