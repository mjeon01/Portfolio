import React from 'react';
import { Language } from '../types';
import { AWARDS } from '../data/portfolioData';
import { Award as AwardIcon } from 'lucide-react';
import { motion } from 'motion/react';

interface AwardsProps {
  lang: Language;
}

export const Awards: React.FC<AwardsProps> = ({ lang }) => {
  return (
    <section id="awards" className="py-16 md:py-24 px-6 border-t border-neutral-100 overflow-hidden">
      <div className="max-w-3xl mx-auto">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="font-display font-extrabold text-3xl md:text-5xl text-neutral-950 tracking-tight mb-3">
            {lang === 'en' ? 'Awards & Honors' : '수상 및 대외 표창'}
          </h2>
          <p className="text-neutral-600 text-sm md:text-base leading-relaxed max-w-xl mx-auto">
            {lang === 'en'
              ? 'Recognition earned through AI hackathons, institutional challenges, and student talent competitions.'
              : 'AI 경진대회 및 프로젝트 공모전에서 획득한 수상 실적입니다.'}
          </p>
        </motion.div>

        {/* Awards Cards with Clean, Balanced, Understated Styling */}
        <div className="space-y-4">
          {AWARDS.map((award, index) => {
            const is2026 = award.year === '2026';

            return (
              <motion.div
                key={award.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.06 }}
                whileHover={{ y: -2, transition: { duration: 0.15 } }}
                id={`award-item-${award.id}`}
                className="p-6 rounded-2xl border border-neutral-200/90 bg-white text-neutral-950 hover:border-neutral-400 hover:shadow-xs transition-all"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2.5">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-neutral-100 text-neutral-800 border border-neutral-200/70">
                      <AwardIcon className="w-3.5 h-3.5 text-neutral-600" />
                      {award.type}
                    </span>
                    {is2026 && (
                      <span className="px-2 py-0.5 text-[10px] font-extrabold rounded-md bg-neutral-950 text-white">
                        2026
                      </span>
                    )}
                  </div>
                  <span className="text-xs font-semibold text-neutral-400">
                    {award.year}
                  </span>
                </div>

                <h3 className="font-bold text-base md:text-lg text-neutral-950 mb-1 leading-snug">
                  {award.title[lang]}
                </h3>

                <p className="text-xs font-medium text-neutral-500 mb-3">
                  {award.host[lang]}
                </p>

                <p className="text-sm leading-relaxed text-neutral-600">
                  {award.description[lang]}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
