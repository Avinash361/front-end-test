import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './store';
import { Provider } from 'react-redux';

store.subscribe(()=> console.log("all states : ",store.getState()));
const root = ReactDOM.createRoot(document.getElementById('root'));
// localStorage.setItem("currentDiets", JSON.stringify([]));
root.render(
    <Provider store={store}>
    <App />
    </Provider>
  );

reportWebVitals();
