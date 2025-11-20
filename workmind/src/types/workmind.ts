export interface Usuario {
  id: number;
  nomeCompleto: string; 
  email: string;
  perfilProfissional: string;
  nivelConta: 'Free' | 'Premium'; 
  pontuacao: number; 
}

export interface ContatoForm { 
  nome: string;
  email: string;
  assunto: 'feedback' | 'parceria' | 'suporte'; 
  mensagem: string;
}

export type Theme = "light" | "dark";
export type StatusMissao = 'pendente' | 'em_progresso' | 'completa' | 'revisão';

export interface Missao {
  id: number;         
  titulo: string;
  descricao: string;
  status: StatusMissao;
  xpRecompensa: number; 
}

export interface TrilhaAprendizado {
  id: number;
  nome: string;
  descricao: string;
  missoes: Missao[];
  tecnologias: string[];
  focoSustentavel: boolean; 
}

export type PerfilMentorado = Usuario & {
  objetivosCarreira: string[];
  habilidadesFortes: string[];
  habilidadesFoco: string[];
};

export type UsuarioCreate = Omit<Usuario, 'id' | 'pontuacao'>;

export interface Integrante {
  nome: string;
  rm: string;
  turma: string;
  fotoUrl: string;
  githubLink: string;
  linkedinLink: string;
}