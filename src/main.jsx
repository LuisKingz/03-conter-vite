import React from 'react';
import ReactDOM from 'react-dom/client'
import { CounterApp } from './CounterApp';
import { FirtsApp } from './FirtsApp';
import { HW } from './HW';
import'./index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <CounterApp value={ 3 }  />
    </React.StrictMode>
)
