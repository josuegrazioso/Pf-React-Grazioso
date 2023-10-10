import React from 'react';
import ReactDOM from 'react-dom/client';
import { initializeApp } from 'firebase/app';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';

const firebaseConfig = {
  apiKey: "AIzaSyD9A3xihI1ngGgR8DRzpkjWnaMFGt4Bq1I",
  authDomain: "coderhouse-josue-pff.firebaseapp.com",
  projectId: "coderhouse-josue-pff",
  storageBucket: "coderhouse-josue-pff.appspot.com",
  messagingSenderId: "864499313062",
  appId: "1:864499313062:web:fa6e30a95bcefd51ac8767"
};

const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


reportWebVitals();
