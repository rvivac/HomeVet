import React from 'react';
import { ShieldCheck, CheckCircle2 } from 'lucide-react';
import { CLINIC_CONFIG, createWhatsAppLink } from '../data/content';

export const HealthPlansBar: React.FC = () => {
  return (
    <section className="bg-brand-green-800 text-white py-8 border-y border-brand-green-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          
          {/* Left Title */}
          <div className="flex items-center gap-3 text-center lg:text-left">
            <div className="w-10 h-10 rounded-2xl bg-brand-green-700 flex items-center justify-center shrink-0 border border-brand-green-600">
              <ShieldCheck className="w-5 h-5 text-brand-yellow-400" />
            </div>
            <div>
              <h3 className="font-display font-bold text-base sm:text-lg text-white">
                Atendemos Planos de Saúde Pet
              </h3>
              <p className="text-xs text-brand-green-200">
                Seu pet protegido com a facilidade do seu convênio no atendimento domiciliar
              </p>
            </div>
          </div>

          {/* Plan badges */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            {CLINIC_CONFIG.healthPlans.map((plan, i) => (
              <div
                key={i}
                className="bg-brand-green-900/80 border border-brand-green-600/80 px-4 py-2 rounded-2xl flex items-center gap-2 shadow-xs"
              >
                <CheckCircle2 className="w-4 h-4 text-whatsapp" />
                <span className="font-display font-bold text-sm text-white tracking-wide">
                  {plan}
                </span>
              </div>
            ))}
            <div className="bg-brand-green-700/60 border border-brand-green-600/50 px-3.5 py-2 rounded-2xl text-xs text-brand-green-100 font-medium">
              + Atendimentos Particulares
            </div>
          </div>

          {/* CTA */}
          <a
            href={createWhatsAppLink('Olá! Gostaria de saber se o meu plano de saúde pet cobre o atendimento domiciliar.')}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-bold uppercase tracking-wider text-brand-yellow-400 hover:text-white underline underline-offset-4 transition-colors whitespace-nowrap"
          >
            Consultar cobertura do meu plano →
          </a>

        </div>
      </div>
    </section>
  );
};
