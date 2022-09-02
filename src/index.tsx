import React from 'react';
import ReactDOM from 'react-dom/client';
import {App} from './App';
import { GlobalStyle } from './style/global';
import {createStore} from 'redux'
import { Provider } from 'react-redux';
import Reducers from './Reducers'
import CartProvider from './context/Cart';


const store = createStore(Reducers)


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <CartProvider>
    <Provider store={store}>
    <App />
    <GlobalStyle/>
    </Provider>
    </CartProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))

