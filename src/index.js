import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import RootApp from './RootApp'; // ✅ import RootApp
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'toastify-js/src/toastify.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RootApp /> {/* ✅ render RootApp instead of App */}
  </React.StrictMode>
);

// For performance monitoring (optional)
reportWebVitals();
