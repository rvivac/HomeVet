import React, { useState } from 'react';
import { Stethoscope, Syringe, FlaskConical, Heart, Check, MessageCircle, Sparkles, ChevronDown, Award } from 'lucide-react';
import { SERVICES, createWhatsAppLink } from '../data/content';

export const Services: React.FC = () => {
  const [selectedMobileId, setSelectedMobileId] = useState<string | null>(null);

  const toggleMobileService = (id: string) => {
    setSelectedMobileId(prev => (prev === id ? null : id));
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
    ];
    return palettes[index % palettes.length];
  };

  return (
    <section id="servicos" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 bg-brand-green-100 text-brand-green-800 text-xs sm:text-sm font-bold px-3.5 py-1.5 rounded-full mb-4 border border-brand-green-200">
            <Sparkles className="w-4 h-4 text-brand-yellow-500" />
            <span>Cuidado Especializado Onde Ele Mais Gosta</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-4xl text-brand-green-900 tracking-tight mb-4">
            Nossos Serviços Veterinários em Casa
          </h2>
          <p className="text-base sm:text-lg text-[#4A5568] leading-relaxed">
            Medicina veterinária preventiva e diagnóstica com todos os protocolos de higiene, carinho e tecnologia hospitalar portátil.
          </p>

          {/* Mobile Helper: Guides user to tap a service to see details */}
          <div className="md:hidden mt-4 inline-flex items-center gap-2 bg-brand-green-50 text-brand-green-800 text-xs font-medium px-3.5 py-1.5 rounded-full border border-brand-green-200/70 shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-brand-green-500 animate-pulse" />
            <span>Toque em um serviço para ver os detalhes</span>
          </div>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {SERVICES.map((service, index) => {
            const IconComponent = getIcon(service.iconName);
            const palette = getColors(index);
            const isMobileOpen = selectedMobileId === service.id;

            return (
              <div
                key={service.id}
                className={`bg-brand-bg rounded-2xl md:rounded-3xl p-5 md:p-6 border transition-all duration-300 flex flex-col justify-between ${
                  isMobileOpen
                    ? `${palette.activeBorder} shadow-soft-hover bg-white`
                    : `border-brand-green-100 shadow-soft hover:shadow-soft-hover md:hover:-translate-y-1.5 ${palette.cardBorder}`
                }`}
              >
                <div>
                  {/* Desktop Header (Static on md+) */}
                  <div className="hidden md:block">
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
                  </div>

                  {/* Mobile Header: Interactive Button to Select and Expand */}
                  <button
                    type="button"
                    onClick={() => toggleMobileService(service.id)}
                    className="w-full flex items-center justify-between gap-3 text-left md:hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-green-400 rounded-xl"
                    aria-expanded={isMobileOpen}
                    aria-controls={`service-details-${service.id}`}
                  >
                    <div className="flex items-center gap-3 min-w-0 flex-1">
                      <div className={`w-11 h-11 rounded-2xl flex items-center justify-center p-2.5 shadow-xs shrink-0 ${palette.bgBadge}`}>
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <div className="min-w-0 flex-1">
                        {service.badge && (
                          <span className="inline-block text-[10px] font-bold px-2 py-0.5 rounded-full bg-white text-brand-green-800 border border-brand-green-200/60 shadow-xs mb-1">
                            {service.badge}
                          </span>
                        )}
                        <h3 className="font-display font-bold text-base text-brand-green-900 leading-snug">
                          {service.title}
                        </h3>
                      </div>
                    </div>

                    {/* Mobile Expand / Collapse Indicator */}
                    <div className="flex items-center gap-1.5 shrink-0 pl-1">
                      <span className="text-[11px] font-semibold text-brand-green-700">
                        {isMobileOpen ? 'Ocultar' : 'Detalhes'}
                      </span>
                      <div
                        className={`w-7 h-7 rounded-lg bg-white flex items-center justify-center border transition-all duration-300 ${
                          isMobileOpen
                            ? 'rotate-180 bg-brand-green-100 text-brand-green-800 border-brand-green-300'
                            : 'text-gray-400 border-brand-green-200/70'
                        }`}
                      >
                        <ChevronDown className="w-3.5 h-3.5" />
                      </div>
                    </div>
                  </button>

                  {/* Details Container: Hidden on mobile by default, reveals on selection; Always visible on desktop */}
                  <div
                    id={`service-details-${service.id}`}
                    className={`${
                      isMobileOpen
                        ? 'block pt-4 mt-3 border-t border-brand-green-100/80 animate-fadeIn'
                        : 'hidden md:block'
                    } md:pt-0 md:mt-0 md:border-t-0`}
                  >
                    {/* Short Description */}
                    <p className="text-sm text-[#4A5568] leading-relaxed md:leading-snug md:line-clamp-2 md:h-10 md:overflow-hidden mb-4 md:mb-5">
                      {service.shortDesc}
                    </p>

                    {/* Checklist of features */}
                    <ul className="space-y-2.5 mb-5 md:mb-6 text-xs text-[#2D3748]">
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
                </div>

                {/* Card Actions: Hidden on mobile by default, reveals when card is selected */}
                <div
                  className={`${
                    isMobileOpen
                      ? 'block pt-3 border-t border-brand-green-200/50 animate-fadeIn'
                      : 'hidden md:block md:pt-4 md:border-t md:border-brand-green-200/50'
                  }`}
                >
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
