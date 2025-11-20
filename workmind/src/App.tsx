import { Outlet } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

export default function App() {

  return (
    <div className="w-screen min-h-screen flex flex-col justify-between">
      <Header /> 
      <main className="grow overflow-y-scroll">
        <Outlet />
      </main>
      <Footer /> 
    </div>
  );
}