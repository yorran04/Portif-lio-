import React from 'react';
import ReactDOM from 'react-dom/client';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "boxicons"

import GlobalStyle from './GlobalStyle';

import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle/>
    <App />
  </React.StrictMode>
);


