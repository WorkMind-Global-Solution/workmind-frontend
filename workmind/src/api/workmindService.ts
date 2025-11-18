import { TEAM_MEMBERS } from '../data/teamData';
import { type Integrante, type TrilhaAprendizado } from '../types/workmind'; 
import { mockFetch } from './apiMock';

// Simula o GET de todos os integrantes (Endpoint da API Java)
export async function fetchTeamMembers(): Promise<Integrante[]> {
  return mockFetch(TEAM_MEMBERS); 
}

// Simula o GET de todas as trilhas
export async function fetchAllCourses(): Promise<TrilhaAprendizado[]> {
  return mockFetch([]); 
}

// Simula o POST/PUT (CRUD)
export async function submitData<T>(endpoint: string, data: T): Promise<T> {
  console.log(`[MOCK API] Enviando dados para ${endpoint}:`, data);
  await mockFetch(data); 
  return data;
}