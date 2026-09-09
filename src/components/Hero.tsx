import React from 'react';
import { MessageCircle, ShieldCheck, Heart, Sparkles, CheckCircle2, Star } from 'lucide-react';
import { CLINIC_CONFIG, createWhatsAppLink } from '../data/content';

export const Hero: React.FC = () => {
  return (
    <section id="inicio" className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      {/* Decorative gentle pastel background blobs */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-brand-green-100/40 via-brand-yellow-100/20 to-transparent -z-10 rounded-[4rem] blur-3xl pointer-events-none" />
      <div className="absolute -top-20 -right-20 w-80 h-80 bg-brand-yellow-200/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-60 -left-20 w-80 h-80 bg-brand-green-200/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Empathetic Copy & Primary Call-to-Action */}
          <div className="lg:col-span-7 text-center lg:text-left">
            {/* Friendly pill badge */}
            <div className="inline-flex items-center gap-2 bg-brand-green-100/80 border border-brand-green-300/60 px-3.5 py-1.5 rounded-full text-brand-green-800 text-xs sm:text-sm font-semibold mb-6 shadow-sm">
              <Sparkles className="w-4 h-4 text-brand-yellow-500 fill-brand-yellow-400" />
              <span>Atendimento Veterinário Humanizado em Casa</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] text-brand-green-900 leading-[1.18] tracking-tight mb-5">
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

            {/* Subtitle */}
            <p className="text-base sm:text-lg md:text-xl text-[#4A5568] max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed mb-8">
              Consultas, vacinas e exames preventivos no conforto e segurança do lar. O cuidado que seu pet ama, no tapete ou sofá onde ele se sente protegido.
            </p>

            {/* Primary Action Button & Micro-Guarantee */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-8">
              <a
                href={createWhatsAppLink('Olá, Dra.! Gostaria de agendar uma consulta em casa para o meu pet.')}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-whatsapp hover:bg-whatsapp-hover text-white text-base sm:text-lg font-bold px-8 py-4 rounded-2xl shadow-pill transition-all duration-300 hover:shadow-xl hover:-translate-y-1 active:translate-y-0 group"
              >
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <MessageCircle className="w-5 h-5 fill-white" />
                </div>
                <span>Chamar no WhatsApp</span>
              </a>

              <a
                href="#servicos"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/90 hover:bg-brand-green-50 text-brand-green-800 text-base font-bold px-6 py-4 rounded-2xl border border-brand-green-200/80 shadow-sm transition-all hover:-translate-y-0.5"
              >
                <span>Conhecer Serviços</span>
              </a>
            </div>

            {/* Reassuring Bullet Points */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t border-brand-green-200/40 text-left">
              <div className="flex items-center gap-2 text-sm text-[#4A5568]">
                <CheckCircle2 className="w-4 h-4 text-brand-green-600 shrink-0" />
                <span>Sem caixa de transporte</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-[#4A5568]">
                <CheckCircle2 className="w-4 h-4 text-brand-green-600 shrink-0" />
                <span>Consulta calma e sem pressa</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-[#4A5568]">
                <ShieldCheck className="w-4 h-4 text-brand-green-600 shrink-0" />
                <span>{CLINIC_CONFIG.crmv} Ativo</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Image with Floating Badges */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Background decorative blob behind image */}
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-green-200 to-brand-yellow-200 rounded-3xl sm:rounded-[2.5rem] rotate-2 scale-[1.02] -z-10 shadow-lg" />
              
              {/* Main Photo Card */}
              <div className="overflow-hidden rounded-3xl sm:rounded-[2.5rem] border-4 border-white shadow-soft-hover bg-white">
                <img
                  src={`${import.meta.env.BASE_URL}images/hero-pets.jpg`}
                  alt="Veterinária carinhosa examinando cão e gato relaxados na sala de estar"
                  className="w-full h-80 sm:h-96 lg:h-[28rem] object-cover object-center transform hover:scale-105 transition-transform duration-700"
                  loading="eager"
                />
              </div>

              {/* Floating Review / Rating Pill */}
              <div className="absolute -bottom-5 -left-4 sm:-left-6 bg-white/95 backdrop-blur-md p-3.5 sm:p-4 rounded-2xl shadow-soft border border-brand-green-100 flex items-center gap-3 animate-float">
                <div className="w-10 h-10 rounded-xl bg-brand-yellow-100 flex items-center justify-center text-brand-yellow-500">
                  <Star className="w-5 h-5 fill-brand-yellow-400 text-brand-yellow-400" />
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    <span className="font-display font-bold text-base text-brand-green-900">4.9 / 5.0</span>
                    <span className="text-xs text-amber-500">★★★★★</span>
                  </div>
                  <p className="text-xs text-gray-500 font-medium">+450 pets cuidados no lar</p>
                </div>
              </div>

              {/* Floating Fear-Free Badge */}
              <div className="absolute -top-4 -right-4 sm:-right-5 bg-white/95 backdrop-blur-md py-2 px-3.5 rounded-full shadow-soft border border-brand-green-100 flex items-center gap-2 animate-bounce-subtle">
                <Heart className="w-4 h-4 text-rose-500 fill-rose-500" />
                <span className="text-xs font-bold text-brand-green-900">100% Fear-Free (Livre de Medo)</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
