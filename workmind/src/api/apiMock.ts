// Simula a latência de rede 
const mockLatency = () => {
  const delay = Math.floor(Math.random() * 1000) + 500;
  return new Promise(resolve => setTimeout(resolve, delay));
};

/**
 * Função mock para simular o consumo de uma API, incluindo delay e erro.
 * @param data Os dados que seriam retornados pelo backend.
 */
export async function mockFetch<T>(data: T): Promise<T> {
  await mockLatency();
  if (Math.random() < 0.1) {
    throw new Error('Erro 500: Falha na conexão da API Java (Mock).');
  }
  return data;
}