import React from 'react';
import { Sparkles, MessageCircle, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { createWhatsAppLink, CLINIC_CONFIG } from '../data/content';

export const Hero: React.FC = () => {
  return (
    <section id="inicio" className="relative pt-24 pb-14 md:pt-32 md:pb-20 overflow-hidden">
      {/* Decorative gentle pastel background blobs */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-full max-w-5xl h-80 bg-gradient-to-b from-brand-green-100/40 via-brand-yellow-100/20 to-transparent -z-10 rounded-[4rem] blur-3xl pointer-events-none" />
      <div className="absolute -top-20 -right-20 w-80 h-80 bg-brand-yellow-200/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-40 -left-20 w-80 h-80 bg-brand-green-200/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Friendly pill badge */}
        <div className="inline-flex items-center gap-2 bg-brand-green-100 border border-brand-green-300 px-4 py-1.5 rounded-full text-brand-green-900 text-xs sm:text-sm font-bold mb-5 shadow-2xs">
          <Sparkles className="w-4 h-4 text-brand-yellow-500 fill-brand-yellow-400" />
          <span>Atendimento Veterinário em Domicílio • Peruíbe e Região</span>
        </div>

        {/* H1 Principal: Proposta de Valor Clara na Primeira Dobra */}
        <h1 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] text-brand-green-900 leading-[1.2] tracking-tight mb-5 max-w-4xl mx-auto">
          O atendimento veterinário que vai até você,{' '}
          <span className="relative inline-block text-brand-green-800">
            sem o estresse
            <svg
              className="absolute left-0 -bottom-1.5 w-full h-3 text-brand-yellow-400"
              viewBox="0 0 100 12"
              preserveAspectRatio="none"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M2 9C28 2 74 2 98 9"
                stroke="currentColor"
                strokeWidth="4"
                strokeLinecap="round"
              />
            </svg>
          </span>{' '}
          da clínica.
        </h1>

        {/* Subtítulo da Proposta de Valor */}
        <p className="text-base sm:text-lg md:text-xl text-[#374151] max-w-3xl mx-auto font-normal leading-relaxed mb-8">
          Consultas, vacinas e exames preventivos no conforto e segurança do lar para cães e gatos. O cuidado que seu pet merece, sem o trauma do transporte ou salas de espera.
        </p>

        {/* CTAs Primário e Secundário Above the Fold */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 max-w-md sm:max-w-none mx-auto mb-8">
          {/* CTA Primário - Alto Contraste (WCAG AA) com alvo de toque amplo (≥ 48px) */}
          <a
            href={createWhatsAppLink('Olá, Dr. Renato! Gostaria de agendar um atendimento veterinário em domicílio para o meu pet.')}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#166534] hover:bg-[#14532d] text-white text-base sm:text-lg font-bold py-3.5 px-7 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 min-h-[48px] focus:outline-none focus-visible:ring-4 focus-visible:ring-brand-green-300"
            aria-label="Agendar atendimento veterinário em domicílio pelo WhatsApp"
          >
            <MessageCircle className="w-5 h-5 fill-white" />
            <span>Agendar Atendimento</span>
          </a>

          {/* CTA Secundário */}
          <a
            href="#servicos"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-brand-green-50 text-brand-green-900 border-2 border-brand-green-300 text-sm sm:text-base font-bold py-3 px-6 rounded-2xl shadow-xs hover:shadow-md transition-all duration-200 min-h-[48px] focus:outline-none focus-visible:ring-4 focus-visible:ring-brand-green-200"
            aria-label="Conhecer todos os serviços veterinários oferecidos"
          >
            <span>Ver Nossos Serviços</span>
            <ArrowRight className="w-4 h-4 text-brand-green-700" />
          </a>
        </div>

        {/* Micro-provas de confiança e credibilidade imediatas */}
        <div className="flex flex-wrap items-center justify-center gap-y-2 gap-x-5 text-xs sm:text-sm text-[#374151] font-medium pt-2">
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-[#166534] shrink-0" />
            <span>Sem estresse de transporte</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-[#166534] shrink-0" />
            <span>Hora marcada no seu lar</span>
          </div>
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-[#166534] shrink-0" />
            <span>{CLINIC_CONFIG.crmv}</span>
          </div>
        </div>

      </div>
    </section>
  );
};
