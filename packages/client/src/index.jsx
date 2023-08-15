import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './app'
import AppProvider from './contexts/AppProvider'

const app = ReactDOM.createRoot(document.getElementById('app'))
app.render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>
)