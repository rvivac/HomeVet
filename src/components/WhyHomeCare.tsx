import React, { useState } from 'react';
import { CarFront, Home, HeartHandshake, ShieldAlert, Sparkles, ChevronDown, Info } from 'lucide-react';

export const WhyHomeCare: React.FC = () => {
  // Mobile accordion state: default first item open for instant value
  const [mobileActive, setMobileActive] = useState<number>(0);
  // Desktop expandable state
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const benefits = [
    {
      icon: CarFront,
      shortTitle: 'Sem Estresse no Transporte',
      title: 'Sem estresse no Transporte',
      desc: 'Sem desespero dentro da caixa de transporte ao sair de casa.',
      clarification: 'Nada de trânsito, caixas apertadas, salivação, vômitos ou brigas.',
      badge: 'Sem Traumas',
      color: 'bg-brand-green-100 text-brand-green-800',
    },
    {
      icon: Home,
      shortTitle: 'No Território do Pet',
      title: 'No Território Seguro do Pet',
      desc: 'O animal mantém a frequência cardíaca e pressão refletindo seu estado real de saúde.',
      clarification: 'Sem cheiros estranhos, sem latidos de outros animais e sem ansiedade.',
      badge: 'No Conforto do Lar',
      color: 'bg-brand-yellow-100 text-amber-800',
    },
    {
      icon: ShieldAlert,
      shortTitle: 'Zero Risco de Contágio',
      title: 'Zero Risco de Contágio & Sem Espera',
      desc: 'Na sua casa, seu pet fica protegido de estímulos estressantes e livre de salas de espera compartilhadas.',
      clarification: 'Ambiente higienizado e tranquilo do seu próprio lar, sem cruzar com outros animais agitados ou enfermos.',
      badge: 'Proteção Total',
      color: 'bg-brand-peach-100 text-rose-800',
    },
    {
      icon: HeartHandshake,
      shortTitle: 'Atenção Individualizada',
      title: 'Atenção 100% Individualizada',
      desc: 'Tempo dedicado exclusivamente para ouvir a família, examinar com carinho e tirar todas as dúvidas com calma.',
      clarification: 'Consulta com escuta atenta, sem a pressa do consultório e com foco total no bem-estar físico e emocional do seu pet.',
      badge: 'Sem Pressa',
      color: 'bg-emerald-100 text-emerald-800',
    },
  ];

  const toggleMobile = (idx: number) => {
    setMobileActive(prev => (prev === idx ? -1 : idx));
  };

  const toggleDesktop = (idx: number) => {
    setActiveCard(prev => (prev === idx ? null : idx));
  };

  return (
    <section id="vantagens" className="py-16 sm:py-20 bg-brand-bg relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
          <div className="inline-flex items-center gap-2 bg-brand-green-100 text-brand-green-800 text-xs sm:text-sm font-bold px-4 py-1.5 rounded-full mb-4 border border-brand-green-300/80 shadow-xs">
            <Sparkles className="w-4 h-4 text-brand-yellow-500 fill-brand-yellow-400" />
            <span>Mais Tranquilidade para Quem Você Ama</span>
          </div>
          <h2 className="font-display font-extrabold text-2xl sm:text-4xl md:text-5xl text-brand-green-900 tracking-tight mb-3 sm:mb-5 leading-tight">
            Por que escolher o Atendimento Veterinário em Casa?
          </h2>
          <p className="text-sm sm:text-lg text-[#4A5568] leading-relaxed">
            Uma experiência humanizada que substitui o medo da clínica veterinária por momentos de calma, afeto e segurança familiar.
          </p>

          {/* Mobile Helper Pill */}
          <div className="md:hidden mt-3 inline-flex items-center gap-1.5 bg-brand-green-100/80 text-brand-green-900 text-xs font-medium px-3 py-1 rounded-full border border-brand-green-300/70 shadow-2xs">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-green-600 animate-pulse" />
            <span>Toque para expandir cada vantagem</span>
          </div>
        </div>

        {/* MOBILE VIEW: Compact Exclusive Accordion */}
        <div className="md:hidden space-y-2.5 max-w-lg mx-auto">
          {benefits.map((benefit, idx) => {
            const IconComp = benefit.icon;
            const isOpen = mobileActive === idx;

            return (
              <div
                key={idx}
                className={`bg-white rounded-2xl border transition-all duration-200 overflow-hidden shadow-xs ${
                  isOpen
                    ? 'border-brand-green-400 ring-2 ring-brand-green-200/60 shadow-soft'
                    : 'border-brand-green-100/90 hover:border-brand-green-200'
                }`}
              >
                {/* Accordion Row Header */}
                <button
                  type="button"
                  onClick={() => toggleMobile(idx)}
                  className="w-full flex items-center justify-between p-3.5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-green-400"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3 min-w-0 flex-1">
                    <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${benefit.color}`}>
                      <IconComp className="w-4 h-4" />
                    </div>
                    <div className="min-w-0 flex-1 pr-1">
                      <div className="flex items-center gap-2 mb-0.5">
                        <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.2 rounded-full bg-brand-bg text-brand-green-800 border border-brand-green-200/70">
                          {benefit.badge}
                        </span>
                      </div>
                      <h3 className="font-display font-bold text-sm text-brand-green-900 leading-snug">
                        {benefit.title}
                      </h3>
                    </div>
                  </div>

                  <div
                    className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 border transition-transform duration-200 ${
                      isOpen
                        ? 'rotate-180 bg-brand-green-100 text-brand-green-800 border-brand-green-300'
                        : 'text-gray-400 border-brand-green-200/70 bg-brand-bg'
                    }`}
                  >
                    <ChevronDown className="w-3.5 h-3.5" />
                  </div>
                </button>

                {/* Accordion Body (Revealed when open) */}
                {isOpen && (
                  <div className="px-3.5 pb-3.5 pt-1 border-t border-brand-green-100/70 animate-fadeIn text-left">
                    <p className="text-xs sm:text-sm text-[#4A5568] leading-relaxed mb-2.5">
                      {benefit.desc}
                    </p>

                    <div className="p-3 rounded-xl bg-brand-green-50/80 border border-brand-green-200/80 text-xs text-brand-green-950 leading-relaxed shadow-2xs">
                      <div className="flex items-center gap-1.5 font-bold text-brand-green-800 mb-0.5">
                        <Info className="w-3.5 h-3.5 text-brand-green-700 shrink-0" />
                        <span>Por que faz a diferença:</span>
                      </div>
                      <p className="font-medium text-[#2D3748] text-[11px] sm:text-xs">
                        {benefit.clarification}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* DESKTOP VIEW: 4 Interactive Cards Grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, idx) => {
            const IconComp = benefit.icon;
            const isExpanded = activeCard === idx;

            return (
              <div
                key={idx}
                onClick={() => toggleDesktop(idx)}
                className={`bg-white rounded-3xl p-6 border transition-all duration-300 cursor-pointer flex flex-col justify-between group ${
                  isExpanded
                    ? 'border-brand-green-400 shadow-soft-hover ring-2 ring-brand-green-200/60 bg-gradient-to-b from-white to-brand-green-50/30'
                    : 'border-brand-green-100/80 shadow-soft hover:shadow-soft-hover hover:border-brand-green-300 hover:-translate-y-1'
                }`}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    toggleDesktop(idx);
                  }
                }}
                aria-expanded={isExpanded}
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${benefit.color} transition-transform group-hover:scale-105`}>
                      <IconComp className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-brand-bg text-brand-green-800 border border-brand-green-200/60">
                      {benefit.badge}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-lg text-brand-green-900 mb-2 leading-snug">
                    {benefit.title}
                  </h3>

                  <p className="text-sm text-[#4A5568] leading-relaxed">
                    {benefit.desc}
                  </p>

                  {isExpanded && (
                    <div className="mt-4 p-3.5 rounded-2xl bg-brand-green-50 border border-brand-green-200 text-xs text-brand-green-950 leading-relaxed animate-fadeIn shadow-xs">
                      <div className="flex items-center gap-1.5 font-bold text-brand-green-800 mb-1">
                        <Info className="w-3.5 h-3.5 text-brand-green-700 shrink-0" />
                        <span>Por que faz a diferença:</span>
                      </div>
                      <p className="font-medium text-[#2D3748]">{benefit.clarification}</p>
                    </div>
                  )}
                </div>

                <div className="flex mt-5 pt-3 border-t border-brand-green-100/80 items-center justify-between text-xs font-semibold text-brand-green-700 group-hover:text-brand-green-900 transition-colors">
                  <span>{isExpanded ? 'Ocultar detalhes' : 'Clique para ver mais'}</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isExpanded ? 'rotate-180 text-brand-green-800' : ''}`} />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};


