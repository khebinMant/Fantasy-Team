import React from 'react';
import ReactDOM from 'react-dom/client';
import { MainRouter } from './router/MainRouter';
import { store } from './store/store';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import './index.css';
import "primereact/resources/themes/lara-dark-teal/theme.css";          
import "primereact/resources/primereact.min.css";                  
import "primeicons/primeicons.css";    
import 'animate.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <MainRouter />
      </BrowserRouter>
    </Provider>
  // </React.StrictMode>
);