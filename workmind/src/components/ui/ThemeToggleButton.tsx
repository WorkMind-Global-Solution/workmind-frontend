import { useTheme } from '../../contexts/ThemeContext';
import { IoSunnyOutline, IoMoonOutline } from 'react-icons/io5'; 

export default function ThemeToggleButton() { 
  const { isDark, toggleTheme } = useTheme(); 

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="p-2 rounded-full text-lg transition-colors duration-200
                 bg-gray-200 text-gray-600 hover:bg-gray-300
                 dark:bg-gray-700 dark:text-yellow-400 dark:hover:bg-gray-600"
      aria-label={isDark ? "Ativar modo claro" : "Ativar modo escuro"}
      title={isDark ? "Modo Claro" : "Modo Escuro"}
    >
      {isDark ? (
        <IoSunnyOutline className="w-6 h-6" />
      ) : (
        <IoMoonOutline className="w-6 h-6" />
      )}
    </button>
  );
}