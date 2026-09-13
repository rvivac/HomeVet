import React, { useState } from 'react';
import { Stethoscope, Syringe, FlaskConical, Heart, Check, MessageCircle, Sparkles, Award, ChevronLeft, ChevronRight, HeartHandshake } from 'lucide-react';
import { SERVICES, createWhatsAppLink } from '../data/content';

export const Services: React.FC = () => {
  // Mobile active tab (0: Consultas, 1: Vacinas, 2: Exames, 3: Microchip, 4: Cirurgias)
  const [activeTab, setActiveTab] = useState(0);

  const tabLabels = ['Consultas', 'Vacinas', 'Exames', 'Microchip', 'Cirurgias'];

  const prevTab = () => {
    setActiveTab(prev => (prev === 0 ? SERVICES.length - 1 : prev - 1));
  };

  const nextTab = () => {
    setActiveTab(prev => (prev === SERVICES.length - 1 ? 0 : prev + 1));
  };

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Stethoscope':
        return Stethoscope;
      case 'Syringe':
        return Syringe;
      case 'FlaskConical':
        return FlaskConical;
      case 'Award':
        return Award;
      case 'HeartHandshake':
        return HeartHandshake;
      case 'Heart':
        return Heart;
      default:
        return Stethoscope;
    }
  };

  const getColors = (index: number) => {
    const palettes = [
      {
        bgBadge: 'bg-brand-green-100 text-brand-green-800',
        cardBorder: 'hover:border-brand-green-300',
        activeBorder: 'border-brand-green-400 ring-2 ring-brand-green-200/60',
        accentBg: 'bg-brand-green-50',
      },
      {
        bgBadge: 'bg-brand-yellow-100 text-amber-800',
        cardBorder: 'hover:border-brand-yellow-300',
        activeBorder: 'border-brand-yellow-400 ring-2 ring-brand-yellow-200/60',
        accentBg: 'bg-brand-yellow-50/50',
      },
      {
        bgBadge: 'bg-blue-100 text-blue-800',
        cardBorder: 'hover:border-blue-300',
        activeBorder: 'border-blue-400 ring-2 ring-blue-200/60',
        accentBg: 'bg-blue-50/50',
      },
      {
        bgBadge: 'bg-brand-peach-100 text-rose-800',
        cardBorder: 'hover:border-brand-peach-200',
        activeBorder: 'border-brand-peach-300 ring-2 ring-brand-peach-200/60',
        accentBg: 'bg-brand-peach-50/50',
      },
      {
        bgBadge: 'bg-teal-100 text-teal-800',
        cardBorder: 'hover:border-teal-300',
        activeBorder: 'border-teal-400 ring-2 ring-teal-200/60',
        accentBg: 'bg-teal-50/50',
      },
    ];
    return palettes[index % palettes.length];
  };

  return (
    <section id="servicos" className="py-16 sm:py-20 bg-white relative border-t border-brand-green-100/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
          <div className="inline-flex items-center gap-2 bg-brand-green-100 text-brand-green-800 text-xs sm:text-sm font-bold px-3.5 py-1.5 rounded-full mb-4 border border-brand-green-200">
            <Sparkles className="w-4 h-4 text-brand-yellow-500" />
            <span>Cuidado Especializado Onde Ele Mais Gosta</span>
          </div>
          <h2 className="font-display font-extrabold text-2xl sm:text-4xl md:text-4xl text-brand-green-900 tracking-tight mb-3 sm:mb-4">
            Nossos Serviços Veterinários em Casa
          </h2>
          <p className="text-sm sm:text-lg text-[#4A5568] leading-relaxed">
            Medicina veterinária preventiva e diagnóstica com todos os protocolos de higiene, carinho e tecnologia hospitalar portátil.
          </p>

          {/* Mobile Helper */}
          <div className="md:hidden mt-3 inline-flex items-center gap-1.5 bg-brand-green-50 text-brand-green-800 text-xs font-medium px-3 py-1 rounded-full border border-brand-green-200/70 shadow-2xs">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-green-600 animate-pulse" />
            <span>Alterne entre as abas para ver cada serviço</span>
          </div>
        </div>

        {/* MOBILE VIEW: Segmented Tabs & Active Service Card */}
        <div className="md:hidden max-w-lg mx-auto">
          {/* Segmented Pill Tabs Bar (Grid responsiva com suporte a 5 itens) */}
          <div className="grid grid-cols-2 gap-2 mb-4" role="tablist" aria-label="Seletor de Serviços">
            {SERVICES.map((service, index) => {
              const IconComponent = getIcon(service.iconName);
              const isSelected = activeTab === index;
              const palette = getColors(index);
              const isLastOdd = SERVICES.length % 2 !== 0 && index === SERVICES.length - 1;

              return (
                <button
                  key={service.id}
                  type="button"
                  onClick={() => setActiveTab(index)}
                  className={`flex items-center gap-2.5 py-2.5 px-3 rounded-2xl border font-bold text-xs transition-all duration-200 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-green-400 ${
                    isLastOdd ? 'col-span-2' : ''
                  } ${
                    isSelected
                      ? 'bg-brand-petrol-600 text-white border-brand-petrol-600 shadow-md ring-2 ring-brand-petrol-300/50'
                      : 'bg-brand-bg text-brand-green-900 border-brand-green-200/80 hover:bg-brand-green-50 shadow-2xs'
                  }`}
                  aria-selected={isSelected}
                  role="tab"
                >
                  <div
                    className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 ${
                      isSelected ? 'bg-white/20 text-white' : `${palette.bgBadge}`
                    }`}
                  >
                    <IconComponent className="w-3.5 h-3.5" />
                  </div>
                  <div className="min-w-0 flex-1 truncate">
                    <span className="block truncate">{tabLabels[index] || service.title}</span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Featured Service Card */}
          {(() => {
            const currentService = SERVICES[activeTab];
            const IconComponent = getIcon(currentService.iconName);
            const palette = getColors(activeTab);

            return (
              <div
                key={currentService.id}
                className="bg-brand-bg rounded-3xl p-5 border border-brand-green-200/90 shadow-soft animate-fadeIn"
              >
                {/* Header: Icon + Badge + Arrows */}
                <div className="flex items-center justify-between gap-2 mb-4 pb-3 border-b border-brand-green-200/60">
                  <div className="flex items-center gap-2.5 min-w-0 flex-1">
                    <div className={`w-10 h-10 rounded-2xl flex items-center justify-center p-2 shadow-xs shrink-0 ${palette.bgBadge}`}>
                      <IconComponent className="w-5 h-5" />
                    </div>
                    {currentService.badge && (
                      <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-white text-brand-green-800 border border-brand-green-200/60 shadow-xs uppercase tracking-wider truncate">
                        {currentService.badge}
                      </span>
                    )}
                  </div>

                  {/* Previous / Next Controls */}
                  <div className="flex items-center gap-1 bg-white px-2 py-1 rounded-xl border border-brand-green-200/70 shrink-0">
                    <button
                      type="button"
                      onClick={prevTab}
                      aria-label="Serviço anterior"
                      className="p-1 text-gray-500 hover:text-brand-green-900 rounded-lg hover:bg-brand-bg active:scale-95 transition-all"
                    >
                      <ChevronLeft className="w-3.5 h-3.5" />
                    </button>
                    <span className="text-[11px] font-bold text-brand-green-900 px-1">
                      {activeTab + 1}/{SERVICES.length}
                    </span>
                    <button
                      type="button"
                      onClick={nextTab}
                      aria-label="Próximo serviço"
                      className="p-1 text-gray-500 hover:text-brand-green-900 rounded-lg hover:bg-brand-bg active:scale-95 transition-all"
                    >
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-display font-bold text-base sm:text-lg text-brand-green-900 mb-2 leading-snug">
                  {currentService.title}
                </h3>

                {/* Short Description */}
                <p className="text-xs sm:text-sm text-[#4A5568] leading-relaxed mb-4">
                  {currentService.shortDesc}
                </p>

                {/* Features Checklist */}
                <ul className="space-y-2 mb-5 text-xs text-[#2D3748]">
                  {currentService.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <div className="w-4 h-4 rounded-full bg-brand-green-100 flex items-center justify-center shrink-0 mt-0.5 text-brand-green-700">
                        <Check className="w-2.5 h-2.5 stroke-[3]" />
                      </div>
                      <span className="leading-tight font-medium text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* WhatsApp Action Button */}
                <a
                  href={createWhatsAppLink(currentService.suggestedMsg)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-brand-petrol-600 hover:bg-brand-petrol-700 text-white text-sm font-bold py-3 px-4 rounded-2xl shadow-md hover:shadow-lg transition-all active:scale-[0.98]"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>Agendar {tabLabels[activeTab]} Agora</span>
                </a>

                {/* Pagination Dots Indicator */}
                <div className="flex items-center justify-center gap-1.5 mt-4">
                  {SERVICES.map((_, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setActiveTab(idx)}
                      aria-label={`Ir para ${tabLabels[idx]}`}
                      className={`h-1.5 rounded-full transition-all duration-200 ${
                        activeTab === idx
                          ? 'w-6 bg-brand-petrol-600'
                          : 'w-2 bg-brand-green-300 hover:bg-brand-green-400'
                      }`}
                    />
                  ))}
                </div>
              </div>
            );
          })()}
        </div>

        {/* DESKTOP VIEW: 5 Cards Grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {SERVICES.map((service, index) => {
            const IconComponent = getIcon(service.iconName);
            const palette = getColors(index);

            return (
              <div
                key={service.id}
                className={`bg-brand-bg rounded-3xl p-6 border transition-all duration-300 flex flex-col justify-between border-brand-green-100 shadow-soft hover:shadow-soft-hover hover:-translate-y-1.5 ${palette.cardBorder}`}
              >
                <div>
                  {/* Top Bar: Icon + Badge */}
                  <div className="flex items-center justify-between mb-5">
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center p-3 shadow-xs ${palette.bgBadge}`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                    {service.badge && (
                      <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-white text-brand-green-800 border border-brand-green-200/60 shadow-xs">
                        {service.badge}
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="font-display font-bold text-xl text-brand-green-900 mb-2 min-h-[3.5rem] flex items-center">
                    {service.title}
                  </h3>

                  {/* Short Description */}
                  <p className="text-sm text-[#4A5568] leading-relaxed line-clamp-2 h-10 overflow-hidden mb-5">
                    {service.shortDesc}
                  </p>

                  {/* Checklist of features */}
                  <ul className="space-y-2.5 mb-6 text-xs text-[#2D3748]">
                    {service.features.slice(0, 3).map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <div className="w-4 h-4 rounded-full bg-brand-green-100 flex items-center justify-center shrink-0 mt-0.5 text-brand-green-700">
                          <Check className="w-2.5 h-2.5 stroke-[3]" />
                        </div>
                        <span className="leading-tight font-medium text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card Actions */}
                <div className="pt-4 border-t border-brand-green-200/50">
                  <a
                    href={createWhatsAppLink(service.suggestedMsg)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 bg-brand-petrol-600 hover:bg-brand-petrol-700 text-white text-sm font-bold py-2.5 px-4 rounded-2xl shadow-md hover:shadow-lg transition-all active:scale-[0.98]"
                  >
                    <MessageCircle className="w-4 h-4 fill-white" />
                    <span>Agendar Agora</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
