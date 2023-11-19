import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from "react-router-dom";

import './index.css'
import Home from './pages/Home/Home.jsx';
import CadastroProduto from './pages/CadastroProduto/CadastroProduto.jsx';
import CadastroUsuario from './pages/CadastroUsuario/CadastroUsuario.jsx';
import Login from './pages/Login/Login.jsx'
import Erro from './pages/Error/Erro.jsx';
import App from './App.jsx';

const router = createBrowserRouter([
  {
    path:'/',
    element: <App/>,
    errorElement:<Erro/>,
    children: [
      {
        path: "/",
        element: <Home/>,
      },
      {
        path:'/Login',
        element: <Login/>,
      },
      {
        path:'/CadastroUsuario',
        element: <CadastroUsuario/>,
      },
      {
        path:'/cadastroProduto',
        element: <CadastroProduto/>,
      }
    ],
  },

]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
