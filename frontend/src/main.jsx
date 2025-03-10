import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { GlobalStyles } from './styles/global'
import { AuthProvider } from './hooks/auth'
import { Routes } from './routes'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalStyles />
    <AuthProvider>
        <Routes />
    </AuthProvider>
  </StrictMode>,
)
