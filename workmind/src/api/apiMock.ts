const mockLatency = () => {
  const delay = Math.floor(Math.random() * 1000) + 500;
  return new Promise(resolve => setTimeout(resolve, delay));
};

/**
 * @param data 
 */
export async function mockFetch<T>(data: T): Promise<T> {
  await mockLatency();
  if (Math.random() < 0.1) {
    throw new Error('Erro 500: Falha na conexão da API Java (Mock).');
  }
  return data;
}

// Simulação de submissão de dados
export async function submitData<T>(url: string, data: T): Promise<{ status: string }> {
    console.log(`Simulando POST para ${url} com dados:`, data);
    await mockLatency();
    if (Math.random() < 0.05) {
        throw new Error('Erro na simulação de envio de dados.');
    }
    return { status: 'success' };
}