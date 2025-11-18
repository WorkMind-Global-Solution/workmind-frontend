import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import App from '../App.tsx';

// Imports
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
      { path: "/", element: <Home /> }, // Rota Estática: Página Inicial
      { path: "/team", element: <Integrantes /> }, // Rota Estática: Integrantes (Obrigatória)
      { path: "/about", element: <Sobre /> }, // Rota Estática: Sobre/About (Obrigatória)
      { path: "/contact", element: <Contato /> }, // Rota Estática: Contato (Obrigatória)
        // Rotas dinâmicas e redirecionamentos viriam depois...
    ],
  },
]);

export const AppRoutes = () => <RouterProvider router={router} />;