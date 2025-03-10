import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Homepage } from './pages/Homepage'
import { GlobalStyles } from './styles/global'
import { LandingPage } from './pages/LandingPage'
import { AuthProvider } from './hooks/auth'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalStyles />
    <AuthProvider>
        <LandingPage />
    </AuthProvider>
  </StrictMode>,
)
