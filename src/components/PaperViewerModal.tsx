import React, { useState, useEffect } from 'react';
import { PaperData, Language } from '../types';
import { 
  X, 
  Printer, 
  Copy, 
  Check, 
  BookOpen, 
  Award, 
  FileText, 
  Table as TableIcon,
  ExternalLink,
  Download
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface PaperViewerModalProps {
  paperId: string | null;
  paperData: PaperData | null;
  venue: string;
  year: string;
  role: { en: string; ko: string };
  isOral?: boolean;
  lang: Language;
  onClose: () => void;
}

export const PaperViewerModal: React.FC<PaperViewerModalProps> = ({
  paperId,
  paperData,
  venue,
  year,
  role,
  isOral,
  lang,
  onClose,
}) => {
  const [activeTab, setActiveTab] = useState<'summary' | 'full' | 'citation'>('summary');
  const [copiedBibtex, setCopiedBibtex] = useState(false);

  // Close on Escape key press & body scroll lock
  useEffect(() => {
    if (!paperData) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [paperData, onClose]);

  if (!paperData) return null;

  const handleCopyBibtex = () => {
    if (paperData.bibtex) {
      navigator.clipboard.writeText(paperData.bibtex);
      setCopiedBibtex(true);
      setTimeout(() => setCopiedBibtex(false), 2000);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <AnimatePresence>
      <div 
        id="paper-viewer-backdrop"
        className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-neutral-950/70 backdrop-blur-sm overflow-y-auto"
        onClick={(e) => {
          if (e.target === e.currentTarget) onClose();
        }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 15 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          id="paper-viewer-dialog"
          role="dialog"
          aria-modal="true"
          className="relative w-full max-w-4xl max-h-[92vh] bg-white rounded-2xl shadow-2xl border border-neutral-200 flex flex-col overflow-hidden text-neutral-900"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Top Control Bar */}
          <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-white/95 backdrop-blur-md border-b border-neutral-200">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-neutral-950 text-white">
                <FileText className="w-3.5 h-3.5" />
                {venue.split('(')[0].trim()} {year}
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-neutral-100 text-neutral-800 border border-neutral-200">
                {role[lang]}
              </span>
              {isOral && (
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200">
                  <Award className="w-3.5 h-3.5" />
                  Oral Presentation
                </span>
              )}
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handlePrint}
                id="paper-print-btn"
                title={lang === 'en' ? 'Print or save paper as PDF' : '논문 인쇄 및 PDF 저장'}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-neutral-100 text-neutral-700 hover:bg-neutral-200 hover:text-neutral-950 transition-colors cursor-pointer"
              >
                <Printer className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">{lang === 'en' ? 'Print / PDF' : '인쇄 / PDF 저장'}</span>
              </button>

              <button
                onClick={onClose}
                id="paper-close-btn"
                aria-label="Close modal"
                className="p-1.5 rounded-lg text-neutral-400 hover:text-neutral-950 hover:bg-neutral-100 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Modal Header: Paper Title & Authors */}
          <div className="px-6 pt-6 pb-5 border-b border-neutral-150 bg-neutral-50/70">
            <h2 className="font-display font-extrabold text-xl md:text-2xl text-neutral-950 leading-snug mb-2">
              {paperData.koreanTitle}
            </h2>
            <p className="text-sm font-medium text-neutral-600 italic mb-4">
              {paperData.englishTitle}
            </p>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-neutral-600">
              <div>
                <span className="font-bold text-neutral-900">
                  {lang === 'en' ? 'Authors: ' : '저자: '}
                </span>
                <span>{paperData.authors}</span>
                <span className="text-neutral-400 mx-1.5">•</span>
                <span className="text-neutral-500">{paperData.affiliations}</span>
              </div>
            </div>

            {/* Tab Navigation */}
            <div className="flex items-center gap-2 mt-5 pt-3 border-t border-neutral-200/80">
              <button
                onClick={() => setActiveTab('summary')}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  activeTab === 'summary'
                    ? 'bg-neutral-950 text-white shadow-xs'
                    : 'text-neutral-600 hover:text-neutral-950 hover:bg-neutral-200/60'
                }`}
              >
                {lang === 'en' ? 'Executive Summary & Benchmarks' : '핵심 요약 및 정량 벤치마크'}
              </button>
              <button
                onClick={() => setActiveTab('full')}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  activeTab === 'full'
                    ? 'bg-neutral-950 text-white shadow-xs'
                    : 'text-neutral-600 hover:text-neutral-950 hover:bg-neutral-200/60'
                }`}
              >
                {lang === 'en' ? 'Full Paper Text' : '논문 전문 (Full Text)'}
              </button>
              <button
                onClick={() => setActiveTab('citation')}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  activeTab === 'citation'
                    ? 'bg-neutral-950 text-white shadow-xs'
                    : 'text-neutral-600 hover:text-neutral-950 hover:bg-neutral-200/60'
                }`}
              >
                {lang === 'en' ? 'BibTeX & References' : '인용 (BibTeX) & 참고문헌'}
              </button>
            </div>
          </div>

          {/* Modal Content Scroll Body */}
          <div className="flex-1 overflow-y-auto p-6 md:p-8 space-y-8 bg-white">
            {activeTab === 'summary' && (
              <div className="space-y-8">
                {/* 4 Quantitative Highlight Cards */}
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-3">
                    {lang === 'en' ? 'Key Research Benchmarks' : '핵심 연구 성과 및 정량 지표'}
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    {paperData.keyHighlights.map((hl, idx) => (
                      <div 
                        key={idx}
                        className="p-4 rounded-xl border border-neutral-200 bg-neutral-50/50 hover:border-neutral-300 transition-colors"
                      >
                        <div className="text-xs font-semibold text-neutral-500 mb-1">{hl.label}</div>
                        <div className="font-display font-extrabold text-xl text-neutral-950 tracking-tight mb-1">
                          {hl.value}
                        </div>
                        <div className="text-xs text-neutral-600 leading-relaxed">{hl.description}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Abstract Section */}
                <div className="p-5 rounded-xl border border-neutral-200/90 bg-neutral-50/30">
                  <div className="flex items-center gap-2 mb-3">
                    <BookOpen className="w-4 h-4 text-neutral-900" />
                    <h3 className="font-bold text-sm text-neutral-950">
                      {lang === 'en' ? 'Abstract (요약)' : '요약 (Abstract)'}
                    </h3>
                  </div>
                  <p className="text-sm text-neutral-700 leading-relaxed mb-4 text-justify font-normal">
                    {paperData.abstract.ko}
                  </p>
                  {paperData.abstract.en && (
                    <p className="text-xs text-neutral-500 leading-relaxed text-justify italic pt-3 border-t border-neutral-200/70">
                      {paperData.abstract.en}
                    </p>
                  )}

                  {/* Keywords */}
                  <div className="flex items-center gap-1.5 flex-wrap mt-4 pt-3 border-t border-neutral-200/70">
                    <span className="text-xs font-bold text-neutral-700">
                      {lang === 'en' ? 'Keywords:' : '주제어:'}
                    </span>
                    {paperData.keywords.map((kw, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 text-xs font-medium rounded-md bg-neutral-200/80 text-neutral-800"
                      >
                        {kw}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Quantitative Benchmark Tables */}
                {paperData.tables && paperData.tables.length > 0 && (
                  <div className="space-y-6">
                    <div className="flex items-center gap-2">
                      <TableIcon className="w-4 h-4 text-neutral-900" />
                      <h3 className="font-bold text-sm text-neutral-950">
                        {lang === 'en' ? 'Official Evaluation Tables' : '공식 실험 및 평가 결과표'}
                      </h3>
                    </div>

                    {paperData.tables.map((tbl, idx) => (
                      <div key={idx} className="rounded-xl border border-neutral-200 overflow-hidden shadow-2xs">
                        <div className="px-4 py-2.5 bg-neutral-100/80 font-bold text-xs text-neutral-800 border-b border-neutral-200">
                          {tbl.caption}
                        </div>
                        <div className="overflow-x-auto">
                          <table className="w-full text-left text-xs border-collapse">
                            <thead>
                              <tr className="bg-neutral-50 border-b border-neutral-200 text-neutral-600 font-semibold">
                                {tbl.headers.map((h, hIdx) => (
                                  <th key={hIdx} className="px-4 py-2.5 whitespace-nowrap">
                                    {h}
                                  </th>
                                ))}
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-neutral-150">
                              {tbl.rows.map((r, rIdx) => (
                                <tr 
                                  key={rIdx} 
                                  className={rIdx === 0 && tbl.rows.length > 2 ? 'bg-neutral-50/70 font-semibold' : 'hover:bg-neutral-50/40'}
                                >
                                  {r.map((cell, cIdx) => (
                                    <td key={cIdx} className="px-4 py-2 text-neutral-700 whitespace-nowrap">
                                      {cell}
                                    </td>
                                  ))}
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                        {tbl.notes && (
                          <div className="px-4 py-2 text-[11px] text-neutral-500 bg-neutral-50/50 border-t border-neutral-150">
                            {tbl.notes}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {activeTab === 'full' && (
              <div className="space-y-8 max-w-3xl mx-auto">
                <div className="text-center pb-6 border-b border-neutral-200">
                  <h3 className="font-display font-bold text-lg md:text-xl text-neutral-950 mb-1">
                    {paperData.koreanTitle}
                  </h3>
                  <p className="text-xs text-neutral-500 italic mb-2">
                    {paperData.englishTitle}
                  </p>
                  <p className="text-xs font-semibold text-neutral-700">
                    {paperData.authors} ({paperData.affiliations})
                  </p>
                </div>

                {paperData.sections.map((sec, idx) => (
                  <section key={idx} className="space-y-3">
                    <h4 className="font-bold text-base text-neutral-950 flex items-center gap-2 border-b border-neutral-100 pb-1.5">
                      <span className="text-neutral-400 font-mono text-sm">{sec.number}.</span>
                      <span>{sec.title}</span>
                    </h4>
                    <div className="space-y-2.5 text-sm text-neutral-700 leading-relaxed text-justify">
                      {sec.content.map((p, pIdx) => (
                        <p key={pIdx}>{p}</p>
                      ))}
                    </div>
                  </section>
                ))}
              </div>
            )}

            {activeTab === 'citation' && (
              <div className="space-y-6">
                {/* BibTeX citation block */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-bold text-sm text-neutral-950">
                      BibTeX Citation
                    </h3>
                    <button
                      onClick={handleCopyBibtex}
                      className="inline-flex items-center gap-1 px-3 py-1 rounded-lg text-xs font-semibold bg-neutral-100 text-neutral-700 hover:bg-neutral-200 transition-colors cursor-pointer"
                    >
                      {copiedBibtex ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{copiedBibtex ? '복사 완료!' : 'BibTeX 복사'}</span>
                    </button>
                  </div>
                  <pre className="p-4 rounded-xl bg-neutral-900 text-neutral-100 text-xs font-mono overflow-x-auto leading-relaxed">
                    {paperData.bibtex}
                  </pre>
                </div>

                {/* References list */}
                <div>
                  <h3 className="font-bold text-sm text-neutral-950 mb-3">
                    {lang === 'en' ? 'References' : '주요 참고문헌 (References)'}
                  </h3>
                  <div className="space-y-2 text-xs text-neutral-600 leading-relaxed">
                    {paperData.references.map((ref, idx) => (
                      <div key={idx} className="pl-4 -indent-4">
                        {ref}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Modal Footer */}
          <div className="px-6 py-4 border-t border-neutral-200 bg-neutral-50/90 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-neutral-500">
            <div className="flex items-center gap-2">
              <span className="font-semibold text-neutral-700">{venue}</span>
              <span>•</span>
              <span>{year}</span>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrint}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-neutral-300 text-neutral-700 hover:bg-neutral-100 font-semibold transition-colors cursor-pointer"
              >
                <Download className="w-3.5 h-3.5" />
                <span>{lang === 'en' ? 'Save as PDF' : 'PDF로 저장/인쇄'}</span>
              </button>
              <button
                onClick={onClose}
                className="px-4 py-1.5 rounded-lg bg-neutral-950 text-white font-semibold hover:bg-neutral-800 transition-colors cursor-pointer"
              >
                {lang === 'en' ? 'Close' : '닫기'}
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
