import React, { useState } from 'react';
import { Language } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TechStack } from './components/TechStack';
import { ProfessionalExpertise } from './components/ProfessionalExpertise';
import { WorkHistory } from './components/WorkHistory';
import { Projects } from './components/Projects';
import { Publications } from './components/Publications';
import { Awards } from './components/Awards';
import { AboutSection } from './components/AboutSection';
import { Footer } from './components/Footer';
import { CvModal } from './components/CvModal';

export default function App() {
  const [lang, setLang] = useState<Language>('en');
  const [isCvOpen, setIsCvOpen] = useState<boolean>(false);

  const toggleLanguage = () => {
    setLang((prev) => (prev === 'en' ? 'ko' : 'en'));
  };

  const handleOpenCv = () => {
    setIsCvOpen(true);
  };

  const handleCloseCv = () => {
    setIsCvOpen(false);
  };

  return (
    <div className="min-h-screen bg-white text-neutral-900 selection:bg-neutral-950 selection:text-white flex flex-col">
      {/* Top Navigation */}
      <Navbar
        lang={lang}
        onToggleLang={toggleLanguage}
        onOpenCv={handleOpenCv}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero Section (Avatar, Name, Specialization, Socials, CTA) */}
        <Hero
          lang={lang}
          onOpenCv={handleOpenCv}
        />

        {/* 2. My Tech Stack (3x2 Grid Cards) */}
        <TechStack
          lang={lang}
        />

        {/* 3. Professional Expertise (Black pill badges with icons) */}
        <ProfessionalExpertise
          lang={lang}
        />

        {/* 4. Work History (Expandable accordion timeline) */}
        <WorkHistory
          lang={lang}
        />

        {/* 5. Selected Research & Projects */}
        <Projects
          lang={lang}
        />

        {/* 6. Publications & Academic Activities */}
        <Publications
          lang={lang}
        />

        {/* 7. Awards & Honors */}
        <Awards
          lang={lang}
        />

        {/* 8. Meet Mun-Gi Jeon (About 2-column with tall portrait photo) */}
        <AboutSection
          lang={lang}
          onOpenCv={handleOpenCv}
        />
      </main>

      {/* 9. Modern Minimalist Footer */}
      <Footer
        lang={lang}
      />

      {/* 10. Printable / Interactive Curriculum Vitae Modal */}
      <CvModal
        isOpen={isCvOpen}
        onClose={handleCloseCv}
        lang={lang}
      />
    </div>
  );
}
