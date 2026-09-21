import React, { useState } from 'react';
import { Language, PublicationItem } from '../types';
import { PAPERS_DATA } from '../data/papersData';
import { X, ExternalLink, BookOpen, Mic, FileText, CheckCircle2, ChevronDown, ChevronUp, Copy, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface PaperSummaryModalProps {
  pub: PublicationItem | null;
  lang: Language;
  onClose: () => void;
}

export const PaperSummaryModal: React.FC<PaperSummaryModalProps> = ({ pub, lang, onClose }) => {
  const [activeTab, setActiveTab] = useState<'summary' | 'data' | 'bibtex'>('summary');
  const [copiedBibtex, setCopiedBibtex] = useState(false);

  if (!pub) return null;

  const detail = PAPERS_DATA[pub.id];
  const koreanTitle = detail?.koreanTitle || pub.koreanTitle || pub.title;
  const englishTitle = detail?.englishTitle || pub.title;
  const displayTitle = lang === 'ko' ? koreanTitle : englishTitle;
  const subTitle = lang === 'ko' ? englishTitle : koreanTitle;

  const handleOpenDrive = () => {
    if (pub.paperUrl) {
      window.open(pub.paperUrl, '_blank', 'noopener,noreferrer');
    }
  };

  const handleCopyBibtex = () => {
    if (detail?.bibtex) {
      navigator.clipboard.writeText(detail.bibtex);
      setCopiedBibtex(true);
      setTimeout(() => setCopiedBibtex(false), 2000);
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-neutral-950/70 backdrop-blur-sm"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 16 }}
          transition={{ duration: 0.25 }}
          className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl border border-neutral-200 overflow-hidden my-8 z-10 max-h-[90vh] flex flex-col"
        >
          {/* Header */}
          <div className="p-6 pb-4 border-b border-neutral-100 bg-neutral-50/50">
            <div className="flex items-start justify-between gap-4 mb-3">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="px-2.5 py-0.5 text-xs font-bold bg-neutral-950 text-white rounded-md">
                  {pub.role[lang]}
                </span>
                {pub.isOral && (
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 text-xs font-semibold bg-emerald-100 text-emerald-800 rounded-md">
                    <Mic className="w-3 h-3" />
                    Oral Presentation
                  </span>
                )}
                <span className="px-2 py-0.5 text-xs font-semibold bg-neutral-200 text-neutral-800 rounded-md">
                  {pub.year}
                </span>
              </div>
              <button
                onClick={onClose}
                className="p-1.5 rounded-lg text-neutral-400 hover:text-neutral-900 hover:bg-neutral-100 transition-colors"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Title */}
            <h2 className="text-xl md:text-2xl font-bold text-neutral-950 leading-snug mb-1">
              {displayTitle}
            </h2>
            <p className="text-xs md:text-sm text-neutral-500 italic">
              {subTitle}
            </p>

            {/* Venue & Authors */}
            <div className="mt-3 flex flex-wrap items-center gap-y-1 gap-x-4 text-xs font-medium text-neutral-600">
              <span className="flex items-center gap-1.5 text-neutral-900 font-semibold">
                <BookOpen className="w-3.5 h-3.5 text-neutral-500" />
                {pub.venue}
              </span>
              {detail?.authors && (
                <span className="text-neutral-600">
                  <span className="text-neutral-400 mr-1">Authors:</span> {detail.authors}
                </span>
              )}
            </div>

            {/* Tabs */}
            <div className="flex items-center gap-2 mt-4 pt-3 border-t border-neutral-200/70">
              <button
                onClick={() => setActiveTab('summary')}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
                  activeTab === 'summary'
                    ? 'bg-neutral-950 text-white'
                    : 'bg-white text-neutral-600 hover:bg-neutral-100 border border-neutral-200'
                }`}
              >
                {lang === 'en' ? 'Abstract & Highlights' : '요약 및 핵심 성과'}
              </button>
              {detail?.tables && detail.tables.length > 0 && (
                <button
                  onClick={() => setActiveTab('data')}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
                    activeTab === 'data'
                      ? 'bg-neutral-950 text-white'
                      : 'bg-white text-neutral-600 hover:bg-neutral-100 border border-neutral-200'
                  }`}
                >
                  {lang === 'en' ? 'Tables & Benchmarks' : '실험 결과 표'}
                </button>
              )}
              {detail?.bibtex && (
                <button
                  onClick={() => setActiveTab('bibtex')}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
                    activeTab === 'bibtex'
                      ? 'bg-neutral-950 text-white'
                      : 'bg-white text-neutral-600 hover:bg-neutral-100 border border-neutral-200'
                  }`}
                >
                  BibTeX
                </button>
              )}
            </div>
          </div>

          {/* Scrollable Content */}
          <div className="p-6 overflow-y-auto flex-1 space-y-6">
            {activeTab === 'summary' && (
              <>
                {/* Abstract */}
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-2">
                    {lang === 'en' ? 'Abstract' : '논문 초록 (Abstract)'}
                  </h3>
                  <div className="p-4 bg-neutral-50 rounded-xl border border-neutral-150 text-neutral-700 text-sm leading-relaxed">
                    {detail?.abstract?.[lang] || detail?.abstract?.ko || pub.abstract[lang]}
                  </div>
                </div>

                {/* Key Highlights */}
                {detail?.keyHighlights && detail.keyHighlights.length > 0 && (
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-3">
                      {lang === 'en' ? 'Key Contributions & Results' : '주요 기여 및 정량적 성과'}
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {detail.keyHighlights.map((hl, i) => (
                        <div key={i} className="p-3.5 bg-white border border-neutral-200 rounded-xl shadow-2xs">
                          <div className="text-xs font-semibold text-neutral-500 mb-0.5">{hl.label}</div>
                          <div className="text-base font-extrabold text-neutral-950 mb-1">{hl.value}</div>
                          <div className="text-xs text-neutral-600 leading-normal">{hl.description}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Keywords & Topics */}
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-2">
                    {lang === 'en' ? 'Research Topics' : '연구 주제 및 키워드'}
                  </h3>
                  <div className="flex flex-wrap gap-1.5">
                    {pub.topics.map((t, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 text-xs font-medium bg-neutral-100 text-neutral-700 rounded-md border border-neutral-200"
                      >
                        #{t}
                      </span>
                    ))}
                  </div>
                </div>
              </>
            )}

            {activeTab === 'data' && detail?.tables && (
              <div className="space-y-6">
                {detail.tables.map((tbl, tIdx) => (
                  <div key={tIdx} className="border border-neutral-200 rounded-xl overflow-hidden">
                    <div className="px-4 py-2.5 bg-neutral-100 text-xs font-bold text-neutral-800 border-b border-neutral-200">
                      {tbl.caption}
                    </div>
                    <div className="overflow-x-auto">
                      <table className="w-full text-xs text-left">
                        <thead className="bg-neutral-50 text-neutral-600 border-b border-neutral-200">
                          <tr>
                            {tbl.headers.map((h, hIdx) => (
                              <th key={hIdx} className="px-3 py-2 font-semibold">
                                {h}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-neutral-150">
                          {tbl.rows.map((row, rIdx) => (
                            <tr key={rIdx} className={rIdx % 2 === 0 ? 'bg-white' : 'bg-neutral-50/50'}>
                              {row.map((cell, cIdx) => (
                                <td key={cIdx} className="px-3 py-2 text-neutral-700 whitespace-nowrap">
                                  {cell}
                                </td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    {tbl.notes && (
                      <div className="px-4 py-2 bg-neutral-50 text-[11px] text-neutral-500 border-t border-neutral-200">
                        {tbl.notes}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'bibtex' && detail?.bibtex && (
              <div>
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-400">
                    BibTeX Citation
                  </h3>
                  <button
                    onClick={handleCopyBibtex}
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-semibold rounded-md border border-neutral-200 hover:bg-neutral-50 text-neutral-700"
                  >
                    {copiedBibtex ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span className="text-emerald-700">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-neutral-500" />
                        <span>Copy BibTeX</span>
                      </>
                    )}
                  </button>
                </div>
                <pre className="p-4 bg-neutral-900 text-neutral-100 rounded-xl text-xs font-mono overflow-x-auto leading-relaxed">
                  {detail.bibtex}
                </pre>
              </div>
            )}
          </div>

          {/* Footer Action Bar */}
          <div className="p-4 px-6 border-t border-neutral-200 bg-neutral-50 flex items-center justify-between gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-semibold text-neutral-600 hover:text-neutral-900 rounded-lg hover:bg-neutral-200 transition-colors"
            >
              {lang === 'en' ? 'Close' : '닫기'}
            </button>

            {pub.paperUrl && (
              <button
                onClick={handleOpenDrive}
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-bold text-white bg-neutral-950 hover:bg-neutral-800 rounded-lg transition-colors shadow-sm"
              >
                <span>{lang === 'en' ? 'Open Original Paper PDF (Google Drive) ↗' : '원본 논문 PDF 열기 (구글 드라이브) ↗'}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
