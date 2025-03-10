import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { GlobalStyles } from './styles/global'
import { AuthProvider } from './hooks/auth'
import { Routes } from './routes'
import { ToastContainer } from 'react-toastify'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalStyles />
    <ToastContainer position='top-center'/>
    <AuthProvider>
        <Routes />
    </AuthProvider>
  </StrictMode>,
)
