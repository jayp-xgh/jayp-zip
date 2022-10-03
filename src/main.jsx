import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import EstiloGlobal from './global/index'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <EstiloGlobal/>
  </React.StrictMode>
)
