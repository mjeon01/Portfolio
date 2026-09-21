import { TechCard, WorkExperience, ProjectItem, PublicationItem, AwardItem } from '../types';

export const PERSONAL_INFO = {
  name: {
    en: 'Mun-Gi Jeon',
    ko: '전문기',
  },
  title: {
    en: 'AI & Multimodal Document Intelligence Researcher',
    ko: '인공지능 & 멀티모달 문서 AI 연구자',
  },
  headline: {
    en: 'Researcher specializing in Vision-Language Models (VLM), OCR, and Retrieval-Augmented Generation (RAG) for real-world document understanding.',
    ko: '비전-언어 모델(VLM), OCR 및 검색 증강 생성(RAG) 기반 실세계 문서 이해 및 멀티모달 AI를 연구합니다.',
  },
  about: {
    en: [
      "Hi, I'm Mun-Gi Jeon, an AI and Multimodal Document Intelligence researcher with a dual major in Cyber Police and Computer Engineering at Busan University of Foreign Studies.",
      "My core research lies at the intersection of Vision-Language Models (VLM), Document Information Extraction (OCR), and Retrieval-Augmented Generation (RAG). I focus on addressing critical real-world challenges—such as mitigating VLM over-correction on learner handwriting, designing semantic schemas for unstructured industrial invoices, and building process-reward-guided error diagnosis frameworks.",
      "With hands-on experience across the entire research lifecycle—from task formulation and synthetic dataset creation to LoRA/PEFT fine-tuning, empirical evaluation, and paper presentation—I strive to bridge state-of-the-art multimodal models with practical, reliable deployment."
    ],
    ko: [
      "안녕하세요, 부산외국어대학교에서 사이버경찰 및 컴퓨터공학을 복수전공하고 있는 인공지능 연구자 전문기입니다.",
      "주요 연구 분야는 비전-언어 모델(VLM), 문서 정보 추출(OCR), 그리고 검색 증강 생성(RAG)의 융합입니다. 특히 한국어 학습자의 손글씨 오류 보존을 위한 VLM 과교정 완화, 비정형 수산물 송장의 시맨틱 스키마 설계 및 검증, 프로세스 리워드(PRM) 기반 문법 진단 및 교정 등 실세계에서 맞닥뜨리는 핵심 난제들을 해결하는 연구를 진행하고 있습니다.",
      "문제 정의부터 합성 데이터셋 구축, LoRA/PEFT 미세조정, 실험 설계, 논문 작성 및 학술대회 구두발표까지 연구 전 주기를 주도적으로 수행하며, 신뢰할 수 있는 실용적 멀티모달 AI 시스템을 구축하는 데 집중하고 있습니다."
    ]
  },
  email: 'mungijn@gmail.com',
  github: 'https://github.com/mjeon01',
  linkedin: 'https://linkedin.com/in/mjeon01',
  location: {
    en: 'Busan, South Korea',
    ko: '대한민국 부산',
  },
  affiliation: {
    en: 'Busan University of Foreign Studies',
    ko: '부산외국어대학교',
  },
  education: {
    school: {
      en: 'Busan University of Foreign Studies',
      ko: '부산외국어대학교',
    },
    degree: {
      en: 'Major in Cyber Police · Double Major in Computer Engineering',
      ko: '사이버경찰전공 (주전공) · 컴퓨터공학 (복수전공)',
    },
    period: '2020 – Present',
    details: {
      en: 'Conducted undergraduate research and projects focused on AI, natural language processing, data, and document understanding.',
      ko: 'AI, 자연어 처리, 데이터 및 문서 이해에 중점을 둔 학부 연구 및 산학협력 프로젝트 수행.',
    }
  }
};

