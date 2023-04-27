import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';

import GlobalStyle from './styles/globalStyles';
import HelpersStyle from './styles/helpersStyles.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyle />
    <HelpersStyle />
    <App />
  </React.StrictMode>
);
