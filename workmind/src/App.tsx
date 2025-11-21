import { Outlet } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

export default function App() {

  return (
    <div className="w-screen min-h-screen flex flex-col justify-between bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <Header /> 
      <main className="grow overflow-y-scroll">
        <Outlet />
      </main>
      <Footer /> 
    </div>
  );
}