export const TECH_STACK_CARDS: TechCard[] = [
  {
    id: 'multimodal-doc-ai',
    title: {
      en: 'Multimodal & Document AI',
      ko: '멀티모달 & 문서 AI',
    },
    description: {
      en: 'Optical Character Recognition (OCR), Vision-Language Models (VLM), Document Information Extraction, and Handwritten Text Recognition for unstructured formats.',
      ko: 'OCR, 비전-언어 모델(VLM), 비정형 문서 정보 추출 및 한국어 학습자 손글씨 텍스트 인식(HTR) 연구 및 개발.',
    },
    skills: ['VLM (Qwen-VL)', 'OCR', 'HTR', 'Document IE', 'Multimodal Understanding'],
  },
  {
    id: 'llm-rag',
    title: {
      en: 'LLM & RAG Systems',
      ko: 'LLM & RAG 시스템',
    },
    description: {
      en: 'Retrieval-Augmented Generation, embedding models, cross-encoder reranking, prompt engineering, and human-in-the-loop validation frameworks.',
      ko: '검색 증강 생성(RAG), 임베딩 모델, 리랭킹(Reranking), 프롬프트 엔지니어링 및 휴먼 인 더 루프 검증 파이프라인 구축.',
    },
    skills: ['RAG Pipeline', 'Embedding Models', 'Reranking', 'Prompt Engineering', 'HITL'],
  },
  {
    id: 'model-training',
    title: {
      en: 'Model Training & PEFT',
      ko: '모델 학습 & 미세조정',
    },
    description: {
      en: 'Parameter-Efficient Fine-Tuning (PEFT, LoRA, Projector tuning), Supervised Fine-Tuning (SFT), and PRM-guided GRPO post-training.',
      ko: 'LoRA 및 프로젝터 튜닝을 포함한 PEFT, 지도 미세조정(SFT), 프로세스 리워드(PRM) 기반 GRPO 사후 학습.',
    },
    skills: ['LoRA', 'PEFT', 'SFT', 'Projector Tuning', 'GRPO / PRM'],
  },
  {
    id: 'frameworks-engineering',
    title: {
      en: 'Frameworks & Systems',
      ko: '프레임워크 & 엔지니어링',
    },
    description: {
      en: 'End-to-end deep learning engineering with PyTorch, Hugging Face Transformers, high-concurrency FastAPI microservices, and containerized Docker environments.',
      ko: 'PyTorch, Hugging Face Transformers를 활용한 딥러닝 파이프라인 및 고성능 FastAPI, Docker 컨테이너 기반 서빙 아키텍처.',
    },
    skills: ['PyTorch', 'Transformers', 'FastAPI', 'Docker', 'Git'],
  },
  {
    id: 'data-schema',
    title: {
      en: 'Data & Schema Engineering',
      ko: '데이터 & 스키마 엔지니어링',
    },
    description: {
      en: 'PostgreSQL databases, domain semantic schema construction, synthetic error generation for learners, and field-level verification pipelines.',
      ko: 'PostgreSQL 기반 데이터 아키텍처, 도메인 지식 기반 시맨틱 스키마 설계, 학습자 오류 합성 데이터셋 구축 및 검증.',
    },
    skills: ['PostgreSQL', 'Synthetic Data', 'Semantic Schema', 'Data Curation', 'SQL'],
  },
  {
    id: 'research-lifecycle',
    title: {
      en: 'End-to-End AI Research',
      ko: 'AI 연구 전 주기 수행',
    },
    description: {
      en: 'Comprehensive experience across the entire research lifecycle: problem formulation, dataset design, experimental validation, peer-reviewed paper authorship, and oral presentations.',
      ko: '문제 정의부터 벤치마크 설계, 정량/정성적 실험 검증, 학술대회 구두발표 및 논문 제1저자 집필에 이르는 연구 전 주기 주도.',
    },
    skills: ['Oral Presentation', 'Experiment Design', 'Paper Authorship', 'Benchmarking'],
  },
];

export const EXPERTISE_PILLS = [
  'PyTorch',
  'Hugging Face',
  'Python',
  'FastAPI',
  'Docker',
  'PostgreSQL',
  'Qwen-VL',
  'LoRA & PEFT',
  'Document AI',
  'OCR Engines',
  'RAG Systems',
  'Git & Linux',
];

