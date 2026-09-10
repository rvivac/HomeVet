import React, { useState, useEffect } from 'react';
import { MessageCircle, X, Search, CheckCircle2, MapPin, HelpCircle, ChevronDown, Heart, Star, Quote, Sparkles, AlertTriangle, Clock } from 'lucide-react';
import { NEIGHBORHOODS, FAQS, TESTIMONIALS, ALERT_SIGNS, CHECKUP_INTERVALS, createWhatsAppLink } from '../data/content';
import { InteractiveQuoteModal } from './InteractiveQuote';
import { CoverageMap } from './CoverageMap';

export const AmbulanceIcon: React.FC<{ className?: string }> = ({ className = 'w-7 h-7' }) => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Outer decorative ring matching dock styling */}
    <circle cx="32" cy="32" r="30" stroke="#277053" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.4" />
    <circle cx="32" cy="32" r="27.5" stroke="#348B67" strokeWidth="1.5" />
    <circle cx="32" cy="32" r="26" fill="#FAF9F6" />

    {/* Flashing Emergency Siren on roof */}
    <path d="M25 18 C25 15.5 29 15.5 29 18 Z" fill="#EF4444" stroke="#DC2626" strokeWidth="0.8" />
    <line x1="27" y1="13" x2="27" y2="15" stroke="#F59E0B" strokeWidth="1.2" strokeLinecap="round" />
    <line x1="23" y1="14" x2="24.5" y2="15.5" stroke="#F59E0B" strokeWidth="1" strokeLinecap="round" />
    <line x1="31" y1="14" x2="29.5" y2="15.5" stroke="#F59E0B" strokeWidth="1" strokeLinecap="round" />

    {/* Ambulance Van Main Body */}
    <path
      d="M12 24 C12 21 14 19 17 19 L36 19 L44 26 L52 28 C53.5 28 54 29 54 31 L54 41 C54 42.5 53 43 51.5 43 L48 43 C48 40 45.5 37.5 42.5 37.5 C39.5 37.5 37 40 37 43 L26 43 C26 40 23.5 37.5 20.5 37.5 C17.5 37.5 15 40 15 43 L13 43 C12 43 12 42 12 41 Z"
      fill="#FFFFFF"
      stroke="#277053"
      strokeWidth="1.4"
      strokeLinejoin="round"
    />

    {/* Windows */}
    {/* Front windshield */}
    <path d="M38 22 L43 27 L49 29 L49 33 L38 33 Z" fill="#E0F2FE" stroke="#38BDF8" strokeWidth="0.8" />
    {/* Side cabin window */}
    <rect x="27" y="22" width="8.5" height="7.5" rx="1.5" fill="#E0F2FE" stroke="#38BDF8" strokeWidth="0.8" />

    {/* Brand Green Stripe on body */}
    <path d="M13 34.5 L53.5 34.5" stroke="#348B67" strokeWidth="2" strokeLinecap="round" />

    {/* Veterinary Cross on ambulance side */}
    <rect x="19" y="23" width="3.5" height="9" rx="0.8" fill="#1B4D3E" />
    <rect x="16.25" y="25.75" width="9" height="3.5" rx="0.8" fill="#1B4D3E" />

    {/* Headlight */}
    <path d="M52.5 35 Q54 36 52.5 37" stroke="#FBBF24" strokeWidth="1.5" strokeLinecap="round" />

    {/* Front Wheel */}
    <circle cx="42.5" cy="43" r="5" fill="#2D3748" />
    <circle cx="42.5" cy="43" r="2.8" fill="#FFFFFF" />
    <circle cx="42.5" cy="43" r="1.2" fill="#348B67" />

    {/* Rear Wheel */}
    <circle cx="20.5" cy="43" r="5" fill="#2D3748" />
    <circle cx="20.5" cy="43" r="2.8" fill="#FFFFFF" />
    <circle cx="20.5" cy="43" r="1.2" fill="#348B67" />
  </svg>
);

