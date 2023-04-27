import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';

import { router } from './routes';

import GlobalStyle from './styles/globalStyles';
import HelpersStyle from './styles/helpersStyles.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyle />
    <HelpersStyle />
    <RouterProvider router={router} />
  </React.StrictMode>
);
