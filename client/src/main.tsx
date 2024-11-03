import { createRoot } from 'react-dom/client'
import './assets/styles/index.scss'
import { BrowserRouter } from 'react-router-dom'
import AppRouter from './routers'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
      <AppRouter />
  </BrowserRouter>
)
