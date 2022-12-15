import React from 'react'
import ReactDOM from 'react-dom/client'
import { Global } from './globalStyles/globalStyles'
import Router from './routes'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router />
    <Global />
  </React.StrictMode>,
)
