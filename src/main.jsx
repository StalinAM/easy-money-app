import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import Auth from './context/Auth'
import TransactionsContext from './context/TransactionsContext'
import App from './App'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Auth>
      <TransactionsContext>
        <App />
      </TransactionsContext>
    </Auth>
  </BrowserRouter>
)
