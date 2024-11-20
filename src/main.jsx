import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import Routes from './Routes.jsx'
import AuthProvider from './Providers/AuthProvider.jsx'
import AppointmentProvider from './Providers/AppointmentProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <AppointmentProvider>
      <RouterProvider router={Routes}/>
      </AppointmentProvider>
    </AuthProvider>
  </StrictMode>,
)
