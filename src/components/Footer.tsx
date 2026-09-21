import React from 'react';
import { Language } from '../types';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Github, Linkedin, Mail, MapPin, ArrowUp, Code2, Globe } from 'lucide-react';

interface FooterProps {
  lang: Language;
}

export const Footer: React.FC<FooterProps> = ({ lang }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white border-t border-neutral-200/80 pt-16 pb-12 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Top Row: Name Logo on Left, Social Icons on Right */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pb-12 border-b border-neutral-100">
          <a
            href="#"
            id="footer-brand-logo"
            className="font-display font-extrabold text-3xl tracking-tight text-neutral-950"
          >
            {PERSONAL_INFO.name.en}.
          </a>

          {/* Social Icons */}
          <div className="flex items-center gap-3 text-neutral-700">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              id="footer-github-link"
              aria-label="GitHub Profile"
              className="w-9 h-9 rounded-full border border-neutral-200 flex items-center justify-center hover:bg-neutral-950 hover:text-white hover:border-neutral-950 transition-all"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              id="footer-linkedin-link"
              aria-label="LinkedIn Profile"
              className="w-9 h-9 rounded-full border border-neutral-200 flex items-center justify-center hover:bg-neutral-950 hover:text-white hover:border-neutral-950 transition-all"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              id="footer-email-link"
              aria-label="Send Email"
              className="w-9 h-9 rounded-full border border-neutral-200 flex items-center justify-center hover:bg-neutral-950 hover:text-white hover:border-neutral-950 transition-all"
            >
              <Mail className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              id="footer-scroll-top-btn"
              aria-label="Scroll to top"
              className="w-9 h-9 rounded-full border border-neutral-200 flex items-center justify-center hover:bg-neutral-950 hover:text-white hover:border-neutral-950 transition-all"
              title="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Middle Row: 3 Contact Columns - Matching reference image exactly */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 py-10 text-center border-b border-neutral-100">
          {/* Location */}
          <div className="flex flex-col items-center">
            <div className="w-8 h-8 rounded-full bg-neutral-50 flex items-center justify-center text-neutral-700 mb-2">
              <MapPin className="w-4 h-4" />
            </div>
            <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-1">
              Location
            </span>
            <span className="text-sm font-medium text-neutral-800">
              {PERSONAL_INFO.location[lang]}
            </span>
          </div>

          {/* Email */}
          <div className="flex flex-col items-center">
            <div className="w-8 h-8 rounded-full bg-neutral-50 flex items-center justify-center text-neutral-700 mb-2">
              <Mail className="w-4 h-4" />
            </div>
            <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-1">
              Email
            </span>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="text-sm font-medium text-neutral-800 hover:underline"
            >
              {PERSONAL_INFO.email}
            </a>
          </div>

          {/* GitHub / Website */}
          <div className="flex flex-col items-center">
            <div className="w-8 h-8 rounded-full bg-neutral-50 flex items-center justify-center text-neutral-700 mb-2">
              <Code2 className="w-4 h-4" />
            </div>
            <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-1">
              GitHub Repository
            </span>
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-neutral-800 hover:underline"
            >
              github.com/mjeon01
            </a>
          </div>
        </div>

        {/* Bottom Row: Copyright & Deployment Details */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-400 gap-3">
          <p>© 2026 {PERSONAL_INFO.name.en}. All Rights Reserved.</p>
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              GitHub & Vercel Ready
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