export const WORK_HISTORY: WorkExperience[] = [
  {
    id: 'research-assistant',
    role: {
      en: 'Undergraduate Research Assistant · AI Research Assistant',
      ko: '학부 연구생 · 인공지능 연구 보조원',
    },
    organization: {
      en: 'Busan University of Foreign Studies',
      ko: '부산외국어대학교',
    },
    period: '2025 – Present',
    type: {
      en: 'Academic Research',
      ko: '학술 연구',
    },
    description: {
      en: 'Conducting advanced research using real-world documents and Korean learner data, focusing on OCR, Document AI, VLM, RAG, and multimodal AI systems.',
      ko: '실세계 문서 및 한국어 학습자 데이터를 활용하여 OCR, Document AI, VLM, RAG 및 멀티모달 AI 분야의 핵심 연구를 주도적으로 수행하고 있습니다.',
    },
    achievements: {
      en: [
        'Experienced the full research cycle: problem definition, dataset curation, model training/evaluation, experiment design, paper writing, and oral presentations.',
        'Authored and co-authored multiple papers accepted to premier domestic conferences (HCLT 2026, HCLT 2025) and journal (Journal of KIISE).',
        'Investigated parameter-efficient fine-tuning (Projector + LoRA) to resolve VLM over-correction biases in educational domains.',
      ],
      ko: [
        '문제 정의부터 데이터셋 구축, 모델 학습/평가, 실험 설계, 논문 작성 및 구두발표까지 연구 전 주기를 체계적으로 경험.',
        'HCLT 2026(구두발표 2편), HCLT 2025(구두발표 1편) 및 한국정보과학회 논문지(Journal of KIISE) 게재 등 우수한 연구 성과 창출.',
        '교육 도메인에서 비전-언어 모델의 과교정 편향을 억제하는 Projector + LoRA 파라미터 효율적 튜닝 기법 탐구.',
      ],
    },
    tags: ['VLM', 'OCR', 'RAG', 'LoRA', 'HCLT Oral'],
  },
  {
    id: 'xai-whitepaper',
    role: {
      en: 'XAI · Hallucination White Paper & Tutorial Co-Author',
      ko: 'XAI · 환각(Hallucination) 백서 및 튜토리얼 공동 저자',
    },
    organization: {
      en: 'Academic White Paper & Tutorial',
      ko: '학술 백서 & 튜토리얼',
    },
    period: '2026',
    type: {
      en: 'Publication & Technical Writing',
      ko: '학술 저술 & 에디터',
    },
    description: {
      en: 'Co-authored a technical white paper on LLM hallucination in information extraction and mitigation approaches, alongside an educational XAI tutorial.',
      ko: '정보 추출 과정에서의 LLM 환각(Hallucination) 현상 분석 및 완화 방안을 다룬 백서를 공동 집필하고 설명 가능한 AI(XAI) 튜토리얼을 제작했습니다.',
    },
    achievements: {
      en: [
        'Analyzed root causes of hallucinations in LLM/VLM structured document extraction workflows.',
        'Contributed as an editor to content structuring, technical manuscript review, and rigorous editing.',
        'Formulated actionable verification guidelines for mitigating false generative claims.',
      ],
      ko: [
        'LLM/VLM 기반 구조화된 문서 추출 파이프라인에서 발생하는 환각의 근본 원인 분석 및 완화 기법 정리.',
        '튜토리얼 목차 구성, 원고 검토 및 전문 에디터로서 콘텐츠 구조화 기여.',
        '추출 결과의 신뢰성을 보장하기 위한 정량적 검증 가이드라인 정립.',
      ],
    },
    tags: ['XAI', 'Hallucination Mitigation', 'Technical Writing', 'LLM'],
  },
  {
    id: 'ai-bootcamp-pa',
    role: {
      en: 'AI Bootcamp Program Assistant (PA)',
      ko: 'AI 부트캠프 운영 보조(PA)',
    },
    organization: {
      en: 'Busan University of Foreign Studies',
      ko: '부산외국어대학교',
    },
    period: '2026',
    type: {
      en: 'Education & Operations',
      ko: '교육 및 운영 지원',
    },
    description: {
      en: 'Supported attendance management, program operations, and course administration for the AI Bootcamp training tracks.',
      ko: 'AI 부트캠프 초·중·고급 트랙의 출결 관리, 실습 환경 지원, 교육 과정 운영 및 행정 전반을 지원했습니다.',
    },
    achievements: {
      en: [
        'Facilitated smooth daily lab sessions and technical exercises for participating students.',
        'Managed communication channels between course instructors, mentoring staff, and attendees.',
      ],
      ko: [
        '참여 학생들의 실습 환경 지원 및 일일 교육 세션의 원활한 진행 촉진.',
        '교수진, 멘토단, 수강생 간의 원활한 소통 창구 역할 수행.',
      ],
    },
    tags: ['Program Operations', 'Education', 'Mentoring Support'],
  },
  {
    id: 'linksup-collaboration',
    role: {
      en: 'AI Information Extraction for Fishery Invoices',
      ko: '수산물 비정형 송장 AI 정보 추출 산학협력 연구',
    },
    organization: {
      en: 'LinksUp Industry-Academia Collaboration',
      ko: '링크스업(LinksUp) 산학협력',
    },
    period: '2025',
    type: {
      en: 'Industry Collaboration',
      ko: '산학 협력',
    },
    description: {
      en: 'Engineered OCR-based information extraction, semantic-schema construction, and extraction-result validation for unstructured fishery-product invoices.',
      ko: '비정형 수산물 송장 데이터를 대상으로 OCR 기반 정보 추출, 시맨틱 스키마 구축 및 도메인 지식 기반 추출 결과 검증 파이프라인을 설계 및 구현했습니다.',
    },
    achievements: {
      en: [
        'Designed field-level performance evaluation and domain-knowledge-based validation flows for noisy, real-world industry documents.',
        'Shared code and technical materials and presented findings at joint industry-academia workshops.',
        'Resulted in a First-Author oral presentation paper at HCLT 2025.',
      ],
      ko: [
        '비정형 산업 문서에 특화된 필드 단위 성능 평가 및 도메인 지식 기반 검증 플로우 설계.',
        '공동 산학 워크숍 참여 및 소스코드/연구 결과물 기술 공유.',
        '연구 성과를 HCLT 2025 제1저자 구두발표 논문으로 발전시켜 구두 발표.',
      ],
    },
    tags: ['Document IE', 'Semantic Schema', 'OCR', 'Industry-Academia'],
  },
  {
    id: 'undergraduate-dual-major',
    role: {
      en: 'Cyber Police & Computer Engineering Student',
      ko: '사이버경찰학 (주전공) · 컴퓨터공학 (복수전공)',
    },
    organization: {
      en: 'Busan University of Foreign Studies',
      ko: '부산외국어대학교',
    },
    period: '2020 – Present',
    type: {
      en: 'Higher Education',
      ko: '학부 학위과정',
    },
    description: {
      en: 'Bridging legal-grade evidence integrity, cybersecurity fundamentals, and computer engineering principles with modern deep learning and document intelligence.',
      ko: '사이버 보안 및 데이터 무결성 지식과 컴퓨터공학 소프트웨어 엔지니어링 역량을 결합하여 정밀한 AI 연구 기반을 확립했습니다.',
    },
    achievements: {
      en: [
        'Completed foundational and advanced coursework in data structures, algorithms, computer networks, and databases.',
        'Completed Beginner and Intermediate tracks in BUFS AI Bootcamp (2026); currently excelling in Advanced Track.',
      ],
      ko: [
        '자료구조, 알고리즘, 컴퓨터 네트워크, 데이터베이스 등 CS 핵심 교과과정 이수.',
        '2026년 부산외대 AI 부트캠프 초급·중급 트랙 수료 및 고급 트랙 이수 중.',
      ],
    },
    tags: ['Cyber Police', 'Computer Engineering', 'Dual Major'],
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'error-preserving-vlm',
    title: {
      en: 'Error-Preserving VLM for Korean Learners',
      ko: '한국어 학습자 오류 보존을 위한 비전-언어 모델(VLM) 연구',
    },
    subtitle: {
      en: 'Mitigating VLM over-correction with synthetic data and Projector + LoRA fine-tuning',
      ko: '합성 오류 보존 데이터 및 Projector + LoRA 튜닝을 통한 과교정 억제',
    },
    category: 'VLM',
    period: '2026',
    metric: {
      label: { en: 'Error Preservation', ko: '오류 보존율' },
      value: '41.0% → 62.3%',
      sublabel: { en: 'Over-correction dropped 39.8% → 22.6%', ko: '과교정률 39.8% → 22.6% 감소' },
    },
    overview: {
      en: 'Commercial VLMs tend to automatically "fix" spelling and grammatical errors when reading learner handwriting, hindering diagnostic educational tools. This research builds specialized synthetic handwriting datasets and applies PEFT to preserve authentic errors.',
      ko: '기존 상용 VLM은 한국어 학습자의 손글씨를 인식할 때 철자나 문법적 오류를 임의로 정답으로 자동 수정(과교정)해버려 교육적 진단을 방해하는 고질적 문제가 있습니다. 본 연구는 오류 문장과 손글씨 샘플을 구축하고 Projector + LoRA 기법을 적용하여 모델이 원본 오류를 그대로 읽어내도록 개선했습니다.',
    },
    contributions: {
      en: [
        'Constructed custom Korean handwriting dataset containing both genuine/synthetic learner errors.',
        'Fine-tuned Qwen3.5-4B using a combined Projector + LoRA parameter-efficient strategy.',
        'Boosted error preservation from 41.04% to 62.30% while decreasing over-correction from 39.78% to 22.63%.',
        'Demonstrated strong generalization across both synthetic benchmarks and real-world handwriting.',
      ],
      ko: [
        '정답 문장과 학습자 오류 문장을 모두 포함하는 한국어 손글씨 데이터셋 구축.',
        'Qwen3.5-4B 기반 Projector + LoRA 파라미터 효율적 미세조정(PEFT) 적용.',
        '오류 보존율을 41.04%에서 62.30%로 대폭 향상시키고 과교정률을 39.78%에서 22.63%로 감축.',
        '실제 필적 데이터와 합성 필적 데이터 양측에서 강력한 일반화 성능 입증.',
      ],
    },
    technologies: ['Qwen3.5-4B', 'PyTorch', 'LoRA', 'PEFT', 'Projector Tuning', 'Synthetic Data'],
    paper: 'HCLT 2026 Accepted (Oral Presentation, First Author)',
    paperId: 'pub-vlm-overcorrection',
    paperUrl: 'https://drive.google.com/file/d/1e-M5jL2AFn3mYJ9H3mfkKONCY6AuFbvX/view',
  },
  {
    id: 'handwritten-grammar-diagnosis',
    title: {
      en: 'Korean Handwritten Grammatical Error Diagnosis & Correction with VLMs',
      ko: 'VLM 기반 한국어 손글씨 문법 오류 진단 및 교정 연구',
    },
    subtitle: {
      en: 'Stepwise verification and PRM-guided GRPO post-training for end-to-end handwriting analysis',
      ko: '단계별 검증 및 프로세스 리워드(PRM) 기반 GRPO 사후 학습 프레임워크',
    },
    category: 'VLM',
    period: '2026',
    metric: {
      label: { en: 'Dataset Scale', ko: '합성 데이터셋' },
      value: '50,000 Samples',
      sublabel: { en: 'Reflecting learner grammar error patterns', ko: '학습자 문법 오류 패턴 반영' },
    },
    overview: {
      en: 'Investigated an integrated framework for Korean handwriting transcription, reference restoration, and grammatical error diagnosis using multimodal reasoning.',
      ko: '한국어 손글씨 텍스트의 단순 전사를 넘어, 참조 문장 복원 및 정밀 문법 오류 진단/교정까지 수행하는 VLM 엔드투엔드 통합 프레임워크를 연구했습니다.',
    },
    contributions: {
      en: [
        'Generated 50,000 synthetic error sentences and corresponding handwriting samples mirroring foreign learner patterns.',
        'Trained and benchmarked Qwen3-VL-4B and Qwen3-VL-8B models across various architectures.',
        'Compared answer-based SFT, structured-verification SFT, and Process Reward Model (PRM) guided GRPO post-training.',
        'Demonstrated that stepwise process rewards significantly boost diagnostic precision and explanation quality.',
      ],
      ko: [
        '외국인 학습자 오류 패턴을 체계적으로 반영한 5만 건의 합성 오류 문장 및 손글씨 샘플 구축.',
        'Qwen3-VL-4B 및 Qwen3-VL-8B 모델에 대한 다각도 벤치마킹 및 학습 수행.',
        '단순 응답 기반 SFT, 구조화 검증 SFT, 그리고 PRM 기반 GRPO 사후 학습의 성능 비교 분석.',
        '단계별 프로세스 리워드가 문법 진단 정밀도 및 교정 설명 품질을 유의미하게 향상시킴을 증명.',
      ],
    },
    technologies: ['Qwen3-VL', 'PRM (Process Reward Model)', 'GRPO', 'SFT', 'Stepwise Verification'],
    paper: 'HCLT 2026 Accepted (Oral Presentation, Second Author)',
    paperId: 'pub-process-reward',
    paperUrl: 'https://drive.google.com/file/d/1EzEaGCKj4lQeOdkC_eJsFbXmsF-eojp4/view',
  },
  {
    id: 'mdsar-rag',
    title: {
      en: 'MDSAR | Multimodal Document-Structure-Aware RAG',
      ko: 'MDSAR | 다국어 멀티모달 문서 구조 인식 RAG 시스템',
    },
    subtitle: {
      en: 'Structure-aware retrieval augmented generation for international student support',
      ko: '외국인 유학생 지원을 위한 문서 구조 인지형 다국어 멀티모달 검색 증강 생성',
    },
    category: 'RAG',
    period: '2026',
    metric: {
      label: { en: 'Journal Publication', ko: '학술지 게재' },
      value: 'Journal of KIISE',
      sublabel: { en: 'Invited from HCLT 2025 Outstanding Paper', ko: 'HCLT 2025 우수논문 추천 확장 연구' },
    },
    overview: {
      en: 'Developed an advanced RAG pipeline that preserves document layout hierarchies, tables, and multimodal visual elements to provide accurate multilingual answers for university policy queries.',
      ko: '복잡한 서식, 표, 시각적 계층 구조가 포함된 대학 학사 문서를 손실 없이 파싱하여 외국인 유학생에게 다국어로 정확한 답변을 제공하는 문서 구조 인지형 RAG 시스템입니다.',
    },
    contributions: {
      en: [
        'Designed and validated synthetic QA evaluation datasets for multilingual multimodal RAG evaluation.',
        'Formalized taxonomy of query difficulty, visual question types, and gold-evidence grounding.',
        'Collaborative research invited from an HCLT 2025 Outstanding Paper for formal journal publication.',
      ],
      ko: [
        '다국어 멀티모달 RAG 평가를 위한 합성 질의응답(QA) 평가 데이터셋 설계 및 정합성 검증.',
        '질의 난이도, 시각 정보 유형, 정답 근거 매핑 기준 정립.',
        'HCLT 2025 우수논문으로 선정되어 한국정보과학회 논문지(Journal of KIISE)에 확장 논문 게재.',
      ],
    },
    technologies: ['Multilingual RAG', 'Document Layout', 'Embedding Models', 'Gold-Evidence Grounding'],
    paper: 'Journal of KIISE (한국정보과학회 논문지, Third Author)',
    paperId: 'pub-mdsar-journal',
    paperUrl: 'https://drive.google.com/file/d/1fLgab8G4wpX1hGtuKhnvceHlwx9BSbPD/view',
  },
  {
    id: 'songul-service',
    title: {
      en: 'SonGul | Handwriting Feedback Service for Korean Learners',
      ko: '손글(SonGul) | 외국인 한국어 학습자를 위한 손글씨 AI 피드백 서비스',
    },
    subtitle: {
      en: 'AI ROOKIE 2026 Top 100 Selected Project',
      ko: '2026 AI ROOKIE 본선 진출 (Top 100 팀 선정)',
    },
    category: 'Application',
    period: '2026',
    metric: {
      label: { en: 'National Recognition', ko: '경진대회 선발' },
      value: 'Top 100 Team',
      sublabel: { en: 'Selected among nationwide university teams', ko: '전국 단위 AI ROOKIE 2026 100대 팀 선정' },
    },
    overview: {
      en: 'An interactive mobile/web service empowering international Korean learners with instant VLM-driven visual handwriting recognition, stroke-level feedback, and customized error correction.',
      ko: '외국인 학습자가 작성한 손글씨를 촬영하면 VLM이 실시간으로 필적을 분석하고 오류를 진단하여 맞춤형 교정 피드백을 제공하는 서비스입니다.',
    },
    contributions: {
      en: [
        'Spearheaded handwriting data analysis, VLM recognition integration, and automated feedback prompt engineering.',
        'Passed competitive AI ROOKIE preliminaries, advancing to main round with dedicated GPU allocation.',
        'Underwent corporate technical mentorship and hands-on domestic LLM fine-tuning.',
      ],
      ko: [
        '손글씨 데이터 분석, VLM 기반 인식 엔진 연동 및 단계별 피드백 로직 설계.',
        'AI ROOKIE 2026 예선을 통과하여 전국 상위 100개 팀에 선정 및 GPU 서버 자원 수혜.',
        '국내 대표 AI 기업의 기술 교육, 1:1 전담 멘토링 및 토종 LLM 실증 프로젝트 수행.',
      ],
    },
    technologies: ['VLM', 'FastAPI', 'Handwriting Analysis', 'Educational AI', 'Prompt Engineering'],
    award: 'AI ROOKIE 2026 Top 100 Team',
  },
  {
    id: 'silla-road-global',
    title: {
      en: 'Silla Road Global | Multilingual Tourism Recommendation',
      ko: '신라로드 글로벌 | 다국어 관광지 추천 및 여행 일정 큐레이션 서비스',
    },
    subtitle: {
      en: 'End-to-end web architecture with RAG-based multilingual tourism chatbot',
      ko: 'RAG 챗봇 및 지리공간 데이터 연동 엔드투엔드 관광 플랫폼',
    },
    category: 'Application',
    period: '2026',
    overview: {
      en: 'A comprehensive travel platform guiding foreign travelers through Gyeongju and Korean historic heritage with personalized itineraries and a context-aware RAG assistant.',
      ko: '외국인 관광객을 대상으로 경주 및 한국의 역사 문화재 정보를 개인 맞춤형 일정으로 추천하고, RAG 기반 다국어 챗봇과 연동하여 여행 편의를 극대화한 서비스입니다.',
    },
    contributions: {
      en: [
        'Led end-to-end full-stack integration of multilingual tourism datasets and geolocation services.',
        'Developed dynamic itinerary planning algorithms and responsive user experience.',
        'Coordinated Git workflows to integrate teammate’s RAG-based multilingual conversational agent.',
      ],
      ko: [
        '다국어 관광 데이터 통합, 지리정보 API 연동 및 웹 서비스 핵심 백엔드/프론트엔드 전담 개발.',
        '동적 여행 코스 추천 알고리즘 및 직관적인 반응형 UI 구현.',
        'GitHub 협업을 통해 팀원이 구축한 RAG 기반 다국어 챗봇 모듈을 원활하게 시스템에 결합.',
      ],
    },
    technologies: ['FastAPI', 'PostgreSQL', 'Tourism API', 'RAG Chatbot', 'Geolocation'],
  },
  {
    id: 'linksup-fishery-ie',
    title: {
      en: 'AI Information Extraction for Unstructured Fishery Invoices',
      ko: '비정형 수산물 송장 AI 정보 추출 및 시맨틱 스키마 시스템',
    },
    subtitle: {
      en: 'Semantic schema & domain-knowledge validation for industry logistics',
      ko: '도메인 지식 기반 시맨틱 스키마 설계 및 실 산업 데이터 검증',
    },
    category: 'Document AI',
    period: '2025',
    metric: {
      label: { en: 'Oral Presentation', ko: '학술대회 발표' },
      value: 'HCLT 2025 Oral',
      sublabel: { en: 'First Author Paper', ko: '제1저자 구두발표' },
    },
    overview: {
      en: 'Solved extreme visual noise, irregular handwritten notes, and arbitrary table formats in commercial seafood trading invoices by coupling OCR with a strict domain-ontology semantic schema.',
      ko: '수산물 유통 현장에서 비정형적으로 작성되는 수기 송장의 노이즈와 다양한 양식 문제를 해결하기 위해, OCR과 도메인 온톨로지 시맨틱 스키마를 결합한 정보 추출 시스템을 개발했습니다.',
    },
    contributions: {
      en: [
        'Extracted critical trade fields (species, weight, unit price, totals) using OCR and rule-based fallback heuristics.',
        'Constructed a domain semantic schema to validate arithmetic and domain constraints automatically.',
        'Presented research orally at HCLT 2025.',
      ],
      ko: [
        '품목, 중량, 단가, 총액 등 핵심 거래 항목을 높은 정확도로 추출하는 파이프라인 구축.',
        '단가-중량-금액 간 산술 관계 및 도메인 제약조건을 자동 교차 검증하는 시맨틱 스키마 설계.',
        'HCLT 2025 학술대회에서 제1저자로 구두 발표 진행.',
      ],
    },
    technologies: ['OCR', 'Semantic Schema', 'FastAPI', 'Domain Knowledge Validation', 'Python'],
    paper: 'HCLT 2025 Accepted (Oral Presentation, First Author)',
    paperId: 'pub-fishery-ie',
    paperUrl: 'https://drive.google.com/file/d/1Ynn69d7nqAvQadM0wQnCdr5o6OLuJ7W9/view',
  },
  {
    id: 'job-matching-chatbot',
    title: {
      en: 'AI-Based Job-Matching Chatbot',
      ko: 'AI 기반 구인구직 매칭 챗봇 시스템',
    },
    subtitle: {
      en: 'Excellence Award winner at Global AI+Xer’s Competition',
      ko: 'Global AI+Xer’s 융합프로젝트 경진대회 최우수상 수상',
    },
    category: 'Application',
    period: '2025',
    metric: {
      label: { en: 'Award', ko: '수상 실적' },
      value: 'Excellence Award (최우수상)',
      sublabel: { en: 'Global AI+Xer’s Competition', ko: '최우수상 수상' },
    },
    overview: {
      en: 'An intelligent recruitment advisory chatbot that parses applicant credentials and matches them with optimal career opportunities through vector similarity and generative dialogue.',
      ko: '구직자의 이력 및 희망 직무 역량을 다각도로 분석하여 최적의 채용 공고와 매칭하고 지원 전략을 제안하는 대화형 AI 시스템입니다.',
    },
    contributions: {
      en: [
        'Co-developed conversational recruitment agent and resume matching logic.',
        'Won the Excellence Award at the Global AI+Xer’s Convergence Project Competition.',
      ],
      ko: [
        '채용 지원용 AI 대화형 챗봇 및 이력서-공고 매칭 로직 공동 개발.',
        'Global AI+Xer’s 융합프로젝트 경진대회에서 최우수상 수상.',
      ],
    },
    technologies: ['NLP', 'Vector Search', 'Dialogue System', 'Python', 'FastAPI'],
    award: 'Global AI+Xer’s Excellence Award (최우수상)',
  },
  {
    id: 'tourism-bigdata',
    title: {
      en: 'Tourism Big Data Analysis & Forecasting Project',
      ko: '관광 빅데이터 분석 및 방문객 시계열 예측 프로젝트',
    },
    subtitle: {
      en: 'Time-series forecasting with LSTM & Prophet to activate tourism off-seasons',
      ko: 'LSTM 및 Prophet을 활용한 외국인 관광객 추이 분석 및 비수기 활성화 전략',
    },
    category: 'Application',
    period: '2025',
    overview: {
      en: 'Analyzed foreign tourist inflows, K-culture search volume index, and currency exchange rates using statistical correlation and deep learning time-series models.',
      ko: '방한 외국인 관광객 수, K-컬처 검색량 트렌드 및 환율 변동 데이터를 상관분석과 딥러닝 시계열 모델로 종합 분석하여 비수기 활성화 방안을 도출했습니다.',
    },
    contributions: {
      en: [
        'Trained LSTM and Meta Prophet models for tourist arrival volume forecasting.',
        'Formulated data-driven promotional strategies to mitigate regional seasonal drops.',
        'Won the Encouragement Award in the official competition.',
      ],
      ko: [
        'LSTM 및 Prophet 시계열 모델을 학습하여 외국인 방문객 수요 예측 파이프라인 구축.',
        '데이터 기반 통찰을 바탕으로 지역 관광 비수기 극복 전략 제안.',
        '노코드 관광 빅데이터 분석 경진대회에서 장려상 수상.',
      ],
    },
    technologies: ['LSTM', 'Prophet', 'Pandas', 'Time-Series', 'Correlation Analysis'],
    award: 'Tourism Big Data Competition Encouragement Award (장려상)',
  },
];

