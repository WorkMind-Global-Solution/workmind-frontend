import { Link } from 'react-router-dom';
import ThemeToggleButton from '../ui/ThemeToggleButton'; 

function Header() {
  return (
    <header className="bg-white shadow-md dark:bg-gray-800 sticky top-0 z-10 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        
        <Link to="/" className="text-2xl font-bold text-blue-600 dark:text-blue-400" aria-label="WorkMind - Página Inicial">
          WorkMind
        </Link>
        
        <nav className="flex space-x-4 sm:space-x-6 items-center">
          
          <Link to="/" className="text-gray-700 dark:text-gray-300 hover:text-blue-500 transition-colors hidden sm:block">
            Home
          </Link>
          <Link to="/team" className="text-gray-700 dark:text-gray-300 hover:text-blue-500 transition-colors">
            Integrantes
          </Link>
          <Link to="/about" className="text-gray-700 dark:text-gray-300 hover:text-blue-500 transition-colors hidden sm:block">
            Sobre
          </Link>
          <Link to="/contact" className="text-gray-700 dark:text-gray-300 hover:text-blue-500 transition-colors">
            Contato/FAQ
          </Link>

          <ThemeToggleButton />
        </nav>
      </div>
    </header>
  );
}

export default Header;