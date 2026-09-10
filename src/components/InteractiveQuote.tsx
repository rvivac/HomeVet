import React, { useState } from 'react';
import { MessageCircle, Sparkles, Send, Check, X } from 'lucide-react';
import { NEIGHBORHOODS, createWhatsAppLink } from '../data/content';

export const InteractiveQuoteModal: React.FC<{
  isOpen: boolean;
  onClose: () => void;
}> = ({ isOpen, onClose }) => {
  const [petType, setPetType] = useState<'cachorro' | 'gato' | 'multiplos'>('cachorro');
  const [petName, setPetName] = useState('');
  const [serviceType, setServiceType] = useState('Consulta Clínica de Rotina');
  const [neighborhood, setNeighborhood] = useState(NEIGHBORHOODS[0].name);

  if (!isOpen) return null;

  // Gera a mensagem amigável para o WhatsApp
  const generateMessage = () => {
    const petLabel =
      petType === 'cachorro'
        ? 'meu Cachorrinho'
        : petType === 'gato'
        ? 'meu Gatinho'
        : 'meus pets';
    
    const namePart = petName.trim() ? ` (${petName.trim()})` : '';
    
    return `Olá! Encontrei a Home.Vet e gostaria de agendar uma ${serviceType} para ${petLabel}${namePart} no bairro ${neighborhood}. Poderia me informar os próximos horários disponíveis?`;
  };

  const message = generateMessage();
  const whatsappUrl = createWhatsAppLink(message);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[88vh] flex flex-col shadow-2xl border border-brand-green-100 relative overflow-hidden">
        
        {/* Modal Header */}
        <div className="p-5 sm:p-6 bg-brand-bg border-b border-brand-green-100 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl bg-whatsapp flex items-center justify-center text-white shadow-xs">
              <MessageCircle className="w-6 h-6 fill-white" />
            </div>
            <div>
              <h3 className="font-display font-bold text-xl text-brand-green-900 leading-tight flex items-center gap-2">
                Monte seu Atendimento Personalizado
                <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-brand-green-100 text-brand-green-800 border border-brand-green-200">
                  WhatsApp
                </span>
              </h3>
              <p className="text-xs text-brand-green-700 font-medium">
                Selecione as opções e envie com a mensagem já pré-formatada em 1 minuto
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-colors cursor-pointer"
            aria-label="Fechar modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body (Scrollable) */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-6 space-y-5">
          
          {/* Step 1: Pet Type */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-brand-green-800 mb-2">
              1. Quem vai receber a visita?
            </label>
            <div className="grid grid-cols-3 gap-2.5">
              <button
                type="button"
                onClick={() => setPetType('cachorro')}
                className={`py-2.5 px-3 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-all border cursor-pointer ${
                  petType === 'cachorro'
                    ? 'bg-brand-green-800 text-white border-brand-green-800 shadow-xs'
                    : 'bg-brand-bg text-[#4A5568] border-brand-green-100 hover:border-brand-green-300'
                }`}
              >
                <span>🐶 Cachorro</span>
              </button>

              <button
                type="button"
                onClick={() => setPetType('gato')}
                className={`py-2.5 px-3 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-all border cursor-pointer ${
                  petType === 'gato'
                    ? 'bg-brand-green-800 text-white border-brand-green-800 shadow-xs'
                    : 'bg-brand-bg text-[#4A5568] border-brand-green-100 hover:border-brand-green-300'
                }`}
              >
                <span>🐱 Gato</span>
              </button>

              <button
                type="button"
                onClick={() => setPetType('multiplos')}
                className={`py-2.5 px-3 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-all border cursor-pointer ${
                  petType === 'multiplos'
                    ? 'bg-brand-green-800 text-white border-brand-green-800 shadow-xs'
                    : 'bg-brand-bg text-[#4A5568] border-brand-green-100 hover:border-brand-green-300'
                }`}
              >
                <span>🐾 Mais de um</span>
              </button>
            </div>
          </div>

          {/* Step 2: Pet Name */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-brand-green-800 mb-1.5">
              2. Nome do seu pet (opcional)
            </label>
            <input
              type="text"
              value={petName}
              onChange={(e) => setPetName(e.target.value)}
              placeholder="Ex: Bento, Mel, Luna..."
              className="w-full px-4 py-2.5 rounded-xl bg-brand-bg border border-brand-green-100 text-sm text-[#2D3748] focus:outline-none focus:ring-2 focus:ring-brand-green-500 focus:bg-white transition-all"
            />
          </div>

          {/* Step 3: Service Type */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-brand-green-800 mb-1.5">
              3. Serviço desejado
            </label>
            <select
              value={serviceType}
              onChange={(e) => setServiceType(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl bg-brand-bg border border-brand-green-100 text-sm text-[#2D3748] focus:outline-none focus:ring-2 focus:ring-brand-green-500 focus:bg-white transition-all cursor-pointer font-medium"
            >
              <option value="Consulta Clínica de Rotina">Consulta Clínica de Rotina / Check-up</option>
              <option value="Vacinação Ética Importada">Vacinação Ética Importada</option>
              <option value="Coleta de Exames Laboratoriais">Coleta de Exames Laboratoriais em Casa</option>
              <option value="Microchipagem e Atestado">Microchipagem e Atestados de Viagem</option>
              <option value="Avaliação Geral e Dúvidas">Outra necessidade ou dúvida específica</option>
            </select>
          </div>

          {/* Step 4: Neighborhood */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-brand-green-800 mb-1.5">
              4. Bairro onde você mora
            </label>
            <select
              value={neighborhood}
              onChange={(e) => setNeighborhood(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl bg-brand-bg border border-brand-green-100 text-sm text-[#2D3748] focus:outline-none focus:ring-2 focus:ring-brand-green-500 focus:bg-white transition-all cursor-pointer font-medium"
            >
              {NEIGHBORHOODS.map((item) => (
                <option key={item.name} value={item.name}>
                  {item.name} ({item.zone})
                </option>
              ))}
              <option value="Outro bairro próximo">Outro bairro ou cidade vizinha</option>
            </select>
          </div>

          {/* WhatsApp Message Preview Box */}
          <div className="bg-[#E7F8E8] border border-[#D0ECD2] rounded-2xl p-4 text-xs sm:text-sm text-gray-800 leading-relaxed shadow-xs">
            <div className="flex items-center gap-1.5 text-xs font-bold text-brand-green-900 mb-1.5">
              <Sparkles className="w-3.5 h-3.5 text-whatsapp" />
              <span>Mensagem pronta que será enviada:</span>
            </div>
            <p className="italic text-gray-700 bg-white/70 p-3 rounded-xl border border-brand-green-100">
              "{message}"
            </p>
            <div className="flex items-center justify-end gap-1 mt-2 text-[10px] text-gray-500">
              <span>Formatação automática</span>
              <Check className="w-3 h-3 text-whatsapp" />
            </div>
          </div>

        </div>

        {/* Modal Footer with Direct WhatsApp Submission */}
        <div className="p-4 sm:p-5 bg-brand-bg border-t border-brand-green-100 flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
          <span className="text-xs text-gray-600 text-center sm:text-left">
            O WhatsApp abrirá com tudo pronto para você enviar!
          </span>
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#166534] hover:bg-[#14532d] text-white text-xs font-bold px-5 py-2.5 rounded-xl shadow-pill transition-all min-h-[44px]"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Enviar pelo WhatsApp</span>
              <Send className="w-3.5 h-3.5 opacity-80" />
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};

export const InteractiveQuote = InteractiveQuoteModal;
