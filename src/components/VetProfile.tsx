import React from 'react';
import { Award, ShieldCheck, MessageCircle, Sparkles, CheckCircle2, HeartHandshake, Syringe } from 'lucide-react';
import { CLINIC_CONFIG, createWhatsAppLink } from '../data/content';

export const VetProfile: React.FC = () => {
  return (
    <section id="sobre" className="py-20 bg-brand-cream relative overflow-hidden border-t border-brand-green-100/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-brand-green-100 text-brand-green-800 text-xs sm:text-sm font-bold px-4 py-1.5 rounded-full mb-4 border border-brand-green-300/80 shadow-xs">
            <HeartHandshake className="w-4 h-4 text-brand-green-600" />
            <span>Quem Somos • Equipe Home.Vet</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-4xl text-brand-green-900 tracking-tight mb-4">
            Cuidado Especializado e Afeto em Família
          </h2>
          <p className="text-base sm:text-lg text-[#4A5568] leading-relaxed">
            Uma equipe unida pela paixão aos animais e pelo compromisso técnico de levar a melhor medicina veterinária até o conforto do seu lar.
          </p>
        </div>

        {/* 2 Team Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          
          {/* Card 1: Dr. Renato Pegoretti */}
          <div className="bg-white rounded-3xl sm:rounded-4xl p-6 sm:p-8 border border-brand-green-100 shadow-soft hover:shadow-soft-hover transition-all duration-300 flex flex-col justify-between">
            <div>
              {/* Photo and Badges */}
              <div className="relative mb-6">
                <div className="overflow-hidden rounded-2xl sm:rounded-3xl border-4 border-brand-green-100 bg-brand-green-50 aspect-[4/3]">
                  <img
                    src={`${import.meta.env.BASE_URL}images/dr-renato.jpg`}
                    alt="Dr. Renato Pegoretti - Médico Veterinário"
                    className="w-full h-full object-cover object-top"
                    loading="lazy"
                  />
                </div>

                {/* CRMV Badge */}
                <div className="absolute -bottom-3 left-4 bg-brand-green-900 text-white py-1.5 px-3.5 rounded-xl shadow-lg border border-brand-green-700 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-whatsapp" />
                  <span className="font-display font-bold text-xs sm:text-sm tracking-wide">
                    CRMV-45.390
                  </span>
                </div>

                {/* Year Badge */}
                <div className="absolute top-3 right-3 bg-brand-yellow-100 text-amber-900 py-1 px-3 rounded-full shadow-md border border-brand-yellow-200 flex items-center gap-1.5 text-xs font-bold">
                  <Sparkles className="w-3.5 h-3.5 text-amber-500 fill-amber-400" />
                  <span>Atuante desde 2019</span>
                </div>
              </div>

              {/* Info */}
              <div className="pt-2">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-green-700 mb-1">
                  <Award className="w-4 h-4" />
                  <span>Médico Veterinário</span>
                </div>
                <h3 className="font-display font-extrabold text-2xl text-brand-green-900 mb-1">
                  Dr. Renato Pegoretti
                </h3>
                <p className="text-xs text-brand-green-600 font-semibold mb-3">
                  CRMV-45.390 • Peruíbe e Região
                </p>
                <p className="text-sm text-[#4A5568] leading-relaxed mb-5">
                  Médico Veterinário com atuação desde 2019, focado em clínica médica preventiva, vacinação ética e diagnósticos tranquilos no domicílio. Dedicado a acolher cães e gatos sem o trauma de hospitais, respeitando o ritmo único de cada paciente.
                </p>

                {/* Highlights */}
                <ul className="space-y-2 mb-4 text-xs text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-green-600 shrink-0 mt-0.5" />
                    <span>Registro Oficial CRMV-45.390 ativo</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-green-600 shrink-0 mt-0.5" />
                    <span>Atuação clínica em cães e gatos desde 2019</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-green-600 shrink-0 mt-0.5" />
                    <span>Exame físico minucioso e sem pressa com reforço positivo</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="pt-4 border-t border-brand-green-100 flex items-center justify-between">
              <span className="text-xs font-semibold text-brand-green-800">
                Atendimento domiciliar humanizado
              </span>
              <a
                href={createWhatsAppLink('Olá, Dr. Renato! Gostaria de agendar uma consulta para o meu pet.')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-green-700 hover:text-brand-green-900 underline"
              >
                <span>Falar com Dr. Renato</span>
                <MessageCircle className="w-3.5 h-3.5 text-whatsapp fill-whatsapp" />
              </a>
            </div>
          </div>

          {/* Card 2: Daiane Harume Aloise Romualdo Prado */}
          <div className="bg-white rounded-3xl sm:rounded-4xl p-6 sm:p-8 border border-brand-green-100 shadow-soft hover:shadow-soft-hover transition-all duration-300 flex flex-col justify-between">
            <div>
              {/* Photo and Badges */}
              <div className="relative mb-6">
                <div className="overflow-hidden rounded-2xl sm:rounded-3xl border-4 border-brand-green-100 bg-brand-green-50 aspect-[4/3]">
                  <img
                    src={`${import.meta.env.BASE_URL}images/vet-profile.jpg`}
                    alt="Daiane Harume Aloise Romualdo Prado - Auxiliar Veterinária e Graduanda"
                    className="w-full h-full object-cover object-top"
                    loading="lazy"
                  />
                </div>

                {/* Role Badge */}
                <div className="absolute -bottom-3 left-4 bg-brand-petrol-600 text-white py-1.5 px-3.5 rounded-xl shadow-lg border border-brand-petrol-500 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-brand-petrol-100" />
                  <span className="font-display font-bold text-xs sm:text-sm tracking-wide">
                    Auxiliar & Graduanda em Med. Vet.
                  </span>
                </div>

                {/* Year Badge */}
                <div className="absolute top-3 right-3 bg-brand-green-100 text-brand-green-900 py-1 px-3 rounded-full shadow-md border border-brand-green-200 flex items-center gap-1.5 text-xs font-bold">
                  <Sparkles className="w-3.5 h-3.5 text-brand-green-600 fill-brand-green-500" />
                  <span>Atuante desde 2018</span>
                </div>
              </div>

              {/* Info */}
              <div className="pt-2">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-petrol-600 mb-1">
                  <Award className="w-4 h-4" />
                  <span>Auxiliar Veterinária & Graduanda</span>
                </div>
                <h3 className="font-display font-extrabold text-2xl text-brand-green-900 mb-1">
                  Daiane Harume Aloise Romualdo Prado
                </h3>
                <p className="text-xs text-brand-petrol-600 font-semibold mb-3">
                  Auxiliar Veterinária e Graduanda em Medicina Veterinária
                </p>
                <p className="text-sm text-[#4A5568] leading-relaxed mb-5">
                  Atuante na área veterinária desde 2018, Daiane alia ampla experiência prática ao aprofundamento acadêmico contínuo na graduação em Medicina Veterinária. Especialista no manejo carinhoso 'fear-free', garantindo conforto e segurança emocional aos pets.
                </p>

                {/* Highlights */}
                <ul className="space-y-2 mb-4 text-xs text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-green-600 shrink-0 mt-0.5" />
                    <span>Experiência prática consolidada na área desde 2018</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-green-600 shrink-0 mt-0.5" />
                    <span>Graduanda em Medicina Veterinária com foco em bem-estar</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-green-600 shrink-0 mt-0.5" />
                    <span>Manejo gentil especializado em cães tímidos e gatos sensíveis</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="pt-4 border-t border-brand-green-100 flex items-center justify-between">
              <span className="text-xs font-semibold text-brand-green-800">
                Manejo afetuoso e acolhedor
              </span>
              <a
                href={createWhatsAppLink('Olá, Daiane! Gostaria de tirar uma dúvida sobre o atendimento do meu pet.')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-petrol-600 hover:text-brand-petrol-800 underline"
              >
                <span>Falar com Daiane</span>
                <MessageCircle className="w-3.5 h-3.5 text-whatsapp fill-whatsapp" />
              </a>
            </div>
          </div>

        </div>

        {/* Joint Partnership & Surgical Support Banner */}
        <div className="bg-gradient-to-br from-brand-green-800 via-brand-green-900 to-brand-green-950 rounded-3xl sm:rounded-4xl p-6 sm:p-10 text-white shadow-xl relative overflow-hidden">
          <div className="absolute -top-16 -right-16 w-64 h-64 bg-whatsapp/10 rounded-full blur-2xl pointer-events-none" />
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 px-3 py-1 rounded-full text-xs font-semibold text-brand-yellow-300 mb-3">
                <Syringe className="w-3.5 h-3.5" />
                <span>Atuação Conjunta e Integrada</span>
              </div>
              <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white mb-3 leading-tight">
                Cuidado Domiciliar Completo e Apoio Cirúrgico em Clínicas Parceiras
              </h3>
              <p className="text-sm sm:text-base text-brand-green-100 leading-relaxed max-w-2xl">
                O Dr. Renato e a Daiane atuam conjuntamente nas visitas domiciliares para oferecer máxima segurança e afeto. Quando o pet necessita de <strong>pequenas cirurgias eletivas ou procedimentos cirúrgicos específicos</strong>, realizam o procedimento em <strong>centros cirúrgicos de clínicas parceiras devidamente equipadas e credenciadas</strong>, assegurando suporte completo em todas as fases da vida do seu companheiro.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
              <a
                href={createWhatsAppLink('Olá! Gostaria de conversar com a equipe do Home.Vet sobre o atendimento do meu pet.')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-whatsapp hover:bg-whatsapp-hover text-white text-sm font-bold px-6 py-3.5 rounded-2xl shadow-pill transition-all text-center"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Chamar a Equipe no WhatsApp</span>
              </a>

              <a
                href={CLINIC_CONFIG.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white text-xs font-semibold px-4 py-3 rounded-2xl border border-white/20 transition-all text-center"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="w-4 h-4 text-pink-400 fill-none stroke-current stroke-2 stroke-linecap-round stroke-linejoin-round"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
                <span>Acompanhe {CLINIC_CONFIG.instagramHandle}</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

