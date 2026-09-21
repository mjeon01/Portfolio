import React, { useState } from 'react';
import { Language } from '../types';
import { PROJECTS } from '../data/portfolioData';
import { Plus, X, Award, FileCheck, ArrowUpRight, Sparkles, Calendar } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ProjectsProps {
  lang: Language;
}

export const Projects: React.FC<ProjectsProps> = ({ lang }) => {
  // First project expanded by default
  const [expandedId, setExpandedId] = useState<string | null>(PROJECTS[0].id);
  const [selectedFilter, setSelectedFilter] = useState<string>('ALL');

  const categories = ['ALL', 'VLM', 'RAG', 'Document AI', 'Application'];

  const filteredProjects = selectedFilter === 'ALL'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === selectedFilter);

  const toggleProject = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="projects" className="py-16 md:py-24 px-6 border-t border-neutral-100 overflow-hidden">
      <div className="max-w-3xl mx-auto">
        {/* Section Header with entrance animation */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1 mb-3 rounded-full text-xs font-semibold bg-neutral-100 text-neutral-800 border border-neutral-200/80">
            <Sparkles className="w-3 h-3 text-neutral-900" />
            <span>2026 – 2025 Research & Engineering</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl md:text-5xl text-neutral-950 tracking-tight mb-3">
            {lang === 'en' ? 'Projects & Research' : '주요 연구 및 프로젝트'}
          </h2>
          <p className="text-neutral-600 text-sm md:text-base leading-relaxed max-w-xl mx-auto">
            {lang === 'en'
              ? 'A record of my core research innovations, competitive projects, and service implementations.'
              : '비전-언어 모델(VLM), RAG, 문서 정보 추출 및 경진대회 수상 프로젝트 포트폴리오입니다.'}
          </p>
        </motion.div>

        {/* Filter Pills with motion animation */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="flex flex-wrap items-center justify-center gap-2 mb-10"
        >
          {categories.map((cat) => {
            const isSelected = selectedFilter === cat;
            return (
              <motion.button
                key={cat}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                onClick={() => setSelectedFilter(cat)}
                className={`relative px-4 py-1.5 rounded-full text-xs font-semibold transition-colors ${
                  isSelected
                    ? 'bg-neutral-950 text-white shadow-xs'
                    : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200 hover:text-neutral-900'
                }`}
              >
                <span>{cat}</span>
                {isSelected && (
                  <motion.div
                    layoutId="activeFilterPill"
                    className="absolute inset-0 bg-neutral-950 rounded-full -z-10"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
              </motion.button>
            );
          })}
        </motion.div>

        {/* Accordion List with Smooth Layout Transitions */}
        <motion.div 
          layout
          className="divide-y divide-neutral-200/80 border-y border-neutral-200/80"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => {
              const isExpanded = expandedId === project.id;
              const is2026 = project.period === '2026';

              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3, delay: index * 0.04 }}
                  id={`project-item-${project.id}`}
                  className="py-5 transition-colors"
                >
                  <button
                    type="button"
                    onClick={() => toggleProject(project.id)}
                    className="w-full text-left flex items-center justify-between gap-4 group focus:outline-hidden cursor-pointer"
                    aria-expanded={isExpanded}
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <span className="font-bold text-base md:text-lg text-neutral-900 group-hover:text-neutral-600 transition-colors truncate">
                        {project.title[lang]}
                      </span>

                      {/* 2026 Highlight Tag */}
                      {is2026 && (
                        <span className="shrink-0 px-2 py-0.5 text-[10px] font-extrabold bg-neutral-950 text-white rounded-md tracking-wider">
                          2026
                        </span>
                      )}

                      <span className="hidden sm:inline-block shrink-0 px-2 py-0.5 text-[11px] font-semibold bg-neutral-100 text-neutral-600 rounded-md">
                        {project.category}
                      </span>
                    </div>

                    <div className="flex items-center gap-3 shrink-0">
                      <span className="text-xs font-medium text-neutral-400">
                        {project.period}
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

                  {/* Expanded Details with Animated Height */}
                  <AnimatePresence initial={false}>
                    {isExpanded && (
                      <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="pt-4 pb-2 text-neutral-600 text-sm leading-relaxed">
                          <p className="text-neutral-500 font-medium text-xs md:text-sm mb-3">
                            {project.subtitle[lang]}
                          </p>

                          {/* Metric Highlight Callout if available */}
                          {project.metric && (
                            <motion.div 
                              initial={{ opacity: 0, scale: 0.98 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ duration: 0.25 }}
                              className="my-3 p-4 bg-neutral-50 border border-neutral-200/90 rounded-xl flex items-center justify-between shadow-2xs"
                            >
                              <div>
                                <div className="text-xs font-semibold text-neutral-500 uppercase tracking-wider">
                                  {project.metric.label[lang]}
                                </div>
                                {project.metric.sublabel && (
                                  <div className="text-xs text-neutral-700 mt-0.5 font-medium">
                                    {project.metric.sublabel[lang]}
                                  </div>
                                )}
                              </div>
                              <div className="text-right pl-4">
                                <span className="font-display font-black text-lg md:text-2xl text-neutral-950">
                                  {project.metric.value}
                                </span>
                              </div>
                            </motion.div>
                          )}

                          {/* Overview */}
                          <p className="mb-4 text-neutral-700">
                            {project.overview[lang]}
                          </p>

                          {/* Contributions List */}
                          <div className="space-y-1.5 mb-4">
                            <div className="text-xs font-bold text-neutral-900 uppercase tracking-wider mb-1">
                              {lang === 'en' ? 'Key Achievements & Contributions' : '주요 성과 및 연구 기여'}
                            </div>
                            {project.contributions[lang].map((item, idx) => (
                              <div key={idx} className="flex items-start gap-2 text-xs md:text-sm text-neutral-600">
                                <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 mt-1.5 shrink-0" />
                                <span>{item}</span>
                              </div>
                            ))}
                          </div>

                          {/* Meta Badges: Paper & Award */}
                          <div className="flex flex-wrap items-center gap-2 mb-4">
                            {project.paper && (
                              project.paperUrl ? (
                                <a
                                  href={project.paperUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-semibold bg-emerald-50 text-emerald-900 border border-emerald-300 hover:bg-emerald-100 hover:border-emerald-400 transition-all cursor-pointer group/btn shadow-2xs"
                                  title={lang === 'en' ? 'Open original paper (PDF / Link)' : '원본 논문 열람 (새 창)'}
                                >
                                  <FileCheck className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                                  <span>{project.paper}</span>
                                  <ArrowUpRight className="w-3.5 h-3.5 text-emerald-600 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                                </a>
                              ) : (
                                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-medium bg-emerald-50 text-emerald-800 border border-emerald-200">
                                  <FileCheck className="w-3.5 h-3.5 shrink-0" />
                                  <span>{project.paper}</span>
                                </div>
                              )
                            )}
                            {project.award && (
                              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-medium bg-amber-50 text-amber-800 border border-amber-200">
                                <Award className="w-3.5 h-3.5 shrink-0" />
                                <span>{project.award}</span>
                              </div>
                            )}
                          </div>

                          {/* Tech Tags */}
                          <div className="flex flex-wrap gap-1.5 pt-2 border-t border-neutral-100">
                            {project.technologies.map((tech, tIdx) => (
                              <span
                                key={tIdx}
                                className="px-2.5 py-0.5 text-xs font-medium bg-neutral-100 text-neutral-700 rounded-md"
                              >
                                {tech}
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
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
