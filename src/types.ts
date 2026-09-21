export type Language = 'en' | 'ko';

export interface TechCard {
  id: string;
  title: { en: string; ko: string };
  description: { en: string; ko: string };
  skills: string[];
}

export interface SkillChip {
  name: string;
  category: 'multimodal' | 'ml' | 'engineering' | 'tools';
}

export interface WorkExperience {
  id: string;
  role: { en: string; ko: string };
  organization: { en: string; ko: string };
  period: string;
  type: { en: string; ko: string };
  description: { en: string; ko: string };
  achievements: { en: string[]; ko: string[] };
  tags: string[];
}

export interface ProjectItem {
  id: string;
  title: { en: string; ko: string };
  subtitle: { en: string; ko: string };
  category: 'VLM' | 'RAG' | 'Document AI' | 'Application';
  period: string;
  metric?: {
    label: { en: string; ko: string };
    value: string;
    sublabel?: { en: string; ko: string };
  };
  overview: { en: string; ko: string };
  contributions: { en: string[]; ko: string[] };
  technologies: string[];
  paper?: string;
  paperId?: string;
  paperUrl?: string;
  award?: string;
}

export interface PaperTable {
  caption: string;
  headers: string[];
  rows: (string | number)[][];
  notes?: string;
}

export interface PaperSection {
  number: string;
  title: string;
  content: string[];
  subsections?: {
    number: string;
    title: string;
    content: string[];
  }[];
}

export interface PaperData {
  koreanTitle: string;
  englishTitle: string;
  authors: string;
  affiliations: string;
  emails?: string;
  abstract: {
    ko: string;
    en?: string;
  };
  keywords: string[];
  keyHighlights: {
    label: string;
    value: string;
    description: string;
  }[];
  sections: PaperSection[];
  tables?: PaperTable[];
  references: string[];
  bibtex: string;
}

export interface PublicationItem {
  id: string;
  title: string;
  koreanTitle?: string;
  authors?: string;
  venue: string;
  year: string;
  role: { en: string; ko: string };
  isOral?: boolean;
  abstract: { en: string; ko: string };
  topics: string[];
  paperData?: PaperData;
  paperUrl?: string;
}

export interface AwardItem {
  id: string;
  title: { en: string; ko: string };
  host: { en: string; ko: string };
  year: string;
  type: string;
  description: { en: string; ko: string };
}
