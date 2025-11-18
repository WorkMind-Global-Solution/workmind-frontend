// Interface para dados do Aluno
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