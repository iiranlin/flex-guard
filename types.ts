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

export enum AppView {
  HOME = 'HOME',
  FORM = 'FORM',
  LETTER = 'LETTER',
  GUIDE = 'GUIDE',
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