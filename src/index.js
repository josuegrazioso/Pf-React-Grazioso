import React from 'react';
import ReactDOM from 'react-dom/client';
import { initializeApp } from 'firebase/app';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';

const firebaseConfig = {
  apiKey: "AIzaSyCGWnalSI0r8nLghdSPA6yYihDSjAnHJa4",
  authDomain: "josue-coder-pf.firebaseapp.com",
  projectId: "josue-coder-pf",
  storageBucket: "josue-coder-pf.appspot.com",
  messagingSenderId: "375197726037",
  appId: "1:375197726037:web:7409df21bd0010c8f5abdc"
};

initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
