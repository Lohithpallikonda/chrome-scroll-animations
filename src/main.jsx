// IMPORTS START
import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './styles/global.scss'

const root = createRoot(document.getElementById('root'))
// MOUNT START
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
