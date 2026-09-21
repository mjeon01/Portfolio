import React from 'react';
import { Language } from '../types';
import { PERSONAL_INFO } from '../data/portfolioData';
import { FileText, GraduationCap, MapPin, Mail } from 'lucide-react';
import { motion } from 'motion/react';
import portraitTallImg from '../assets/images/mungi_portrait_tall_1789965113569.jpg';

interface AboutSectionProps {
  lang: Language;
  onOpenCv: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ lang, onOpenCv }) => {
  return (
    <section id="about" className="py-20 md:py-28 px-6 border-t border-neutral-100 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        {/* Faint Background Section Title / Eyebrow */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="font-display font-black text-4xl md:text-6xl text-neutral-200/80 uppercase tracking-widest select-none">
            About
          </span>
          <p className="text-neutral-500 text-xs md:text-sm font-medium mt-1">
            {lang === 'en'
              ? 'Dedicated to Advancing Practical Multimodal AI & Reliable Document Intelligence'
              : '실세계 문제를 해결하는 실용적 멀티모달 AI와 신뢰할 수 있는 문서 지능 연구'}
          </p>
        </motion.div>

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-14 items-center">
          {/* Left Column: Text & Bio with smooth entrance */}
          <motion.div 
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="md:col-span-6 lg:col-span-7 flex flex-col justify-center"
          >
            <h2 className="font-display font-extrabold text-3xl md:text-4xl lg:text-5xl text-neutral-950 tracking-tight mb-6">
              {lang === 'en' ? `Meet ${PERSONAL_INFO.name.en}` : `연구자 ${PERSONAL_INFO.name.ko} 소개`}
            </h2>

            <div className="space-y-4 text-neutral-600 text-sm md:text-base leading-relaxed mb-8">
              {PERSONAL_INFO.about[lang].map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>

            {/* Quick Facts / Academic Credentials */}
            <div className="space-y-2.5 mb-8 p-4 rounded-xl bg-neutral-50 border border-neutral-200/70 text-xs md:text-sm text-neutral-700">
              <div className="flex items-center gap-2.5">
                <GraduationCap className="w-4 h-4 text-neutral-500 shrink-0" />
                <span className="font-semibold text-neutral-900">
                  {PERSONAL_INFO.education.school[lang]}
                </span>
                <span className="text-neutral-400">|</span>
                <span className="text-neutral-600">
                  {PERSONAL_INFO.education.degree[lang]} ({PERSONAL_INFO.education.period})
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-neutral-500 shrink-0" />
                <span>{PERSONAL_INFO.location[lang]}</span>
                <span className="text-neutral-400">|</span>
                <Mail className="w-4 h-4 text-neutral-500 shrink-0" />
                <a href={`mailto:${PERSONAL_INFO.email}`} className="text-neutral-900 hover:underline">
                  {PERSONAL_INFO.email}
                </a>
              </div>
            </div>

            {/* CTA Button */}
            <div>
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                onClick={onOpenCv}
                id="about-download-cv-btn"
                className="inline-flex items-center gap-2 bg-neutral-950 text-white text-sm md:text-base font-semibold px-6 py-3 rounded-full hover:bg-neutral-800 transition-colors shadow-xs cursor-pointer"
              >
                <FileText className="w-4 h-4" />
                <span>Download CV</span>
              </motion.button>
            </div>
          </motion.div>

          {/* Right Column: Tall Portrait Photograph */}
          <motion.div 
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="md:col-span-6 lg:col-span-5 flex justify-center"
          >
            <div className="w-full max-w-sm md:max-w-none rounded-2xl overflow-hidden shadow-xl border border-neutral-200/90 aspect-3/4 bg-neutral-950 group">
              <img
                src={portraitTallImg}
                alt={`${PERSONAL_INFO.name[lang]} Portrait`}
                className="w-full h-full object-cover object-center group-hover:scale-103 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
