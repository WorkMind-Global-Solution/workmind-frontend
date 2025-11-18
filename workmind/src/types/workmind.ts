// Interface para dados do Integrante
export interface Integrante {
  rm: string;         
  nome: string;       
  turma: string;      
  fotoUrl: string;    
  githubLink: string; 
  linkedinLink: string; 
}

// Interface para o formulário de Contato/FAQ (simula o POST para a API)
export interface ContatoForm { 
  nome: string;
  email: string;
  assunto: 'feedback' | 'parceria' | 'suporte'; 
  mensagem: string;
}

// Tipos base
export type Theme = "light" | "dark";
export type StatusMissao = 'pendente' | 'em_progresso' | 'completa' | 'revisão';

// 1. Export Interface Missao 
export interface Missao {
  id: number;         
  titulo: string;
  descricao: string;
  status: StatusMissao;
  xpRecompensa: number;
}

// 2. Export Interface TrilhaAprendizado 
export interface TrilhaAprendizado {
  id: number;
  nome: string;
  descricao: string;
  missoes: Missao[]; // Usa a interface Missao
  tecnologias: string[];
  focoSustentavel: boolean; // Para Inclusão e Sustentabilidade
}

// Tipo Avançado (Intersection Type) para Perfil da IA
export type PerfilMentorado = Integrante & {
  objetivosCarreira: string[];
  habilidadesFortes: string[];
  habilidadesFoco: string[];
};