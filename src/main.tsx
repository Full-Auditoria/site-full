import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { GlobalStyle } from './theme/globalStyle.ts'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GlobalStyle>
    <App />
    </GlobalStyle>
  </StrictMode>,
)
