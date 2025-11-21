import { useParams, useNavigate, Link } from 'react-router-dom';
import { useFetch } from '../../hooks/useFetch';
import { fetchCourseById, removeCourse } from '../../api/workmindService';
import { type TrilhaAprendizado } from '../../types/workmind';
import { IoTrashOutline, IoArrowBack } from 'react-icons/io5'; 
import { useState, useCallback } from 'react'; 
import { useTheme } from '../../contexts/ThemeContext';

function TrilhaDetalhe() {
  const { isDark } = useTheme(); 
  const { id } = useParams();
  const courseId = id ? parseInt(id) : undefined;
  const navigate = useNavigate();
  
  const [isDeleting, setIsDeleting] = useState(false);
  const [deleteError, setDeleteError] = useState<string | null>(null);

  const fetcher = useCallback(async () => {
    if (!courseId) throw new Error("ID de Trilha inválido.");
    return fetchCourseById(courseId);
  }, [courseId]); 

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

  if (loading) {
    return (
      <div className={`min-h-screen flex items-center justify-center ${isDark ? "bg-gray-900 text-blue-400" : "bg-gray-50 text-blue-600"}`}>
        Carregando detalhes da trilha...
      </div>
    );
  }

  if (!courseId) {
    return (
      <div className={`min-h-screen flex items-center justify-center ${isDark ? "bg-gray-900 text-red-400" : "bg-gray-50 text-red-600"}`}>
        ID da trilha não fornecido.
      </div>
    );
  }

  if (error || !trilha) {
    return (
      <div className={`min-h-screen flex flex-col items-center justify-center p-8 ${isDark ? "bg-gray-900 text-red-400" : "bg-gray-50 text-red-600"}`}>
        <h3 className="text-2xl font-bold">Erro de Carregamento</h3>
        <p className="mt-2">{error || 'Trilha não encontrada.'}</p>
        <Link to="/" className="text-blue-500 mt-4 inline-block hover:underline">Voltar para Home</Link>
      </div>
    );
  }

  return (
    <div className={`min-h-screen p-4 sm:p-8 transition-colors duration-200 ${
      isDark ? "bg-gray-900" : "bg-gray-50"
    }`}>
      
      <div className={`max-w-4xl mx-auto shadow-xl rounded-2xl min-h-[80vh] p-6 sm:p-8 border transition-colors ${
        isDark ? "bg-gray-800 border-gray-700" : "bg-white border-gray-100"
      }`}>
        
        <div className={`flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 border-b pb-4 gap-4 ${
          isDark ? "border-gray-700" : "border-gray-200"
        }`}>
          <Link 
            to="/" 
            className={`flex items-center transition-colors ${
              isDark ? "text-blue-400 hover:text-blue-300" : "text-blue-600 hover:text-blue-500"
            }`}
          >
            <IoArrowBack className="w-5 h-5 mr-2" />
            Voltar às Trilhas
          </Link>
          
          <button
            onClick={handleDelete}
            disabled={isDeleting}
            className="flex items-center px-4 py-2 bg-red-600 text-white rounded-lg shadow-md hover:bg-red-700 transition duration-150 
                       disabled:opacity-50 disabled:cursor-not-allowed w-full sm:w-auto justify-center"
          >
            {isDeleting ? 'Removendo...' : 
              <>
                <IoTrashOutline className="w-5 h-5 mr-2" />
                Remover Trilha
              </>
            }
          </button>
        </div>

        <h1 className={`text-2xl sm:text-4xl font-extrabold mb-4 ${isDark ? "text-white" : "text-gray-900"}`}>
          {trilha.nome}
        </h1>
        
        {trilha.focoSustentavel && (
          <span className="inline-block px-4 py-1 text-sm font-bold rounded-full bg-green-600 text-white shadow-lg mb-4">
            🌍 Foco em Sustentabilidade
          </span>
        )}

        <p className={`text-lg mb-8 ${isDark ? "text-gray-300" : "text-gray-700"}`}>
          {trilha.descricao}
        </p>

        <h2 className={`text-2xl font-bold mt-8 mb-4 ${isDark ? "text-gray-200" : "text-gray-800"}`}>
          Missões do Aprendizado
        </h2>
        
        <ul className="space-y-4">
          {trilha.missoes.map(missao => (
            <li 
              key={missao.id} 
              className={`p-4 rounded-lg shadow-sm flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 transition-colors ${
                isDark ? "bg-gray-700/50" : "bg-gray-50"
              }`}
            >
              <span className={`font-medium ${isDark ? "text-gray-200" : "text-gray-800"}`}>
                {missao.titulo}
              </span>
              
              <span className={`px-3 py-1 text-xs font-semibold rounded-full whitespace-nowrap ${
                missao.status === 'completa' 
                  ? (isDark ? 'bg-green-900 text-green-200' : 'bg-green-100 text-green-800') :
                missao.status === 'em_progresso' 
                  ? (isDark ? 'bg-yellow-900 text-yellow-200' : 'bg-yellow-100 text-yellow-800') :
                  (isDark ? 'bg-red-900 text-red-200' : 'bg-red-100 text-red-800')
              }`}>
                {missao.status.replace('_', ' ')}
              </span>
            </li>
          ))}
        </ul>
        
        {deleteError && (
          <div className={`mt-6 p-4 rounded-lg ${
            isDark ? "bg-red-900 text-red-200" : "bg-red-100 text-red-800"
          }`}>
            Falha na Remoção: {deleteError}
          </div>
        )}
      </div>
    </div>
  );
}

export default TrilhaDetalhe;