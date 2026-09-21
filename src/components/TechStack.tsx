import React from 'react';
import { Language } from '../types';
import { TECH_STACK_CARDS } from '../data/portfolioData';
import { motion } from 'motion/react';

interface TechStackProps {
  lang: Language;
}

export const TechStack: React.FC<TechStackProps> = ({ lang }) => {
  return (
    <section id="tech-stack" className="py-16 md:py-24 px-6 border-t border-neutral-100 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-12 md:mb-16"
        >
          <h2 className="font-display font-extrabold text-3xl md:text-5xl text-neutral-950 tracking-tight mb-3">
            {lang === 'en' ? 'My Tech Stack' : '기술 역량 및 스택'}
          </h2>
          <p className="text-neutral-600 text-sm md:text-base leading-relaxed">
            {lang === 'en'
              ? 'The technologies, frameworks, and research methodologies I use to build robust, scalable AI systems.'
              : '고성능 멀티모달 AI 및 신뢰할 수 있는 문서 지능 시스템을 구축하기 위해 활용하는 핵심 기술입니다.'}
          </p>
        </motion.div>

        {/* 3x2 Grid Cards with Staggered Entrance and Hover Elevation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TECH_STACK_CARDS.map((card, index) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              id={`tech-card-${card.id}`}
              className="bg-white border border-neutral-200/90 rounded-2xl p-6 md:p-7 hover:border-neutral-400 hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                <h3 className="font-bold text-lg md:text-xl text-neutral-950 mb-3 tracking-tight">
                  {card.title[lang]}
                </h3>
                <p className="text-neutral-600 text-sm md:text-[14.5px] leading-relaxed mb-6">
                  {card.description[lang]}
                </p>
              </div>

              {/* Tag Pills */}
              <div className="flex flex-wrap gap-1.5 pt-3 border-t border-neutral-100">
                {card.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="inline-block px-2.5 py-1 text-xs font-medium bg-neutral-50 text-neutral-700 rounded-md border border-neutral-150"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
