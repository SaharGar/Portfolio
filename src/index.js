import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/style/style.scss';
import { HashRouter as Router } from 'react-router-dom'
import { RootCmp } from './RootCmp';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <RootCmp/>
    </Router>
  </React.StrictMode>
);


