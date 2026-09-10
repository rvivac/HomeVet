import React from 'react';
import { Sparkles } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section id="inicio" className="relative pt-28 pb-14 md:pt-36 md:pb-20 overflow-hidden">
      {/* Decorative gentle pastel background blobs */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-full max-w-5xl h-80 bg-gradient-to-b from-brand-green-100/40 via-brand-yellow-100/20 to-transparent -z-10 rounded-[4rem] blur-3xl pointer-events-none" />
      <div className="absolute -top-20 -right-20 w-80 h-80 bg-brand-yellow-200/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-40 -left-20 w-80 h-80 bg-brand-green-200/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Friendly pill badge */}
        <div className="inline-flex items-center gap-2 bg-brand-green-100/80 border border-brand-green-300/60 px-4 py-1.5 rounded-full text-brand-green-800 text-xs sm:text-sm font-semibold mb-6 shadow-xs">
          <Sparkles className="w-4 h-4 text-brand-yellow-500 fill-brand-yellow-400" />
          <span>Atendimento Veterinário Humanizado em Casa</span>
        </div>

        {/* Slogan Principal */}
        <h1 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] text-brand-green-900 leading-[1.2] tracking-tight mb-6 max-w-4xl mx-auto">
          O atendimento veterinário que vai até você,{' '}
          <span className="relative inline-block text-brand-green-700">
            sem o estresse
            <svg
              className="absolute left-0 -bottom-1.5 w-full h-3 text-brand-yellow-400"
              viewBox="0 0 100 12"
              preserveAspectRatio="none"
              fill="none"
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

        {/* Subtítulo do Slogan */}
        <p className="text-base sm:text-lg md:text-xl text-[#4A5568] max-w-3xl mx-auto font-normal leading-relaxed">
          Consultas, vacinas e exames preventivos no conforto e segurança do lar. O cuidado que seu pet ama, no tapete ou sofá onde ele se sente protegido.
        </p>

      </div>
    </section>
  );
};
