import { useState } from 'react';
import { Link } from 'react-router-dom';
import ThemeToggleButton from '../ui/ThemeToggleButton'; 
import { useTheme } from '../../contexts/ThemeContext';
import { IoMenu, IoClose } from 'react-icons/io5'; 

function Header() {
  const { isDark } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header 
      className={`shadow-md sticky top-0 z-50 transition-colors duration-200 ${
        isDark ? "bg-gray-900 text-white border-b border-gray-700" : "bg-white text-gray-900"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          <div className="shrink-0 flex items-center">
            <Link to="/" className={`text-2xl font-bold ${isDark ? "text-blue-400" : "text-blue-600"}`} aria-label="WorkMind - Página Inicial">
              WorkMind
            </Link>
          </div>
          
          <nav className="hidden md:flex space-x-8 items-center">
            <Link to="/" className={`hover:text-blue-500 transition-colors ${isDark ? "text-gray-300" : "text-gray-700"}`}>
              Home
            </Link>
            <Link to="/team" className={`hover:text-blue-500 transition-colors ${isDark ? "text-gray-300" : "text-gray-700"}`}>
              Integrantes
            </Link>
            <Link to="/about" className={`hover:text-blue-500 transition-colors ${isDark ? "text-gray-300" : "text-gray-700"}`}>
              Sobre
            </Link>
            <Link to="/contact" className={`hover:text-blue-500 transition-colors ${isDark ? "text-gray-300" : "text-gray-700"}`}>
              Contato/FAQ
            </Link>

            <ThemeToggleButton />
          </nav>

          <div className="md:hidden flex items-center gap-4">
            <ThemeToggleButton />

            <button
              onClick={toggleMenu}
              className={`p-2 rounded-md focus:outline-none ${isDark ? "text-gray-200 hover:bg-gray-800" : "text-gray-700 hover:bg-gray-100"}`}
            >
              {isMenuOpen ? <IoClose size={28} /> : <IoMenu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className={`md:hidden border-t ${isDark ? "border-gray-700 bg-gray-900" : "border-gray-200 bg-white"}`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col">
            <Link 
              to="/" 
              onClick={() => setIsMenuOpen(false)} 
              className={`block px-3 py-2 rounded-md text-base font-medium ${isDark ? "text-gray-300 hover:text-white hover:bg-gray-800" : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"}`}
            >
              Home
            </Link>
            <Link 
              to="/team" 
              onClick={() => setIsMenuOpen(false)}
              className={`block px-3 py-2 rounded-md text-base font-medium ${isDark ? "text-gray-300 hover:text-white hover:bg-gray-800" : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"}`}
            >
              Integrantes
            </Link>
            <Link 
              to="/about" 
              onClick={() => setIsMenuOpen(false)}
              className={`block px-3 py-2 rounded-md text-base font-medium ${isDark ? "text-gray-300 hover:text-white hover:bg-gray-800" : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"}`}
            >
              Sobre
            </Link>
            <Link 
              to="/contact" 
              onClick={() => setIsMenuOpen(false)}
              className={`block px-3 py-2 rounded-md text-base font-medium ${isDark ? "text-gray-300 hover:text-white hover:bg-gray-800" : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"}`}
            >
              Contato/FAQ
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;