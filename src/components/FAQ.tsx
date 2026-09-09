import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';
import { FAQS, createWhatsAppLink } from '../data/content';

export const FAQ: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(FAQS[0].id);

  const toggleAccordion = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-20 bg-white relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-brand-green-100 text-brand-green-800 text-xs sm:text-sm font-bold px-3.5 py-1.5 rounded-full mb-3 border border-brand-green-200">
            <HelpCircle className="w-4 h-4 text-brand-green-700" />
            <span>Tire Todas as Suas Dúvidas</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-brand-green-900 tracking-tight mb-3">
            Perguntas Frequentes
          </h2>
          <p className="text-base text-[#4A5568]">
            Tudo o que você precisa saber sobre o atendimento veterinário no seu lar.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {FAQS.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="rounded-2xl border border-brand-green-100/90 bg-brand-bg transition-colors overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(faq.id)}
                  className="w-full flex items-center justify-between p-5 text-left font-display font-bold text-base sm:text-lg text-brand-green-900 hover:text-brand-green-700 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="pr-4">{faq.question}</span>
                  <div
                    className={`w-8 h-8 rounded-xl bg-white flex items-center justify-center shrink-0 border border-brand-green-100 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 bg-brand-green-100 text-brand-green-800' : 'text-gray-400'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-sm text-[#4A5568] leading-relaxed border-t border-brand-green-100/50">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions? */}
        <div className="mt-12 text-center p-6 rounded-3xl bg-brand-green-50 border border-brand-green-200/70 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <h4 className="font-display font-bold text-base text-brand-green-900">
              Ainda tem alguma dúvida específica sobre o seu pet?
            </h4>
            <p className="text-xs sm:text-sm text-gray-600 mt-0.5">
              Estamos disponíveis para conversar e orientar você com toda a atenção.
            </p>
          </div>
          <a
            href={createWhatsAppLink('Olá, Dra.! Tenho uma dúvida sobre o atendimento do meu pet que não encontrei no site.')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-whatsapp hover:bg-whatsapp-hover text-white text-sm font-bold px-5 py-3 rounded-full shadow-pill transition-all whitespace-nowrap"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>Falar no WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
};
