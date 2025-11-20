import { type Usuario, type TrilhaAprendizado } from '../types/workmind';
import { COURSES_DATA } from '../data/coursesData';
import { mockFetch } from './apiMock'; 

const API_BASE_URL = 'https://workmind-java.onrender.com/api/usuarios';

// Listar todos os Usuários
export async function fetchAllUsers(): Promise<Usuario[]> {
  const response = await fetch(API_BASE_URL);
  if (!response.ok) {
    throw new Error(`Erro ao listar usuários: ${response.statusText}`);
  }
  return response.json() as Promise<Usuario[]>;
}

// Criar Novo Usuário
export async function createNewUser(userData: Omit<Usuario, 'id' | 'pontuacao'>): Promise<Usuario> {
  const response = await fetch(API_BASE_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(userData),
  });

  if (!response.ok) {
    throw new Error(`Erro ao criar usuário: ${response.statusText}`);
  }
  return response.json() as Promise<Usuario>;
}

// buscar Usuário por ID
export async function fetchUserById(id: number): Promise<Usuario> {
  const response = await fetch(`${API_BASE_URL}/${id}`);
  if (!response.ok) {
    throw new Error(`Usuário ID ${id} não encontrado: ${response.statusText}`);
  }
  return response.json() as Promise<Usuario>;
}

// Atualizar Pontuação 
export async function updateScore(userId: number, pontos: number): Promise<Usuario> {
  const url = `${API_BASE_URL}/${userId}/pontuacao?pontos=${pontos}`;
  const response = await fetch(url, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
  });

  if (!response.ok) {
    throw new Error(`Erro ao atualizar pontuação: ${response.statusText}`);
  }
  return response.json() as Promise<Usuario>;
}

// Deletar Usuário 
export async function deleteUser(id: number): Promise<void> {
  const response = await fetch(`${API_BASE_URL}/${id}`, {
    method: 'DELETE',
  });

  if (!response.ok) {
    if (response.status !== 204) {
      throw new Error(`Erro ao deletar usuário: ${response.statusText}`);
    }
  }
}


export async function fetchAllCourses(): Promise<TrilhaAprendizado[]> {
  return mockFetch(COURSES_DATA);
}

export async function fetchCourseById(id: number): Promise<TrilhaAprendizado> {
  const courses = await mockFetch(COURSES_DATA);
  const course = courses.find(c => c.id === id);
  
  if (!course) {
    throw new Error('Trilha de aprendizado não encontrada (Erro 404 Mock).');
  }
  return course;
}

export async function removeCourse(_courseId: number): Promise<void> {
  await mockFetch(null); 
}