import { useParams, useNavigate, Link } from 'react-router-dom';
import { useFetch } from '../../hooks/useFetch';
import { fetchCourseById, removeCourse } from '../../api/workmindService';
import { type TrilhaAprendizado } from '../../types/workmind';
import { IoTrashOutline, IoArrowBack } from 'react-icons/io5'; 
import { useState } from 'react';

function TrilhaDetalhe() {
  const { id } = useParams();
  const courseId = id ? parseInt(id) : undefined;
  const navigate = useNavigate();
  
  const [isDeleting, setIsDeleting] = useState(false);
  const [deleteError, setDeleteError] = useState<string | null>(null);

  const fetcher = (async () => {
    if (!courseId) throw new Error("ID de Trilha inválido.");
    return fetchCourseById(courseId);
  });

  const { data: trilha, loading, error } = useFetch(fetcher, true, undefined as TrilhaAprendizado | undefined);

  const handleDelete = async () => {
    if (!trilha || !courseId) return;

    if (!window.confirm(`Tem certeza que deseja remover a trilha "${trilha.nome}"?`)) {
      return;
    }

    setIsDeleting(true);
    setDeleteError(null);
    try {
      await removeCourse(courseId); 
      
      alert(`Trilha "${trilha.nome}" removida com sucesso!`);
      navigate('/'); 
    } catch (err: any) {
      setDeleteError(err.message || 'Falha ao tentar remover a trilha.');
      setIsDeleting(false);
    }
  };

  
  if (!courseId) {
    return <div className="text-center p-12 text-red-600 dark:text-red-400">ID da trilha não fornecido.</div>
  }

  if (loading) {
    return <div className="text-center p-12 text-blue-600 dark:text-blue-400">Carregando detalhes da trilha...</div>;
  }

  if (error || !trilha) {
    return (
      <div className="text-center p-12 text-red-600 dark:text-red-400">
        <h3 className="text-2xl font-bold">Erro de Carregamento</h3>
        <p className="mt-2">{error || 'Trilha não encontrada.'}</p>
        <Link to="/" className="text-blue-500 mt-4 inline-block hover:underline">Voltar para Home</Link>
      </div>
    );
  }

  return (
    <div className="p-4 sm:p-8 max-w-4xl mx-auto bg-white dark:bg-gray-900 shadow-xl min-h-[80vh]">
      
      <div className="flex justify-between items-center mb-6 border-b pb-4 border-gray-200 dark:border-gray-700">
        <Link to="/" className="flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-500 transition-colors">
          <IoArrowBack className="w-5 h-5 mr-2" />
          Voltar às Trilhas
        </Link>
        
        <button
          onClick={handleDelete}
          disabled={isDeleting}
          className="flex items-center px-4 py-2 bg-red-600 text-white rounded-lg shadow-md hover:bg-red-700 transition duration-150 
                     disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isDeleting ? 'Removendo...' : 
            <>
              <IoTrashOutline className="w-5 h-5 mr-2" />
              Remover Trilha
            </>
          }
        </button>
      </div>

      <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
        {trilha.nome}
      </h1>
      
      {trilha.focoSustentavel && (
        <span className="inline-block px-4 py-1 text-sm font-bold rounded-full bg-green-600 text-white shadow-lg mb-4">
          🌍 Foco em Sustentabilidade
        </span>
      )}

      <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
        {trilha.descricao}
      </p>

      <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mt-8 mb-4">
        Missões do Aprendizado
      </h2>
      <ul className="space-y-4">
        {trilha.missoes.map(missao => (
          <li key={missao.id} className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-sm flex justify-between items-center">
            <span className="text-gray-800 dark:text-gray-200 font-medium">
              {missao.titulo}
            </span>
            <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
                missao.status === 'completa' ? 'bg-green-100 text-green-800' :
                missao.status === 'em_progresso' ? 'bg-yellow-100 text-yellow-800' :
                'bg-red-100 text-red-800'
              }`}
            >
              {missao.status.replace('_', ' ')}
            </span>
          </li>
        ))}
      </ul>
      
      {deleteError && (
        <div className="mt-6 p-4 bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200 rounded-lg">
          Falha na Remoção: {deleteError}
        </div>
      )}
    </div>
  );
}

export default TrilhaDetalhe;