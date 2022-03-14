import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCOirNMhchZr44oORv9gAH0mhQ_NPYxa4A",
  authDomain: "fir-taxi-61da0.firebaseapp.com",
  databaseURL: "https://fir-taxi-61da0-default-rtdb.firebaseio.com",
  projectId: "fir-taxi-61da0",
  storageBucket: "fir-taxi-61da0.appspot.com",
  messagingSenderId: "196052101517",
  appId: "1:196052101517:web:2b40351c047419720b35c4",
  measurementId: "G-PC9BY4C1NR"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
