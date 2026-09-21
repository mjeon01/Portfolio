import React, { useState } from 'react';
import { Language } from '../types';
import { PERSONAL_INFO, TECH_STACK_CARDS, WORK_HISTORY, PROJECTS, PUBLICATIONS, AWARDS } from '../data/portfolioData';
import { X, Printer, Download, Copy, Check, Mail, Github, Linkedin, MapPin, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface CvModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
}

export const CvModal: React.FC<CvModalProps> = ({ isOpen, onClose, lang }) => {
  const [copied, setCopied] = useState(false);

  const handlePrint = () => {
    window.print();
  };

  const handleCopyMarkdown = () => {
    const md = `# ${PERSONAL_INFO.name.en}
Email: ${PERSONAL_INFO.email} | GitHub: ${PERSONAL_INFO.github} | LinkedIn: ${PERSONAL_INFO.linkedin}

## Education
- ${PERSONAL_INFO.education.school.en} (${PERSONAL_INFO.education.period})
  ${PERSONAL_INFO.education.degree.en}

## Technical Skills
- Multimodal & Document AI: OCR, Vision-Language Models (VLM), Document Information Extraction, Handwritten Text Recognition
- LLM & RAG: RAG, Embedding Models, Reranking, Prompt Engineering
- Model Training: LoRA, Supervised Fine-Tuning (SFT), PEFT, PRM/GRPO
- Frameworks: PyTorch, Hugging Face Transformers, FastAPI, PostgreSQL, Docker

## Publications
${PUBLICATIONS.map((p) => `- ${p.title} (${p.venue}, ${p.year}) [${p.role.en}]`).join('\n')}

## Selected Research & Projects
${PROJECTS.map((p) => `### ${p.title.en} (${p.period})
${p.overview.en}
- Technologies: ${p.technologies.join(', ')}
`).join('\n')}

## Awards
${AWARDS.map((a) => `- ${a.title.en} (${a.host.en}, ${a.year})`).join('\n')}
`;

    navigator.clipboard.writeText(md);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-neutral-950/70 backdrop-blur-xs overflow-y-auto"
        >
          {/* Modal Container with entrance animation */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl overflow-hidden border border-neutral-200 my-8 flex flex-col max-h-[90vh]"
            role="dialog"
            aria-modal="true"
          >
            {/* Top Control Bar (Hidden when printing) */}
            <div className="no-print bg-neutral-900 text-white px-6 py-3.5 flex items-center justify-between shrink-0">
              <div className="flex items-center gap-2">
                <span className="font-display font-bold text-sm md:text-base">
                  Curriculum Vitae — {PERSONAL_INFO.name[lang]}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrint}
                  id="cv-modal-print-btn"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-neutral-800 hover:bg-neutral-700 text-neutral-100 rounded-lg text-xs font-semibold transition-colors cursor-pointer"
                  title="Print or Save as PDF"
                >
                  <Printer className="w-3.5 h-3.5" />
                  <span>Print / PDF</span>
                </button>

                <button
                  onClick={handleCopyMarkdown}
                  id="cv-modal-copy-md-btn"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-neutral-800 hover:bg-neutral-700 text-neutral-100 rounded-lg text-xs font-semibold transition-colors cursor-pointer"
                  title="Copy as Markdown"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Copied!' : 'Copy MD'}</span>
                </button>

                <button
                  onClick={onClose}
                  id="cv-modal-close-btn"
                  className="w-8 h-8 rounded-lg hover:bg-neutral-800 text-neutral-400 hover:text-white flex items-center justify-center transition-colors ml-1 cursor-pointer"
                  aria-label="Close CV Modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Printable Document Body */}
            <div className="overflow-y-auto p-6 md:p-12 text-neutral-900 space-y-8 print:p-0 print:space-y-6">
              {/* Header */}
              <div className="border-b border-neutral-300 pb-6">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-2">
                  <h1 className="font-display font-black text-3xl md:text-4xl text-neutral-950">
                    {PERSONAL_INFO.name[lang]}
                  </h1>
                  <span className="text-sm font-semibold text-neutral-600">
                    {PERSONAL_INFO.title[lang]}
                  </span>
                </div>

                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-neutral-600 pt-2">
                  <span className="inline-flex items-center gap-1">
                    <Mail className="w-3 h-3 text-neutral-400" />
                    {PERSONAL_INFO.email}
                  </span>
                  <span>•</span>
                  <span className="inline-flex items-center gap-1">
                    <Github className="w-3 h-3 text-neutral-400" />
                    github.com/mjeon01
                  </span>
                  <span>•</span>
                  <span className="inline-flex items-center gap-1">
                    <Linkedin className="w-3 h-3 text-neutral-400" />
                    linkedin.com/in/mjeon01
                  </span>
                  <span>•</span>
                  <span className="inline-flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-neutral-400" />
                    {PERSONAL_INFO.location[lang]}
                  </span>
                </div>
              </div>

              {/* Education */}
              <div>
                <h2 className="text-xs font-bold uppercase tracking-wider text-neutral-400 border-b border-neutral-200 pb-1 mb-3">
                  Education & Training
                </h2>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between items-baseline">
                      <h3 className="font-bold text-sm text-neutral-950">
                        {PERSONAL_INFO.education.school[lang]}
                      </h3>
                      <span className="text-xs text-neutral-500 font-medium">
                        {PERSONAL_INFO.education.period}
                      </span>
                    </div>
                    <p className="text-xs text-neutral-700 font-medium mt-0.5">
                      {PERSONAL_INFO.education.degree[lang]}
                    </p>
                    <p className="text-xs text-neutral-600 mt-1">
                      {PERSONAL_INFO.education.details[lang]}
                    </p>
                  </div>

                  <div>
                    <div className="flex justify-between items-baseline">
                      <h3 className="font-bold text-sm text-neutral-950">
                        Busan University of Foreign Studies AI Bootcamp
                      </h3>
                      <span className="text-xs text-neutral-500 font-medium">2026</span>
                    </div>
                    <p className="text-xs text-neutral-600 mt-0.5">
                      Completed Beginner and Intermediate tracks; currently enrolled in Advanced Track. Generative AI, NLP, data analysis, and AI service engineering.
                    </p>
                  </div>
                </div>
              </div>

              {/* Core Technical Skills */}
              <div>
                <h2 className="text-xs font-bold uppercase tracking-wider text-neutral-400 border-b border-neutral-200 pb-1 mb-3">
                  Technical Skills
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                  {TECH_STACK_CARDS.map((card) => (
                    <div key={card.id} className="p-2.5 rounded-lg bg-neutral-50 border border-neutral-100">
                      <div className="font-bold text-neutral-900 mb-1">{card.title[lang]}</div>
                      <div className="text-neutral-600 mb-1.5">{card.description[lang]}</div>
                      <div className="text-neutral-500 font-mono text-[11px]">{card.skills.join(' • ')}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Research & Practical Experience */}
              <div>
                <h2 className="text-xs font-bold uppercase tracking-wider text-neutral-400 border-b border-neutral-200 pb-1 mb-3">
                  Research & Practical Experience
                </h2>
                <div className="space-y-4">
                  {WORK_HISTORY.map((w) => (
                    <div key={w.id}>
                      <div className="flex justify-between items-baseline">
                        <h3 className="font-bold text-sm text-neutral-900">{w.role[lang]}</h3>
                        <span className="text-xs text-neutral-500">{w.period}</span>
                      </div>
                      <div className="text-xs font-medium text-neutral-600 mb-1">{w.organization[lang]}</div>
                      <p className="text-xs text-neutral-600 mb-1.5">{w.description[lang]}</p>
                      <ul className="list-disc list-inside space-y-0.5 text-xs text-neutral-600">
                        {w.achievements[lang].map((a, i) => (
                          <li key={i}>{a}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Publications */}
              <div>
                <h2 className="text-xs font-bold uppercase tracking-wider text-neutral-400 border-b border-neutral-200 pb-1 mb-3">
                  Publications & Academic Activities
                </h2>
                <div className="space-y-3">
                  {PUBLICATIONS.map((pub) => (
                    <div key={pub.id} className="text-xs">
                      <div className="flex justify-between items-baseline font-bold text-neutral-950">
                        {pub.paperUrl ? (
                          <a
                            href={pub.paperUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:underline hover:text-emerald-700 flex items-center gap-1 group/link"
                            title={lang === 'en' ? 'Open paper on Google Drive' : '구글 드라이브에서 원본 논문 열기'}
                          >
                            <span>{pub.title}</span>
                            <ArrowUpRight className="w-3 h-3 text-neutral-400 group-hover/link:text-emerald-700" />
                          </a>
                        ) : (
                          <span>{pub.title}</span>
                        )}
                        <span className="text-neutral-400 shrink-0 ml-2">{pub.year}</span>
                      </div>
                      <div className="text-neutral-700 font-semibold mt-0.5">
                        {pub.venue} — <span className="text-neutral-900 font-bold">[{pub.role[lang]}]</span>
                      </div>
                      <p className="text-neutral-600 mt-1">{pub.abstract[lang]}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Selected Projects */}
              <div>
                <h2 className="text-xs font-bold uppercase tracking-wider text-neutral-400 border-b border-neutral-200 pb-1 mb-3">
                  Selected Projects
                </h2>
                <div className="space-y-3">
                  {PROJECTS.slice(0, 5).map((p) => (
                    <div key={p.id} className="text-xs">
                      <div className="flex justify-between items-baseline font-bold text-neutral-950">
                        <span>{p.title[lang]}</span>
                        <span className="text-neutral-400">{p.period}</span>
                      </div>
                      <div className="text-neutral-600 mt-0.5">{p.overview[lang]}</div>
                      <div className="text-neutral-500 font-mono text-[11px] mt-0.5">
                        Technologies: {p.technologies.join(', ')}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Awards & Honors */}
              <div>
                <h2 className="text-xs font-bold uppercase tracking-wider text-neutral-400 border-b border-neutral-200 pb-1 mb-3">
                  Awards & Honors
                </h2>
                <div className="space-y-2 text-xs">
                  {AWARDS.map((a) => (
                    <div key={a.id} className="flex justify-between items-baseline">
                      <div>
                        <span className="font-bold text-neutral-900">{a.title[lang]}</span>
                        <span className="text-neutral-500 ml-2">({a.host[lang]})</span>
                      </div>
                      <span className="text-neutral-400 font-medium">{a.year}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
