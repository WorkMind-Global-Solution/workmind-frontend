import { useFetch } from '../../hooks/useFetch';
import { fetchTeamMembers } from '../../api/workmindService'; 
import { type Integrante } from '../../types/workmind'; 
import { FaGithub, FaLinkedin } from 'react-icons/fa'; 
import { useTheme } from '../../contexts/ThemeContext';

function Integrantes() {
  const { isDark } = useTheme();
  const { data: members, loading, error } = useFetch(fetchTeamMembers, true, [] as Integrante[]); 

  if (loading) {
    return (
      <div className={`p-8 text-center text-lg min-h-[50vh] flex items-center justify-center ${
        isDark ? "text-blue-400 bg-gray-900" : "text-blue-600 bg-gray-50"
      }`}>
        Carregando dados dos integrantes...
      </div>
    );
  }

  if (error) {
    return (
      <div className={`p-8 text-center min-h-[50vh] flex flex-col items-center justify-center ${
        isDark ? "text-red-400 bg-gray-900" : "text-red-600 bg-gray-50"
      }`}>
        <h3 className="text-2xl font-bold">Erro ao carregar a equipe!</h3>
        <p className="mt-2 text-lg">{error}</p>
      </div>
    );
  }

  return (
    <div className={`min-h-screen p-4 md:p-8 transition-colors duration-200 ${
        isDark ? "bg-gray-900" : "bg-gray-50"
    }`}>
      <div className="max-w-6xl mx-auto">
        
        <h2 className={`text-2xl md:text-4xl font-extrabold mb-8 text-center md:text-left ${
            isDark ? "text-indigo-400" : "text-indigo-700"
        }`}>
          Time WorkMind: Nossos Integrantes
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {members?.map((member) => (
            <div 
              key={member.rm} 
              className={`p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300 border ${
                  isDark 
                  ? "bg-gray-800 border-gray-700" 
                  : "bg-white border-gray-200"
              }`}
            >
              <img 
                src={member.fotoUrl} 
                alt={`Foto de ${member.nome}`} 
                className={`w-24 h-24 rounded-full mx-auto mb-4 object-cover border-4 ${
                    isDark ? "border-blue-400" : "border-blue-500"
                }`}
              />
              
              <h3 className={`text-xl font-bold text-center ${
                  isDark ? "text-white" : "text-gray-900"
              }`}>
                {member.nome}
              </h3>
              
              <p className={`text-sm text-center mt-1 ${
                  isDark ? "text-gray-400" : "text-gray-500"
              }`}>
                RM: {member.rm} | Turma: {member.turma}
              </p>

              <div className="flex justify-center space-x-4 mt-4">
                <a 
                  href={member.githubLink} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={`transition-colors ${
                      isDark 
                      ? "text-gray-300 hover:text-indigo-400" 
                      : "text-gray-600 hover:text-indigo-600"
                  }`}
                  title="GitHub"
                >
                  <FaGithub className="w-6 h-6" />
                </a>
                <a 
                  href={member.linkedinLink} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={`transition-colors ${
                      isDark 
                      ? "text-gray-300 hover:text-indigo-400" 
                      : "text-gray-600 hover:text-indigo-600"
                  }`}
                  title="LinkedIn"
                >
                  <FaLinkedin className="w-6 h-6" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Integrantes;