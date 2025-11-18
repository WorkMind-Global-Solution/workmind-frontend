import { COURSES_DATA } from "../../data/coursesData";
import { Link } from "react-router-dom";
import { IoSparkles, IoLeaf, IoBook } from 'react-icons/io5'; 

function Home() {
  return (
    <div className="p-4 sm:p-8 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      
      <section className="bg-blue-600 dark:bg-indigo-900 text-white rounded-2xl shadow-xl p-8 md:p-12 mb-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
          <div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
              Sua Carreira, Potencializada pela IA.
            </h1>
            <p className="mt-3 text-lg opacity-90 max-w-2xl">
              O WorkMind analisa seu perfil, emoções e objetivos para criar um plano de desenvolvimento 
              personalizado e equilibrado, preparando você para as profissões que ainda vão surgir.
            </p>
          </div>
  
          <Link 
            to="/contact" 
            className="mt-6 md:mt-0 px-8 py-3 bg-white text-blue-600 dark:text-indigo-900 font-bold rounded-full shadow-lg 
                       hover:bg-gray-100 transition-transform duration-300 transform hover:scale-105 
                       w-full md:w-auto text-center" 
          >
            Comece Seu Plano Gratuito
          </Link>
        </div>
      </section>

      <section className="mb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md border-t-4 border-blue-500">
            <IoSparkles className="w-8 h-8 text-blue-500 mb-3" />
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Reskilling Inteligente</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm mt-2">
              A IA identifica habilidades em alta e indica trilhas de **Upskilling** para você se atualizar rapidamente.
            </p>
          </div>
          <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md border-t-4 border-green-500">
            <IoLeaf className="w-8 h-8 text-green-500 mb-3" />
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Foco Sustentável</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm mt-2">
              Apoio a carreiras verdes e projetos em energia limpa e economia circular.
            </p>
          </div>
          <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md border-t-4 border-purple-500">
            <IoBook className="w-8 h-8 text-purple-500 mb-3" />
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Aprendizado Gamificado</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm mt-2">
              Aprenda por meio de **missões e desafios**, ganhando pontos e recompensas digitais.
            </p>
          </div>
        </div>
      </section>

      <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 dark:text-gray-200 mb-6">
        Todas as Trilhas de Carreira e Bem-Estar
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {COURSES_DATA.map((trilha) => (
          <Link 
            key={trilha.id} 
            to={`/trilha/${trilha.id}`}
            className="block bg-white dark:bg-gray-800 p-5 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 border border-gray-200 dark:border-gray-700 hover:border-blue-500"
          >
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
              {trilha.nome}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 h-10 overflow-hidden line-clamp-2">
              {trilha.descricao}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {trilha.tecnologias.slice(0, 2).map((tech) => (
                <span 
                  key={tech} 
                  className="px-3 py-1 text-xs font-semibold rounded-full bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200"
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