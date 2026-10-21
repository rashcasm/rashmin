import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

const root = document.getElementById('root')
const page = location.pathname.replace(/\/$/, '') === '/notes' ? 'notes' : 'home'
const app = (
  <StrictMode>
    <App page={page} />
  </StrictMode>
)

// production builds ship prerendered HTML (see vite.config.js); dev starts empty
if (root.hasChildNodes()) hydrateRoot(root, app)
else createRoot(root).render(app)