export const HeartBunnyIcon: React.FC<{ className?: string }> = ({ className = 'w-7 h-7' }) => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Outer decorative ring matching compass style */}
    <circle cx="32" cy="32" r="30" stroke="#277053" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.4" />
    <circle cx="32" cy="32" r="27.5" stroke="#348B67" strokeWidth="1.5" />
    <circle cx="32" cy="32" r="26" fill="#FAF9F6" />

    {/* Bunny Left Long Ear */}
    <path d="M19 28 C15 19 16 7 21 8 C24 9 24 19 23 28 Z" fill="#FFFFFF" stroke="#277053" strokeWidth="1.1" strokeLinejoin="round" />
    <path d="M19.5 25 C17 18 17.5 10 20.5 11 C22.5 11.5 22.5 19 22 25 Z" fill="#FFAAA6" />

    {/* Bunny Right Playful Tilt Ear */}
    <path d="M27 28 C28 18 31 7 36 8 C39 9 37 19 34 28 Z" fill="#FFFFFF" stroke="#277053" strokeWidth="1.1" strokeLinejoin="round" />
    <path d="M28.5 25 C29.5 18 31.5 11 34.5 11.5 C36.5 12 35.5 19 33.5 25 Z" fill="#FFAAA6" />

    {/* Bunny Head */}
    <ellipse cx="26" cy="33" rx="10.5" ry="8.8" fill="#FFFFFF" stroke="#277053" strokeWidth="1.2" />

    {/* Bunny Cheeks Blush */}
    <circle cx="21" cy="34" r="1.8" fill="#FFB6C1" opacity="0.6" />
    <circle cx="31" cy="34" r="1.8" fill="#FFB6C1" opacity="0.6" />

    {/* Bunny Eyes */}
    <ellipse cx="22" cy="31.5" rx="1.6" ry="1.9" fill="#205A43" />
    <circle cx="21.5" cy="30.8" r="0.55" fill="#FFFFFF" />
    <ellipse cx="30" cy="31.5" rx="1.6" ry="1.9" fill="#205A43" />
    <circle cx="29.5" cy="30.8" r="0.55" fill="#FFFFFF" />

    {/* Bunny Nose & Smile */}
    <polygon points="25.5,33.5 26.5,33.5 26,34.3" fill="#FF8B8B" />
    <path d="M25 35 Q26 36 27 35" stroke="#2D3748" strokeWidth="0.75" strokeLinecap="round" fill="none" />

    {/* Whiskers */}
    <line x1="18" y1="33.5" x2="12" y2="32.5" stroke="#2D3748" strokeWidth="0.7" strokeLinecap="round" />
    <line x1="18" y1="35.5" x2="12" y2="36.5" stroke="#2D3748" strokeWidth="0.7" strokeLinecap="round" />
    <line x1="33" y1="33.5" x2="38" y2="32.5" stroke="#2D3748" strokeWidth="0.7" strokeLinecap="round" />
    <line x1="33" y1="35.5" x2="38" y2="36.5" stroke="#2D3748" strokeWidth="0.7" strokeLinecap="round" />

    {/* Cute Heart (Coraçãozinho) in Rich Rose */}
    <path
      d="M44 47 C44 47 34 38 34 29.5 C34 24 38 21 42 23 C43.5 24 44 25.5 44 25.5 C44 25.5 44.5 24 46 23 C50 21 54 24 54 29.5 C54 38 44 47 44 47 Z"
      fill="#E11D48"
      stroke="#BE123C"
      strokeWidth="1.2"
      strokeLinejoin="round"
    />
    <path d="M38 27 C36.5 30 37 33 38 35" stroke="#FFAAA6" strokeWidth="1" strokeLinecap="round" opacity="0.8" />

    {/* Bunny Paw hugging heart */}
    <ellipse cx="33.5" cy="35" rx="3.2" ry="2.4" fill="#FFFFFF" stroke="#277053" strokeWidth="0.9" />
    <path d="M32.5 34 L32.5 36 M34.5 34 L34.5 36" stroke="#D3A882" strokeWidth="0.6" strokeLinecap="round" />
  </svg>
);

export const QuestionCatIcon: React.FC<{ className?: string }> = ({ className = 'w-7 h-7' }) => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Outer decorative ring matching compass style */}
    <circle cx="32" cy="32" r="30" stroke="#277053" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.4" />
    <circle cx="32" cy="32" r="27.5" stroke="#348B67" strokeWidth="1.5" />
    <circle cx="32" cy="32" r="26" fill="#FAF9F6" />

    {/* Kitten Left Ear */}
    <polygon points="13,26 18,11 25,23" fill="#E8A87C" stroke="#277053" strokeWidth="1" strokeLinejoin="round" />
    <polygon points="15,24 19,14 23,22" fill="#FFAAA6" />

    {/* Kitten Right Ear */}
    <polygon points="27,23 33,12 37,25" fill="#E8A87C" stroke="#277053" strokeWidth="1" strokeLinejoin="round" />
    <polygon points="29,22 33,15 35,23" fill="#FFAAA6" />

    {/* Kitten Head */}
    <ellipse cx="25" cy="33" rx="12.5" ry="11" fill="#FEEFD8" stroke="#277053" strokeWidth="1.2" />

    {/* Kitten Forehead markings */}
    <path d="M23 23 L23 26 M25 22 L25 26 M27 23 L27 26" stroke="#D3A882" strokeWidth="0.9" strokeLinecap="round" />

    {/* Kitten Eyes */}
    <ellipse cx="20.5" cy="32" rx="1.8" ry="2" fill="#205A43" />
    <circle cx="20" cy="31.2" r="0.6" fill="#FFFFFF" />
    <ellipse cx="29.5" cy="32" rx="1.8" ry="2" fill="#205A43" />
    <circle cx="29" cy="31.2" r="0.6" fill="#FFFFFF" />

    {/* Kitten Nose & Mouth */}
    <polygon points="24.2,34.5 25.8,34.5 25,35.5" fill="#FF8B8B" />
    <path d="M23.8 36.5 Q25 37.5 26.2 36.5" stroke="#2D3748" strokeWidth="0.8" strokeLinecap="round" fill="none" />

    {/* Kitten Whiskers */}
    <line x1="17" y1="34" x2="10" y2="33" stroke="#2D3748" strokeWidth="0.75" strokeLinecap="round" />
    <line x1="17" y1="36" x2="11" y2="37" stroke="#2D3748" strokeWidth="0.75" strokeLinecap="round" />
    <line x1="32" y1="34" x2="37" y2="33.5" stroke="#2D3748" strokeWidth="0.75" strokeLinecap="round" />
    <line x1="32" y1="36" x2="37" y2="37" stroke="#2D3748" strokeWidth="0.75" strokeLinecap="round" />

    {/* Kitten Paws resting forward */}
    <ellipse cx="29" cy="42" rx="3.5" ry="2.6" fill="#FFFFFF" stroke="#277053" strokeWidth="0.9" />
    <path d="M28 41 L28 43 M30 41 L30 43" stroke="#D3A882" strokeWidth="0.6" strokeLinecap="round" />

    {/* Bold Question Mark '?' in Brand Colors */}
    <path
      d="M39 19 C39 13.5 50 13.5 50 21.5 C50 27 44.5 29 44.5 35.5"
      stroke="#1B4D3E"
      strokeWidth="4.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <circle cx="44.5" cy="44.5" r="2.8" fill="#1B4D3E" />
  </svg>
);

