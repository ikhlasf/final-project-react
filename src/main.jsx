import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import PLogin from './pages/plogin.jsx';
import PRegister from './pages/pregister.jsx';
import PError from './pages/404.jsx';
import Ptable from './pages/ptable.jsx';
import PHome from './pages/phome.jsx';
import PCart from './pages/pcart.jsx';
import PStatus from './pages/pstatus.jsx';
import PTes from './pages/tes.jsx';

const router =createBrowserRouter([
  {
    path: "/",
    element: <PLogin />,
    errorElement: <PError/>
  },

  {
    path: "/login",
    element: <PLogin />
  },

  {
    path: "/register",
    element: <PRegister />
  },

  {
    path: "/table",
    element: <Ptable />
  },

  {
    path: "/home",
    element: <PHome />
  },

  {
    path: "/cart",
    element: <PCart/>
  },

  {
    path: "/status",
    element: <PStatus />
  },

  {
    path: "/tes",
    element: <PTes />
  },




])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
