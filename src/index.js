import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx'; // Make sure this path is correct
import './index.css'; // Optional, if you have CSS styles



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
