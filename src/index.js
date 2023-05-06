import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import './css/main.css'
import './css/brand.css'
import './css/work.css'
import './css/aptInfo.css'
import './css/customerService.css'
import reportWebVitals from './reportWebVitals';
import Root from './client/Root';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <Root />
  // </React.StrictMode>
);

reportWebVitals();
