import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import Routes from './Routes.jsx'
import AuthProvider from './Providers/AuthProvider.jsx'
import AppointmentProvider from './Providers/AppointmentProvider.jsx'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <AppointmentProvider>
      <RouterProvider router={Routes}/>
      <ToastContainer position='top-center'/>
      </AppointmentProvider>
    </AuthProvider>
  </StrictMode>,
)
