import { useRouteError, isRouteErrorResponse, Link } from 'react-router-dom';

function NotFound() {
  const error = useRouteError(); 

  let errorMessage: string;
  let errorStatus: number = 404;

  if (isRouteErrorResponse(error)) {
    errorStatus = error.status;
    errorMessage = error.statusText;
  } else if (error instanceof Error) {
    errorMessage = error.message;
  } else if (typeof error === 'string') {
    errorMessage = error;
  } else {
    errorMessage = 'Página não encontrada.';
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] bg-red-50 dark:bg-gray-800 p-8 text-center">
      <h1 className="text-9xl font-extrabold text-red-600 dark:text-red-400">
        {errorStatus}
      </h1>
      <h2 className="text-3xl font-bold text-red-700 dark:text-red-300 mt-4">
        Ops! {errorMessage}
      </h2>
      <p className="mt-4 text-xl text-gray-700 dark:text-gray-300">
        A URL que você tentou acessar não existe.
      </p>
      
      <Link 
        to="/" 
        className="mt-8 px-6 py-3 bg-red-600 text-white font-semibold rounded-lg shadow-md hover:bg-red-700 transition duration-150"
      >
        Voltar para a Home
      </Link>
    </div>
  );
}

export default NotFound;