export const CompassDogIcon: React.FC<{ className?: string }> = ({ className = 'w-7 h-7' }) => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Compass Outer Ring with delicate dashed styling */}
    <circle cx="32" cy="32" r="30" stroke="#277053" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.4" />
    <circle cx="32" cy="32" r="27.5" stroke="#348B67" strokeWidth="1.5" />
    
    {/* Cardinal Direction Points (Rosa dos Ventos) in Home.Vet brand greens */}
    {/* North Point */}
    <polygon points="32,3 28.5,23 32,27" fill="#1B4D3E" />
    <polygon points="32,3 35.5,23 32,27" fill="#64AE8D" />
    {/* South Point */}
    <polygon points="32,61 35.5,41 32,37" fill="#1B4D3E" />
    <polygon points="32,61 28.5,41 32,37" fill="#64AE8D" />
    {/* East Point */}
    <polygon points="61,32 41,28.5 37,32" fill="#1B4D3E" />
    <polygon points="61,32 41,35.5 37,32" fill="#64AE8D" />
    {/* West Point */}
    <polygon points="3,32 23,35.5 27,32" fill="#1B4D3E" />
    <polygon points="3,32 23,28.5 27,32" fill="#64AE8D" />
    
    {/* Diagonal Intermediate Points */}
    <polygon points="52,12 37,25 32,32" fill="#9DCDB6" opacity="0.9" />
    <polygon points="12,12 25,27 32,32" fill="#9DCDB6" opacity="0.9" />
    <polygon points="52,52 39,37 32,32" fill="#9DCDB6" opacity="0.9" />
    <polygon points="12,52 27,39 32,32" fill="#9DCDB6" opacity="0.9" />

    {/* Center Glow circular badge backing */}
    <circle cx="32" cy="32" r="14.5" fill="#FAF9F6" stroke="#277053" strokeWidth="1.8" />
    
    {/* Cute Puppy Face */}
    {/* Puppy Left Ear */}
    <path d="M22 24 C18.5 25 17 31 19.5 34.5 C21 34 22.5 30 23 27 Z" fill="#966038" />
    {/* Puppy Right Ear */}
    <path d="M42 24 C45.5 25 47 31 44.5 34.5 C43 34 41.5 30 41 27 Z" fill="#966038" />
    
    {/* Puppy Head */}
    <ellipse cx="32" cy="32.5" rx="9.5" ry="8.5" fill="#E8C39E" />
    {/* Puppy cute patch */}
    <ellipse cx="29" cy="30" rx="3.5" ry="4" fill="#D3A882" opacity="0.5" />
    
    {/* Puppy Muzzle */}
    <ellipse cx="32" cy="35.5" rx="5" ry="4" fill="#FFFFFF" />
    
    {/* Puppy Eyes */}
    <circle cx="28.5" cy="31" r="1.3" fill="#205A43" />
    <circle cx="35.5" cy="31" r="1.3" fill="#205A43" />
    <circle cx="29" cy="30.5" r="0.45" fill="#FFFFFF" />
    <circle cx="36" cy="30.5" r="0.45" fill="#FFFFFF" />
    
    {/* Puppy Nose */}
    <path d="M31 34 Q32 33 33 34 Q32 35.5 31 34 Z" fill="#2D3748" />
    
    {/* Cute Smile */}
    <path d="M30.5 36 Q32 37.5 33.5 36" stroke="#2D3748" strokeWidth="0.85" strokeLinecap="round" fill="none" />
    <ellipse cx="32" cy="37.3" rx="1" ry="0.8" fill="#FF8B8B" />
  </svg>
);

