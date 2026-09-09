import React, { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { createWhatsAppLink } from '../data/content';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    // Exibe o balão amigável após 3 segundos para atrair a atenção com carinho
    const timer = setTimeout(() => {
      setShowTooltip(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50 flex flex-col items-end pointer-events-none">
      
      {/* Friendly speech bubble */}
      {showTooltip && (
        <div className="pointer-events-auto mb-3 max-w-[260px] bg-white rounded-2xl p-3.5 shadow-2xl border border-brand-green-100 flex items-start gap-2.5 animate-fadeIn transition-all">
          <div className="w-2.5 h-2.5 rounded-full bg-whatsapp shrink-0 mt-1 animate-ping" />
          <div className="flex-1">
            <p className="text-xs font-bold text-brand-green-900 leading-snug">
              Dúvidas sobre seu pet?
            </p>
            <p className="text-[11px] text-gray-600 mt-0.5 leading-tight">
              Fale diretamente com a veterinária agora pelo WhatsApp!
            </p>
          </div>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setShowTooltip(false);
            }}
            className="text-gray-400 hover:text-gray-600 p-0.5"
            aria-label="Fechar dica"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Action Button */}
      <div className="relative pointer-events-auto">
        {/* Animated pulsating radar ring */}
        <span className="absolute -inset-1 rounded-full bg-whatsapp opacity-75 animate-ping -z-10" />

        <a
          href={createWhatsAppLink('Olá, Dra.! Estou navegando no site da Home Vet Domicílio e gostaria de agendar uma visita para meu pet.')}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2.5 bg-whatsapp hover:bg-whatsapp-hover text-white py-3.5 px-4 sm:px-5 rounded-full shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 group"
          aria-label="Iniciar conversa com Home Vet no WhatsApp"
        >
          <div className="relative">
            <MessageCircle className="w-7 h-7 fill-white text-white" />
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-white rounded-full border-2 border-whatsapp flex items-center justify-center">
              <span className="w-1.5 h-1.5 bg-whatsapp rounded-full animate-pulse" />
            </span>
          </div>
          <span className="hidden sm:inline-block font-display font-bold text-sm tracking-wide text-white pr-1">
            Agendar no WhatsApp
          </span>
        </a>
      </div>

    </div>
  );
};
