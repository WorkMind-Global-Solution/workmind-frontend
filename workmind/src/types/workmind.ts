//Interface Usuario
export interface Usuario {
  id: number;
  nomeCompleto: string; 
  email: string;
  perfilProfissional: string;
  nivelConta: 'Free' | 'Premium'; 
  pontuacao: number; 
}

//ContatoForm: Interface para o POST simulado do formulário de Contato.
export interface ContatoForm { 
  nome: string;
  email: string;
  assunto: 'feedback' | 'parceria' | 'suporte'; 
  mensagem: string;
}

// Tipos base 
export type Theme = "light" | "dark";
export type StatusMissao = 'pendente' | 'em_progresso' | 'completa' | 'revisão';

//Interface para elementos de gamificação e aprendizado.
export interface Missao {
  id: number;         
  titulo: string;
  descricao: string;
  status: StatusMissao;
  xpRecompensa: number; 
}

//Interface para as trilhas de conteúdo.
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