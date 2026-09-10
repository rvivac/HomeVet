import React, { useState, useEffect } from 'react';
import { MessageCircle, Menu, X, Heart, Home } from 'lucide-react';
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

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'glass-nav shadow-sm py-3'
          : 'bg-[#FAF9F6]/90 backdrop-blur-md py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#inicio"
          className="flex items-center gap-3 group transition-transform active:scale-95"
        >
          <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-brand-green-800 flex items-center justify-center text-white shadow-soft group-hover:bg-brand-green-700 transition-colors">
            <div className="relative">
              <Home className="w-5 h-5 text-brand-green-100" />
              <Heart className="w-2.5 h-2.5 text-brand-yellow-400 absolute -bottom-0.5 -right-0.5 fill-brand-yellow-400" />
            </div>
          </div>
          <div>
            <span className="font-display font-bold text-lg sm:text-xl text-brand-green-900 tracking-tight block leading-tight">
              {CLINIC_CONFIG.name}
            </span>
            <span className="text-xs text-brand-green-600 font-medium flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-whatsapp animate-ping"></span>
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

        {/* Header Right Action Button */}
        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href={createWhatsAppLink('Olá! Gostaria de agendar um atendimento veterinário em casa.')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 sm:gap-2 bg-whatsapp hover:bg-whatsapp-hover text-white text-xs sm:text-sm font-bold px-3 py-2 sm:px-4 sm:py-2.5 rounded-full shadow-pill transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
            aria-label="Agendar consulta diretamente pelo WhatsApp"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span className="hidden xs:inline sm:inline">Agendar no WhatsApp</span>
            <span className="inline xs:hidden sm:hidden">WhatsApp</span>
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl text-brand-green-900 hover:bg-brand-green-100 transition-colors focus:outline-none cursor-pointer"
            aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

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
                className="text-base font-semibold text-[#2D3748] hover:text-brand-green-800 py-2.5 px-3 rounded-xl hover:bg-brand-green-50 transition-colors cursor-pointer"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 mt-1 border-t border-brand-green-100 flex flex-col gap-2">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  window.dispatchEvent(new CustomEvent('open-quote-modal'));
                }}
                className="w-full flex items-center justify-center gap-2 bg-brand-green-100 hover:bg-brand-green-200 text-brand-green-900 font-bold py-2.5 px-4 rounded-xl transition-all text-sm cursor-pointer"
              >
                <span>✨ Monte seu Atendimento</span>
              </button>
              <a
                href={createWhatsAppLink('Olá! Gostaria de tirar uma dúvida sobre atendimento veterinário em casa.')}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 bg-whatsapp hover:bg-whatsapp-hover text-white font-bold py-3 px-4 rounded-2xl shadow-pill transition-all text-center"
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