export const PUBLICATIONS: PublicationItem[] = [
  {
    id: 'pub-vlm-overcorrection',
    title: 'Synthetic Data Construction and VLM Over-Correction Mitigation for Preserving Learner Errors in Korean Handwriting Recognition',
    koreanTitle: '한국어 필기체 인식에서 학습자 오류 표현 보존을 위한 합성 데이터 구축 및 VLM 과교정 완화',
    venue: 'HCLT 2026 (제38회 한글 및 한국어 정보처리 학술대회)',
    year: '2026',
    role: {
      en: 'First Author (Oral Presentation)',
      ko: '제1저자 (구두 발표)',
    },
    isOral: true,
    abstract: {
      en: 'Investigates synthetic data curation and Parameter-Efficient Fine-Tuning (Projector + LoRA) to prevent Vision-Language Models from arbitrarily auto-correcting authentic learner errors in handwritten Korean recognition.',
      ko: '비전-언어 모델(VLM)이 한국어 학습자의 손글씨를 전사할 때 원본 오류를 정답으로 임의 수정(과교정)해버리는 현상을 방지하기 위해, 합성 오류 보존 데이터 구축 및 Projector + LoRA 튜닝 전략을 제안.',
    },
    topics: ['Vision-Language Models', 'PEFT', 'LoRA', 'Synthetic Data', 'Over-Correction Mitigation'],
    paperUrl: 'https://drive.google.com/file/d/1e-M5jL2AFn3mYJ9H3mfkKONCY6AuFbvX/view',
  },
  {
    id: 'pub-process-reward',
    title: 'Process-Reward-Guided Stepwise Verification for Grammatical Error Diagnosis and Correction in Korean Handwritten Text',
    koreanTitle: '과정 보상 기반 단계적 검증을 통한 한국어 손글씨 문법 오류 진단 및 교정',
    venue: 'HCLT 2026 (제38회 한글 및 한국어 정보처리 학술대회)',
    year: '2026',
    role: {
      en: 'Second Author (Oral Presentation)',
      ko: '제2저자 (구두 발표)',
    },
    isOral: true,
    abstract: {
      en: 'Proposes an integrated VLM architecture that performs handwriting transcription, ground-truth reference restoration, and stepwise grammatical error diagnosis guided by Process Reward Models (PRM) and GRPO post-training.',
      ko: '한국어 손글씨 전사, 참조 문장 복원 및 문법 오류 진단 과정을 단일 파이프라인으로 통합하고, 프로세스 리워드 모델(PRM) 기반 단계별 검증과 GRPO 사후 학습을 통한 성능 향상 규명.',
    },
    topics: ['PRM', 'GRPO Post-Training', 'Stepwise Verification', 'Grammatical Error Diagnosis'],
    paperUrl: 'https://drive.google.com/file/d/1EzEaGCKj4lQeOdkC_eJsFbXmsF-eojp4/view',
  },
  {
    id: 'pub-mdsar-journal',
    title: 'MDSAR: Multilingual Multimodal Document-Structure-Aware RAG System for International Student Support',
    koreanTitle: 'MDSAR: 외국인 유학생 지원을 위한 다국어 멀티모달 문서 구조 인식 RAG 시스템',
    venue: 'Journal of KIISE (한국정보과학회 논문지)',
    year: '2026',
    role: {
      en: 'Third Author (Journal Paper)',
      ko: '제3저자 (학술지 논문)',
    },
    isOral: false,
    abstract: {
      en: 'Extended journal paper invited from an HCLT 2025 Outstanding Paper award. Contributed to evaluation dataset design, benchmark formulation, and gold-evidence validation for structure-aware multimodal RAG.',
      ko: 'HCLT 2025 우수논문 추천을 통해 확장 게재된 연구. 외국인 유학생 지원을 위한 구조 인지형 다국어 멀티모달 RAG의 평가 데이터셋 설계 및 정량적 근거 매핑 수행.',
    },
    topics: ['Multimodal RAG', 'Document Structure', 'Evaluation Dataset', 'Journal of KIISE'],
    paperUrl: 'https://drive.google.com/file/d/1fLgab8G4wpX1hGtuKhnvceHlwx9BSbPD/view',
  },
  {
    id: 'pub-fishery-ie',
    title: 'Information Extraction System for Unstructured Fishery Product Invoices using Semantic Schema and Domain Knowledge',
    koreanTitle: '의미 기반 스키마 및 도메인 지식을 활용한 비정형 수산물 인보이스 정보 추출 시스템',
    venue: 'HCLT 2025 (제37회 한글 및 한국어 정보처리 학술대회)',
    year: '2025',
    role: {
      en: 'First Author (Oral Presentation)',
      ko: '제1저자 (구두 발표)',
    },
    isOral: true,
    abstract: {
      en: 'Presents an end-to-end document intelligence pipeline that extracts unstructured commercial seafood invoices with high fidelity using OCR and domain-knowledge-driven semantic schemas.',
      ko: '비정형 수산물 유통 송장 데이터를 대상으로 OCR 추출 기법과 도메인 지식 기반 시맨틱 스키마를 융합하여 노이즈 강건성과 필드 정합성을 확보한 정보 추출 시스템 제안.',
    },
    topics: ['Document AI', 'OCR', 'Semantic Schema', 'Domain Knowledge', 'Invoice IE'],
    paperUrl: 'https://drive.google.com/file/d/1Ynn69d7nqAvQadM0wQnCdr5o6OLuJ7W9/view',
  },
];

