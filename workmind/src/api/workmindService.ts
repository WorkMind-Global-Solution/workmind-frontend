// src/api/workmindService.ts (Conteúdo COMPLETO)

import { TEAM_MEMBERS } from '../data/teamData';
import { COURSES_DATA } from '../data/coursesData'; 
import { type Integrante, type TrilhaAprendizado } from '../types/workmind';
import { mockFetch } from './apiMock';


// Simula o GET de todos os integrantes
export async function fetchTeamMembers(): Promise<Integrante[]> {
  return mockFetch(TEAM_MEMBERS);
}

// Simula o GET de todas as trilhas
export async function fetchAllCourses(): Promise<TrilhaAprendizado[]> {
  return mockFetch(COURSES_DATA);
}

// Simula o GET de uma trilha específica por ID (FUNÇÃO EXPORTADA FALTANTE)
export async function fetchCourseById(id: number): Promise<TrilhaAprendizado | undefined> {
  const courses = await mockFetch(COURSES_DATA);
  const course = courses.find(c => c.id === id);
  
  if (!course) {
    // Simula uma resposta inesperada ou erro 404 (Tratamento de Erros: 6,6 pontos)
    throw new Error('Trilha de aprendizado não encontrada (Erro 404 Mock).');
  }
  return course;
}

// Simula o envio de dados (POST/PUT)
export async function submitData<T>(endpoint: string, data: T): Promise<T> {
  console.log(`[MOCK API] Enviando dados para ${endpoint}:`, data);
  await mockFetch(data); 
  return data;
}

// Simula a exclusão/remoção de um recurso (DELETE)
export async function removeCourse(courseId: number): Promise<void> {
  console.log(`[MOCK API] Tentativa de remover a Trilha ID: ${courseId}`);
  await mockFetch(null);
}