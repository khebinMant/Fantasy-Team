import React from 'react';
import ReactDOM from 'react-dom/client';
import { MainRouter } from './router/MainRouter';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import "primereact/resources/themes/vela-blue/theme.css";          
import "primereact/resources/primereact.min.css";                  
import "primeicons/primeicons.css";    

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <MainRouter />
    </BrowserRouter>
  </React.StrictMode>
);