import React, { useState } from 'react';
import { Language } from '../types';
import { WORK_HISTORY } from '../data/portfolioData';
import { Plus } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface WorkHistoryProps {
  lang: Language;
}

export const WorkHistory: React.FC<WorkHistoryProps> = ({ lang }) => {
  // First item expanded by default
  const [expandedId, setExpandedId] = useState<string | null>(WORK_HISTORY[0].id);

  const toggleExpand = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="experience" className="py-16 md:py-24 px-6 border-t border-neutral-100 overflow-hidden">
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
            {lang === 'en' ? 'Work History' : '연구 및 실무 이력'}
          </h2>
          <p className="text-neutral-600 text-sm md:text-base leading-relaxed max-w-xl mx-auto">
            {lang === 'en'
              ? 'A record of my research positions, industry-academia collaborations, and academic engagements.'
              : '학술 연구, 산학 협력 프로젝트 및 교육 운영 등 다양한 현장에서 축적한 실무 이력입니다.'}
          </p>
        </motion.div>

        {/* Accordion List with Smooth Expand & Rotate */}
        <div className="divide-y divide-neutral-200/80 border-y border-neutral-200/80">
          {WORK_HISTORY.map((item, index) => {
            const isExpanded = expandedId === item.id;
            const is2026 = item.period.includes('2026');

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.05 }}
                id={`work-item-${item.id}`}
                className="py-6 transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggleExpand(item.id)}
                  className="w-full text-left flex items-start justify-between gap-4 group focus:outline-hidden cursor-pointer"
                  aria-expanded={isExpanded}
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2.5 flex-wrap">
                      <h3 className="font-bold text-base md:text-lg text-neutral-900 group-hover:text-neutral-600 transition-colors">
                        {item.role[lang]}
                      </h3>
                      {is2026 && (
                        <span className="px-2 py-0.5 text-[10px] font-extrabold bg-neutral-950 text-white rounded-md tracking-wider">
                          2026
                        </span>
                      )}
                    </div>
                    <p className="text-xs md:text-sm text-neutral-500 font-medium">
                      {item.organization[lang]}
                    </p>
                  </div>

                  <div className="flex items-center gap-3 shrink-0 pt-0.5">
                    <span className="text-xs md:text-sm font-medium text-neutral-500">
                      {item.period}
                    </span>
                    <motion.span 
                      animate={{ rotate: isExpanded ? 45 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="w-6 h-6 rounded-full flex items-center justify-center text-neutral-400 group-hover:text-neutral-900 transition-colors"
                    >
                      <Plus className="w-4 h-4 text-neutral-700" />
                    </motion.span>
                  </div>
                </button>

                {/* Expanded content with smooth height animation */}
                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div 
                      key="work-content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="mt-4 pt-2 text-neutral-600 text-sm md:text-[14.5px] leading-relaxed">
                        <p className="mb-3 text-neutral-700 font-normal">
                          {item.description[lang]}
                        </p>

                        <ul className="space-y-2 mb-4">
                          {item.achievements[lang].map((ach, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-xs md:text-sm text-neutral-600">
                              <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 mt-2 shrink-0" />
                              <span>{ach}</span>
                            </li>
                          ))}
                        </ul>

                        {/* Tag Pills */}
                        <div className="flex flex-wrap gap-1.5 pt-2">
                          {item.tags.map((tag, tIdx) => (
                            <span
                              key={tIdx}
                              className="px-2 py-0.5 text-xs font-medium bg-neutral-100 text-neutral-700 rounded-md"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
