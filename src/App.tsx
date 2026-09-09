import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TrustMetrics } from './components/TrustMetrics';
import { HealthPlansBar } from './components/HealthPlansBar';
import { WhyHomeCare } from './components/WhyHomeCare';
import { AlertSignsSection } from './components/AlertSignsSection';
import { Services } from './components/Services';
import { InteractiveQuote } from './components/InteractiveQuote';
import { CoverageArea } from './components/CoverageArea';
import { VetProfile } from './components/VetProfile';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
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

        {/* Quick Trust Highlights & Fear-Free Metrics */}
        <TrustMetrics />

        {/* Health Plans Bar (Petlove, Au Happy, PetLife) */}
        <HealthPlansBar />

        {/* Why Choose Home Veterinary Care */}
        <WhyHomeCare />

        {/* Alert Signs & Recommended Checkup Frequency */}
        <AlertSignsSection />

        {/* Home Services in Cards */}
        <Services />

        {/* Interactive 1-Minute WhatsApp Booking Simulator */}
        <InteractiveQuote />

        {/* Service Coverage Area & Search for Peruíbe and Region */}
        <CoverageArea />

        {/* Credibility & Technical Profile of Dr. Renato Pegoretti (CRMV-SP 45.390) */}
        <VetProfile />

        {/* Tutor Reviews & Testimonials */}
        <Testimonials />

        {/* Frequently Asked Questions */}
        <FAQ />
      </main>

      {/* Footer with CRMV, Instagram, Facebook, Linktree & Policies */}
      <Footer />

      {/* Persistent Floating WhatsApp Action Button */}
      <FloatingWhatsApp />
    </div>
  );
};

export default App;
