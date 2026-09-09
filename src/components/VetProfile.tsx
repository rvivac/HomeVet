import React from 'react';
import { Award, ShieldCheck, MessageCircle, Sparkles, CheckCircle, ExternalLink } from 'lucide-react';
import { CLINIC_CONFIG, createWhatsAppLink } from '../data/content';

export const VetProfile: React.FC = () => {
  return (
    <section id="sobre" className="py-20 bg-brand-bg relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-white rounded-3xl sm:rounded-4xl p-6 sm:p-12 border border-brand-green-100 shadow-soft">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left: Professional Photo & Badges */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-sm lg:max-w-none">
                
                {/* Photo frame */}
                <div className="overflow-hidden rounded-3xl border-4 border-brand-green-100 shadow-soft-hover bg-brand-green-50">
                  <img
                    src="/images/dr-renato.jpg"
                    alt={`${CLINIC_CONFIG.vetName} - ${CLINIC_CONFIG.vetTitle}`}
                    className="w-full h-80 sm:h-96 object-cover object-top"
                    loading="lazy"
                  />
                </div>

                {/* CRMV Official Seal Floating Badge */}
                <div className="absolute -bottom-4 -right-2 sm:-right-4 bg-brand-green-900 text-white py-2.5 px-4 rounded-2xl shadow-xl border border-brand-green-700 flex items-center gap-2.5">
                  <ShieldCheck className="w-5 h-5 text-whatsapp" />
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-brand-green-200 block font-semibold">
                      Registro Oficial
                    </span>
                    <span className="font-display font-bold text-sm tracking-wide text-white">
                      {CLINIC_CONFIG.crmv}
                    </span>
                  </div>
                </div>

                {/* Experience Badge */}
                <div className="absolute -top-3 -left-2 sm:-left-4 bg-brand-yellow-100 text-amber-900 py-1.5 px-3.5 rounded-full shadow-md border border-brand-yellow-200 flex items-center gap-1.5 text-xs font-bold">
                  <Sparkles className="w-3.5 h-3.5 text-amber-500 fill-amber-400" />
                  <span>Médico Veterinário desde 2019</span>
                </div>

              </div>
            </div>

            {/* Right: Bio and Technical Authority */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 bg-brand-green-100 text-brand-green-800 text-xs font-bold px-3 py-1 rounded-full mb-3">
                <Award className="w-3.5 h-3.5" />
                <span>Responsabilidade Técnica e Cuidado Familiar</span>
              </div>

              <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-brand-green-900 mb-2">
                {CLINIC_CONFIG.vetName}
              </h2>
              <p className="text-sm font-semibold text-brand-green-700 mb-4">
                {CLINIC_CONFIG.vetTitle} • Peruíbe e Região
              </p>

              <div className="space-y-3 text-sm sm:text-base text-[#4A5568] leading-relaxed mb-6">
                <p>
                  Olá! Sou o Renato, médico veterinário atuante desde 2019 com dedicação exclusiva ao atendimento domiciliar de cães e gatos.
                </p>
                <p>
                  Sou pai do Enzo e da Anna Luíze, minha inspiração diária. Acredito que o cuidado com os animais começa pelo respeito à família e ao tempo de cada bichinho. Atuo junto com a minha esposa, também médica veterinária, onde compartilhamos além do amor a mesma profissão e dedicação.
                </p>
                <p className="text-brand-green-900 font-medium italic">
                  "O mesmo cuidado e qualidade de clínica, no conforto da sua casa!"
                </p>
              </div>

              {/* Guarantees Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                <div className="flex items-start gap-2.5 p-3 rounded-2xl bg-brand-bg border border-brand-green-100">
                  <CheckCircle className="w-4 h-4 text-brand-green-600 shrink-0 mt-0.5" />
                  <span className="text-xs text-gray-700">Atendimento credenciado aos planos Petlove, Au Happy e PetLife</span>
                </div>
                <div className="flex items-start gap-2.5 p-3 rounded-2xl bg-brand-bg border border-brand-green-100">
                  <CheckCircle className="w-4 h-4 text-brand-green-600 shrink-0 mt-0.5" />
                  <span className="text-xs text-gray-700">Vacinas importadas com cadeia de frio 100% monitorada</span>
                </div>
                <div className="flex items-start gap-2.5 p-3 rounded-2xl bg-brand-bg border border-brand-green-100">
                  <CheckCircle className="w-4 h-4 text-brand-green-600 shrink-0 mt-0.5" />
                  <span className="text-xs text-gray-700">Manejo calmo, sem estresse de transporte ou sala de espera</span>
                </div>
                <div className="flex items-start gap-2.5 p-3 rounded-2xl bg-brand-bg border border-brand-green-100">
                  <CheckCircle className="w-4 h-4 text-brand-green-600 shrink-0 mt-0.5" />
                  <span className="text-xs text-gray-700">Peruíbe e região com rotas programadas e pontualidade</span>
                </div>
              </div>

              {/* Actions & Social */}
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={createWhatsAppLink('Olá, Dr. Renato! Gostaria de agendar uma consulta para o meu pet.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-whatsapp hover:bg-whatsapp-hover text-white text-sm font-bold px-6 py-3 rounded-2xl shadow-pill transition-all"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>Chamar o Dr. Renato</span>
                </a>

                <a
                  href={CLINIC_CONFIG.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-brand-bg hover:bg-brand-green-100 text-brand-green-900 text-sm font-bold px-4 py-3 rounded-2xl border border-brand-green-200 transition-all"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="w-4 h-4 text-pink-600 fill-none stroke-current stroke-2 stroke-linecap-round stroke-linejoin-round"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                  <span>{CLINIC_CONFIG.instagramHandle}</span>
                </a>

                <a
                  href={CLINIC_CONFIG.googleReviewsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-green-700 hover:text-brand-green-900 px-3 py-2 rounded-xl hover:bg-brand-green-50 transition-colors"
                >
                  <span>Avaliações Google</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
