import { useParams } from 'react-router-dom';

function TrilhaDetalhe() {
  const { id } = useParams();

  return (
    <div className="p-8">
      <h2 className="text-4xl font-extrabold text-blue-700 dark:text-blue-400">
        Detalhe da Trilha de Aprendizado
      </h2>
      <p className="mt-4 text-xl font-semibold text-gray-800 dark:text-gray-200">
        Trilha ID: <span className="text-red-500">{id}</span>
      </p>
      <p className="mt-2 text-gray-600 dark:text-gray-400">
      </p>
    </div>
  );
}

export default TrilhaDetalhe;