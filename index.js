import React from 'react';
import ReactDOM from 'react-dom/client';
import'./index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

const racine = ReactDOM . createRoot ( document . getElementById ( "racine" )); 
racine . rendu (< App />); 

// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

