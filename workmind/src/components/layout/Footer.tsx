import { useTheme } from '../../contexts/ThemeContext'; 

function Footer() {
  const { isDark } = useTheme();

  return (
    <footer 
        className={`transition-colors duration-200 mt-auto border-t ${
            isDark 
            ? "bg-gray-900 border-gray-700 text-gray-400" 
            : "bg-gray-100 border-gray-200 text-gray-600" 
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex justify-center items-center">
        <p className="text-sm">
          &copy; 2025 WorkMind - Plataforma de Aprendizado e Bem-Estar. 
        </p>
      </div>
    </footer>
  );
}

export default Footer;