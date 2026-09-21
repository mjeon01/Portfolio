import React, { useState } from 'react';
import { Language, PublicationItem } from '../types';
import { PUBLICATIONS } from '../data/portfolioData';
import { PAPERS_DATA } from '../data/papersData';
import { BookOpen, Mic, FileText, ArrowUpRight, ExternalLink } from 'lucide-react';
import { motion } from 'motion/react';
import { PaperSummaryModal } from './PaperSummaryModal';

interface PublicationsProps {
  lang: Language;
}

export const Publications: React.FC<PublicationsProps> = ({ lang }) => {
  const [selectedPaper, setSelectedPaper] = useState<PublicationItem | null>(null);

  const handleOpenOriginalPaper = (e: React.MouseEvent, url?: string, title?: string) => {
    e.stopPropagation();
    if (url && url.trim().length > 0) {
      window.open(url, '_blank', 'noopener,noreferrer');
    } else {
      const query = encodeURIComponent(`"${title}"`);
      window.open(`https://scholar.google.com/scholar?q=${query}`, '_blank', 'noopener,noreferrer');
    }
  };

  const handleOpenSummary = (pub: PublicationItem) => {
    setSelectedPaper(pub);
  };

  return (
    <section id="publications" className="py-16 md:py-24 px-6 border-t border-neutral-100 overflow-hidden">
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
            {lang === 'en' ? 'Publications & Research' : '학술 연구 논문 및 발표'}
          </h2>
          <p className="text-neutral-600 text-sm md:text-base leading-relaxed max-w-xl mx-auto">
            {lang === 'en'
              ? 'Peer-reviewed conference papers, oral presentations, and journal publications. Click any paper to view abstract summary and key findings, or open the original publication.'
              : '카드를 클릭하면 논문 핵심 요약과 기여도를 즉시 열람할 수 있으며, [Original Paper ↗]를 통해 원본 구글 드라이브 논문으로 바로 연결됩니다.'}
          </p>
        </motion.div>

        {/* Papers List with Staggered Entrance and Hover Elevation */}
        <div className="space-y-6">
          {PUBLICATIONS.map((pub, index) => {
            const is2026 = pub.year === '2026';
            const paperDetail = PAPERS_DATA[pub.id];
            const displayTitle = lang === 'ko' ? (pub.koreanTitle || paperDetail?.koreanTitle || pub.title) : pub.title;
            const subTitle = lang === 'ko' ? pub.title : (pub.koreanTitle || paperDetail?.koreanTitle);

            return (
              <motion.div
                key={pub.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                onClick={() => handleOpenSummary(pub)}
                id={`publication-${pub.id}`}
                className="group p-6 rounded-2xl border border-neutral-200/90 bg-white hover:border-neutral-400 hover:shadow-lg transition-all cursor-pointer"
                title={lang === 'en' ? 'Click to view paper summary' : '클릭하여 논문 요약 및 핵심 성과 보기'}
              >
                {/* Meta Badges */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 text-xs font-bold bg-neutral-950 text-white rounded-md">
                      {pub.role[lang]}
                    </span>
                    {pub.isOral && (
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 text-xs font-semibold bg-emerald-100 text-emerald-800 rounded-md">
                        <Mic className="w-3 h-3" />
                        Oral
                      </span>
                    )}
                    {is2026 && (
                      <span className="px-2 py-0.5 text-[10px] font-extrabold bg-neutral-100 text-neutral-800 rounded-md">
                        2026
                      </span>
                    )}
                  </div>
                  <span className="text-xs font-semibold text-neutral-400">{pub.year}</span>
                </div>

                {/* Paper Title (Clickable for summary) */}
                <h3 
                  className="font-bold text-base md:text-lg text-neutral-950 leading-snug mb-1.5 group-hover:text-neutral-700 transition-colors flex items-start justify-between gap-2"
                >
                  <span>
                    {displayTitle}
                  </span>
                  <FileText className="w-4 h-4 text-neutral-400 group-hover:text-neutral-950 transition-all shrink-0 mt-1" />
                </h3>

                {/* Subtitle in other language */}
                {subTitle && (
                  <p className="text-xs text-neutral-500 italic mb-2.5">
                    {subTitle}
                  </p>
                )}

                {/* Venue */}
                <div className="flex items-center gap-2 text-xs md:text-sm font-semibold text-neutral-600 mb-3">
                  <BookOpen className="w-4 h-4 text-neutral-400 shrink-0" />
                  <span>{pub.venue}</span>
                </div>

                {/* Abstract snippet */}
                <p className="text-neutral-600 text-sm leading-relaxed mb-4">
                  {pub.abstract[lang]}
                </p>

                {/* Action Bar & Topics */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-3 border-t border-neutral-100">
                  <div className="flex flex-wrap gap-1.5">
                    {pub.topics.map((t, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 text-xs font-medium bg-neutral-50 text-neutral-600 rounded-md border border-neutral-150"
                      >
                        #{t}
                      </span>
                    ))}
                  </div>

                  {/* Buttons: Summary & Original Paper */}
                  <div className="flex items-center gap-2 shrink-0">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleOpenSummary(pub);
                      }}
                      className="inline-flex items-center justify-center gap-1 px-3 py-1.5 text-xs font-semibold rounded-lg bg-neutral-100 hover:bg-neutral-200 text-neutral-800 transition-colors cursor-pointer"
                    >
                      <FileText className="w-3.5 h-3.5" />
                      <span>{lang === 'en' ? 'Summary' : '논문 요약'}</span>
                    </button>

                    <button
                      type="button"
                      onClick={(e) => handleOpenOriginalPaper(e, pub.paperUrl, pub.title)}
                      className="inline-flex items-center justify-center gap-1.5 px-3.5 py-1.5 text-xs font-bold rounded-lg bg-neutral-950 text-white hover:bg-neutral-800 transition-colors cursor-pointer shadow-2xs group-hover:bg-neutral-900"
                      title={lang === 'en' ? 'Open Original Paper on Google Drive' : '구글 드라이브에서 원본 논문 열기'}
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>{lang === 'en' ? 'Original Paper ↗' : 'Original Paper ↗'}</span>
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Paper Summary Modal */}
      <PaperSummaryModal
        pub={selectedPaper}
        lang={lang}
        onClose={() => setSelectedPaper(null)}
      />
    </section>
  );
};
