import React, { useState } from 'react';
import { Language } from '../types';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Github, Linkedin, Mail, Copy, Check, FileText, ArrowDown } from 'lucide-react';
import { motion } from 'motion/react';
import { PhotoSlot } from './PhotoSlot';

interface HeroProps {
  lang: Language;
  onOpenCv: () => void;
}

export const Hero: React.FC<HeroProps> = ({ lang, onOpenCv }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="pt-16 pb-20 md:pt-24 md:pb-28 text-center px-6 overflow-hidden">
      <div className="max-w-3xl mx-auto flex flex-col items-center">
        {/* Circular Avatar / Portrait with motion entrance */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="relative mb-8 group"
        >
          <motion.div 
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="w-36 h-36 md:w-44 md:h-44 rounded-full overflow-hidden shadow-lg border-4 border-white ring-1 ring-neutral-200/80 bg-neutral-100"
          >
            <PhotoSlot
              src={PERSONAL_INFO.photos.hero}
              alt={PERSONAL_INFO.name[lang]}
              variant="circle"
              lang={lang}
            />
          </motion.div>
        </motion.div>

        {/* Big Bold Headline */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          id="hero-name-title"
          className="font-display font-extrabold text-5xl md:text-7xl lg:text-8xl tracking-tight text-neutral-950 mb-5"
        >
          {PERSONAL_INFO.name[lang]}
        </motion.h1>

        {/* Short Title / Specialization */}
        <motion.p 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="text-xs md:text-sm font-bold text-neutral-700 uppercase tracking-widest mb-4 bg-neutral-100 px-4 py-1.5 rounded-full inline-block"
        >
          {PERSONAL_INFO.title[lang]}
        </motion.p>

        {/* Subtitle / Bio sentence */}
        <motion.p 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="text-neutral-600 text-base md:text-lg leading-relaxed max-w-2xl mb-8"
        >
          {PERSONAL_INFO.headline[lang]}
        </motion.p>

        {/* Social Icons Row */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="flex items-center justify-center gap-4 mb-8 text-neutral-800"
        >
          <motion.a
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            id="hero-social-github"
            aria-label="GitHub Profile"
            className="w-10 h-10 rounded-full border border-neutral-200 flex items-center justify-center hover:bg-neutral-950 hover:text-white hover:border-neutral-950 transition-colors shadow-2xs"
            title="GitHub"
          >
            <Github className="w-4 h-4" />
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            id="hero-social-linkedin"
            aria-label="LinkedIn Profile"
            className="w-10 h-10 rounded-full border border-neutral-200 flex items-center justify-center hover:bg-neutral-950 hover:text-white hover:border-neutral-950 transition-colors shadow-2xs"
            title="LinkedIn"
          >
            <Linkedin className="w-4 h-4" />
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            href={`mailto:${PERSONAL_INFO.email}`}
            id="hero-social-mail"
            aria-label="Send Email"
            className="w-10 h-10 rounded-full border border-neutral-200 flex items-center justify-center hover:bg-neutral-950 hover:text-white hover:border-neutral-950 transition-colors shadow-2xs"
            title="Email"
          >
            <Mail className="w-4 h-4" />
          </motion.a>

          <motion.button
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleCopyEmail}
            id="hero-social-copy-email"
            aria-label="Copy Email to Clipboard"
            className="w-10 h-10 rounded-full border border-neutral-200 flex items-center justify-center hover:bg-neutral-950 hover:text-white hover:border-neutral-950 transition-colors shadow-2xs cursor-pointer relative"
            title="Copy Email"
          >
            {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
          </motion.button>
        </motion.div>

        {/* Main CTA Button */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.55 }}
          className="flex flex-wrap items-center justify-center gap-3"
        >
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            onClick={onOpenCv}
            id="hero-download-cv-cta"
            className="inline-flex items-center gap-2.5 bg-neutral-950 text-white text-sm md:text-base font-semibold px-7 py-3.5 rounded-full hover:bg-neutral-800 transition-colors shadow-xs cursor-pointer"
          >
            <FileText className="w-4 h-4" />
            <span>Download CV</span>
          </motion.button>

          <motion.a
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            href="#projects"
            id="hero-view-research-cta"
            className="inline-flex items-center gap-2 bg-neutral-100 text-neutral-800 text-sm md:text-base font-semibold px-6 py-3.5 rounded-full hover:bg-neutral-200 transition-colors cursor-pointer"
          >
            <span>{lang === 'en' ? 'View 2026 Research' : '2026 대표 연구 살펴보기'}</span>
            <ArrowDown className="w-4 h-4" />
          </motion.a>
        </motion.div>

        {copied && (
          <motion.p 
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-3 text-xs font-medium text-emerald-600"
          >
            {lang === 'en' ? 'Email copied to clipboard (mungijn@gmail.com)!' : '이메일이 클립보드에 복사되었습니다 (mungijn@gmail.com)'}
          </motion.p>
        )}
      </div>
    </section>
  );
};
