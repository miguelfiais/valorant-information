import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './containers/Home'
import { Global } from './globalStyles/globalStyles'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Home />
    <Global />
  </React.StrictMode>,
)
