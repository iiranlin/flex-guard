export interface UserCase {
  name: string;
  phone: string;
  wechat: string;
  jobType: string;
  employer: string;
  description: string;
  evidence: string[];
}

export interface LegalAdvice {
  summary: string;
  riskLevel: 'Low' | 'Medium' | 'High';
  suggestedSteps: string[];
  relevantLaws: string[];
}

export interface SuccessCase {
  id: number;
  title: string;
  desc: string;
  tag: string;
  date: string;
  detail: {
    background: string;
    problem: string;
    solution: string;
    result: string;
    duration: string;
    compensation?: string;
  };
}

export interface Policy {
  id: number;
  title: string;
  date: string;
  category: string;
  summary: string;
  content: {
    introduction: string;
    keyPoints: string[];
    impact: string;
    references: string[];
  };
}

export enum AppView {
  HOME = 'HOME',
  FORM = 'FORM',
  LETTER = 'LETTER',
  GUIDE = 'GUIDE',
  CONSULTATION = 'CONSULTATION',
  CASE_DETAIL = 'CASE_DETAIL',
  POLICY_DETAIL = 'POLICY_DETAIL',
}

export const JOB_TYPES = [
  '外卖骑手',
  '快递/配送',
  '网约车司机',
  '家政保洁',
  '网络主播',
  '兼职/临时工',
  '其他'
];