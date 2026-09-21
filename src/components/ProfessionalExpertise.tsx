import React from 'react';
import { Language } from '../types';
import { EXPERTISE_PILLS } from '../data/portfolioData';
import { 
  Flame, 
  Cpu, 
  Terminal, 
  Zap, 
  Container, 
  Database, 
  Eye, 
  Sliders, 
  FileSearch, 
  Layers, 
  GitBranch 
} from 'lucide-react';
import { motion } from 'motion/react';

interface ProfessionalExpertiseProps {
  lang: Language;
}

export const ProfessionalExpertise: React.FC<ProfessionalExpertiseProps> = ({ lang }) => {
  const getIconForPill = (name: string) => {
    switch (name) {
      case 'PyTorch':
        return <Flame className="w-4 h-4 text-orange-400" />;
      case 'Hugging Face':
        return <Cpu className="w-4 h-4 text-yellow-400" />;
      case 'Python':
        return <Terminal className="w-4 h-4 text-emerald-400" />;
      case 'FastAPI':
        return <Zap className="w-4 h-4 text-teal-400" />;
      case 'Docker':
        return <Container className="w-4 h-4 text-sky-400" />;
      case 'PostgreSQL':
        return <Database className="w-4 h-4 text-blue-400" />;
      case 'Qwen-VL':
        return <Eye className="w-4 h-4 text-purple-400" />;
      case 'LoRA & PEFT':
        return <Sliders className="w-4 h-4 text-rose-400" />;
      case 'Document AI':
      case 'OCR Engines':
        return <FileSearch className="w-4 h-4 text-amber-400" />;
      case 'RAG Systems':
        return <Layers className="w-4 h-4 text-indigo-400" />;
      case 'Git & Linux':
        return <GitBranch className="w-4 h-4 text-neutral-300" />;
      default:
        return <Terminal className="w-4 h-4 text-neutral-400" />;
    }
  };

  return (
    <section id="expertise" className="py-16 md:py-24 px-6 border-t border-neutral-100 overflow-hidden">
      <div className="max-w-4xl mx-auto text-center">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-display font-extrabold text-3xl md:text-5xl text-neutral-950 tracking-tight mb-3">
            {lang === 'en' ? 'Professional Expertise' : '연구 및 엔지니어링 역량'}
          </h2>
          <p className="text-neutral-600 text-sm md:text-base leading-relaxed max-w-2xl mx-auto mb-10 md:mb-12">
            {lang === 'en'
              ? 'Focused on developing secure, high-performance multimodal models with reproducible pipelines and rigorous verification.'
              : '엄격한 재현성과 검증 프로세스를 바탕으로 안정적인 고성능 멀티모달 파이프라인을 구축합니다.'}
          </p>
        </motion.div>

        {/* Black Pill Badges with Staggered Entrance and Hover Scale */}
        <div className="flex flex-wrap justify-center gap-2.5 md:gap-3 max-w-3xl mx-auto">
          {EXPERTISE_PILLS.map((pill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9, y: 10 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: index * 0.04 }}
              whileHover={{ scale: 1.06, y: -2, transition: { duration: 0.15 } }}
              id={`expertise-pill-${index}`}
              className="bg-neutral-950 text-white rounded-full px-4 py-2.5 text-xs md:text-sm font-medium inline-flex items-center gap-2 shadow-xs cursor-default select-none hover:bg-neutral-800"
            >
              {getIconForPill(pill)}
              <span>{pill}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
