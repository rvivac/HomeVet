import React from 'react';
import { AlertTriangle, Clock, CheckCircle2, MessageCircle } from 'lucide-react';
import { ALERT_SIGNS, CHECKUP_INTERVALS, createWhatsAppLink } from '../data/content';

export const AlertSignsSection: React.FC = () => {
  return (
    <section className="py-20 bg-brand-bg relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-900 text-xs sm:text-sm font-bold px-3.5 py-1.5 rounded-full mb-3 border border-amber-200">
            <AlertTriangle className="w-4 h-4 text-amber-600" />
            <span>Saúde Preventiva e Diagnóstico Cedo</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-brand-green-900 tracking-tight mb-4">
            Quando devo chamar o veterinário em casa?
          </h2>
          <p className="text-base sm:text-lg text-[#4A5568]">
            Alguns sinais sutis merecem atenção rápida. Ao notar qualquer alteração, não espere a situação piorar: procure um profissional de confiança.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-14">
          
          {/* Sinais de Alerta */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-brand-green-100 shadow-soft">
            <h3 className="font-display font-bold text-xl text-brand-green-900 mb-2 flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-rose-500 animate-pulse" />
              Sinais de Alerta no Comportamento do Pet
            </h3>
            <p className="text-xs sm:text-sm text-gray-500 mb-6">
              Fique atento ao dia a dia do seu cão ou gato:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {ALERT_SIGNS.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-3.5 rounded-2xl bg-brand-bg border border-brand-green-100/70 hover:border-amber-200 transition-colors"
                >
                  <div className="w-5 h-5 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-xs sm:text-sm text-gray-700 font-medium leading-snug">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Frequência Ideal de Check-ups */}
          <div className="lg:col-span-5 bg-gradient-to-br from-brand-green-800 to-brand-green-900 text-white rounded-3xl p-6 sm:p-8 shadow-soft flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 bg-brand-green-700/70 text-brand-yellow-400 text-xs font-bold px-3 py-1 rounded-full mb-4">
                <Clock className="w-3.5 h-3.5" />
                <span>Rotina Preventiva</span>
              </div>
              <h3 className="font-display font-bold text-xl text-white mb-2">
                Com que frequência fazer check-up?
              </h3>
              <p className="text-xs text-brand-green-200 mb-6">
                A prevenção evita gastos com emergências e garante muitos anos felizes ao seu lado.
              </p>

              <div className="space-y-4">
                {CHECKUP_INTERVALS.map((item, i) => (
                  <div key={i} className="p-4 rounded-2xl bg-brand-green-950/60 border border-brand-green-700/60">
                    <div className="flex items-center justify-between mb-1">
                      <strong className="font-display text-sm text-brand-yellow-400">
                        {item.phase}
                      </strong>
                      <span className="text-xs font-bold text-white bg-brand-green-700 px-2.5 py-0.5 rounded-full">
                        {item.interval}
                      </span>
                    </div>
                    <p className="text-xs text-brand-green-200/90 leading-snug">
                      {item.note}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-brand-green-700/80">
              <a
                href={createWhatsAppLink('Olá, Dr. Renato! Notei um comportamento diferente no meu pet e gostaria de agendar uma avaliação.')}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-whatsapp hover:bg-whatsapp-hover text-white text-sm font-bold py-3.5 px-4 rounded-2xl shadow-pill transition-all"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Agendar Avaliação Preventiva</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
