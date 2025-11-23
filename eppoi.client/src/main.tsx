import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { registerSW } from 'virtual:pwa-register'
import './globals.css'
import './index.css'
import App from './App.tsx'

registerSW({
    onOfflineReady() {
        console.log('App pronta per l\'uso offline')
    }
})

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
