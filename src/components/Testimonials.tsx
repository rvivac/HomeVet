import React from 'react';
import { Star, Heart, Quote, Sparkles } from 'lucide-react';
import { TESTIMONIALS } from '../data/content';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-brand-cream relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-brand-yellow-100 text-amber-800 text-xs sm:text-sm font-bold px-3.5 py-1.5 rounded-full mb-3 border border-brand-yellow-200">
            <Heart className="w-4 h-4 text-rose-500 fill-rose-500" />
            <span>Tutores e Pets Felizes</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-brand-green-900 tracking-tight mb-4">
            O que dizem quem já experimentou o cuidado em casa
          </h2>
          <p className="text-base sm:text-lg text-[#4A5568]">
            Histórias reais de tranquilidade, carinho e saúde sem traumas para toda a família.
          </p>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="bg-white rounded-3xl p-6 sm:p-7 border border-brand-green-100 shadow-soft hover:shadow-soft-hover transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Header of card: Stars + Quote Icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-brand-yellow-400 fill-brand-yellow-400" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-brand-green-200" />
                </div>

                {/* Quote text */}
                <p className="text-sm text-[#2D3748] leading-relaxed italic mb-6">
                  "{t.text}"
                </p>
              </div>

              {/* Tutor & Pet info */}
              <div className="pt-4 border-t border-brand-green-100 flex items-center justify-between">
                <div>
                  <h4 className="font-display font-bold text-sm text-brand-green-900">
                    {t.tutorName}
                  </h4>
                  <p className="text-xs text-brand-green-700 font-medium">
                    Tutor(a) de {t.petName}
                  </p>
                </div>
                <span className="text-[11px] font-semibold text-gray-400 bg-brand-bg px-2.5 py-1 rounded-full border border-gray-100">
                  {t.neighborhood}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Trust banner */}
        <div className="max-w-2xl mx-auto text-center bg-white rounded-2xl py-4 px-6 border border-brand-green-100 shadow-xs flex items-center justify-center gap-2 text-xs sm:text-sm text-gray-600">
          <Sparkles className="w-4 h-4 text-brand-yellow-500" />
          <span>Avaliação média de <strong>4.9 / 5.0 estrelas</strong> no atendimento domiciliar</span>
        </div>

      </div>
    </section>
  );
};
