import React, { useState } from 'react';
import { MapPin, Search, CheckCircle2, MessageCircle, AlertCircle } from 'lucide-react';
import { NEIGHBORHOODS, createWhatsAppLink } from '../data/content';

export const CoverageArea: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedZone, setSelectedZone] = useState<string>('all');

  // Extrair zonas únicas
  const allZones = ['all', ...Array.from(new Set(NEIGHBORHOODS.map((n) => n.zone)))];

  const filteredNeighborhoods = NEIGHBORHOODS.filter((item) => {
    const matchesSearch =
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.zone.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesZone = selectedZone === 'all' || item.zone === selectedZone;
    return matchesSearch && matchesZone;
  });

  return (
    <section id="cobertura" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 bg-brand-green-100 text-brand-green-800 text-xs sm:text-sm font-bold px-3.5 py-1.5 rounded-full mb-3 border border-brand-green-200">
            <MapPin className="w-4 h-4 text-brand-green-700" />
            <span>Rotas Planejadas e Pontuais</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-brand-green-900 tracking-tight mb-4">
            Regiões e Bairros Atendidos
          </h2>
          <p className="text-base sm:text-lg text-[#4A5568] leading-relaxed">
            Consulte a cobertura do atendimento móvel da Home Vet Domicílio na sua localidade.
          </p>
        </div>

        {/* Search & Filter Bar */}
        <div className="max-w-3xl mx-auto mb-10">
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <Search className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Digite o nome do seu bairro..."
                className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-brand-bg border border-brand-green-100 text-sm focus:outline-none focus:ring-2 focus:ring-brand-green-500 focus:bg-white transition-all shadow-xs"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-semibold text-gray-400 hover:text-gray-600"
                >
                  Limpar
                </button>
              )}
            </div>

            {/* Zone Filter Chips */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0">
              {allZones.map((zone) => (
                <button
                  key={zone}
                  onClick={() => setSelectedZone(zone)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                    selectedZone === zone
                      ? 'bg-brand-green-800 text-white shadow-xs'
                      : 'bg-brand-bg text-gray-600 hover:bg-brand-green-50 border border-brand-green-100'
                  }`}
                >
                  {zone === 'all' ? 'Todas as Regiões' : zone}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Neighborhood Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-12">
          {filteredNeighborhoods.map((item, index) => (
            <div
              key={index}
              className="bg-brand-bg rounded-2xl p-4 border border-brand-green-100/90 shadow-xs hover:shadow-soft transition-all duration-200 hover:-translate-y-0.5 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-1.5 text-xs text-brand-green-700 font-semibold mb-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-whatsapp" />
                  <span>Cobertura Confirmada</span>
                </div>
                <h4 className="font-display font-bold text-sm text-brand-green-900 leading-snug">
                  {item.name}
                </h4>
              </div>
              <span className="mt-3 text-[11px] font-medium text-gray-500 block">
                {item.zone}
              </span>
            </div>
          ))}
        </div>

        {/* Empty Search Result */}
        {filteredNeighborhoods.length === 0 && (
          <div className="text-center py-10 bg-brand-bg rounded-3xl border border-dashed border-gray-300 max-w-md mx-auto mb-10">
            <AlertCircle className="w-8 h-8 text-gray-400 mx-auto mb-2" />
            <p className="text-sm font-bold text-gray-700">Bairro não listado na busca rápida</p>
            <p className="text-xs text-gray-500 mt-1">
              Atendemos também diversas outras regiões sob consulta prévia!
            </p>
          </div>
        )}

        {/* Outside Coverage Banner CTA */}
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-brand-green-100 via-brand-yellow-100/50 to-brand-green-100 rounded-3xl p-6 sm:p-8 border border-brand-green-200/80 shadow-soft flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-white text-brand-green-800 flex items-center justify-center shrink-0 shadow-xs">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-display font-bold text-lg text-brand-green-900">
                Não encontrou seu bairro na lista?
              </h4>
              <p className="text-xs sm:text-sm text-[#4A5568] mt-1 leading-relaxed">
                Atendemos bairros vizinhos e regiões metropolitanas com encaixe de rota. Envie sua localização no WhatsApp para verificar taxa de deslocamento e disponibilidade.
              </p>
            </div>
          </div>

          <a
            href={createWhatsAppLink('Olá! Gostaria de consultar se vocês atendem no meu bairro/endereço.')}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 bg-whatsapp hover:bg-whatsapp-hover text-white text-sm font-bold px-6 py-3.5 rounded-full shadow-pill transition-all whitespace-nowrap"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>Consultar Meu Bairro</span>
          </a>
        </div>

      </div>
    </section>
  );
};
