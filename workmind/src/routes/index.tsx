import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import App from '../App.tsx';

const Home = () => <div>Home Page</div>;
const Integrantes = () => <div>Página de Integrantes</div>;
const Sobre = () => <div>Página Sobre</div>;
const Contato = () => <div>Página de Contato</div>;
const TrilhaDetalhe = () => <div>Detalhe da Trilha (Dinâmica)</div>;
const NotFound = () => <div>Erro 404 - Página não encontrada.</div>;

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, 
    errorElement: <NotFound />, 
    children: [
      { path: "/", element: <Home /> }, 
      { path: "/team", element: <Integrantes /> }, 
      { path: "/about", element: <Sobre /> }, 
      { path: "/contact", element: <Contato /> }, 
      { path: "/trilha/:id", element: <TrilhaDetalhe /> }, 
      { path: "/old-page", element: <Navigate to="/" /> }, 
    ],
  },
]);

export const AppRoutes = () => <RouterProvider router={router} />;