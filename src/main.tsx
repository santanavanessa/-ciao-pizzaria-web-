import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { Toaster } from 'sonner'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
    <Toaster richColors
     toastOptions={{
        style: {
          padding: '1rem 2rem',
          alignItems: 'center',
        }

     }}
    />
  </React.StrictMode>,
)
