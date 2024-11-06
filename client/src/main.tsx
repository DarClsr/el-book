import { createRoot } from 'react-dom/client'
import './assets/styles/index.scss'
import { BrowserRouter } from 'react-router-dom'
import AppRouter from './routers'
import BottomNavigation from './bases/Navgation/Navgation'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <div className='page h-screen'>
      <div className='page-content h-[calc(100%-50px)]'>
        <AppRouter />
      </div>
      <BottomNavigation />
    </div>
  </BrowserRouter>
)
