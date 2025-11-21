import { COURSES_DATA } from "../../data/coursesData";
import { Link } from "react-router-dom";
import { IoSparkles, IoLeaf, IoBook } from 'react-icons/io5'; 
import { useTheme } from '../../contexts/ThemeContext';

function Home() {
  const { isDark } = useTheme(); 

  return (
    <div className={`min-h-screen p-4 sm:p-8 transition-colors duration-300 ${
      isDark ? "bg-gray-900" : "bg-gray-50"
    }`}>
      
      <section className={`rounded-2xl shadow-xl p-8 md:p-12 mb-12 text-white ${
        isDark ? "bg-indigo-900" : "bg-blue-600"
      }`}>
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
          <div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
              Sua Carreira, Potencializada pela IA.
            </h1>
            <p className="mt-3 text-base sm:text-lg opacity-90 max-w-2xl">
              O WorkMind analisa seu perfil, emoções e objetivos para criar um plano de desenvolvimento 
              personalizado e equilibrado, preparando você para as profissões que ainda vão surgir.
            </p>
          </div>
  
          <Link 
            to="/contact" 
            className={`mt-6 md:mt-0 px-8 py-3 bg-white font-bold rounded-full shadow-lg 
                        hover:bg-gray-100 transition-transform duration-300 transform hover:scale-105 
                        w-full md:w-auto text-center ${
                          isDark ? "text-indigo-900" : "text-blue-600"
                        }`} 
          >
            Comece Seu Plano Gratuito
          </Link>
        </div>
      </section>

      <section className="mb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          
          <div className={`p-6 rounded-xl shadow-md border-t-4 border-blue-500 transition-colors ${
             isDark ? "bg-gray-800" : "bg-white"
          }`}>
            <IoSparkles className="w-8 h-8 text-blue-500 mb-3" />
            <h3 className={`text-xl font-semibold ${isDark ? "text-white" : "text-gray-900"}`}>
              Reskilling Inteligente
            </h3>
            <p className={`text-sm mt-2 ${isDark ? "text-gray-400" : "text-gray-600"}`}>
              A IA identifica habilidades em alta e indica trilhas de **Upskilling** para você se atualizar rapidamente.
            </p>
          </div>

          <div className={`p-6 rounded-xl shadow-md border-t-4 border-green-500 transition-colors ${
             isDark ? "bg-gray-800" : "bg-white"
          }`}>
            <IoLeaf className="w-8 h-8 text-green-500 mb-3" />
            <h3 className={`text-xl font-semibold ${isDark ? "text-white" : "text-gray-900"}`}>
              Foco Sustentável
            </h3>
            <p className={`text-sm mt-2 ${isDark ? "text-gray-400" : "text-gray-600"}`}>
              Apoio a carreiras verdes e projetos em energia limpa e economia circular.
            </p>
          </div>

          <div className={`p-6 rounded-xl shadow-md border-t-4 border-purple-500 transition-colors ${
             isDark ? "bg-gray-800" : "bg-white"
          }`}>
            <IoBook className="w-8 h-8 text-purple-500 mb-3" />
            <h3 className={`text-xl font-semibold ${isDark ? "text-white" : "text-gray-900"}`}>
              Aprendizado Gamificado
            </h3>
            <p className={`text-sm mt-2 ${isDark ? "text-gray-400" : "text-gray-600"}`}>
              Aprenda por meio de **missões e desafios**, ganhando pontos e recompensas digitais.
            </p>
          </div>

        </div>
      </section>

      <h2 className={`text-3xl sm:text-4xl font-bold mb-6 ${
        isDark ? "text-gray-200" : "text-gray-800"
      }`}>
        Todas as Trilhas de Carreira e Bem-Estar
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {COURSES_DATA.map((trilha) => (
          <Link 
            key={trilha.id} 
            to={`/trilha/${trilha.id}`}
            className={`block p-5 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 border hover:border-blue-500 ${
              isDark 
                ? "bg-gray-800 border-gray-700" 
                : "bg-white border-gray-200"
            }`}
          >
            <h3 className={`text-lg font-bold mb-2 ${isDark ? "text-white" : "text-gray-900"}`}>
              {trilha.nome}
            </h3>
            <p className={`text-sm h-10 overflow-hidden line-clamp-2 ${isDark ? "text-gray-400" : "text-gray-600"}`}>
              {trilha.descricao}
            </p>
            
            <div className="mt-4 flex flex-wrap gap-2">
              {trilha.tecnologias.slice(0, 2).map((tech) => (
                <span 
                  key={tech} 
                  className={`px-3 py-1 text-xs font-semibold rounded-full ${
                    isDark 
                      ? "bg-indigo-900 text-indigo-200" 
                      : "bg-indigo-100 text-indigo-800"
                  }`}
                >
                  {tech}
                </span>
              ))}
            </div>
            
            {trilha.focoSustentavel && (
              <span className="mt-3 inline-block px-3 py-1 text-xs font-bold rounded-full bg-green-600 text-white shadow-md">
                🌍 ESG
              </span>
            )}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Home;