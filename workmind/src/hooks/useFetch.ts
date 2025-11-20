import { useState, useEffect, useCallback } from 'react';
import { useTheme } from '../contexts/ThemeContext';

interface FetchState<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
  fetchData: (...args: any[]) => Promise<void>; 
}

export const useFetch = <T>(
  apiFunction: (...args: any[]) => Promise<T>,
  immediate: boolean = true,
  initialData: T | null = null
): FetchState<T> => {
  const [data, setData] = useState<T | null>(initialData);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  
  const { theme } = useTheme(); 

  // Função para executar a API
  const fetchData = useCallback(async (...args: any[]) => {
    setLoading(true);
    setError(null);

    try {
      const response = await apiFunction(...args);
      setData(response); 
    } catch (err: any) {
      const errorMessage = err.message || 'Erro de rede desconhecido.';
      setError(errorMessage);
      console.error('API Error:', errorMessage);
    } finally {
      setLoading(false);
    }
  }, [apiFunction, theme]); 

  useEffect(() => {
    if (immediate) {
      fetchData();
    }
  }, [immediate, fetchData]);

  return { data, loading, error, fetchData };
};