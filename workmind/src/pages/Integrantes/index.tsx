import { Link } from 'react-router-dom';
import { useFetch } from '../../hooks/useFetch';
import { fetchTeamMembers } from '../../api/workmindService';
import { Integrante } from '../../types/workmind';

function Integrantes() {
  const { data: members, loading, error } = useFetch(fetchTeamMembers, true, [] as Integrante[]);

  if (loading) {
    return (
      <div className="p-8 text-center text-lg text-blue-600 dark:text-blue-400 min-h-[50vh]">
        Carregando dados dos integrantes...
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-8 text-center text-red-600 dark:text-red-400 min-h-[50vh]">
        <h3 className="text-2xl font-bold">Erro ao carregar a equipe!</h3>
        <p className="mt-2 text-lg">{error}</p>
        <p className="mt-4">Por favor, verifique a conexão ou a API de Java (Mock).</p>
      </div>
    );
  }

  return (
    <div className="p-8 max-w-6xl mx-auto">
      <h2 className="text-4xl font-extrabold text-indigo-700 dark:text-indigo-400 mb-8">
        Time WorkMind: Nossos Integrantes
      </h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {members?.map((member) => (
          <div 
            key={member.rm} 
            className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300 border border-gray-200 dark:border-gray-700"
          >}
            <img 
              src={member.fotoUrl} 
              alt={`Foto de ${member.nome}`} 
              className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-4 border-blue-500 dark:border-blue-400"
            />
            <h3 className="text-xl font-bold text-gray-900 dark:text-white text-center">
              {member.nome}
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 text-center mt-1">
              RM: {member.rm} | Turma: {member.turma}
            </p>

            <div className="flex justify-center space-x-4 mt-4">
              <a 
                href={member.githubLink} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 transition-colors"
                title="GitHub"
              >
                

[Image of GitHub icon]

              </a>
              <a 
                href={member.linkedinLink} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 transition-colors"
                title="LinkedIn"
              >
                

[Image of LinkedIn icon]

              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Integrantes;