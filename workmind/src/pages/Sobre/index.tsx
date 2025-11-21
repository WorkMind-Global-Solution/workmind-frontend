import { useTheme } from '../../contexts/ThemeContext';
import { IoBulbOutline, IoHeartOutline, IoPlanetOutline } from 'react-icons/io5';

function Sobre() {
  const { isDark } = useTheme();

  const cardContainerClass = `p-6 rounded-xl shadow-lg border transition-all duration-300 hover:-translate-y-1 ${
    isDark ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"
  }`;

  const titleClass = `text-xl font-bold mb-3 ${isDark ? "text-white" : "text-gray-900"}`;
  const textClass = `text-base leading-relaxed ${isDark ? "text-gray-400" : "text-gray-600"}`;

  return (
    <div className={`min-h-screen w-full transition-colors duration-300 p-4 md:p-8 ${
      isDark ? "bg-gray-900" : "bg-gray-50"
    }`}>
      
      <div className="max-w-4xl mx-auto text-center mb-16 mt-4">
        <h2 className={`text-3xl md:text-5xl font-extrabold mb-6 ${
          isDark ? "text-green-400" : "text-green-700"
        }`}>
          Sobre o Projeto WorkMind
        </h2>
        <p className={`text-lg md:text-xl max-w-2xl mx-auto ${
          isDark ? "text-gray-300" : "text-gray-600"
        }`}>
          Um ecossistema de desenvolvimento pessoal e profissional focado em IA, bem-estar e sustentabilidade.
        </p>
      </div>

      <div className="max-w-6xl mx-auto">
        
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <h3 className={`text-2xl md:text-3xl font-bold mb-4 ${
            isDark ? "text-blue-400" : "text-blue-700"
          }`}>
            Nossa Missão
          </h3>
          <p className={`text-lg mb-4 ${isDark ? "text-gray-300" : "text-gray-700"}`}>
            Acreditamos que o futuro do trabalho não é apenas sobre tecnologia, mas sobre como os humanos interagem com ela mantendo sua saúde mental e o planeta intactos.
          </p>
          <p className={textClass}>
            O WorkMind nasceu para preencher a lacuna entre o avanço tecnológico desenfreado e a necessidade humana de equilíbrio. Utilizamos Inteligência Artificial não para substituir, mas para potenciar carreiras de forma ética e sustentável.
          </p>
        </div>

        <h3 className={`text-2xl md:text-3xl font-bold text-center mb-10 ${
            isDark ? "text-white" : "text-gray-800"
        }`}>
          Nossos Pilares Fundamentais
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className={cardContainerClass}>
            <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
              <IoBulbOutline className="text-2xl text-blue-600" />
            </div>
            <h4 className={titleClass}>Inovação & IA</h4>
            <p className={textClass}>
              Curadoria de conteúdos e trilhas personalizadas por algoritmos inteligentes que entendem seu momento de carreira.
            </p>
          </div>

          <div className={cardContainerClass}>
            <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center mb-4">
              <IoHeartOutline className="text-2xl text-red-600" />
            </div>
            <h4 className={titleClass}>Saúde Mental</h4>
            <p className={textClass}>
              O trabalho não deve custar sua paz. Integramos práticas de bem-estar diretamente no fluxo de aprendizado.
            </p>
          </div>

          <div className={cardContainerClass}>
            <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
              <IoPlanetOutline className="text-2xl text-green-600" />
            </div>
            <h4 className={titleClass}>Sustentabilidade (ESG)</h4>
            <p className={textClass}>
              Fomentamos carreiras que impactam positivamente o meio ambiente e a sociedade.
            </p>
          </div>

        </div>

        <div className={`mt-16 text-center ${cardContainerClass}`}>
          <p className={`text-xl md:text-2xl font-medium italic ${
             isDark ? "text-gray-200" : "text-gray-800"
          }`}>
            "A tecnologia move o mundo, mas são as pessoas, com mente sã e propósito, que decidem a direção."
          </p>
          <p className={`mt-4 font-bold uppercase tracking-wider text-sm ${
             isDark ? "text-blue-400" : "text-blue-600"
          }`}>
            — Manifesto WorkMind
          </p>
        </div>

      </div>
    </div>
  );
}

export default Sobre;