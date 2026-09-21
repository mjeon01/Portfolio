import { PaperData } from '../types';

export const PAPERS_DATA: Record<string, PaperData> = {
  'pub-vlm-overcorrection': {
    koreanTitle: '한국어 필기체 인식에서 학습자 오류 표현 보존을 위한 합성 데이터 구축 및 VLM 과교정 완화',
    englishTitle: 'Synthetic Data Construction and VLM Over-Correction Mitigation for Preserving Learner Errors in Korean Handwriting Recognition',
    authors: '전문기, 맥슈웰 데이브, 위자야 펠리시아 엔젤, 오지영, 류법모',
    affiliations: '부산외국어대학교, 고려대학교',
    emails: 'mungijn@gmail.com, davemaxuell@gmail.com, feliciaangel21@gmail.com, fivetwoone002@naver.com, pmryu@bufs.ac.kr',
    abstract: {
      ko: '한국어 교육을 위한 필기체 인식에서는 학습자가 작성한 오류를 있는 그대로 파악하는 것이 중요하다. 그러나 최근 높은 인식 성능을 보이는 Vision-Language Model(VLM)은 이미지에 포함된 문법 및 맞춤법 오류를 자연스러운 표현으로 자동 수정해버리는 과교정(over-correction) 문제를 발생시킬 수 있다. 본 연구에서는 한국어 필기체의 오류 보존 성능을 향상시키기 위해 총 60,000개의 합성 필기체 데이터를 생성하고, 이 중 40,000개를 이용하여 Qwen3.5-4B를 미세조정하였다. 또한, 기존의 문자 오류율(CER) 평가와 별도로 오류 보존과 과교정을 구분하는 새로운 평가 기준을 적용하였다. 평가 결과, 오류가 포함된 합성 필기체에서 오류 보존율은 41.04%에서 62.30%로 증가하고, 과교정률은 39.78%에서 22.63%로 감소하였다. 오류 유형별 분석에서는 맞춤법·음운 오류의 과교정률이 가장 높았으며, 제안 모델 적용 후 해당 과교정률 역시 55.5%에서 35.1%로 감소하였다. 반면 실제 필기체 평가에서는 CER이 다소 증가하여 합성 데이터 중심 학습의 일반화 한계가 확인되었다. 본 연구는 교육용 필기체 인식 모델을 구축할 때 문자 인식의 정확도뿐만 아니라 언어적 오류 표현의 보존 능력도 필수적으로 고려해야 함을 시사한다.',
      en: 'In handwriting recognition for Korean language education, recognizing learner errors faithfully without arbitrary correction is critical for subsequent diagnosis and feedback. However, Vision-Language Models (VLMs) frequently exhibit an over-correction phenomenon, where authentic grammatical or spelling errors are rewritten into fluent phrases. In this study, we generated 60,000 synthetic handwriting samples reflecting diverse Korean learner error distributions and fine-tuned Qwen3.5-4B on 40,000 samples with trainable Vision Projector and LoRA adapters. We introduce an evaluation metric separating error preservation from over-correction. Our proposed model increased error preservation from 41.04% to 62.30% and slashed over-correction from 39.78% to 22.63%.',
    },
    keywords: ['한국어 필기체 인식', 'VLM', '합성 필기체 데이터', '오류 보존', '과교정 완화', 'Qwen3.5-4B', 'LoRA'],
    keyHighlights: [
      {
        label: '오류 보존율 (Error Preservation)',
        value: '41.0% → 62.3%',
        description: '학습자의 실제 오표기를 지우지 않고 그대로 전사하는 성능 +21.3%p 향상',
      },
      {
        label: '과교정률 (Over-Correction)',
        value: '39.8% → 22.6%',
        description: 'VLM이 임의로 정상 문장으로 왜곡해버리는 과교정 현상 17.2%p 대폭 억제',
      },
      {
        label: '합성 데이터셋 구축 규모',
        value: '60,000 건',
        description: 'One-DM 확산 모델 및 음절 단위 CRNN-CTC 검증을 거친 고품질 필기체 데이터',
      },
      {
        label: '모델 아키텍처 및 튜닝',
        value: 'Projector + LoRA',
        description: 'Vision Encoder는 동결하고 Projection Layer와 LLM 선형 계층(LoRA Rank 64)만 효율적 학습',
      },
    ],
    tables: [
      {
        caption: '표 1. 합성 데이터 오류 유형별 빈도',
        headers: ['오류 유형', '오류 수 (건)', '비율 (%)'],
        rows: [
          ['맞춤법·음운', '13,823', '44.13%'],
          ['조사', '7,021', '22.42%'],
          ['활용·형태', '3,334', '10.65%'],
          ['문장 구조·높임·시제', '3,298', '10.53%'],
          ['어휘 선택', '2,689', '8.59%'],
          ['담화·문체', '1,154', '3.68%'],
          ['합계', '31,319', '100.0%'],
        ],
      },
      {
        caption: '표 7. 모델별 오류가 포함된 합성 필기체 성능 비교',
        headers: ['모델', 'CER (낮을수록 우수)', '과교정률 (%) ↓', '오류 보존율 (%) ↑', '기타 오류율 (%) ↓'],
        rows: [
          ['제안 모델 (Qwen3.5-4B Fine-tuned)', '0.0182', '22.63%', '62.30%', '15.07%'],
          ['Qwen3.5-4B (Zero-shot)', '0.0448', '39.78%', '41.04%', '19.18%'],
          ['Qwen3.5-9B', '0.0563', '36.44%', '34.68%', '28.88%'],
          ['Qwen3-VL-4B', '0.0862', '31.34%', '23.29%', '45.37%'],
          ['InternVL3-8B', '0.1858', '28.55%', '23.62%', '47.84%'],
          ['Ministral3-8B', '0.1927', '35.23%', '8.44%', '56.33%'],
        ],
        notes: '※ 오류 보존율, 과교정률, 기타 오류율은 전체 평가 문장 대비 비율(%)',
      },
      {
        caption: '표 8. 주요 오류 유형별 과교정률 및 오류 보존율 비교 (오류 단위)',
        headers: ['오류 유형', '베이스 과교정률', '제안모델 과교정률 ↓', '베이스 오류보존율', '제안모델 오류보존율 ↑'],
        rows: [
          ['맞춤법·음운', '55.5%', '35.1%', '28.4%', '53.9%'],
          ['조사', '5.6%', '1.9%', '91.3%', '96.5%'],
          ['활용·형태', '20.1%', '6.3%', '70.4%', '93.1%'],
          ['문장 구조·높임·시제', '7.1%', '1.0%', '90.3%', '98.4%'],
          ['어휘 선택', '20.8%', '14.3%', '73.2%', '84.0%'],
          ['담화·문체', '3.0%', '0.0%', '94.0%', '99.0%'],
        ],
      },
    ],
    sections: [
      {
        number: '1',
        title: '서론 (Introduction)',
        content: [
          '최근 외국인 한국어 학습자가 급증함에 따라 AI 기반 쓰기 교육 및 진단 기술의 필요성이 대두되고 있다. 한국어 쓰기에서는 맞춤법, 조사, 어미 등 다양한 언어적 오류가 발생하며, 이를 적절히 피드백하기 위해서는 학습자가 작성한 필기 문자열을 임의로 교정하지 않고 있는 그대로 전사(Transcription)하는 과정이 선행되어야 한다.',
          '그러나 최근 비전-언어 모델(Vision-Language Model, VLM)은 이미지의 시각 정보와 언어적 문맥을 함께 활용하여 비정상적인 문자열을 유창한 정상 문장으로 고쳐버리는 ‘과교정(Over-Correction)’ 문제를 빈번하게 발생시킨다. 이로 인해 학생이 어떤 오류를 범했는지 파악할 수 없게 되어 교육 시스템의 신뢰성을 저해한다.',
          '본 연구는 총 60,000건의 합성 필기체 코퍼스를 구축하고 Qwen3.5-4B에 Vision Projector 및 LoRA 기반 부분 미세조정을 적용하여 VLM의 과교정 완화 및 학습자 오류 보존 성능을 체계적으로 규명한다.',
        ],
      },
      {
        number: '2',
        title: '관련 연구 (Related Work)',
        content: [
          '2.1 필기체 합성과 데이터 증강: 실사용자 필기 데이터를 수집하는 높은 비용 문제를 해결하기 위해 확산 모델(Diffusion Model) 기반의 One-DM을 한국어 데이터셋으로 적응 학습시켜 활용하였다.',
          '2.2 교육 필기체 인식에서 VLM 과교정과 오류 보존: 다중 행 수학 필기체 인식 및 OCR 충실도 연구에서 관찰된 과교정 문제를 한국어 학습자 도메인으로 확장하여 규명하였다.',
          '2.3 VLM의 시각-언어 연결과 매개변수 효율적 미세조정(PEFT): 시각 특징 인코더 가중치는 동결한 채 Vision Projector와 언어 모델의 LoRA 레이어만 학습함으로써 사전학습된 시각 표현을 보존하고 과도한 언어적 문맥 보정을 억제하였다.',
        ],
      },
      {
        number: '3',
        title: '합성 필기체 데이터 구축 (Dataset Construction)',
        content: [
          '3.1 문장 코퍼스 및 오류 주석 구성: 총 60,000개의 문장 중 40,000개는 정상 문장, 20,000개는 규칙 기반 및 LLM 재작성을 통해 31,319개의 언어 오류를 주입한 문장으로 구성하였다.',
          '3.2 One-DM 기반 한국어 필기체 생성 및 음절 검증: AI Hub 손글씨 데이터 871,290개를 학습에 활용하고, 음절 단위 CRNN-CTC 인식기로 전사 정확도를 자동 필터링하여 생성 잡음을 제거하였다.',
          '3.3 최종 데이터 구성: 완전 일치 54,565건, 형식 변환 1,336건을 활용하고 누락 발생 4,099건을 엄격히 배제하여 신뢰도 높은 평가셋을 완성하였다.',
        ],
      },
      {
        number: '4',
        title: '오류 보존을 위한 VLM 미세조정 (Methodology)',
        content: [
          '기반 모델로 Qwen3.5-4B를 채택하고, Vision Encoder는 Frozen 상태로 유지한 채 Vision Projector(은닉 차원 2560)와 언어 모델 선형 계층의 LoRA Adapter(Rank 64, Alpha 128)를 학습하였다.',
          '프롬프트에는 ‘이미지에 작성된 한국어 문장을 맞춤법이나 문법을 수정하지 말고 그대로 전사하시오’라는 지시문을 부여하고 출력 문자열 토큰에만 Cross-Entropy Loss를 적용하였다.',
        ],
      },
      {
        number: '5',
        title: '평가 및 결과 분석 (Experiments & Results)',
        content: [
          '기존 CER 평가와 더불어 오류 보존율, 과교정률, 기타 오류율의 3대 범주 분류 체계를 정립하였다.',
          '실험 결과 제안 모델은 합성 오류 필기체에서 과교정률을 39.78%에서 22.63%로 대폭 낮추고 오류 보존율을 41.04%에서 62.30%로 끌어올려 베이스라인 VLM 대비 뚜렷한 성능 개선을 입증하였다.',
        ],
      },
      {
        number: '6',
        title: '결론 (Conclusion)',
        content: [
          '본 연구는 한국어 필기체 인식에서 VLM의 과교정 현상을 규명하고 이를 완화하기 위한 합성 데이터 파이프라인과 PEFT 기법을 제안하였다.',
          '교육용 필기체 인식 모델을 설계할 때 단순 인식률(CER)뿐만 아니라 학습자 오류 보존 능력을 필수 평가 척도로 다루어야 함을 실증적으로 증명하였다.',
        ],
      },
    ],
    references: [
      '[1] 세종학당재단, "2024년 신규 세종학당 15개국 18개소 지정", 2024.',
      '[2] G. Crosilla et al., "Benchmarking Large Language Models for Handwritten Text Recognition", Journal of Documentation, 2025.',
      '[3] J. Seong et al., "When VLMs \'Fix\' Students: Identifying and Penalizing Over-Correction in the Evaluation of Multi-line Handwritten Math OCR", arXiv:2604.22774, 2026.',
      '[4] W. AlKendi et al., "Advancements and Challenges in Handwritten Text Recognition: A Comprehensive Survey", Journal of Imaging, 2024.',
      '[6] G. Dai et al., "One-DM: One-Shot Diffusion Mimicker for Handwritten Text Generation", ECCV, 2024.',
      '[10] E. J. Hu et al., "LoRA: Low-Rank Adaptation of Large Language Models", ICLR, 2022.',
      '[12] Qwen Team, "Qwen3.5", Hugging Face Collection, 2026.',
    ],
    bibtex: `@inproceedings{jeon2026synthetic,
  title={Synthetic Data Construction and VLM Over-Correction Mitigation for Preserving Learner Errors in Korean Handwriting Recognition},
  author={Jeon, Mun-Gi and Maxuell, Dave and Wijaya, Felicia Angel and Oh, Ji-Yeong and Ryu, Pum-Mo},
  booktitle={Proceedings of the 38th Annual Conference on Human and Language Technology (HCLT 2026)},
  year={2026}
}`,
  },

  'pub-process-reward': {
    koreanTitle: '과정 보상 기반 단계적 검증을 통한 한국어 손글씨 문법 오류 진단 및 교정',
    englishTitle: 'Process-Reward-Guided Stepwise Verification for Grammatical Error Diagnosis and Correction in Korean Handwritten Text',
    authors: '맥슈웰 데이브, 전문기, 위자야 펠리시아 엔젤, 오지영, 류법모',
    affiliations: '부산외국어대학교, 고려대학교',
    emails: 'davemaxuell@gmail.com, mungijn@gmail.com, feliciaangel21@gmail.com, fivetwoone002@naver.com, pmryu@bufs.ac.kr',
    abstract: {
      ko: '기존 한국어 문법 오류 교정 연구는 대부분 전사된 디지털 텍스트를 입력으로 가정하므로, 손글씨 입력에서의 시각적 문자 인식과 언어적 오류 분석을 통합적으로 다루는 데 한계가 있다. 본 연구에서는 한국어 손글씨 이미지의 문자열 전사, 기준 문장 복원 및 구조화된 문법 오류 진단을 하나의 비전-언어 모델(VLM)에서 수행하는 통합 프레임워크를 제안한다. 한국어 학습자 말뭉치의 오류 유형과 분포를 반영하여 합성 오류 문장 50,000개를 생성하고, One-DM을 이용하여 다양한 필체의 합성 손글씨 이미지 50,000장으로 변환하였다. Qwen3-VL-4B-Instruct와 Qwen3-VL-8B-Instruct를 기반 모델로 사용하고, 손글씨 전사와 기준 문장 복원으로 구성된 공통 선행 학습 이후 세 가지 오류 분석 접근(접근 A: 정답 기반 SFT, 접근 B: 구조화 검증 설명 SFT, 접근 C: PRM 기반 GRPO 후학습)을 비교하였다. 합성 데이터 평가에서 8B 접근 C는 편집 F₀.₅ 43.66, 오류 집합 완전 일치율 28.68%, 수정 문장 완전 일치율 62.15%로 비교 조건 중 가장 높은 최종 오류 진단·교정 성능을 보였다.',
      en: 'Most grammatical error correction (GEC) studies assume clean digitized texts, decoupling OCR transcription from linguistic diagnosis. In handwritten inputs, visual ambiguity and over-correction can propagate compounding errors. This paper proposes an end-to-end framework where a single Vision-Language Model (VLM) jointly conducts handwriting transcription, reference restoration, and structured grammatical diagnosis. We benchmark three supervision regimes: ground-truth SFT, stepwise verification reasoning SFT, and Process Reward Model (PRM)-guided Group Relative Policy Optimization (GRPO). On our 50K handwritten dataset, 8B Approach C achieved an Edit F0.5 of 43.66 and sentence exact match of 62.15%, significantly outperforming standard supervised baselines.',
    },
    keywords: ['한국어 문법 오류 교정', '손글씨 인식', '비전-언어 모델', '구조화 오류 진단', '과정 보상 모델(PRM)', 'GRPO'],
    keyHighlights: [
      {
        label: '편집 F₀.₅ (Edit F0.5 Score)',
        value: '43.66',
        description: '정밀도 중심 가중치에서 8B 지도학습(SFT) 대비 +4.05포인트 대폭 향상',
      },
      {
        label: '수정 문장 완전 일치율',
        value: '62.15%',
        description: '문장 전체를 완벽하게 정상 복원하는 비율 기존 52.28% 대비 +9.87%p 상승',
      },
      {
        label: '오류 집합 완전 일치율',
        value: '28.68%',
        description: '위치, 연산, 범주, 규칙, 교정값을 동시에 정확히 진단하는 비율 최고치 달성',
      },
      {
        label: '사후 강화학습 기법',
        value: 'PRM + GRPO',
        description: '중간 단계별 추론 과정(오류확인→교정근거→수정적용→결과검증)을 보상 신호로 최적화',
      },
    ],
    tables: [
      {
        caption: '표 1. 합성 오류 문장 데이터의 분할별 통계',
        headers: ['분할', '문장 수', '오류 수', '다중 오류 문장', '평균 문자 수'],
        rows: [
          ['학습 (Train)', '45,021', '70,088', '15,378', '41.23자'],
          ['개발 (Dev)', '2,488', '3,864', '821', '41.50자'],
          ['평가 (Test)', '2,491', '3,861', '840', '41.33자'],
          ['전체 (Total)', '50,000', '77,813', '17,039', '41.25자'],
        ],
      },
      {
        caption: '표 2. 모델 규모와 감독 방식에 따른 오류 분석 성능 비교',
        headers: ['접근 방식', '기반 모델', '음절 CER ↓', '편집 정밀도 (%)', '편집 재현율 (%)', '편집 F₀.₅ ↑', '수정문장 일치율 (%) ↑'],
        rows: [
          ['접근 A (정답 SFT)', 'Qwen3-VL-4B', '1.58%', '33.94%', '30.24%', '33.13', '43.61%'],
          ['접근 A (정답 SFT)', 'Qwen3-VL-8B', '1.35%', '39.70%', '39.23%', '39.61', '52.28%'],
          ['접근 B (구조화설명 SFT)', 'Qwen3-VL-4B', '2.27%', '12.93%', '12.15%', '12.77', '31.76%'],
          ['접근 B (구조화설명 SFT)', 'Qwen3-VL-8B', '1.38%', '19.25%', '16.42%', '18.61', '47.38%'],
          ['접근 C (PRM-GRPO 제안)', 'Qwen3-VL-4B', '1.32%', '36.77%', '36.62%', '36.74', '56.24%'],
          ['접근 C (PRM-GRPO 제안)', 'Qwen3-VL-8B', '1.38%', '43.94%', '42.57%', '43.66', '62.15%'],
        ],
        notes: '※ 접근 C (PRM-GRPO)가 8B 모델에서 가장 높은 편집 F0.5 (43.66) 및 수정 문장 일치율 (62.15%) 달성',
      },
    ],
    sections: [
      {
        number: '1',
        title: '서론 및 연구 배경',
        content: [
          '대부분의 한국어 문법 오류 교정(GEC) 연구는 전사된 디지털 텍스트 입력을 가정한다. 그러나 실제 손글씨에는 필체, 자간, 줄바꿈 등으로 인한 시각적 모호성이 존재하며 OCR 단계의 정규화로 인해 학습자 고유 오류 정보가 소실될 위험이 있다.',
          '본 연구는 하나의 비전-언어 모델에서 문자열 전사, 기준 문장 복원, 구조화된 문법 오류 진단을 순차적으로 수행하는 통합 프레임워크를 제안한다.',
        ],
      },
      {
        number: '2',
        title: '3단계 학습 프레임워크 및 PRM-GRPO',
        content: [
          '공통 단계 학습(Stage 1: OCR 전사 학습 → Stage 2: 기준 문장 복원 및 편집 위치 학습)을 거친 후, 세 가지 감독 방식을 비교하였다.',
          '접근 C는 Lightman 등의 과정 감독 개념에 착안하여 추론 단계를 오류 확인(problem_ko), 교정 근거(rule_ko), 수정 적용(application_ko), 결과 검증(feedback_ko)으로 구분하고 PRM 점수와 검증 패널티를 결합하여 GRPO로 정책을 최적화하였다.',
        ],
      },
      {
        number: '3',
        title: '실험 결과 및 시사점',
        content: [
          '실험 결과 8B 접근 C는 편집 F0.5 43.66, 오류 집합 일치율 28.68%, 수정 문장 일치율 62.15%로 베이스라인 지도학습 대비 현격한 진단 정밀도 향상을 달성하였다.',
          '단순 설명 생성 지도학습(접근 B)보다 과정 보상 기반의 사후 강화학습(접근 C)이 복합적인 한국어 손글씨 오류 추론에 실질적인 효과를 가짐을 실증하였다.',
        ],
      },
    ],
    references: [
      '[1] S. Yoon et al., "Towards Standardizing Korean Grammatical Error Correction", ACL, 2023.',
      '[3] X. Wang et al., "VisCGEC: Benchmarking the Visual Chinese Grammatical Error Correction", NAACL, 2025.',
      '[4] H. Lightman et al., "Let\'s Verify Step by Step", ICLR, 2024.',
      '[5] Z. Shao et al., "DeepSeekMath: Pushing the Limits of Mathematical Reasoning in Open Language Models", arXiv:2402.03300, 2024.',
      '[13] S. Bai et al., "Qwen3-VL Technical Report", 2025.',
    ],
    bibtex: `@inproceedings{maxuell2026process,
  title={Process-Reward-Guided Stepwise Verification for Grammatical Error Diagnosis and Correction in Korean Handwritten Text},
  author={Maxuell, Dave and Jeon, Mun-Gi and Wijaya, Felicia Angel and Oh, Ji-Yeong and Ryu, Pum-Mo},
  booktitle={Proceedings of the 38th Annual Conference on Human and Language Technology (HCLT 2026)},
  year={2026}
}`,
  },

  'pub-fishery-ie': {
    koreanTitle: '의미 기반 스키마 및 도메인 지식을 활용한 비정형 수산물 인보이스 정보 추출 시스템',
    englishTitle: 'Information Extraction System for Unstructured Fishery Product Invoices using Semantic Schema and Domain Knowledge',
    authors: '전문기, 임성원, 류법모',
    affiliations: '부산외국어대학교',
    emails: 'mungijn@gmail.com, wonirosoida33@gmail.com, pmryu@bufs.ac.kr',
    abstract: {
      ko: '본 연구는 업체마다 양식이 다른 비정형 수산물 인보이스로부터 정보를 효율적으로 추출하기 위해 의미 기반 통합 스키마와 생성형 AI를 활용한 정보추출 시스템을 제안한다. 제안된 시스템은 범용 스키마 생성과 정보추출 및 도메인 지식을 활용한 검증의 두 단계로 구성하여 신뢰성을 높였다. 검증셋 대상으로 자동 생성 스키마 기반 초기 실험은 f1-score 0.60에 불과했으나, 스키마 통합 및 수작업 정제 과정을 거쳐 0.88까지 성능을 향상시켰으며, 최종 평가셋에서도 0.86의 안정적인 성능을 보였다. 수산물 유통 전문기업인 링스업(LinksUp)의 실제 해외 수산물 인보이스를 대상으로 실증하였으며 비정형 문서 디지털 전환의 실효성을 입증하였다.',
      en: 'International commercial seafood invoices exhibit arbitrary layouts, divergent field definitions, and multimodal artifacts. This paper presents an end-to-end information extraction pipeline combining unified semantic schemas and domain knowledge validation rules (arithmetic coherence, Incoterms checking, unit standardization) on real trade invoices from LinksUp Inc. The system improved extraction F1-score from 0.60 to 0.86.',
    },
    keywords: ['수산물 인보이스', '비정형 문서 정보추출', '의미 기반 스키마', '도메인 지식 검증', 'OCR', 'LinksUp'],
    keyHighlights: [
      {
        label: '최종 평가셋 F1-Score',
        value: '0.86',
        description: '복잡한 비정형 수산물 송장에서 핵심 거래 필드를 높은 정확도로 일관되게 추출',
      },
      {
        label: '검증셋 점진적 개선',
        value: '0.60 → 0.88',
        description: '자동 생성 스키마(0.60)에서 의미 통합 및 도메인 검증 루프 적용 후 0.88 달성',
      },
      {
        label: '도메인 특화 체크리스트',
        value: '4대 검증 축',
        description: '수치 범위, 단가×수량 합계 산술 정합성, 단위 유효성(KG/LBS), 인코텀즈 조건 검증',
      },
      {
        label: '산학협력 실증 파이프라인',
        value: 'LinksUp 실증',
        description: '실제 글로벌 수산물 수출입 기업의 비정형 문서 처리 자동화 아키텍처 구현',
      },
    ],
    tables: [
      {
        caption: '표 3. 도메인 지식 기반 체크리스트',
        headers: ['검증 항목', '설명', '처리 방식'],
        rows: [
          ['수치 범위 검증', '수량, 총액, 단가의 합리적인 범위 확인', '범위를 벗어나면 오류 플래그 생성 및 검토'],
          ['단위 유효성 검증', '무게(KG, TON, LBS, CTN) 단위의 적합성 확인', '허용되지 않은 단위는 오류 플래그 생성'],
          ['인코텀즈 조건 검증', 'CIP, FOB, CIF, CNF, CFR 등 국제 무역 조건 적합성', '잘못된 조건은 오류 플래그 생성'],
          ['날짜 논리성 검증', '견적 발행일, 과거 범위, YYYY-MM-DD 형식 일관성', '오류 시 자동 변환 또는 수동 검토 분류'],
        ],
      },
      {
        caption: '표 6. 평가 단계별 정보 추출 성능 결과',
        headers: ['구분', 'Precision (정밀도)', 'Recall (재현율)', 'F1-score'],
        rows: [
          ['1차 (자동 스키마)', '0.74', '0.51', '0.60'],
          ['2차 (+ 수동 스키마)', '0.85', '0.64', '0.73'],
          ['3차 (+ 스키마 통합)', '0.85', '0.65', '0.74'],
          ['4차 (+ 도메인 지식 적용)', '0.90', '0.85', '0.88'],
          ['최종 평가셋 (도메인 정답셋)', '0.86', '0.85', '0.86'],
        ],
      },
    ],
    sections: [
      {
        number: '1',
        title: '서론 (Introduction)',
        content: [
          '수산물 유통업계에서는 해외 공급사별로 단가, 수량, 규격 등의 구성 및 표기방식이 상이하여 대량의 인보이스를 수작업으로 대조하는 데 막대한 비용과 오차가 발생한다.',
          '본 연구는 수산물 유통 빅데이터 전문기업 링스업(LinksUp)의 해외 인보이스를 대상으로 OCR과 의미 기반 스키마, 도메인 지식을 결합한 자동화 추출 및 검증 시스템을 개발하였다.',
        ],
      },
      {
        number: '2',
        title: '시스템 구성 및 2단계 파이프라인',
        content: [
          '단계 1: 범용 통합 스키마 생성 — Upstage AI Information Extraction API로 추출한 초기 필드를 도메인 관점에서 수동 검토 및 병합하여 불필요한 누락을 방지하였다.',
          '단계 2: 정보 추출 및 검증 — 표준화된 JSON 계층 구조로 데이터를 추출하고 단가×수량 일치성, 인코텀즈(Incoterms), 중량 단위 변환 등 도메인 규칙으로 이상치를 자동 스크리닝하였다.',
        ],
      },
      {
        number: '3',
        title: '실험 및 결과',
        content: [
          '총 41건의 실제 수산물 인보이스 중 22건을 검증셋, 19건을 평가셋으로 실험하였다.',
          '초기 자동 스키마의 F1-score 0.60에서 도메인 지식 적용 후 0.88로 크게 개선되었으며 최종 평가셋에서도 F1-score 0.86의 안정적인 결과를 기록하였다.',
        ],
      },
    ],
    references: [
      '[1] 박동원 외, "Certificate of Conformance(COC) 에서 정보 추출을 위한 OCR 기반 알고리즘 개발", 한국컴퓨터정보학회, 2024.',
      '[2] 이승헌 외, "CLOVA OCR 기반 비정형 농산물의 데이터 자동 수집", KIIT Conference, 2023.',
      '[3] 이다인 외, "OCR 프로그램을 활용한 선박 항해일지 데이터 추출 모델 개발", 해양환경안전학회지, 2024.',
    ],
    bibtex: `@inproceedings{jeon2025fishery,
  title={Information Extraction System for Unstructured Fishery Product Invoices using Semantic Schema and Domain Knowledge},
  author={Jeon, Mun-Gi and Lim, Sungwon and Ryu, Pum-Mo},
  booktitle={Proceedings of the 37th Annual Conference on Human and Language Technology (HCLT 2025)},
  year={2025}
}`,
  },

  'pub-mdsar-journal': {
    koreanTitle: '(HCLT 2025 우수논문 초청) MDSAR: 외국인 유학생 지원을 위한 다국어 멀티모달 문서 구조 인식 RAG 시스템',
    englishTitle: 'MDSAR: Multilingual Multimodal Document-Structure-Aware RAG System for International Student Support',
    authors: '맥슈웰 데이브, 전문기 외',
    affiliations: '부산외국어대학교',
    emails: 'mungijn@gmail.com, davemaxuell@gmail.com, pmryu@bufs.ac.kr',
    abstract: {
      ko: '외국인 유학생 행정 정보는 학사·비자·건강보험·금융 등 여러 기관에 분산되어 있고 대부분 한국어로 작성되어 있어 다국어 접근에 한계가 있다. 본 논문은 외국인 유학생 행정 지원을 위한 다국어 멀티모달 문서구조 인식 검색 증강 생성 시스템(MDSAR)을 제안한다. MDSAR의 핵심은 문서 계층 경로를 문서 가상 구조(DVS)로 표현하고, 이를 임베딩과 문맥 확장 단계에는 구조 신호로 활용하되 교차 인코더 리랭킹 단계에서는 배제하는 단계별 비대칭 활용 전략이다. 또한 이질적인 행정 문서에 대응하는 문서 유형 적응형 인덱싱과 원문·한국어 번역 질의를 병렬 검색하는 이중 질의 전략을 결합한다. 4종 공식 문서에 근거하여 구축한 5개 언어(한국어, 영어, 인도네시아어, 베트남어, 우즈베크어) 500개 평가 인스턴스 실험에서, MDSAR은 Vanilla 및 Hybrid RAG보다 Recall@10/20과 답변 정확성·관련성·충실도에서 월등한 성능을 입증하였다.',
      en: 'Administrative information for international students is scattered across institutions in Korean. This paper proposes MDSAR, an asymmetrical document-structure-aware RAG framework. Its central design represents document hierarchy as Document Virtual Structure (DVS) and injects it during embedding and context expansion while strictly excluding it from cross-encoder reranking. On 500 multilingual QA instances across Korean, English, Indonesian, Vietnamese, and Uzbek, MDSAR significantly outperformed vanilla and hybrid RAG baselines.',
    },
    keywords: ['검색 증강 생성(RAG)', '멀티모달 문서 이해', '다국어 자연어처리', '문서 가상 구조(DVS)', 'RAGAS', '한국정보과학회논문지'],
    keyHighlights: [
      {
        label: '단계별 비대칭 DVS 전략',
        value: '임베딩/문맥확장 주입',
        description: '문서 계층 신호를 검색 단계에는 보강하되 교차 인코더 리랭킹 시에는 정합성 왜곡 방지를 위해 배제',
      },
      {
        label: '생성 정확도 (Answer Correctness)',
        value: '0.5447',
        description: 'Hybrid RAG(0.4401) 및 Vanilla RAG(0.4421) 대비 +10.46%p 이상 대폭 상회',
      },
      {
        label: '답변 충실도 (Faithfulness)',
        value: '0.6863',
        description: '환각(Hallucination) 없는 실제 문서 근거 생성 비율 +11.65%p 향상',
      },
      {
        label: '지원 다국어 범위',
        value: '5개 언어',
        description: '한국어(KO), 영어(EN), 인도네시아어(ID), 베트남어(VI), 우즈베크어(UZ 영어 피벗)',
      },
    ],
    tables: [
      {
        caption: '표 10. 시스템별 검색 성능 비교 (Recall & MRR)',
        headers: ['시스템', 'Recall@5', 'Recall@10', 'Recall@20', 'MRR@5', 'MRR@10', 'MRR@20'],
        rows: [
          ['Vanilla RAG', '0.4307', '0.4880', '0.5573', '0.6296', '0.6409', '0.6465'],
          ['Hybrid RAG', '0.4440', '0.4961', '0.5573', '0.6057', '0.6150', '0.6205'],
          ['MDSAR (제안 시스템)', '0.4456', '0.5104', '0.5845', '0.5888', '0.6014', '0.6073'],
        ],
        notes: '※ MDSAR이 상위 검색 결과 내 정답 근거 포괄성(Recall@10, Recall@20)에서 가장 높은 성능 기록',
      },
      {
        caption: '표 11. RAGAS 생성 평가 결과 (답변 가능 질의 450개)',
        headers: ['평가 지표', 'Vanilla RAG', 'Hybrid RAG', 'MDSAR (제안)'],
        rows: [
          ['Answer Correctness (정확성) ↑', '0.4421', '0.4401', '0.5447 (+10.46%p)'],
          ['Answer Relevance (관련성) ↑', '0.4869', '0.4924', '0.6139 (+12.15%p)'],
          ['Faithfulness (충실도) ↑', '0.5660', '0.5698', '0.6863 (+11.65%p)'],
          ['Unanswerable Correctness', '0.8688', '0.8688', '0.8688'],
        ],
      },
      {
        caption: '표 13. 5개 지원 언어별 답변 정확도 (Answer Correctness)',
        headers: ['언어', 'Vanilla RAG', 'Hybrid RAG', 'MDSAR (제안)', '향상 폭'],
        rows: [
          ['한국어 (KO)', '0.6011', '0.5936', '0.6467', '+5.31%p'],
          ['영어 (EN)', '0.4868', '0.4726', '0.6483', '+17.57%p (최고 향상)'],
          ['인도네시아어 (ID)', '0.4525', '0.4533', '0.5428', '+8.95%p'],
          ['베트남어 (VI)', '0.4828', '0.4889', '0.5851', '+9.62%p'],
          ['우즈베크어 (UZ, 저자원)', '0.4008', '0.4067', '0.4626', '+5.59%p'],
        ],
      },
    ],
    sections: [
      {
        number: '1',
        title: '서론 및 유학생 행정 RAG의 과제',
        content: [
          '외국인 유학생 지원 행정 정보(비자, 체류, 건강보험, 학사)는 한국어로 분산되어 있어 언어 장벽과 복잡한 문서 구조로 인해 정보 탐색이 어렵다.',
          '기본 RAG 파이프라인은 다국어 질의 시 어휘 불일치, 스캔 표 붕괴, 글리프 오염 등의 문제로 심각한 환각을 겪는다. 본 연구는 문서 가상 구조(DVS)와 이중 질의 하이브리드 검색을 결합한 MDSAR 아키텍처를 제안한다.',
        ],
      },
      {
        number: '2',
        title: '핵심 아키텍처: 문서 가상 구조(DVS)와 비대칭 활용',
        content: [
          'Docling 기반 인덱싱과 정규식 휴리스틱으로 문서 계층 트리(Document Virtual Structure, DVS)를 자동 생성하여 청크에 주입한다.',
          'DVS를 임베딩과 문맥 확장 단계에는 주입하여 맥락을 강화하되, 교차 인코더(BGE-reranker-v2-m3) 리랭킹 단계에서는 배제하는 비대칭 활용 원칙을 설계하여 최적의 검색 안정성을 확보하였다.',
        ],
      },
      {
        number: '3',
        title: '5개국어 500개 인스턴스 정량 평가',
        content: [
          '4종 공식 문서를 바탕으로 한국어, 영어, 인도네시아어, 베트남어, 우즈베크어 500개 QA 평가셋을 구축하고 RAGAS 프레임워크로 검증하였다.',
          'MDSAR은 답변 정확성 0.5447(+10.46%p), 충실도 0.6863(+11.65%p)을 달성하여 모든 언어에서 베이스라인 대비 괄목할 성과를 기록하였다.',
        ],
      },
    ],
    references: [
      '[1] S. D. Kim, "An Analysis of the Current Status in Attracting International Students in Korea and Abroad," APJCRI, 2025.',
      '[3] D. Maxuell et al., "Building Multilingual Multi-turn Dataset for International Students Assisting Chatbot," HCLT, 2025.',
      '[4] P. Lewis et al., "Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks", NeurIPS, 2020.',
      '[9] C. Auer et al., "Docling Technical Report", arXiv:2408.09869, 2024.',
      '[15] S. Es et al., "RAGAS: Automated Evaluation of Retrieval Augmented Generation", EACL, 2024.',
      '[16] J. Chen et al., "BGE-M3 Embedding", arXiv:2402.03216, 2024.',
    ],
    bibtex: `@article{mdsar2026kiise,
  title={MDSAR: Multilingual Multimodal Document-Structure-Aware RAG System for International Student Support},
  author={Maxuell, Dave and Jeon, Mun-Gi and Ryu, Pum-Mo},
  journal={Journal of KIISE : Information Networking},
  volume={31},
  number={6},
  pages={545--555},
  year={2026}
}`,
  },
};
