import { type Missao, type TrilhaAprendizado } from '../types/workmind';

// Dados Fictícios de Missões
const MISSAO_IA_ETICA: Missao = { id: 101, titulo: 'Introdução à IA Ética', descricao: 'Estudo dos princípios morais na IA.', status: 'completa', xpRecompensa: 50 };
const MISSAO_E_CIRCULAR: Missao = { id: 102, titulo: 'Modelos de Economia Circular', descricao: 'Aprenda sobre a reutilização de recursos.', status: 'em_progresso', xpRecompensa: 80 };
const MISSAO_MEDITACAO: Missao = { id: 103, titulo: 'Meditação Guiada de 15 min', descricao: 'Técnicas de foco e redução de estresse.', status: 'pendente', xpRecompensa: 20 };
const MISSAO_SOFT_SKILL: Missao = { id: 104, titulo: 'Comunicação Assertiva', descricao: 'Aprimore a clareza nas interações profissionais.', status: 'completa', xpRecompensa: 45 };

// Dados Fictícios de Trilhas 
export const COURSES_DATA: TrilhaAprendizado[] = [
  {
    id: 1,
    nome: 'Especialista em IA Ética',
    descricao: 'Treinamento completo em frameworks éticos de inteligência artificial e responsabilidade social.',
    missoes: [MISSAO_IA_ETICA, MISSAO_SOFT_SKILL],
    tecnologias: ['Python', 'IA', 'Ética'],
    focoSustentavel: false,
  },
  {
    id: 2,
    nome: 'Carreira Verde: Energia Limpa',
    descricao: 'Trilha focada em tecnologias e gestão de projetos de energia sustentável e renovável.',
    missoes: [MISSAO_E_CIRCULAR],
    tecnologias: ['ESG', 'IoT', 'Gestão de Resíduos'],
    focoSustentavel: true,
  },
  {
    id: 3,
    nome: 'Comunicação e Soft Skills do Futuro',
    descricao: 'Desenvolva criatividade e habilidades interpessoais essenciais para liderança.',
    missoes: [MISSAO_SOFT_SKILL, MISSAO_MEDITACAO],
    tecnologias: ['Comunicação', 'Liderança', 'Criatividade'],
    focoSustentavel: false,
  },
  {
    id: 4,
    nome: 'Web Development com TypeScript',
    descricao: 'Aprenda a construir aplicações web robustas usando React, Vite e Tailwind CSS.',
    missoes: [MISSAO_IA_ETICA],
    tecnologias: ['React', 'TypeScript', 'Tailwind'],
    focoSustentavel: false,
  },
  {
    id: 5,
    nome: 'Finanças Pessoais e Bem-Estar',
    descricao: 'Curso para equilibrar sua vida financeira e mental, reduzindo o estresse no trabalho.',
    missoes: [MISSAO_MEDITACAO],
    tecnologias: ['Investimento', 'Mindfulness', 'Gestão'],
    focoSustentavel: false,
  },
  {
    id: 6,
    nome: 'Tecnologia Social e Inclusão',
    descricao: 'Use a tecnologia para criar projetos de impacto social e promover a inclusão digital.',
    missoes: [MISSAO_E_CIRCULAR],
    tecnologias: ['Acessibilidade', 'Design Thinking'],
    focoSustentavel: true,
  },
  {
    id: 7,
    nome: 'Reskilling em Java (Backend)',
    descricao: 'Atualize-se nas novas tendências de Java, Spring Boot e arquitetura de microsserviços.',
    missoes: [MISSAO_IA_ETICA],
    tecnologias: ['Java', 'DDD', 'APIs REST'],
    focoSustentavel: false,
  },
  {
    id: 8,
    nome: 'Projetos Sustentáveis em IoT',
    descricao: 'Crie soluções de Internet das Coisas para monitoramento ambiental e eficiência energética.',
    missoes: [MISSAO_E_CIRCULAR],
    tecnologias: ['IoT', 'Sensores', 'Python'],
    focoSustentavel: true,
  },
  {
    id: 9,
    nome: 'Gamificação para Engajamento',
    descricao: 'Aplique conceitos de jogos em ambientes de aprendizado e trabalho para aumentar a motivação.',
    missoes: [MISSAO_SOFT_SKILL],
    tecnologias: ['UX/UI', 'Psicologia', 'Design'],
    focoSustentavel: false,
  },
  {
    id: 10,
    nome: 'Desafio: Otimização de Carbono',
    descricao: 'Projeto prático para reduzir a pegada de carbono de uma empresa fictícia usando dados.',
    missoes: [MISSAO_E_CIRCULAR, MISSAO_IA_ETICA],
    tecnologias: ['Análise de Dados', 'ESG', 'Python'],
    focoSustentavel: true,
  },
  {
    id: 11,
    nome: 'Cibersegurança Essencial',
    descricao: 'Fundamentos de segurança digital e proteção de dados para desenvolvedores.',
    missoes: [MISSAO_IA_ETICA],
    tecnologias: ['Segurança', 'Redes', 'Criptografia'],
    focoSustentavel: false,
  }
];