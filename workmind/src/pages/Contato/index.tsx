import { useForm } from 'react-hook-form'; 
import { submitData } from '../../api/workmindService'; 
import { type ContatoForm } from '../../types/workmind';
import { useState } from 'react';
import { IoChevronDownOutline, IoChevronUpOutline } from 'react-icons/io5'; 

const FAQ_DATA = [
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


function Contato() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null); // Estado para o FAQ (Accordion)

  const { 
    register, 
    handleSubmit, 
    formState: { errors }, 
    reset 
  } = useForm<ContatoForm>({
    mode: 'onBlur', 
    defaultValues: { nome: '', email: '', assunto: 'feedback', mensagem: '' },
  });

  const onSubmit = async (data: ContatoForm) => {
    setIsSubmitting(true);
    setSuccessMessage(null);
    try {
      await submitData('/api/contact', data);
      setSuccessMessage('Mensagem enviada com sucesso! Em breve, entraremos em contato.');
      reset(); 
    } catch (error: any) {
      setSuccessMessage(`Erro ao enviar: ${error.message}. Tente novamente.`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="p-4 sm:p-8 max-w-6xl mx-auto dark:bg-gray-900 min-h-screen">
      
      <h2 className="text-4xl font-extrabold text-orange-700 dark:text-orange-400 mb-8 text-center">
        Contato & Perguntas Frequentes (FAQ)
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

        <div>
            <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-6 border-b pb-2">
                Dúvidas Comuns
            </h3>
            <div className="space-y-4">
                {FAQ_DATA.map((item) => (
                    <div key={item.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
                        <button
                            onClick={() => setOpenFaq(openFaq === item.id ? null : item.id)}
                            className="w-full text-left p-4 flex justify-between items-center text-lg font-semibold text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                        >
                            {item.pergunta}
                            {openFaq === item.id 
                                ? <IoChevronUpOutline className="w-5 h-5 text-blue-500" />
                                : <IoChevronDownOutline className="w-5 h-5 text-gray-400" />
                            }
                        </button>
                        {openFaq === item.id && (
                            <p className="p-4 pt-0 text-gray-700 dark:text-gray-300 border-t border-gray-100 dark:border-gray-700 transition-all duration-300">
                                {item.resposta}
                            </p>
                        )}
                    </div>
                ))}
            </div>
        </div>

        <div>
            <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-6 border-b pb-2">
                Envie sua Mensagem
            </h3>
            
            {successMessage && (
                <div 
                    className={`p-4 rounded-lg mb-4 font-semibold ${
                        successMessage.startsWith('Erro') 
                        ? 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200' 
                        : 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                    }`}
                >
                    {successMessage}
                </div>
            )}

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-xl">
                
                <div>
                <label htmlFor="nome" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Seu Nome</label>
                <input id="nome" type="text" {...register('nome', { required: 'O nome é obrigatório', minLength: { value: 3, message: 'Mínimo de 3 caracteres' } })} 
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm dark:bg-gray-700 dark:text-white focus:ring-blue-500 focus:border-blue-500 sm:text-sm"/>
                {errors.nome && <p className="mt-1 text-sm text-red-500">{errors.nome.message}</p>}
                </div>
                
                <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">E-mail</label>
                <input id="email" type="email" {...register('email', { required: 'O e-mail é obrigatório', pattern: { value: /^\S+@\S+$/i, message: 'Formato de e-mail inválido'}})}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm dark:bg-gray-700 dark:text-white focus:ring-blue-500 focus:border-blue-500 sm:text-sm"/>
                {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>}
                </div>

                <div>
                <label htmlFor="assunto" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Assunto</label>
                <select id="assunto" {...register('assunto', { required: 'Selecione um assunto' })}
                    className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 dark:border-gray-700 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md">
                    <option value="feedback">Feedback</option>
                    <option value="parceria">Parceria</option>
                    <option value="suporte">Suporte Técnico</option>
                </select>
                {errors.assunto && <p className="mt-1 text-sm text-red-500">{errors.assunto.message}</p>}
                </div>
                
                <div>
                <label htmlFor="mensagem" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Mensagem</label>
                <textarea id="mensagem" rows={4} {...register('mensagem', { required: 'A mensagem é obrigatória' })}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm dark:bg-gray-700 dark:text-white focus:ring-blue-500 focus:border-blue-500 sm:text-sm"/>
                {errors.mensagem && <p className="mt-1 text-sm text-red-500">{errors.mensagem.message}</p>}
                </div>

                <button type="submit" disabled={isSubmitting}
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 
                            hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-150
                            disabled:opacity-50 disabled:cursor-not-allowed">
                {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
                </button>
            </form>
        </div>
      </div>
    </div>
  );
}

export default Contato;