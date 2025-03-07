import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

export default () => <div className="flex flex-col items-center justify-center h-screen text-center"><h1 className="text-4xl font-bold">Bienvenido</h1><p className="text-lg text-gray-600">UnderFarm</p></div>;
