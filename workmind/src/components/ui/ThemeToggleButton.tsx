import { useTheme } from '../../contexts/ThemeContext';
import { IoSunnyOutline, IoMoonOutline } from 'react-icons/io5'; 

function ThemeToggleButton() {
  const { theme, toggleTheme } = useTheme(); 
  const Icon = theme === 'dark' ? IoSunnyOutline : IoMoonOutline;

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full text-gray-800 bg-gray-200 dark:text-yellow-400 dark:bg-gray-700 
                 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-200"
      aria-label="Alternar Tema Claro/Escuro"
    >
      <Icon className="w-6 h-6" />
    </button>
  );
}

export default ThemeToggleButton;