export const FloatingWhatsApp: React.FC = () => {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [isAlertSignsModalOpen, setIsAlertSignsModalOpen] = useState(false);
  const [isTestimonialsModalOpen, setIsTestimonialsModalOpen] = useState(false);
  const [isCoverageModalOpen, setIsCoverageModalOpen] = useState(false);
  const [isFaqModalOpen, setIsFaqModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedZone, setSelectedZone] = useState<string>('all');
  const [openFaqId, setOpenFaqId] = useState<string | null>(FAQS[0]?.id || null);
  const [faqSearch, setFaqSearch] = useState('');

  useEffect(() => {
    const handleOpenQuote = () => setIsQuoteModalOpen(true);
    const handleOpenAlertSigns = () => setIsAlertSignsModalOpen(true);
    const handleOpenTestimonials = () => setIsTestimonialsModalOpen(true);
    const handleOpenCoverage = () => setIsCoverageModalOpen(true);
    const handleOpenFaq = () => setIsFaqModalOpen(true);

    window.addEventListener('open-quote-modal', handleOpenQuote);
    window.addEventListener('open-alert-signs-modal', handleOpenAlertSigns);
    window.addEventListener('open-testimonials-modal', handleOpenTestimonials);
    window.addEventListener('open-coverage-modal', handleOpenCoverage);
    window.addEventListener('open-faq-modal', handleOpenFaq);

    return () => {
      window.removeEventListener('open-quote-modal', handleOpenQuote);
      window.removeEventListener('open-alert-signs-modal', handleOpenAlertSigns);
      window.removeEventListener('open-testimonials-modal', handleOpenTestimonials);
      window.removeEventListener('open-coverage-modal', handleOpenCoverage);
      window.removeEventListener('open-faq-modal', handleOpenFaq);
    };
  }, []);

  // Extrair zonas únicas
  const allZones = ['all', ...Array.from(new Set(NEIGHBORHOODS.map((n) => n.zone)))];

  const filteredNeighborhoods = NEIGHBORHOODS.filter((item) => {
    const matchesSearch =
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.zone.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesZone = selectedZone === 'all' || item.zone === selectedZone;
    return matchesSearch && matchesZone;
  });

  const filteredFaqs = FAQS.filter((faq) => {
    if (!faqSearch.trim()) return true;
    const term = faqSearch.toLowerCase();
    return faq.question.toLowerCase().includes(term) || faq.answer.toLowerCase().includes(term);
  });

  const toggleFaq = (id: string) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  return (
    <>
      <div className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50 flex flex-col items-end pointer-events-none">
        
        {/* 1. Botão Flutuante: Ambulância (Quando devo chamar o veterinário em casa?) */}
        <div className="relative pointer-events-auto mb-3 flex items-center group">
          {/* Tooltip 'Quando Chamar o Veterinário?' exibido ao lado no hover */}
          <div className="absolute right-full mr-3 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none translate-x-2 group-hover:translate-x-0 z-10">
            <div className="relative bg-brand-green-900/95 text-white text-xs sm:text-sm font-bold px-3.5 py-1.5 rounded-full shadow-xl border border-brand-green-700/80 backdrop-blur-md flex items-center gap-1.5">
              <AlertTriangle className="w-3.5 h-3.5 text-amber-400" />
              <span>Quando Chamar o Veterinário?</span>
              <span className="absolute left-full top-1/2 -translate-y-1/2 border-4 border-transparent border-l-brand-green-900/95" />
            </div>
          </div>

          <button
            onClick={() => setIsAlertSignsModalOpen(true)}
            className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-white hover:bg-brand-green-50 text-brand-green-900 flex items-center justify-center shadow-lg hover:shadow-xl border-2 border-brand-green-300 hover:border-brand-green-500 transition-all duration-300 hover:scale-105 active:scale-95 group relative cursor-pointer"
            aria-label="Abrir Quando Devo Chamar o Veterinário em Casa (Ambulância)"
            title="Quando devo chamar o veterinário em casa?"
          >
            <AmbulanceIcon className="w-8 h-8 sm:w-9 sm:h-9 group-hover:scale-110 transition-transform duration-300" />
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-white animate-pulse" />
          </button>
        </div>

        {/* 2. Botão Flutuante: Coraçãozinho com Coelhinho (Tutores e Pets Felizes) */}
        <div className="relative pointer-events-auto mb-3 flex items-center group">
          {/* Tooltip 'Tutores e Pets Felizes' exibido ao lado no hover */}
          <div className="absolute right-full mr-3 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none translate-x-2 group-hover:translate-x-0 z-10">
            <div className="relative bg-brand-green-900/95 text-white text-xs sm:text-sm font-bold px-3.5 py-1.5 rounded-full shadow-xl border border-brand-green-700/80 backdrop-blur-md flex items-center gap-1.5">
              <Heart className="w-3.5 h-3.5 text-rose-400 fill-rose-400" />
              <span>Tutores e Pets Felizes</span>
              <span className="absolute left-full top-1/2 -translate-y-1/2 border-4 border-transparent border-l-brand-green-900/95" />
            </div>
          </div>

          <button
            onClick={() => setIsTestimonialsModalOpen(true)}
            className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-white hover:bg-brand-green-50 text-brand-green-900 flex items-center justify-center shadow-lg hover:shadow-xl border-2 border-brand-green-300 hover:border-brand-green-500 transition-all duration-300 hover:scale-105 active:scale-95 group relative cursor-pointer"
            aria-label="Abrir Tutores e Pets Felizes (Coraçãozinho com Coelhinho)"
            title="Tutores e Pets Felizes"
          >
            <HeartBunnyIcon className="w-8 h-8 sm:w-9 sm:h-9 group-hover:scale-110 transition-transform duration-300" />
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-rose-500 rounded-full border-2 border-white" />
          </button>
        </div>

        {/* 2. Botão Flutuante: '?' com Gatinho (Perguntas Frequentes) */}
        <div className="relative pointer-events-auto mb-3 flex items-center group">
          {/* Tooltip 'Perguntas Frequentes' exibido ao lado no hover */}
          <div className="absolute right-full mr-3 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none translate-x-2 group-hover:translate-x-0 z-10">
            <div className="relative bg-brand-green-900/95 text-white text-xs sm:text-sm font-bold px-3.5 py-1.5 rounded-full shadow-xl border border-brand-green-700/80 backdrop-blur-md flex items-center gap-1.5">
              <HelpCircle className="w-3.5 h-3.5 text-brand-yellow-300" />
              <span>Perguntas Frequentes</span>
              <span className="absolute left-full top-1/2 -translate-y-1/2 border-4 border-transparent border-l-brand-green-900/95" />
            </div>
          </div>

          <button
            onClick={() => setIsFaqModalOpen(true)}
            className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-white hover:bg-brand-green-50 text-brand-green-900 flex items-center justify-center shadow-lg hover:shadow-xl border-2 border-brand-green-300 hover:border-brand-green-500 transition-all duration-300 hover:scale-105 active:scale-95 group relative cursor-pointer"
            aria-label="Abrir Perguntas Frequentes (? com Gatinho)"
            title="Perguntas Frequentes"
          >
            <QuestionCatIcon className="w-8 h-8 sm:w-9 sm:h-9 group-hover:scale-110 transition-transform duration-300" />
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-brand-yellow-400 rounded-full border-2 border-white" />
          </button>
        </div>

        {/* 3. Botão Flutuante: Rosa dos Ventos com Cachorrinho (Regiões Atendidas) */}
        <div className="relative pointer-events-auto mb-3 flex items-center group">
          {/* Tooltip 'Regiões Atendidas' exibido ao lado no hover */}
          <div className="absolute right-full mr-3 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none translate-x-2 group-hover:translate-x-0 z-10">
            <div className="relative bg-brand-green-900/95 text-white text-xs sm:text-sm font-bold px-3.5 py-1.5 rounded-full shadow-xl border border-brand-green-700/80 backdrop-blur-md flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-brand-green-300" />
              <span>Regiões Atendidas</span>
              <span className="absolute left-full top-1/2 -translate-y-1/2 border-4 border-transparent border-l-brand-green-900/95" />
            </div>
          </div>

          <button
            onClick={() => setIsCoverageModalOpen(true)}
            className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-white hover:bg-brand-green-50 text-brand-green-900 flex items-center justify-center shadow-lg hover:shadow-xl border-2 border-brand-green-300 hover:border-brand-green-500 transition-all duration-300 hover:scale-105 active:scale-95 group relative cursor-pointer"
            aria-label="Consultar Regiões e Bairros Atendidos (Rosa dos Ventos com Cachorrinho)"
            title="Regiões Atendidas"
          >
            <CompassDogIcon className="w-8 h-8 sm:w-9 sm:h-9 group-hover:rotate-12 transition-transform duration-300" />
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-brand-green-600 rounded-full border-2 border-white" />
          </button>
        </div>

        {/* 5. Botão Flutuante: Monte seu Atendimento Personalizado (no lugar do botão de agendar no WhatsApp) */}
        <div className="relative pointer-events-auto flex items-center group">
          {/* Tooltip 'Monte seu Atendimento Personalizado' exibido ao lado no hover */}
          <div className="absolute right-full mr-3 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none translate-x-2 group-hover:translate-x-0 z-10">
            <div className="relative bg-brand-green-900/95 text-white text-xs sm:text-sm font-bold px-3.5 py-1.5 rounded-full shadow-xl border border-brand-green-700/80 backdrop-blur-md flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-brand-yellow-300" />
              <span>Monte seu Atendimento Personalizado</span>
              <span className="absolute left-full top-1/2 -translate-y-1/2 border-4 border-transparent border-l-brand-green-900/95" />
            </div>
          </div>

          {/* Radar ring sutil sincronizado a cada 20s */}
          <span className="absolute -inset-1 rounded-full bg-whatsapp opacity-0 animate-ring-subtle-20s -z-10 pointer-events-none" />

          <button
            type="button"
            onClick={() => setIsQuoteModalOpen(true)}
            className="flex items-center gap-2.5 bg-whatsapp hover:bg-whatsapp-hover text-white py-3.5 px-4 sm:px-5 rounded-full shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 group animate-blink-subtle-20s cursor-pointer border border-whatsapp-hover"
            aria-label="Abrir janela Monte seu Atendimento Personalizado"
            title="Monte seu Atendimento Personalizado"
          >
            <div className="relative">
              <MessageCircle className="w-7 h-7 fill-white text-white" />
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-white rounded-full border-2 border-whatsapp flex items-center justify-center">
                <span className="w-1.5 h-1.5 bg-whatsapp rounded-full animate-pulse" />
              </span>
            </div>
            <span className="hidden sm:inline-block font-display font-bold text-sm tracking-wide text-white pr-1">
              Monte seu Atendimento
            </span>
          </button>
        </div>

      </div>

      {/* Modal Interativo: Regiões e Bairros Atendidos */}
      {isCoverageModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[88vh] flex flex-col shadow-2xl border border-brand-green-100 relative overflow-hidden">
            
            {/* Modal Header */}
            <div className="p-5 sm:p-6 bg-brand-bg border-b border-brand-green-100 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-2xl bg-white border border-brand-green-200 flex items-center justify-center shadow-xs">
                  <CompassDogIcon className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-xl text-brand-green-900 leading-tight">
                    Regiões e Bairros Atendidos
                  </h3>
                  <p className="text-xs text-brand-green-700 font-medium">
                    Peruíbe e Região Metropolitana com rotas programadas
                  </p>
                </div>
              </div>

              <button
                onClick={() => setIsCoverageModalOpen(false)}
                className="p-2 rounded-xl text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-colors cursor-pointer"
                aria-label="Fechar modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Interactive Dynamic Map (Google Maps Tiles + Polygon Area) */}
            <div className="p-4 sm:p-5 bg-brand-bg/50 border-b border-brand-green-100/60">
              <div className="mb-2 flex items-center justify-between">
                <span className="text-xs font-bold text-brand-green-900 uppercase tracking-wider flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-whatsapp animate-ping" />
                  Mapa Interativo de Cobertura Domiciliar
                </span>
                <span className="text-[11px] text-brand-green-700 font-medium hidden sm:inline">
                  Peruíbe & Região Metropolitana
                </span>
              </div>
              <CoverageMap height="290px" />
            </div>

            {/* Search and Filters */}
            <div className="p-4 sm:p-6 border-b border-brand-green-100/60 bg-white space-y-3">
              <div className="relative">
                <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Buscar pelo nome do seu bairro ou balneário..."
                  className="w-full pl-10 pr-16 py-2.5 rounded-xl bg-brand-bg border border-brand-green-100 text-sm focus:outline-none focus:ring-2 focus:ring-brand-green-500 focus:bg-white transition-all"
                />
                {searchTerm && (
                  <button
                    onClick={() => setSearchTerm('')}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-gray-400 hover:text-gray-600 bg-gray-100 px-2 py-0.5 rounded cursor-pointer"
                  >
                    Limpar
                  </button>
                )}
              </div>

              {/* Zone Filter Chips */}
              <div className="flex items-center gap-1.5 overflow-x-auto pb-1">
                {allZones.map((zone) => (
                  <button
                    key={zone}
                    onClick={() => setSelectedZone(zone)}
                    className={`px-3 py-1 rounded-lg text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                      selectedZone === zone
                        ? 'bg-brand-green-800 text-white shadow-xs'
                        : 'bg-brand-bg text-gray-600 hover:bg-brand-green-50 border border-brand-green-100'
                    }`}
                  >
                    {zone === 'all' ? 'Todos (48)' : zone}
                  </button>
                ))}
              </div>
            </div>

            {/* Neighborhood List (Scrollable) */}
            <div className="flex-1 overflow-y-auto p-4 sm:p-6 max-h-72">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {filteredNeighborhoods.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-2.5 rounded-xl bg-brand-bg/80 border border-brand-green-100 text-xs text-[#2D3748]"
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 rounded-full bg-brand-green-100 flex items-center justify-center shrink-0 text-brand-green-700">
                        <CheckCircle2 className="w-3 h-3" />
                      </div>
                      <span className="font-semibold text-gray-800">{item.name}</span>
                    </div>
                    <span className="text-[10px] text-brand-green-700 bg-white px-2 py-0.5 rounded-md border border-brand-green-100 font-medium">
                      {item.zone}
                    </span>
                  </div>
                ))}
              </div>

              {filteredNeighborhoods.length === 0 && (
                <div className="text-center py-8 text-gray-500 text-sm">
                  <p>Nenhum bairro encontrado com "{searchTerm}".</p>
                  <p className="text-xs text-brand-green-700 mt-1">
                    Atendemos todo o município de Peruíbe e cidades vizinhas! Consulte-nos no WhatsApp.
                  </p>
                </div>
              )}
            </div>

            {/* Modal Footer with Direct WhatsApp Confirmation */}
            <div className="p-4 sm:p-5 bg-brand-bg border-t border-brand-green-100 flex flex-col sm:flex-row items-center justify-between gap-3">
              <span className="text-xs text-gray-600 text-center sm:text-left">
                Não encontrou seu endereço? Fale conosco para confirmar a rota!
              </span>
              <div className="flex items-center gap-2 w-full sm:w-auto">
                <a
                  href={createWhatsAppLink('Olá! Gostaria de confirmar se atendem no meu bairro em Peruíbe e agendar uma visita.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 bg-whatsapp hover:bg-whatsapp-hover text-white text-xs font-bold px-4 py-2.5 rounded-xl shadow-pill transition-all"
                >
                  <MessageCircle className="w-3.5 h-3.5 fill-white" />
                  <span>Consultar no WhatsApp</span>
                </a>
                <button
                  onClick={() => setIsCoverageModalOpen(false)}
                  className="px-3 py-2.5 text-xs font-semibold text-gray-600 hover:text-gray-800 bg-gray-100 hover:bg-gray-200 rounded-xl transition-colors cursor-pointer"
                >
                  Fechar
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

      {/* Modal Interativo: Perguntas Frequentes (? com Gatinho) */}
      {isFaqModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[88vh] flex flex-col shadow-2xl border border-brand-green-100 relative overflow-hidden">
            
            {/* Modal Header */}
            <div className="p-5 sm:p-6 bg-brand-bg border-b border-brand-green-100 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-2xl bg-white border border-brand-green-200 flex items-center justify-center shadow-xs">
                  <QuestionCatIcon className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-xl text-brand-green-900 leading-tight flex items-center gap-2">
                    Perguntas Frequentes
                    <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-brand-green-100 text-brand-green-800 border border-brand-green-200">
                      Dúvidas
                    </span>
                  </h3>
                  <p className="text-xs text-brand-green-700 font-medium">
                    Tudo sobre consultas domiciliares, vacinas, exames e rotina
                  </p>
                </div>
              </div>

              <button
                onClick={() => setIsFaqModalOpen(false)}
                className="p-2 rounded-xl text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-colors cursor-pointer"
                aria-label="Fechar perguntas frequentes"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Search Input for FAQs */}
            <div className="p-4 sm:p-5 border-b border-brand-green-100/60 bg-white">
              <div className="relative">
                <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={faqSearch}
                  onChange={(e) => setFaqSearch(e.target.value)}
                  placeholder="Pesquisar dúvida (ex: vacinas, urgência, planos, exame)..."
                  className="w-full pl-10 pr-16 py-2.5 rounded-xl bg-brand-bg border border-brand-green-100 text-sm focus:outline-none focus:ring-2 focus:ring-brand-green-500 focus:bg-white transition-all"
                />
                {faqSearch && (
                  <button
                    onClick={() => setFaqSearch('')}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-gray-400 hover:text-gray-600 bg-gray-100 px-2 py-0.5 rounded cursor-pointer"
                  >
                    Limpar
                  </button>
                )}
              </div>
            </div>

            {/* FAQs Accordion List (Scrollable) */}
            <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-3">
              {filteredFaqs.map((faq) => {
                const isOpen = openFaqId === faq.id;
                return (
                  <div
                    key={faq.id}
                    className="rounded-2xl border border-brand-green-100/90 bg-brand-bg/80 transition-all overflow-hidden"
                  >
                    <button
                      type="button"
                      onClick={() => toggleFaq(faq.id)}
                      className="w-full flex items-center justify-between p-4 sm:p-4.5 text-left font-display font-bold text-sm sm:text-base text-brand-green-900 hover:text-brand-green-700 transition-colors cursor-pointer"
                      aria-expanded={isOpen}
                    >
                      <span className="pr-3 leading-snug">{faq.question}</span>
                      <div
                        className={`w-7 h-7 rounded-lg bg-white flex items-center justify-center shrink-0 border border-brand-green-100 transition-transform duration-200 ${
                          isOpen ? 'rotate-180 bg-brand-green-100 text-brand-green-800' : 'text-gray-400'
                        }`}
                      >
                        <ChevronDown className="w-4 h-4" />
                      </div>
                    </button>

                    {isOpen && (
                      <div className="px-4 pb-4 pt-1 text-xs sm:text-sm text-[#4A5568] leading-relaxed border-t border-brand-green-100/60 bg-white/70">
                        <p>{faq.answer}</p>
                      </div>
                    )}
                  </div>
                );
              })}

              {filteredFaqs.length === 0 && (
                <div className="text-center py-8 text-gray-500 text-sm">
                  <p>Nenhuma dúvida encontrada com "{faqSearch}".</p>
                  <p className="text-xs text-brand-green-700 mt-1">
                    Fale conosco diretamente pelo WhatsApp para esclarecer o que precisar!
                  </p>
                </div>
              )}
            </div>

            {/* Modal Footer with Direct WhatsApp Action */}
            <div className="p-4 sm:p-5 bg-brand-bg border-t border-brand-green-100 flex flex-col sm:flex-row items-center justify-between gap-3">
              <span className="text-xs text-gray-600 text-center sm:text-left">
                Ainda tem alguma dúvida sobre o atendimento do seu pet?
              </span>
              <div className="flex items-center gap-2 w-full sm:w-auto">
                <a
                  href={createWhatsAppLink('Olá! Tenho uma dúvida sobre o atendimento veterinário domiciliar em Peruíbe.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 bg-whatsapp hover:bg-whatsapp-hover text-white text-xs font-bold px-4 py-2.5 rounded-xl shadow-pill transition-all"
                >
                  <MessageCircle className="w-3.5 h-3.5 fill-white" />
                  <span>Tirar Dúvida no WhatsApp</span>
                </a>
                <button
                  onClick={() => setIsFaqModalOpen(false)}
                  className="px-3 py-2.5 text-xs font-semibold text-gray-600 hover:text-gray-800 bg-gray-100 hover:bg-gray-200 rounded-xl transition-colors cursor-pointer"
                >
                  Fechar
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

      {/* Modal Interativo: Tutores e Pets Felizes (Coraçãozinho com Coelhinho) */}
      {isTestimonialsModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[88vh] flex flex-col shadow-2xl border border-brand-green-100 relative overflow-hidden">
            
            {/* Modal Header */}
            <div className="p-5 sm:p-6 bg-brand-bg border-b border-brand-green-100 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-2xl bg-white border border-brand-green-200 flex items-center justify-center shadow-xs">
                  <HeartBunnyIcon className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-xl text-brand-green-900 leading-tight flex items-center gap-2">
                    Tutores e Pets Felizes
                    <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-rose-100 text-rose-800 border border-rose-200">
                      4.9 ★★★★★
                    </span>
                  </h3>
                  <p className="text-xs text-brand-green-700 font-medium">
                    Histórias reais de carinho e cuidado veterinário em domicílio
                  </p>
                </div>
              </div>

              <button
                onClick={() => setIsTestimonialsModalOpen(false)}
                className="p-2 rounded-xl text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-colors cursor-pointer"
                aria-label="Fechar depoimentos"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Trust highlight banner */}
            <div className="px-5 py-3 bg-brand-yellow-50/70 border-b border-brand-yellow-100 flex items-center justify-center gap-2 text-xs text-amber-900 font-medium">
              <Sparkles className="w-4 h-4 text-brand-yellow-500 shrink-0" />
              <span>Mais de <strong>450 pets atendidos</strong> com método calmo, gentil e sem estresse em Peruíbe e região</span>
            </div>

            {/* Testimonials List (Scrollable) */}
            <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4">
              {TESTIMONIALS.map((t) => (
                <div
                  key={t.id}
                  className="bg-brand-bg/80 rounded-2xl p-5 border border-brand-green-100 shadow-xs flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-1">
                        {[...Array(t.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-brand-yellow-400 fill-brand-yellow-400" />
                        ))}
                      </div>
                      <Quote className="w-5 h-5 text-brand-green-200" />
                    </div>

                    <p className="text-xs sm:text-sm text-[#2D3748] leading-relaxed italic mb-4">
                      "{t.text}"
                    </p>
                  </div>

                  <div className="pt-3 border-t border-brand-green-100/70 flex items-center justify-between">
                    <div>
                      <h4 className="font-display font-bold text-xs sm:text-sm text-brand-green-900">
                        {t.tutorName}
                      </h4>
                      <p className="text-[11px] text-brand-green-700 font-medium">
                        Tutor(a) de {t.petName}
                      </p>
                    </div>
                    <span className="text-[10px] font-semibold text-gray-500 bg-white px-2.5 py-1 rounded-full border border-brand-green-100">
                      {t.neighborhood}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Modal Footer with Direct WhatsApp Action */}
            <div className="p-4 sm:p-5 bg-brand-bg border-t border-brand-green-100 flex flex-col sm:flex-row items-center justify-between gap-3">
              <span className="text-xs text-gray-600 text-center sm:text-left">
                Proporcione essa mesma tranquilidade para seu melhor amigo!
              </span>
              <div className="flex items-center gap-2 w-full sm:w-auto">
                <a
                  href={createWhatsAppLink('Olá! Li os depoimentos de outros tutores no site e gostaria de agendar uma consulta para meu pet.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 bg-whatsapp hover:bg-whatsapp-hover text-white text-xs font-bold px-4 py-2.5 rounded-xl shadow-pill transition-all"
                >
                  <MessageCircle className="w-3.5 h-3.5 fill-white" />
                  <span>Agendar no WhatsApp</span>
                </a>
                <button
                  onClick={() => setIsTestimonialsModalOpen(false)}
                  className="px-3 py-2.5 text-xs font-semibold text-gray-600 hover:text-gray-800 bg-gray-100 hover:bg-gray-200 rounded-xl transition-colors cursor-pointer"
                >
                  Fechar
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

      {/* Modal Interativo: Quando devo chamar o veterinário em casa? (Ambulância) */}
      {isAlertSignsModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[88vh] flex flex-col shadow-2xl border border-brand-green-100 relative overflow-hidden">
            
            {/* Modal Header */}
            <div className="p-5 sm:p-6 bg-brand-bg border-b border-brand-green-100 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-2xl bg-white border border-brand-green-200 flex items-center justify-center shadow-xs">
                  <AmbulanceIcon className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-xl text-brand-green-900 leading-tight flex items-center gap-2">
                    Quando Chamar o Veterinário?
                    <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 border border-amber-200">
                      Saúde Preventiva
                    </span>
                  </h3>
                  <p className="text-xs text-brand-green-700 font-medium">
                    Sinais de alerta no comportamento do pet e frequência ideal de consultas
                  </p>
                </div>
              </div>

              <button
                onClick={() => setIsAlertSignsModalOpen(false)}
                className="p-2 rounded-xl text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-colors cursor-pointer"
                aria-label="Fechar modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Scrollable Content */}
            <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6">
              
              {/* Sinais de Alerta */}
              <div>
                <h4 className="font-display font-bold text-base text-brand-green-900 mb-2 flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500 animate-pulse" />
                  Sinais de Alerta no Comportamento do Pet
                </h4>
                <p className="text-xs text-gray-500 mb-3">
                  Ao notar qualquer um destes sintomas, procure orientação veterinária antes que a situação se agrave:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {ALERT_SIGNS.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2.5 p-3 rounded-xl bg-brand-bg border border-brand-green-100/70"
                    >
                      <div className="w-4 h-4 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center shrink-0 mt-0.5">
                        <CheckCircle2 className="w-3 h-3" />
                      </div>
                      <span className="text-xs text-gray-700 font-medium leading-snug">
                        {item.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Frequência de Check-up */}
              <div className="bg-brand-green-900 text-white rounded-2xl p-5 shadow-xs">
                <div className="flex items-center gap-2 text-brand-yellow-400 text-xs font-bold mb-1">
                  <Clock className="w-3.5 h-3.5" />
                  <span>Rotina Preventiva Recomendada</span>
                </div>
                <h4 className="font-display font-bold text-base text-white mb-1">
                  Com que frequência fazer check-up?
                </h4>
                <p className="text-xs text-brand-green-200 mb-3.5">
                  A prevenção reduz custos com internações e assegura longevidade ao seu companheiro.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  {CHECKUP_INTERVALS.map((item, i) => (
                    <div key={i} className="p-3 rounded-xl bg-brand-green-950/60 border border-brand-green-700/50">
                      <div className="flex items-center justify-between mb-1">
                        <strong className="font-display text-xs text-brand-yellow-400">
                          {item.phase}
                        </strong>
                      </div>
                      <span className="text-[11px] font-bold text-white bg-brand-green-700 px-2 py-0.5 rounded-full inline-block mb-1">
                        {item.interval}
                      </span>
                      <p className="text-[10px] text-brand-green-200/90 leading-tight">
                        {item.note}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Aviso de Emergências Graves */}
              <div className="p-3.5 rounded-2xl bg-amber-50 border border-amber-200/80 flex items-start gap-3">
                <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <p className="text-xs text-amber-900 leading-relaxed">
                  <strong>Atenção a emergências críticas:</strong> O atendimento domiciliar é focado em clínica geral, vacinas, exames e medicina preventiva. Casos graves com riscos elevados devem ser levados a hospitais ou clínicas veterinárias com infraestrutura de cirurgia e internação.
                </p>
              </div>

            </div>

            {/* Modal Footer with Direct WhatsApp Action */}
            <div className="p-4 sm:p-5 bg-brand-bg border-t border-brand-green-100 flex flex-col sm:flex-row items-center justify-between gap-3">
              <span className="text-xs text-gray-600 text-center sm:text-left">
                Notou algo diferente no seu pet? Fale agora com nossa equipe.
              </span>
              <div className="flex items-center gap-2 w-full sm:w-auto">
                <a
                  href={createWhatsAppLink('Olá! Notei uma alteração no meu pet e gostaria de agendar uma avaliação preventiva em casa.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 bg-whatsapp hover:bg-whatsapp-hover text-white text-xs font-bold px-4 py-2.5 rounded-xl shadow-pill transition-all"
                >
                  <MessageCircle className="w-3.5 h-3.5 fill-white" />
                  <span>Agendar Avaliação no WhatsApp</span>
                </a>
                <button
                  onClick={() => setIsAlertSignsModalOpen(false)}
                  className="px-3 py-2.5 text-xs font-semibold text-gray-600 hover:text-gray-800 bg-gray-100 hover:bg-gray-200 rounded-xl transition-colors cursor-pointer"
                >
                  Fechar
                </button>
              </div>
            </div>

          </div>
        </div>
      )}
      {/* Modal Interativo: Monte seu Atendimento Personalizado */}
      <InteractiveQuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
      />
    </>
  );
};

