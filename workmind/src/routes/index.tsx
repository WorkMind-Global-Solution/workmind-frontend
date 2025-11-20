import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import App from '../App.tsx';

// Importações
import Home from '../pages/Home';
import Integrantes from '../pages/Integrantes';
import Sobre from '../pages/Sobre';
import Contato from '../pages/Contato';
import TrilhaDetalhe from '../pages/TrilhaDetalhe';
import NotFound from '../pages/NotFound';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />, 
    children: [
      { index: true, element: <Home /> }, 
      { path: "/team", element: <Integrantes /> }, 
      { path: "/about", element: <Sobre /> }, 
      { path: "/contact", element: <Contato /> }, 
      { path: "/trilha/:id", element: <TrilhaDetalhe /> }, 
      { path: "/old-path", element: <Navigate to="/" /> }, 
    ],
  },
]);

export const AppRoutes = () => <RouterProvider router={router} />;