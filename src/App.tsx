import React, { useState } from 'react';
import { Navbar } from './components/Navbar.tsx';
import { Hero } from './components/Hero.tsx';
import { Services } from './components/Services.tsx';
import { Portfolio } from './components/Portfolio.tsx';
import { CostEstimator } from './components/CostEstimator.tsx';
import { AboutStudio } from './components/AboutStudio.tsx';
import { Testimonials } from './components/Testimonials.tsx';
import { ContactSection } from './components/ContactSection.tsx';
import { Footer } from './components/Footer.tsx';
import { ConsultationModal } from './components/ConsultationModal.tsx';
import { QuickContactBar } from './components/QuickContactBar.tsx';

export default function App() {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [consultationPrefillNote, setConsultationPrefillNote] = useState('');
  const [activeScopeDetails, setActiveScopeDetails] = useState<{
    propertyType: string;
    scope: string;
    area: number;
    tier: string;
    estimatedCost: string;
  } | null>(null);

  const handleOpenConsultation = (note = '') => {
    setConsultationPrefillNote(note);
    setIsConsultationOpen(true);
  };

  const handleConsultProject = (projectTitle: string) => {
    handleOpenConsultation(`Inquiring about project design similar to "${projectTitle}".`);
  };

  const handleEstimatorScope = (details: {
    propertyType: string;
    scope: string;
    area: number;
    tier: string;
    estimatedCost: string;
  }) => {
    setActiveScopeDetails(details);
    handleOpenConsultation(
      `Estimator Request: ${details.propertyType} (${details.area} sq.ft), ${details.scope}, ${details.tier}. Budget benchmark: ${details.estimatedCost}.`
    );
  };

  return (
    <div className="min-h-screen bg-[#0c0d0e] text-neutral-100 flex flex-col font-sans selection:bg-amber-400/20 selection:text-amber-200">
      {/* Top Bar Contract Navigation */}
      <Navbar onOpenConsultation={() => handleOpenConsultation()} />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero onOpenConsultation={() => handleOpenConsultation()} />
        <Services onOpenConsultation={() => handleOpenConsultation()} />
        <Portfolio onOpenConsultationWithProject={handleConsultProject} />
        <CostEstimator onOpenConsultationWithScope={handleEstimatorScope} />
        <AboutStudio />
        <Testimonials />
        <ContactSection initialScopeDetails={activeScopeDetails} />
      </main>

      {/* Quiet Refined Architectural Footer */}
      <Footer />

      {/* Interactive Global Consultation Modal */}
      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
        prefillNote={consultationPrefillNote}
      />

      {/* Mobile Sticky Quick Action Bar (Under 15% mobile viewport cap) */}
      <QuickContactBar onOpenConsultation={() => handleOpenConsultation()} />
    </div>
  );
}
