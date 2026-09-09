import React, { useState } from 'react';
import { MessageCircle, Sparkles, Send, Check } from 'lucide-react';
import { NEIGHBORHOODS, createWhatsAppLink } from '../data/content';

export const InteractiveQuote: React.FC = () => {
  const [petType, setPetType] = useState<'cachorro' | 'gato' | 'multiplos'>('cachorro');
  const [petName, setPetName] = useState('');
  const [serviceType, setServiceType] = useState('Consulta Clínica de Rotina');
  const [neighborhood, setNeighborhood] = useState(NEIGHBORHOODS[0].name);

  // Gera a mensagem amigável para o WhatsApp
  const generateMessage = () => {
    const petLabel =
      petType === 'cachorro'
        ? 'meu Cachorrinho'
        : petType === 'gato'
        ? 'meu Gatinho'
        : 'meus pets';
    
    const namePart = petName.trim() ? ` (${petName.trim()})` : '';
    
    return `Olá, Dra.! Encontrei a Home Vet Domicílio e gostaria de agendar uma ${serviceType} para ${petLabel}${namePart} no bairro ${neighborhood}. Poderia me informar os próximos horários disponíveis?`;
  };

  const message = generateMessage();
  const whatsappUrl = createWhatsAppLink(message);

  return (
    <section id="simulador" className="py-20 bg-brand-cream relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-brand-green-100 text-brand-green-800 text-xs sm:text-sm font-bold px-3.5 py-1.5 rounded-full mb-3 border border-brand-green-200">
            <Sparkles className="w-4 h-4 text-brand-yellow-500" />
            <span>Agendamento Inteligente em 1 Minuto</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-brand-green-900 tracking-tight mb-3">
            Monte seu Atendimento Personalizado
          </h2>
          <p className="text-base text-[#4A5568]">
            Selecione as informações do seu companheiro e fale diretamente com a médica veterinária pelo WhatsApp com a mensagem já pronta.
          </p>
        </div>

        {/* Card Container */}
        <div className="bg-white rounded-3xl sm:rounded-4xl p-6 sm:p-10 border border-brand-green-100 shadow-soft">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Form Selection Controls */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Step 1: Pet Type */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-brand-green-800 mb-2.5">
                  1. Quem vai receber a visita?
                </label>
                <div className="grid grid-cols-3 gap-3">
                  <button
                    type="button"
                    onClick={() => setPetType('cachorro')}
                    className={`py-3 px-3 rounded-2xl text-xs sm:text-sm font-bold flex flex-col items-center gap-1.5 transition-all border ${
                      petType === 'cachorro'
                        ? 'bg-brand-green-800 text-white border-brand-green-800 shadow-sm'
                        : 'bg-brand-bg text-[#4A5568] border-brand-green-100 hover:border-brand-green-300'
                    }`}
                  >
                    <span className="text-xl">🐶</span>
                    <span>Cachorro</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setPetType('gato')}
                    className={`py-3 px-3 rounded-2xl text-xs sm:text-sm font-bold flex flex-col items-center gap-1.5 transition-all border ${
                      petType === 'gato'
                        ? 'bg-brand-green-800 text-white border-brand-green-800 shadow-sm'
                        : 'bg-brand-bg text-[#4A5568] border-brand-green-100 hover:border-brand-green-300'
                    }`}
                  >
                    <span className="text-xl">🐱</span>
                    <span>Gato</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setPetType('multiplos')}
                    className={`py-3 px-3 rounded-2xl text-xs sm:text-sm font-bold flex flex-col items-center gap-1.5 transition-all border ${
                      petType === 'multiplos'
                        ? 'bg-brand-green-800 text-white border-brand-green-800 shadow-sm'
                        : 'bg-brand-bg text-[#4A5568] border-brand-green-100 hover:border-brand-green-300'
                    }`}
                  >
                    <span className="text-xl">🐾</span>
                    <span>Mais de um</span>
                  </button>
                </div>
              </div>

              {/* Step 2: Pet Name (optional) */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-brand-green-800 mb-1.5">
                  2. Nome do seu pet (opcional)
                </label>
                <input
                  type="text"
                  value={petName}
                  onChange={(e) => setPetName(e.target.value)}
                  placeholder="Ex: Bento, Mel, Luna..."
                  className="w-full px-4 py-3 rounded-2xl bg-brand-bg border border-brand-green-100 text-sm text-[#2D3748] focus:outline-none focus:ring-2 focus:ring-brand-green-500 focus:bg-white transition-all"
                />
              </div>

              {/* Step 3: Service needed */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-brand-green-800 mb-1.5">
                  3. Serviço desejado
                </label>
                <select
                  value={serviceType}
                  onChange={(e) => setServiceType(e.target.value)}
                  className="w-full px-4 py-3 rounded-2xl bg-brand-bg border border-brand-green-100 text-sm text-[#2D3748] focus:outline-none focus:ring-2 focus:ring-brand-green-500 focus:bg-white transition-all cursor-pointer font-medium"
                >
                  <option value="Consulta Clínica de Rotina">Consulta Clínica de Rotina / Check-up</option>
                  <option value="Vacinação Atualizada (Importada)">Vacinação Atualizada (Importada)</option>
                  <option value="Coleta de Exames Laboratoriais">Coleta de Exames Laboratoriais em Casa</option>
                  <option value="Cuidados Geriátricos e Alívio de Dor">Cuidados Geriátricos / Pet Idoso</option>
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
                  className="w-full px-4 py-3 rounded-2xl bg-brand-bg border border-brand-green-100 text-sm text-[#2D3748] focus:outline-none focus:ring-2 focus:ring-brand-green-500 focus:bg-white transition-all cursor-pointer font-medium"
                >
                  {NEIGHBORHOODS.map((item) => (
                    <option key={item.name} value={item.name}>
                      {item.name} ({item.zone})
                    </option>
                  ))}
                  <option value="Outro bairro próximo">Outro bairro (consultar disponibilidade)</option>
                </select>
              </div>

            </div>

            {/* Live Message Preview & Direct CTA Button */}
            <div className="lg:col-span-5 bg-brand-bg rounded-3xl p-6 border border-brand-green-100/90 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-whatsapp animate-ping" />
                  <span className="text-xs font-bold uppercase tracking-wider text-brand-green-800">
                    Mensagem Pré-Formatada
                  </span>
                </div>

                {/* Simulated WhatsApp Chat Bubble */}
                <div className="bg-[#E7F8E8] border border-[#D0ECD2] rounded-2xl rounded-tr-none p-4 text-xs sm:text-sm text-gray-800 leading-relaxed relative shadow-xs mb-4">
                  <p className="italic font-medium">"{message}"</p>
                  <div className="flex items-center justify-end gap-1 mt-2 text-[10px] text-gray-500">
                    <span>Pronto para enviar</span>
                    <Check className="w-3 h-3 text-whatsapp" />
                  </div>
                </div>

                <p className="text-xs text-gray-500 mb-6 leading-relaxed">
                  Ao clicar no botão abaixo, o aplicativo do WhatsApp será aberto no seu celular ou computador com a mensagem preenchida automaticamente.
                </p>
              </div>

              {/* Main Submit Action */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-3 bg-whatsapp hover:bg-whatsapp-hover text-white font-bold py-4 px-6 rounded-2xl shadow-pill hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 text-center group"
              >
                <MessageCircle className="w-5 h-5 fill-white group-hover:scale-110 transition-transform" />
                <span>Enviar pelo WhatsApp</span>
                <Send className="w-4 h-4 ml-1 opacity-80" />
              </a>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
