import React, { useEffect, useRef, useState } from 'react';
import L from 'leaflet';
import { Navigation, ExternalLink } from 'lucide-react';

// Coordenadas aproximadas dos pontos extremos da área de cobertura exibida no Google
const COVERAGE_POLYGON: [number, number][] = [
  [-24.0850, -46.6150], // Mongaguá (Nordeste)
  [-24.1800, -46.7600], // Itanhaém (Litoral)
  [-24.3204, -46.9850], // Peruíbe (Praia / Centro)
  [-24.4530, -47.1120], // Barra do Una (Sul)
  [-24.3800, -47.1950], // Região serrana sul
  [-24.2889, -47.1756], // Itariri (Oeste)
  [-24.1650, -46.8800], // Interior / Rota BR-101
  [-24.0850, -46.6150], // Fechamento
];

const PERUIBE_CENTER: [number, number] = [-24.3204, -46.9989];

interface CoverageMapProps {
  height?: string;
}

export const CoverageMap: React.FC<CoverageMapProps> = ({
  height = '320px',
}) => {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);
  const tileLayerRef = useRef<L.TileLayer | null>(null);
  const [mapType, setMapType] = useState<'roadmap' | 'satellite'>('roadmap');

  useEffect(() => {
    if (!mapContainerRef.current) return;

    // Destrói instância anterior se houver
    if (mapInstanceRef.current) {
      mapInstanceRef.current.remove();
      mapInstanceRef.current = null;
    }

    // Inicializa o mapa Leaflet
    const map = L.map(mapContainerRef.current, {
      center: [-24.27, -46.9],
      zoom: 10,
      minZoom: 9,
      maxZoom: 18,
      zoomControl: true,
      attributionControl: false,
    });

    mapInstanceRef.current = map;

    // Adiciona camada de tiles do Google Maps (Roadmap ou Satellite)
    const getTileUrl = (type: 'roadmap' | 'satellite') => {
      return type === 'roadmap'
        ? 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
        : 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}';
    };

    const tileLayer = L.tileLayer(getTileUrl(mapType), {
      maxZoom: 19,
      subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
    }).addTo(map);

    tileLayerRef.current = tileLayer;

    // Polígono de cobertura vermelha com transparência (exatamente como no Google Meu Negócio)
    const polygon = L.polygon(COVERAGE_POLYGON, {
      color: '#DC2626',
      weight: 2.5,
      opacity: 0.9,
      fillColor: '#EF4444',
      fillOpacity: 0.16,
      lineCap: 'round',
      lineJoin: 'round',
    }).addTo(map);

    // Marcador com pulso animado em Peruíbe (Base Operacional)
    const pulsingIcon = L.divIcon({
      className: 'custom-pulsing-pin',
      html: `
        <div style="position: relative; width: 34px; height: 34px; display: flex; align-items: center; justify-content: center;">
          <span style="position: absolute; width: 100%; height: 100%; border-radius: 50%; background: #3B82F6; opacity: 0.6; animation: ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite;"></span>
          <div style="width: 18px; height: 18px; border-radius: 50%; background: #2563EB; border: 3px solid #FFFFFF; box-shadow: 0 4px 10px rgba(0,0,0,0.3); z-index: 10;"></div>
          <span style="position: absolute; top: -20px; background: rgba(30, 58, 138, 0.95); color: white; font-size: 10px; font-weight: bold; padding: 2px 6px; border-radius: 4px; white-space: nowrap; box-shadow: 0 2px 6px rgba(0,0,0,0.2); pointer-events: none;">
            📍 Peruíbe (Base)
          </span>
        </div>
      `,
      iconSize: [34, 34],
      iconAnchor: [17, 17],
    });

    const marker = L.marker(PERUIBE_CENTER, { icon: pulsingIcon }).addTo(map);
    marker.bindPopup(`
      <div style="font-family: system-ui, sans-serif; padding: 4px; min-width: 180px;">
        <h4 style="font-weight: bold; color: #1B4D3E; font-size: 14px; margin-bottom: 4px;">Home.Vet Domicílio</h4>
        <p style="font-size: 12px; color: #4B5563; margin: 0 0 6px 0;">Base operacional em Peruíbe com rotas programadas sem estresse.</p>
        <span style="display: inline-block; font-size: 10px; font-weight: bold; color: #166534; background: #DCFCE7; padding: 2px 6px; border-radius: 4px;">
          ✓ Atendimento em Casa
        </span>
      </div>
    `);

    // Invalida o tamanho após a animação de montagem do modal
    const timer = setTimeout(() => {
      map.invalidateSize();
      map.fitBounds(polygon.getBounds(), { padding: [25, 25] });
    }, 250);

    return () => {
      clearTimeout(timer);
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, []);

  // Alterna camadas (Mapa Normal x Satélite)
  const handleMapTypeChange = (newType: 'roadmap' | 'satellite') => {
    if (!mapInstanceRef.current || !tileLayerRef.current) return;
    setMapType(newType);

    const url =
      newType === 'roadmap'
        ? 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
        : 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}';

    tileLayerRef.current.setUrl(url);
  };

  // Recentraliza na área
  const handleRecenter = () => {
    if (!mapInstanceRef.current) return;
    const polygon = L.polygon(COVERAGE_POLYGON);
    mapInstanceRef.current.fitBounds(polygon.getBounds(), { padding: [25, 25] });
  };

  return (
    <div className="relative rounded-2xl overflow-hidden border border-brand-green-200/90 shadow-md bg-white">
      
      {/* Top Map Toolbar with Google-style toggles */}
      <div className="absolute top-2.5 left-2.5 z-20 flex items-center gap-1.5 bg-white/95 backdrop-blur-md rounded-xl p-1 shadow-md border border-gray-200 text-xs font-semibold">
        <button
          type="button"
          onClick={() => handleMapTypeChange('roadmap')}
          className={`px-2.5 py-1 rounded-lg transition-all cursor-pointer ${
            mapType === 'roadmap'
              ? 'bg-brand-green-800 text-white shadow-xs font-bold'
              : 'text-gray-700 hover:bg-gray-100'
          }`}
        >
          Mapa
        </button>
        <button
          type="button"
          onClick={() => handleMapTypeChange('satellite')}
          className={`px-2.5 py-1 rounded-lg transition-all cursor-pointer ${
            mapType === 'satellite'
              ? 'bg-brand-green-800 text-white shadow-xs font-bold'
              : 'text-gray-700 hover:bg-gray-100'
          }`}
        >
          Satélite
        </button>
      </div>

      {/* Top Right Actions */}
      <div className="absolute top-2.5 right-2.5 z-20 flex items-center gap-1.5">
        <button
          type="button"
          onClick={handleRecenter}
          className="bg-white/95 hover:bg-white text-gray-700 hover:text-brand-green-900 p-2 rounded-xl shadow-md border border-gray-200 backdrop-blur-md transition-transform hover:scale-105 cursor-pointer"
          title="Recentralizar área de atendimento"
          aria-label="Recentralizar mapa"
        >
          <Navigation className="w-4 h-4" />
        </button>

        <a
          href="https://www.google.com/maps/search/?api=1&query=Peruíbe+-+SP"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white/95 hover:bg-white text-brand-green-900 font-bold px-2.5 py-1.5 rounded-xl shadow-md border border-gray-200 backdrop-blur-md transition-all hover:scale-105 flex items-center gap-1 text-xs"
          title="Abrir no aplicativo Google Maps"
        >
          <ExternalLink className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">Google Maps</span>
        </a>
      </div>

      {/* Leaflet Dynamic Interactive Container */}
      <div
        ref={mapContainerRef}
        style={{ height }}
        className="w-full bg-slate-100 cursor-grab active:cursor-grabbing z-10"
      />

      {/* Bottom Info Banner */}
      <div className="bg-brand-bg/95 border-t border-brand-green-100 p-2.5 sm:px-4 flex flex-wrap items-center justify-between gap-2 text-xs">
        <div className="flex items-center gap-2 text-brand-green-900 font-semibold">
          <span className="w-3 h-3 rounded-full bg-red-500/20 border border-red-600 flex items-center justify-center shrink-0">
            <span className="w-1.5 h-1.5 rounded-full bg-red-600"></span>
          </span>
          <span>Área demarcada: Peruíbe, Itanhaém, Mongaguá, Itariri e Barra do Una</span>
        </div>
        <div className="text-[11px] text-brand-green-700 font-medium flex items-center gap-1">
          <span>Arraste e use zoom (+ / -)</span>
        </div>
      </div>

    </div>
  );
};
