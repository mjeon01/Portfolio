import React from 'react';
import { Language } from '../types';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Globe, FileText } from 'lucide-react';
import { motion } from 'motion/react';

interface NavbarProps {
  lang: Language;
  onToggleLang: () => void;
  onOpenCv: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ lang, onToggleLang, onOpenCv }) => {
  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-sm border-b border-neutral-100 transition-all">
      <div className="max-w-5xl mx-auto px-6 h-18 flex items-center justify-between">
        {/* Brand / Name Logo */}
        <motion.a 
          href="#" 
          id="nav-logo-link"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="font-display font-extrabold text-2xl tracking-tight text-neutral-950 hover:opacity-80 transition-opacity"
        >
          {PERSONAL_INFO.name.en}
        </motion.a>

        {/* Navigation Actions */}
        <div className="flex items-center gap-3 md:gap-5">
          {/* Quick Section Links (Hidden on small mobile) */}
          <nav className="hidden md:flex items-center gap-5 text-sm font-medium text-neutral-600">
            <a href="#tech-stack" className="hover:text-neutral-950 transition-colors">
              {lang === 'en' ? 'Tech Stack' : '기술 스택'}
            </a>
            <a href="#expertise" className="hover:text-neutral-950 transition-colors">
              {lang === 'en' ? 'Expertise' : '전문 역량'}
            </a>
            <a href="#experience" className="hover:text-neutral-950 transition-colors">
              {lang === 'en' ? 'Experience' : '경력·연구'}
            </a>
            <a href="#projects" className="hover:text-neutral-950 transition-colors">
              {lang === 'en' ? 'Projects' : '프로젝트'}
            </a>
            <a href="#publications" className="hover:text-neutral-950 transition-colors">
              {lang === 'en' ? 'Publications' : '학술 논문'}
            </a>
            <a href="#about" className="hover:text-neutral-950 transition-colors">
              {lang === 'en' ? 'About' : '소개'}
            </a>
          </nav>

          {/* Language Toggle Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onToggleLang}
            id="nav-lang-toggle-btn"
            aria-label="Toggle language"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-full border border-neutral-200 text-neutral-700 hover:bg-neutral-100 hover:text-neutral-950 transition-colors cursor-pointer"
          >
            <Globe className="w-3.5 h-3.5" />
            <span>{lang === 'en' ? 'KO' : 'EN'}</span>
          </motion.button>

          {/* Download CV Pill Button */}
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            onClick={onOpenCv}
            id="nav-download-cv-btn"
            className="inline-flex items-center gap-2 bg-neutral-950 text-white text-xs md:text-sm font-semibold px-4 md:px-5 py-2 rounded-full hover:bg-neutral-800 transition-colors shadow-xs cursor-pointer"
          >
            <FileText className="w-3.5 h-3.5 hidden sm:inline" />
            <span>Download CV</span>
          </motion.button>
        </div>
      </div>
    </header>
  );
};
