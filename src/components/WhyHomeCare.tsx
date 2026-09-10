import React, { useState } from 'react';
import { CarFront, Home, HeartHandshake, ShieldAlert, Sparkles, ChevronDown, Info } from 'lucide-react';

export const WhyHomeCare: React.FC = () => {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const benefits = [
    {
      icon: CarFront,
      title: 'Sem estresse no Transporte',
      desc: 'Sem desespero dentro da caixa de transporte ao sair de casa.',
      clarification: 'Nada de trânsito, caixas apertadas, salivação, vomitos ou dor de briga.',
      badge: 'Sem Traumas',
      color: 'bg-brand-green-100 text-brand-green-800',
    },
    {
      icon: Home,
      title: 'No Território do Pet',
      desc: 'O animal mantém a frequência cardíaca e pressão refletindo seu estado real de saúde.',
      clarification: 'Cheiros estranhos, latidos altos e risco de contato com animais doentes.',
      badge: 'No Conforto do Lar',
      color: 'bg-brand-yellow-100 text-amber-800',
    },
    {
      icon: ShieldAlert,
      title: 'Cheiros estranhos, latidos altos e risco de contato com animais doentes',
      desc: 'Na sua casa, seu pet fica protegido de estímulos estressantes e livre de salas de espera compartilhadas.',
      clarification: 'Ambiente higienizado e tranquilo do seu próprio lar, sem cruzar com outros animais agitados ou enfermos.',
      badge: 'Proteção Total',
      color: 'bg-brand-peach-100 text-rose-800',
    },
    {
      icon: HeartHandshake,
      title: 'Atenção 100% Individualizada',
      desc: 'Tempo dedicado exclusivamente para ouvir a família, examinar com carinho e tirar todas as dúvidas com calma.',
      clarification: 'Consulta com escuta atenta, sem a pressa do consultório e com foco total no bem-estar físico e emocional do seu pet.',
      badge: 'Sem Pressa',
      color: 'bg-emerald-100 text-emerald-800',
    },
  ];

  const toggleCard = (idx: number) => {
    setActiveCard(activeCard === idx ? null : idx);
  };

  return (
    <section id="vantagens" className="py-20 bg-brand-bg relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-brand-green-100 text-brand-green-800 text-xs sm:text-sm font-bold px-4 py-1.5 rounded-full mb-4 border border-brand-green-300/80 shadow-xs">
            <Sparkles className="w-4 h-4 text-brand-yellow-500 fill-brand-yellow-400" />
            <span>Mais Tranquilidade para Quem Você Ama</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-brand-green-900 tracking-tight mb-5 leading-tight">
            Por que escolher o Atendimento Veterinário em Casa?
          </h2>
          <p className="text-base sm:text-lg text-[#4A5568] leading-relaxed">
            Uma experiência humanizada que substitui o medo da clínica veterinária por momentos de calma, afeto e segurança familiar.
          </p>
          {/* Mobile Helper */}
          <div className="md:hidden mt-4 inline-flex items-center gap-2 bg-brand-green-100/70 text-brand-green-900 text-xs font-medium px-3.5 py-1.5 rounded-full border border-brand-green-300/60 shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-brand-green-600 animate-pulse" />
            <span>Toque em uma vantagem para ver os detalhes</span>
          </div>
        </div>

        {/* 4 Feature Cards (Subcards Interativos com Esclarecimento) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {benefits.map((benefit, idx) => {
            const IconComp = benefit.icon;
            const isExpanded = activeCard === idx;

            return (
              <div
                key={idx}
                onClick={() => toggleCard(idx)}
                className={`bg-white rounded-2xl md:rounded-3xl p-5 md:p-6 border transition-all duration-300 cursor-pointer flex flex-col justify-between group ${
                  isExpanded
                    ? 'border-brand-green-400 shadow-soft-hover ring-2 ring-brand-green-200/60 bg-gradient-to-b from-white to-brand-green-50/30'
                    : 'border-brand-green-100/80 shadow-soft hover:shadow-soft-hover hover:border-brand-green-300 md:hover:-translate-y-1'
                }`}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    toggleCard(idx);
                  }
                }}
                aria-expanded={isExpanded}
              >
                <div>
                  {/* Desktop Header (Static on md+) */}
                  <div className="hidden md:block">
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
                  </div>

                  {/* Mobile Header: Compact Row with Icon, Title, Badge and Toggle */}
                  <div className="flex items-center justify-between gap-3 text-left md:hidden">
                    <div className="flex items-center gap-3 min-w-0 flex-1">
                      <div className={`w-11 h-11 rounded-2xl flex items-center justify-center shrink-0 ${benefit.color}`}>
                        <IconComp className="w-5 h-5" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <span className="inline-block text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-brand-bg text-brand-green-800 border border-brand-green-200/60 mb-1">
                          {benefit.badge}
                        </span>
                        <h3 className="font-display font-bold text-base text-brand-green-900 leading-snug">
                          {benefit.title}
                        </h3>
                      </div>
                    </div>

                    {/* Mobile Expand / Collapse Indicator */}
                    <div className="flex items-center gap-1.5 shrink-0 pl-1">
                      <span className="text-[11px] font-semibold text-brand-green-700">
                        {isExpanded ? 'Ocultar' : 'Detalhes'}
                      </span>
                      <div
                        className={`w-7 h-7 rounded-lg bg-white flex items-center justify-center border transition-all duration-300 ${
                          isExpanded
                            ? 'rotate-180 bg-brand-green-100 text-brand-green-800 border-brand-green-300'
                            : 'text-gray-400 border-brand-green-200/70'
                        }`}
                      >
                        <ChevronDown className="w-3.5 h-3.5" />
                      </div>
                    </div>
                  </div>

                  {/* Details Container: Hidden on mobile until tapped; On desktop desc is always visible */}
                  <div
                    className={`${
                      isExpanded
                        ? 'block pt-3 mt-3 border-t border-brand-green-100/80 animate-fadeIn'
                        : 'hidden md:block'
                    } md:pt-0 md:mt-0 md:border-t-0`}
                  >
                    <p className="text-sm text-[#4A5568] leading-relaxed">
                      {benefit.desc}
                    </p>

                    {/* Esclarecimento: Exibido quando expandido */}
                    {isExpanded && (
                      <div className="mt-3 md:mt-4 p-3.5 rounded-2xl bg-brand-green-50 border border-brand-green-200 text-xs text-brand-green-950 leading-relaxed animate-fadeIn shadow-xs">
                        <div className="flex items-center gap-1.5 font-bold text-brand-green-800 mb-1">
                          <Info className="w-3.5 h-3.5 text-brand-green-700 shrink-0" />
                          <span>Esclarecimento:</span>
                        </div>
                        <p className="font-medium text-[#2D3748]">{benefit.clarification}</p>
                      </div>
                    )}
                  </div>
                </div>

                {/* Desktop-only Callout at bottom */}
                <div className="hidden md:flex mt-5 pt-3 border-t border-brand-green-100/80 items-center justify-between text-xs font-semibold text-brand-green-700 group-hover:text-brand-green-900 transition-colors">
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


