export interface FaqItem {
    id: number;
    pergunta: string;
    resposta: string;
}

export const FAQ_DATA: FaqItem[] = [
    {
        id: 1,
        pergunta: "O WorkMind utiliza Inteligência Artificial?",
        resposta: "Sim. Cada usuário possui uma IA mentora que analisa o perfil, emoções e objetivos para criar planos de estudo personalizados, sugerindo pausas e atividades para o equilíbrio emocional.",
    },
    {
        id: 2,
        pergunta: "Como funciona a gamificação na plataforma?",
        resposta: "O aprendizado é feito através de missões, trilhas e projetos práticos. Você ganha pontos e recompensas digitais conforme evolui, e pode se conectar com empresas parceiras para mostrar seu progresso.",
    },
    {
        id: 3,
        pergunta: "O projeto apoia a sustentabilidade?",
        resposta: "Absolutamente. O WorkMind incentiva carreiras verdes e projetos sustentáveis (como energia limpa e economia circular) e oferece conteúdo gratuito para promover a inclusão produtiva em grupos vulneráveis.",
    },
];