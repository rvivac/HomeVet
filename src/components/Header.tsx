import React, { useState, useEffect } from 'react';
import { MessageCircle, Menu, X, Heart } from 'lucide-react';
import { CLINIC_CONFIG, createWhatsAppLink } from '../data/content';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Início', href: '#inicio' },
    { label: 'Vantagens', href: '#vantagens' },
    { label: 'Quem Somos', href: '#sobre' },
    { label: 'Serviços', href: '#servicos' },
  ];

  const handleNavClick = (href: string, e: React.MouseEvent) => {
    if (href === '#simulador') {
      e.preventDefault();
      window.dispatchEvent(new CustomEvent('open-quote-modal'));
    } else if (href === '#cobertura') {
      e.preventDefault();
      window.dispatchEvent(new CustomEvent('open-coverage-modal'));
    } else if (href === '#faq') {
      e.preventDefault();
      window.dispatchEvent(new CustomEvent('open-faq-modal'));
    } else if (href === '#depoimentos') {
      e.preventDefault();
      window.dispatchEvent(new CustomEvent('open-testimonials-modal'));
    }
  };

  const openShortcutModal = (eventName: string) => {
    setMobileMenuOpen(false);
    window.dispatchEvent(new CustomEvent(eventName));
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'glass-nav shadow-sm'
          : 'bg-[#FAF9F6]/95 backdrop-blur-md'
      }`}
    >
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 flex items-center justify-between h-14 sm:h-16">
        {/* Brand Logo */}
        <a
          href="#inicio"
          className="flex items-center gap-2 sm:gap-2.5 group transition-transform active:scale-95 shrink-0"
        >
          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-brand-green-800 flex items-center justify-center p-1.5 shadow-soft group-hover:bg-brand-green-700 transition-colors shrink-0">
            <img
              src="/images/logo-icon-white.png"
              alt="Home.Vet Peruíbe"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="leading-tight">
            <span className="font-display font-bold text-base sm:text-xl text-brand-green-900 tracking-tight block">
              {CLINIC_CONFIG.name}
            </span>
            <span className="text-[10px] sm:text-xs text-brand-green-600 font-medium flex items-center gap-1.5">
              <Heart className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-rose-500 fill-rose-500 animate-heartbeat shrink-0" />
              Atendimento Domiciliar
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(link.href, e)}
              className="text-sm font-semibold text-[#4A5568] hover:text-brand-green-800 transition-colors px-1 py-1 rounded-lg hover:bg-brand-green-50 cursor-pointer"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Header Right Action Button & Mobile Toggle */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <a
            href={createWhatsAppLink('Olá! Gostaria de agendar um atendimento veterinário em casa.')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 bg-[#166534] hover:bg-[#14532d] text-white text-xs sm:text-sm font-bold px-3 py-1.5 sm:px-4 sm:py-2 rounded-full shadow-xs transition-all duration-200 hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 cursor-pointer h-8 sm:h-9"
            aria-label="Agendar consulta diretamente pelo WhatsApp"
          >
            <MessageCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-white" />
            <span className="hidden xs:inline sm:inline">Agendar no WhatsApp</span>
            <span className="inline xs:hidden sm:hidden">WhatsApp</span>
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-1.5 w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center rounded-xl text-brand-green-900 hover:bg-brand-green-100 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-green-400 cursor-pointer"
            aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
          >
            {mobileMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
          </button>
        </div>
      </div>

      {/* Barra de Acessos Rápidos Fixa no Topo (Sticky Secundário Mobile - Idêntico ao Krav-Maga Bukan Santos) */}
      <aside
        className="quick-access-bar lg:hidden w-full border-t border-brand-green-200/60 border-b border-brand-green-200/60 bg-[#FAF9F6]/98 backdrop-blur-md"
        id="quickAccessBar"
        aria-label="Acessos rápidos"
      >
        <div className="quick-access-track max-w-7xl mx-auto grid grid-cols-3 gap-1.5 px-3 py-1.5 w-full box-border">
          {/* 1. Quando Chamar */}
          <button
            type="button"
            onClick={() => openShortcutModal('open-alert-signs-modal')}
            className="quick-pill flex items-center justify-center gap-1.5 py-1.5 px-2 min-h-[38px] bg-brand-green-50/85 hover:bg-brand-green-100/90 active:bg-brand-green-200/80 border border-brand-green-300/60 rounded-xl text-brand-green-950 font-bold text-xs transition-all active:scale-95 cursor-pointer text-center select-none shadow-2xs"
            aria-label="Sinais de alerta: quando chamar o veterinário"
          >
            <span className="pill-ico text-sm leading-none flex items-center justify-center shrink-0" aria-hidden="true">🚨</span>
            <span className="pill-txt truncate leading-tight">Quando Chamar</span>
          </button>

          {/* 2. Onde Atende */}
          <button
            type="button"
            onClick={() => openShortcutModal('open-coverage-modal')}
            className="quick-pill flex items-center justify-center gap-1.5 py-1.5 px-2 min-h-[38px] bg-brand-green-50/85 hover:bg-brand-green-100/90 active:bg-brand-green-200/80 border border-brand-green-300/60 rounded-xl text-brand-green-950 font-bold text-xs transition-all active:scale-95 cursor-pointer text-center select-none shadow-2xs"
            aria-label="Ver regiões e bairros atendidos"
          >
            <span className="pill-ico text-sm leading-none flex items-center justify-center shrink-0" aria-hidden="true">📍</span>
            <span className="pill-txt truncate leading-tight">Onde Atende</span>
          </button>

          {/* 3. Dúvidas */}
          <button
            type="button"
            onClick={() => openShortcutModal('open-faq-modal')}
            className="quick-pill flex items-center justify-center gap-1.5 py-1.5 px-2 min-h-[38px] bg-brand-green-50/85 hover:bg-brand-green-100/90 active:bg-brand-green-200/80 border border-brand-green-300/60 rounded-xl text-brand-green-950 font-bold text-xs transition-all active:scale-95 cursor-pointer text-center select-none shadow-2xs"
            aria-label="Ver perguntas frequentes e dúvidas"
          >
            <span className="pill-ico text-sm leading-none flex items-center justify-center shrink-0" aria-hidden="true">❓</span>
            <span className="pill-txt truncate leading-tight">Dúvidas</span>
          </button>
        </div>
      </aside>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-brand-bg/98 border-b border-brand-green-200/50 px-4 pt-3 pb-6 shadow-xl animate-fadeIn">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  setMobileMenuOpen(false);
                  handleNavClick(link.href, e);
                }}
                className="text-base font-semibold text-[#1F2937] hover:text-brand-green-900 py-2.5 px-3 rounded-xl hover:bg-brand-green-50 transition-colors cursor-pointer min-h-[44px] flex items-center"
              >
                {link.label}
              </a>
            ))}

            {/* Acesso rápido a avaliações no drawer */}
            <button
              type="button"
              onClick={() => openShortcutModal('open-testimonials-modal')}
              className="text-base font-semibold text-[#1F2937] hover:text-brand-green-900 py-2.5 px-3 rounded-xl hover:bg-brand-green-50 transition-colors cursor-pointer min-h-[44px] flex items-center justify-between"
            >
              <span className="flex items-center gap-2">
                <span>⭐</span>
                <span>Depoimentos & Avaliações</span>
              </span>
              <span className="text-[11px] bg-amber-100 text-amber-800 font-bold px-2 py-0.5 rounded-full">
                5.0 ★
              </span>
            </button>

            <div className="pt-3 mt-1 border-t border-brand-green-100 flex flex-col gap-2">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  window.dispatchEvent(new CustomEvent('open-quote-modal'));
                }}
                className="w-full flex items-center justify-center gap-2 bg-brand-green-100 hover:bg-brand-green-200 text-brand-green-950 font-bold py-3 px-4 rounded-xl transition-all text-sm cursor-pointer min-h-[44px]"
              >
                <span>✨ Monte seu Atendimento</span>
              </button>
              <a
                href={createWhatsAppLink('Olá! Gostaria de tirar uma dúvida sobre atendimento veterinário em casa.')}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 bg-[#166534] hover:bg-[#14532d] text-white font-bold py-3 px-4 rounded-2xl shadow-md transition-all text-center min-h-[44px]"
              >
                <MessageCircle className="w-5 h-5 fill-white" />
                <span>Chamar no WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
