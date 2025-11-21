import { useForm } from 'react-hook-form'; 
import { submitData } from '../../api/workmindService'; 
import { type ContatoForm } from '../../types/workmind';
import { useState } from 'react';
import { useTheme } from '../../contexts/ThemeContext';

function Contato() {
  const { isDark } = useTheme(); 
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const { 
    register, 
    handleSubmit, 
    formState: { errors }, 
    reset 
  } = useForm<ContatoForm>({
    mode: 'onBlur',
    defaultValues: {
      nome: '',
      email: '',
      assunto: 'feedback', 
      mensagem: '',
    },
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

  const inputClasses = `mt-1 block w-full px-3 py-2 border rounded-md shadow-sm sm:text-sm focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors ${
    isDark 
      ? "bg-gray-800 border-gray-700 text-white placeholder-gray-400" 
      : "bg-white border-gray-300 text-gray-900"
  }`;

  const labelClasses = `block text-sm font-medium ${isDark ? "text-gray-300" : "text-gray-700"}`;

  return (
    <div className={`p-4 md:p-8 max-w-4xl mx-auto min-h-[70vh] transition-colors duration-200 ${
        isDark ? "bg-gray-900" : "bg-white"
    }`}>
      
      <h2 className={`text-2xl md:text-4xl font-extrabold mb-6 ${
          isDark ? "text-orange-400" : "text-orange-700"
      }`}>
        Contato & FAQ
      </h2>
    
      <p className={`mb-8 text-base md:text-lg ${isDark ? "text-gray-300" : "text-gray-700"}`}>
        Use o formulário para enviar um feedback ou solicitar suporte.
      </p>

      {successMessage && (
        <div 
          className={`p-4 rounded-lg mb-4 font-semibold ${
            successMessage.startsWith('Erro') 
              ? (isDark ? 'bg-red-900 text-red-200' : 'bg-red-100 text-red-800')
              : (isDark ? 'bg-green-900 text-green-200' : 'bg-green-100 text-green-800')
          }`}
        >
          {successMessage}
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        
        <div>
          <label htmlFor="nome" className={labelClasses}>
            Seu Nome
          </label>
          <input
            id="nome"
            type="text"
            {...register('nome', { required: 'O nome é obrigatório', minLength: { value: 3, message: 'Mínimo de 3 caracteres' } })} 
            className={inputClasses}
          />
          {errors.nome && <p className="mt-1 text-sm text-red-500">{errors.nome.message}</p>}
        </div>

        <div>
          <label htmlFor="email" className={labelClasses}>
            E-mail
          </label>
          <input
            id="email"
            type="email"
            {...register('email', { 
              required: 'O e-mail é obrigatório', 
              pattern: {
                value: /^\S+@\S+$/i,
                message: 'Formato de e-mail inválido',
              }
            })}
            className={inputClasses}
          />
          {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>}
        </div>

        <div>
          <label htmlFor="assunto" className={labelClasses}>
            Assunto
          </label>
          <select
            id="assunto"
            {...register('assunto', { required: 'Selecione um assunto' })}
            className={inputClasses}
          >
            <option value="feedback">Feedback</option>
            <option value="parceria">Parceria</option>
            <option value="suporte">Suporte Técnico</option>
          </select>
          {errors.assunto && <p className="mt-1 text-sm text-red-500">{errors.assunto.message}</p>}
        </div>
        
        <div>
          <label htmlFor="mensagem" className={labelClasses}>
            Mensagem
          </label>
          <textarea
            id="mensagem"
            rows={4}
            {...register('mensagem', { required: 'A mensagem é obrigatória' })}
            className={inputClasses}
          />
          {errors.mensagem && <p className="mt-1 text-sm text-red-500">{errors.mensagem.message}</p>}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 
                     hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-150
                     disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
        </button>
      </form>
    </div>
  );
}

export default Contato;