export const AWARDS: AwardItem[] = [
  {
    id: 'award-ai-rookie',
    title: {
      en: 'AI ROOKIE 2026 — Selected as Top 100 Team',
      ko: '2026 AI ROOKIE 전국 본선 진출 (Top 100 팀 선정)',
    },
    host: {
      en: 'Ministry of Science and ICT & AI Industry Consortium',
      ko: '과학기술정보통신부 & 국내 AI 대표 기업 연합',
    },
    year: '2026',
    type: 'Top 100',
    description: {
      en: 'Selected in the top 100 teams nationwide for the SonGul project. Awarded dedicated high-performance GPU server access, domestic LLM APIs, and 1:1 technical mentorship from AI industry specialists.',
      ko: '손글(SonGul) 프로젝트로 전국 100대 팀에 최종 선발. 고성능 GPU 서버 자원, 국내 LLM 기술 교육 및 업계 전문가 1:1 기술 멘토링 수혜.',
    },
  },
  {
    id: 'award-global-aixer',
    title: {
      en: 'Global AI+Xer’s Convergence Project Competition — Excellence Award (최우수상)',
      ko: 'Global AI+Xer’s 융합프로젝트 경진대회 — 최우수상',
    },
    host: {
      en: 'Busan University of Foreign Studies AI+X Center',
      ko: '부산외국어대학교 AI+X 융합인재양성 사업단',
    },
    year: '2025',
    type: 'Excellence Award',
    description: {
      en: 'Awarded the Excellence Award for co-developing an AI-based job-matching dialogue system.',
      ko: 'AI 기반 맞춤형 구인구직 매칭 챗봇 시스템 개발에 참여하여 최우수상 수상.',
    },
  },
  {
    id: 'award-psc-handbook',
    title: {
      en: 'Regional Problem-Solving PSC Student Life Handbook Competition — Silver Award',
      ko: '지역 문제 해결형 PSC 대학생활 핸드북 공모전 — 은상',
    },
    host: {
      en: 'PSC Education Center',
      ko: 'PSC 교육혁신원',
    },
    year: '2026',
    type: 'Silver Award',
    description: {
      en: 'Received Silver Award for engineering information-accessibility solutions for campus life and regional communities.',
      ko: '지역사회 및 대학생활 정보 접근성을 개선하는 실용적 솔루션을 제안하여 은상 수상.',
    },
  },
  {
    id: 'award-tourism-bigdata',
    title: {
      en: 'Tourism Big Data Analysis Competition — Encouragement Award',
      ko: '노코드 관광 빅데이터 분석 경진대회 — 장려상',
    },
    host: {
      en: 'Korea Tourism Organization & Big Data Association',
      ko: '관광 빅데이터 분석 학술 연합',
    },
    year: '2025',
    type: 'Encouragement Award',
    description: {
      en: 'Recognized with an Encouragement Award for deep predictive modeling (LSTM/Prophet) analyzing tourist inflows and off-season trends.',
      ko: '시계열 딥러닝 모델(LSTM/Prophet)을 활용한 외국인 관광객 추이 예측 및 비수기 극복 전략을 제안하여 장려상 수상.',
    },
  },
];
