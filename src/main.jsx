import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import SdgMission from "./components/sdg-mission";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <SdgMission/>
  </StrictMode>
)
