// Interface para dados do Alunos
export interface Integrante {
  rm: string;         
  nome: string;
  turma: string;      
  fotoUrl: string;    
  githubLink: string; 
  linkedinLink: string; 
}

export type StatusMissao = 'pendente' | 'em_progresso' | 'completa';

// Interface para dados da Missão
export interface Missao {
  id: number;         
  titulo: string;
  status: StatusMissao;
  xp: number;
}

export type PerfilMentorado = Integrante & {
  // Combina dados básicos de Integrante com dados do Perfil 
  objetivos: string[];
  plano: 'basico' | 'pro' | 'premium'; 
  ultimaAtividade: Date;
};

// Tipo para o estado do tema 
export type Theme = "light" | "dark"; 