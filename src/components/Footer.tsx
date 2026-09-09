import React from 'react';
import { Home, Heart, MessageCircle, ShieldCheck, Clock, MapPin, ExternalLink } from 'lucide-react';
import { CLINIC_CONFIG, createWhatsAppLink } from '../data/content';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-green-900 text-white pt-16 pb-12 border-t border-brand-green-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-brand-green-800/80">
          
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-brand-green-800 flex items-center justify-center text-white border border-brand-green-700">
                <Home className="w-5 h-5 text-brand-green-100" />
              </div>
              <span className="font-display font-bold text-xl text-white tracking-tight">
                {CLINIC_CONFIG.name}
              </span>
            </div>

            <p className="text-sm text-brand-green-100/80 leading-relaxed max-w-sm">
              {CLINIC_CONFIG.tagline} Cuidado com paciência, carinho e respeito médico onde seu pet se sente mais seguro: a sua casa em Peruíbe e região.
            </p>

            {/* Social Icons Links */}
            <div className="flex flex-wrap items-center gap-2.5 pt-2">
              <a
                href={CLINIC_CONFIG.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-brand-green-800 hover:bg-brand-green-700 flex items-center justify-center transition-colors text-brand-green-100"
                aria-label="Instagram @home_vetdomicilio"
                title="Instagram @home_vetdomicilio"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="w-5 h-5 fill-none stroke-current stroke-2 stroke-linecap-round stroke-linejoin-round"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>

              <a
                href={CLINIC_CONFIG.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-brand-green-800 hover:bg-brand-green-700 flex items-center justify-center transition-colors text-brand-green-100"
                aria-label="Página do Facebook"
                title="Página do Facebook"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="w-5 h-5 fill-none stroke-current stroke-2 stroke-linecap-round stroke-linejoin-round"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>

              <a
                href={CLINIC_CONFIG.linktreeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-brand-green-800 hover:bg-brand-green-700 flex items-center justify-center transition-colors text-brand-green-100 text-xs font-bold"
                aria-label="Linktree da Home.Vet"
                title="Linktree da Home.Vet"
              >
                🌲
              </a>

              <a
                href={createWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-whatsapp hover:bg-whatsapp-hover flex items-center justify-center transition-colors text-white shadow-pill"
                aria-label="WhatsApp da Home Vet"
                title="Falar no WhatsApp"
              >
                <MessageCircle className="w-5 h-5 fill-white" />
              </a>

              <span className="text-xs text-brand-green-200 font-medium ml-1">
                {CLINIC_CONFIG.displayPhone}
              </span>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-display font-bold text-base text-white">
              Navegação Rápida
            </h4>
            <ul className="space-y-2 text-sm text-brand-green-100/70">
              <li>
                <a href="#inicio" className="hover:text-white transition-colors">Início</a>
              </li>
              <li>
                <a href="#vantagens" className="hover:text-white transition-colors">Vantagens no Lar</a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-white transition-colors">Nossos Serviços</a>
              </li>
              <li>
                <a href="#simulador" className="hover:text-white transition-colors">Simulador de Agendamento</a>
              </li>
              <li>
                <a href="#cobertura" className="hover:text-white transition-colors">Peruíbe & Região</a>
              </li>
              <li>
                <a href="#sobre" className="hover:text-white transition-colors">Sobre o Dr. Renato</a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">Dúvidas Frequentes</a>
              </li>
            </ul>
          </div>

          {/* Hours, CRMV & Location */}
          <div className="lg:col-span-5 space-y-4">
            <h4 className="font-display font-bold text-base text-white">
              Responsabilidade Técnica e Contato
            </h4>

            <div className="space-y-3 text-xs sm:text-sm text-brand-green-100/80">
              <div className="flex items-start gap-2.5">
                <ShieldCheck className="w-4 h-4 text-whatsapp shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block">{CLINIC_CONFIG.vetName}</strong>
                  <span>{CLINIC_CONFIG.vetTitle} • <strong>{CLINIC_CONFIG.crmv}</strong></span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-brand-yellow-400 shrink-0 mt-0.5" />
                <span>{CLINIC_CONFIG.workingHours}</span>
              </div>

              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-brand-green-300 shrink-0 mt-0.5" />
                <div>
                  <span>{CLINIC_CONFIG.address}</span>
                  <a
                    href={CLINIC_CONFIG.googleReviewsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-xs text-brand-yellow-400 hover:text-white mt-0.5 underline"
                  >
                    <span>Ver no Google Maps e Avaliações</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>

            {/* Emergency note */}
            <div className="p-3.5 rounded-2xl bg-brand-green-800/60 border border-brand-green-700/60 text-xs text-brand-green-200/90 leading-relaxed">
              <strong className="text-brand-yellow-300 block mb-1">Aviso Importante sobre Emergências:</strong>
              {CLINIC_CONFIG.emergencyDisclaimer}
            </div>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-brand-green-200/60">
          <p>
            © {new Date().getFullYear()} {CLINIC_CONFIG.name}. Todos os direitos reservados. {CLINIC_CONFIG.crmv}.
          </p>
          <p className="flex items-center gap-1">
            Feito com <Heart className="w-3.5 h-3.5 text-rose-400 fill-rose-400" /> para os pets e tutores de Peruíbe e região.
          </p>
        </div>

      </div>
    </footer>
  );
};
