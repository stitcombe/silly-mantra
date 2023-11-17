import React from 'react';
import ReactDOM from 'react-dom/client';
import { worker } from 'mocks/browser';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';

if (import.meta.env.MODE === 'development') {
  worker.start();
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
