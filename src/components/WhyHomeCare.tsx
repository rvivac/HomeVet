import React from 'react';
import { CarFront, Home, Clock, HeartHandshake, XCircle, CheckCircle2, Sparkles, MessageCircle } from 'lucide-react';
import { createWhatsAppLink } from '../data/content';

export const WhyHomeCare: React.FC = () => {
  const benefits = [
    {
      icon: CarFront,
      title: 'Zero Estresse no Transporte',
      desc: 'Sem miados de desespero dentro da caixa de transporte, salivação, vômito de enjoo no carro ou briga para sair de casa.',
      badge: 'Sem Traumas',
      color: 'bg-brand-green-100 text-brand-green-800',
    },
    {
      icon: Home,
      title: 'No Território do Pet',
      desc: 'O animal fica relaxado na caminha ou sofá. Os sinais vitais (frequência cardíaca e pressão) refletem o estado real de saúde, sem a taquicardia do pânico.',
      badge: 'Avaliação Real',
      color: 'bg-brand-yellow-100 text-amber-800',
    },
    {
      icon: Clock,
      title: 'Comodidade Total para Você',
      desc: 'Sem perda de tempo no trânsito, sem dificuldade de encontrar vaga e sem passar horas em salas de espera cheias.',
      badge: 'Seu Tempo Vale Mais',
      color: 'bg-brand-peach-100 text-rose-800',
    },
    {
      icon: HeartHandshake,
      title: 'Atenção 100% Individualizada',
      desc: 'Um momento exclusivo entre você, seu pet e a médica veterinária. Tempo de sobra para tirar dúvidas sobre nutrição, rotina e comportamento.',
      badge: 'Sem Pressa',
      color: 'bg-emerald-100 text-emerald-800',
    },
  ];

  const comparisons = [
    {
      aspect: 'Transporte e Deslocamento',
      traditional: 'Trânsito, caixas apertadas, pet vomitando ou em pânico.',
      homeVet: 'Zero deslocamento. O pet continua na caminha ou no sofá.',
    },
    {
      aspect: 'Sala de Espera',
      traditional: 'Cheiros estranhos, latidos altos e risco de contato com animais doentes.',
      homeVet: 'Privacidade absoluta e ambiente higienizado da sua própria casa.',
    },
    {
      aspect: 'Tempo de Consulta',
      traditional: 'Geralmente 15 a 20 minutos corridos para liberar a próxima senha.',
      homeVet: '50 a 60 minutos dedicados, com conversa calma e acolhedora.',
    },
    {
      aspect: 'Comportamento do Pet',
      traditional: 'Defensivo, assustado, agressivo por medo ou paralisado.',
      homeVet: 'Sociável, curioso e receptivo a petiscos e carinhos.',
    },
  ];

  return (
    <section id="vantagens" className="py-20 bg-brand-bg relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-brand-yellow-100/90 text-amber-800 text-xs sm:text-sm font-bold px-3.5 py-1.5 rounded-full mb-4 border border-brand-yellow-200">
            <Sparkles className="w-4 h-4 text-amber-500" />
            <span>Mais Tranquilidade para Quem Você Ama</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-4xl text-brand-green-900 tracking-tight mb-4">
            Por que escolher o Atendimento Veterinário em Casa?
          </h2>
          <p className="text-base sm:text-lg text-[#4A5568] leading-relaxed">
            Uma experiência humanizada que substitui o medo da clínica veterinária por momentos de calma, afeto e segurança familiar.
          </p>
        </div>

        {/* 4 Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {benefits.map((benefit, idx) => {
            const IconComp = benefit.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-3xl p-6 border border-brand-green-100/80 shadow-soft hover:shadow-soft-hover transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${benefit.color}`}>
                      <IconComp className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-brand-bg text-brand-green-800 border border-brand-green-200/60">
                      {benefit.badge}
                    </span>
                  </div>
                  <h3 className="font-display font-bold text-lg text-brand-green-900 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-[#4A5568] leading-relaxed">
                    {benefit.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Visual Story & Comparison Block */}
        <div className="bg-white rounded-3xl sm:rounded-4xl p-6 sm:p-10 border border-brand-green-100 shadow-soft">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Photo: Relaxed Cat */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden border-4 border-white shadow-soft">
                <img
                  src="/images/cat-cozy.jpg"
                  alt="Gatinho calmo ronronando no sofá durante atendimento domiciliar"
                  className="w-full h-72 sm:h-80 object-cover object-center"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-6">
                  <p className="text-white text-sm font-medium">
                    "O pet não associa o carinho à dor ou à ameaça. Ele permanece no controle do seu cantinho."
                  </p>
                </div>
              </div>
            </div>

            {/* Right Comparison Table */}
            <div className="lg:col-span-7">
              <h3 className="font-display font-bold text-2xl text-brand-green-900 mb-6">
                Clínica Tradicional vs. Home Vet Domicílio
              </h3>

              <div className="space-y-4">
                {comparisons.map((row, i) => (
                  <div key={i} className="p-4 rounded-2xl bg-brand-bg/80 border border-brand-green-100/60">
                    <span className="text-xs font-bold uppercase tracking-wider text-brand-green-700 block mb-2">
                      {row.aspect}
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                      {/* Traditional */}
                      <div className="flex items-start gap-2 text-gray-500">
                        <XCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                        <span>{row.traditional}</span>
                      </div>
                      {/* Home Vet */}
                      <div className="flex items-start gap-2 font-medium text-brand-green-900">
                        <CheckCircle2 className="w-4 h-4 text-brand-green-600 shrink-0 mt-0.5" />
                        <span>{row.homeVet}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom Mini CTA */}
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-2xl bg-brand-green-50 border border-brand-green-200/80">
                <span className="text-sm font-bold text-brand-green-900 text-center sm:text-left">
                  Quer proporcionar essa experiência serena para o seu pet?
                </span>
                <a
                  href={createWhatsAppLink('Olá! Li sobre as vantagens do atendimento em casa e quero agendar para meu pet.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-whatsapp hover:bg-whatsapp-hover text-white text-sm font-bold px-5 py-2.5 rounded-full shadow-pill transition-all whitespace-nowrap"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>Agendar Atendimento</span>
                </a>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
