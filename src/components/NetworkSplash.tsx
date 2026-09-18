import React, { useState, useEffect } from 'react';
import { Heart, Wifi, Sparkles } from 'lucide-react';
import logoEmblemWhite from '../assets/logo-emblem-white.png';
import { CLINIC_CONFIG } from '../data/content';

export const NetworkSplash: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [networkType, setNetworkType] = useState<'fast' | 'moderate' | 'slow'>('fast');
  const [networkMessage, setNetworkMessage] = useState('Preparando o melhor cuidado...');

  useEffect(() => {
    // 1. Detect network quality via Network Information API if available
    let isSlow = false;
    const nav = navigator as Navigator & {
      connection?: {
        effectiveType?: string;
        downlink?: number;
        rtt?: number;
        saveData?: boolean;
      };
    };

    if (nav.connection) {
      const conn = nav.connection;
      const effectiveType = conn.effectiveType || '';
      const is2G = effectiveType === '2g' || effectiveType === 'slow-2g';
      const is3G = effectiveType === '3g';
      const highRtt = (conn.rtt || 0) > 350;
      const lowDownlink = (conn.downlink || 10) < 1.5;

      if (is2G || conn.saveData || (is3G && (highRtt || lowDownlink))) {
        isSlow = true;
        setNetworkType('slow');
        setNetworkMessage('Conexão lenta detectada • Carregando com carinho...');
      } else if (is3G || highRtt || lowDownlink) {
        setNetworkType('moderate');
        setNetworkMessage('Otimizando para sua conexão...');
      } else {
        setNetworkType('fast');
        setNetworkMessage('Cuidado veterinário onde seu pet se sente seguro.');
      }
    }

    // 2. Timing logic adapted to network speed
    const minDisplayTime = isSlow ? 1600 : 700;
    const startTime = Date.now();

    const handleReady = () => {
      const elapsed = Date.now() - startTime;
      const remaining = Math.max(0, minDisplayTime - elapsed);

      setTimeout(() => {
        setIsFadingOut(true);
        setTimeout(() => {
          setIsVisible(false);
        }, 600);
      }, remaining);
    };

    if (document.readyState === 'complete') {
      handleReady();
    } else {
      window.addEventListener('load', handleReady);
    }

    // Safety timeout: never block the user for more than 2.8s
    const maxTimeout = setTimeout(() => {
      setIsFadingOut(true);
      setTimeout(() => setIsVisible(false), 500);
    }, 2800);

    return () => {
      window.removeEventListener('load', handleReady);
      clearTimeout(maxTimeout);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div
      role="status"
      aria-label="Carregando Home.Vet Peruíbe"
      onClick={() => {
        setIsFadingOut(true);
        setTimeout(() => setIsVisible(false), 300);
      }}
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#FAF9F6] text-[#2D3748] px-4 transition-all duration-600 ease-out select-none cursor-pointer ${
        isFadingOut ? 'opacity-0 scale-105 pointer-events-none' : 'opacity-100 scale-100'
      }`}
    >
      {/* Background ambient lighting */}
      <div className="absolute inset-0 bg-radial from-brand-green-100/40 via-transparent to-transparent pointer-events-none" />

      <div className="relative flex flex-col items-center max-w-sm text-center">
        {/* Logo box with glowing backdrop */}
        <div className="relative mb-6">
          {/* Pulsing ripple waves */}
          <div className="absolute -inset-3 rounded-4xl bg-brand-green-200/50 animate-ripple pointer-events-none" />
          <div className="absolute -inset-6 rounded-4xl bg-brand-green-100/30 animate-ripple [animation-delay:0.75s] pointer-events-none" />

          {/* Green rounded emblem box */}
          <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-3xl bg-brand-green-800 flex items-center justify-center p-3 sm:p-3.5 shadow-2xl shadow-brand-green-900/25 border border-brand-green-700/50">
            <img
              src={logoEmblemWhite}
              alt={CLINIC_CONFIG.name}
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        {/* Title */}
        <h1 className="font-display font-bold text-2xl sm:text-3xl text-brand-green-900 tracking-tight mb-1">
          {CLINIC_CONFIG.name}
        </h1>

        {/* Subtitle with pulsing heart */}
        <div className="flex items-center justify-center gap-2 mb-6">
          <div className="relative flex items-center justify-center">
            {/* Heart glow ring */}
            <span className="absolute w-6 h-6 rounded-full bg-rose-400/30 animate-ping" />
            <Heart className="w-4 h-4 sm:w-5 sm:h-5 text-rose-500 fill-rose-500 animate-heartbeat shrink-0 relative z-10 drop-shadow-sm" />
          </div>
          <span className="font-display font-semibold text-sm sm:text-base text-brand-green-700 tracking-wide">
            Atendimento Domiciliar
          </span>
        </div>

        {/* Network-adaptive message pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-brand-green-200/80 shadow-xs text-xs font-medium text-brand-green-800">
          {networkType === 'slow' ? (
            <Wifi className="w-3.5 h-3.5 text-amber-600 animate-pulse shrink-0" />
          ) : (
            <Sparkles className="w-3.5 h-3.5 text-brand-green-600 animate-pulse shrink-0" />
          )}
          <span>{networkMessage}</span>
        </div>

        {/* Progress line */}
        <div className="w-40 sm:w-48 h-1 bg-brand-green-100 rounded-full mt-6 overflow-hidden">
          <div className="h-full bg-gradient-to-r from-brand-green-500 to-brand-green-700 rounded-full animate-[pulse_1.2s_ease-in-out_infinite]" />
        </div>

        {/* Gentle touch hint */}
        <p className="text-[11px] text-brand-green-600/70 mt-4 tracking-wide">
          Toque para pular
        </p>
      </div>
    </div>
  );
};
