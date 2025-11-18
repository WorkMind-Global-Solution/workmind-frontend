import { Link } from 'react-router-dom';
import { Integrante } from '../../types/workmind';

function Integrantes() {
  const members: Integrante[] = []

  return (
    <div className="p-8 max-w-6xl mx-auto">
      <h2 className="text-4xl font-extrabold text-indigo-700 dark:text-indigo-400 mb-8">
        Time WorkMind: Nossos Integrantes
      </h2>

      {/* Layout com Tailwind e Responsividade (sm:grid-cols-2) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {members?.map((member) => (
          <div
            key={member.rm}
            className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300 border border-gray-200 dark:border-gray-700"
          >
            {/* Detalhes do Integrante (Foto, Nome, Links) */}
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

            {/* Links (Exibir os ícones de GitHub e LinkedIn) */}
            <div className="flex justify-center space-x-4 mt-4">
              {/* ... Links e Ícones de GitHub/LinkedIn ... */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Integrantes;