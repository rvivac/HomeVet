import React from 'react';
import { Heart, Clock, ThermometerSnowflake, ShieldCheck } from 'lucide-react';
import { CLINIC_CONFIG } from '../data/content';

export const TrustMetrics: React.FC = () => {
  const highlights = [
    {
      icon: Heart,
      title: 'Acolhimento Fear-Free',
      subtitle: 'Sem contenções bruscas, respeitando o ritmo do seu pet',
      bgColor: 'bg-rose-50 text-rose-600',
    },
    {
      icon: Clock,
      title: 'Consulta sem Pressa',
      subtitle: 'Tempo dedicado de 50 a 60 minutos por atendimento',
      bgColor: 'bg-brand-yellow-100 text-brand-yellow-500',
    },
    {
      icon: ThermometerSnowflake,
      title: 'Cadeia de Frio Rigorosa',
      subtitle: 'Vacinas importadas mantidas entre 2°C e 8°C certificados',
      bgColor: 'bg-blue-50 text-blue-600',
    },
    {
      icon: ShieldCheck,
      title: CLINIC_CONFIG.crmv,
      subtitle: 'Médica Veterinária devidamente habilitada pelo CRMV',
      bgColor: 'bg-brand-green-100 text-brand-green-700',
    },
  ];

  return (
    <section className="py-6 border-y border-brand-green-200/50 bg-white/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div key={index} className="flex items-start gap-3.5 p-2">
                <div className={`w-11 h-11 rounded-2xl flex items-center justify-center shrink-0 ${item.bgColor}`}>
                  <IconComponent className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-sm text-brand-green-900 leading-snug">
                    {item.title}
                  </h4>
                  <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
