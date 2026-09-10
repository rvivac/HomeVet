import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { HealthPlansBar } from './components/HealthPlansBar';
import { WhyHomeCare } from './components/WhyHomeCare';
import { Services } from './components/Services';
import { VetProfile } from './components/VetProfile';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-brand-bg text-[#2D3748] font-sans antialiased selection:bg-brand-green-200 selection:text-brand-green-900">
      {/* Fixed Header & Navigation */}
      <Header />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero />

        {/* Health Plans Bar (Petlove, PetLife) */}
        <HealthPlansBar />

        {/* Why Choose Home Veterinary Care */}
        <WhyHomeCare />

        {/* Credibility & Technical Profile of Dr. Renato Pegoretti (CRMV-SP 45.390) - Quem Somos */}
        <VetProfile />

        {/* Home Services in Cards */}
        <Services />
      </main>

      {/* Footer with CRMV, Instagram, Facebook, Linktree & Policies */}
      <Footer />

      {/* Persistent Floating WhatsApp Action Button */}
      <FloatingWhatsApp />
    </div>
  );
};

export default App;
