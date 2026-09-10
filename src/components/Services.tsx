import React, { useState } from 'react';
import { Stethoscope, Syringe, FlaskConical, Heart, Check, ChevronRight, MessageCircle, Sparkles, X } from 'lucide-react';
import { SERVICES, createWhatsAppLink } from '../data/content';
import type { ServiceItem } from '../types';

export const Services: React.FC = () => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Stethoscope':
        return Stethoscope;
      case 'Syringe':
        return Syringe;
      case 'FlaskConical':
        return FlaskConical;
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
        accentBg: 'bg-brand-green-50',
      },
      {
        bgBadge: 'bg-brand-yellow-100 text-amber-800',
        cardBorder: 'hover:border-brand-yellow-300',
        accentBg: 'bg-brand-yellow-50/50',
      },
      {
        bgBadge: 'bg-blue-100 text-blue-800',
        cardBorder: 'hover:border-blue-300',
        accentBg: 'bg-blue-50/50',
      },
      {
        bgBadge: 'bg-brand-peach-100 text-rose-800',
        cardBorder: 'hover:border-brand-peach-200',
        accentBg: 'bg-brand-peach-50/50',
      },
    ];
    return palettes[index % palettes.length];
  };

  return (
    <section id="servicos" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
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
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service, index) => {
            const IconComponent = getIcon(service.iconName);
            const palette = getColors(index);

            return (
              <div
                key={service.id}
                className={`bg-brand-bg rounded-3xl p-6 border border-brand-green-100 shadow-soft hover:shadow-soft-hover transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between ${palette.cardBorder}`}
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

                  {/* Short Description - Strict UX: Maximum 2 lines */}
                  <p className="text-sm text-[#4A5568] leading-snug line-clamp-2 h-10 overflow-hidden mb-5">
                    {service.shortDesc}
                  </p>

                  {/* Checklist of features - Strict UX: Exactly up to 3 general topics */}
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

                {/* Card Actions: Internal button in alternative color (azul petróleo) with short direct phrase */}
                <div className="space-y-2 pt-4 border-t border-brand-green-200/50">
                  <a
                    href={createWhatsAppLink(service.suggestedMsg)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 bg-brand-petrol-600 hover:bg-brand-petrol-700 text-white text-sm font-bold py-2.5 px-4 rounded-2xl shadow-md hover:shadow-lg transition-all active:scale-[0.98]"
                  >
                    <MessageCircle className="w-4 h-4 fill-white" />
                    <span>Agendar Agora</span>
                  </a>

                  <button
                    onClick={() => setSelectedService(service)}
                    className="w-full flex items-center justify-center gap-1.5 text-xs font-semibold text-brand-green-800 hover:text-brand-green-900 py-1.5 hover:underline"
                  >
                    <span>Ver mais detalhes</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

      </div>

      {/* Detail Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-3xl max-w-lg w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl border border-brand-green-100 relative">
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-5 right-5 p-2 rounded-full text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-colors"
              aria-label="Fechar modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="w-12 h-12 rounded-2xl bg-brand-green-100 text-brand-green-800 flex items-center justify-center mb-4">
              {React.createElement(getIcon(selectedService.iconName), { className: 'w-6 h-6' })}
            </div>

            <h3 className="font-display font-bold text-2xl text-brand-green-900 mb-2">
              {selectedService.title}
            </h3>
            <p className="text-sm text-[#4A5568] leading-relaxed mb-6">
              {selectedService.longDesc}
            </p>

            <div className="bg-brand-bg rounded-2xl p-4 mb-6 border border-brand-green-100">
              <h4 className="text-xs font-bold uppercase tracking-wider text-brand-green-800 mb-3">
                O que está incluso neste atendimento:
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm text-gray-700">
                {selectedService.features.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-brand-green-600 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={createWhatsAppLink(selectedService.suggestedMsg)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 bg-brand-petrol-600 hover:bg-brand-petrol-700 text-white font-bold py-3 px-4 rounded-2xl shadow-md hover:shadow-lg transition-all"
              >
                <MessageCircle className="w-5 h-5 fill-white" />
                <span>Agendar Agora</span>
              </a>
              <button
                onClick={() => setSelectedService(null)}
                className="py-3 px-5 rounded-2xl bg-gray-100 text-gray-700 font-semibold hover:bg-gray-200 transition-colors"
              >
                Voltar
              </button>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
