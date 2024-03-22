import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AppWithTheme from './AppWithTheme';
import reportWebVitals from './reportWebVitals';
import { rootReducer } from './reducers';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit'

const store = configureStore({ reducer: rootReducer })

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <AppWithTheme />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
