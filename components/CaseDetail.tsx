import React from 'react';
import { SuccessCase } from '../types';

interface CaseDetailProps {
  caseData: SuccessCase;
  onBack: () => void;
}

export const CaseDetail: React.FC<CaseDetailProps> = ({ caseData, onBack }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-amber-50 p-4 pb-8">
      {/* 头部信息 */}
      <div className="mb-6 animate-fade-in">
        <div className="flex items-center justify-between mb-4">
          <span className="inline-block px-3 py-1 bg-orange-100 text-orange-600 rounded-full text-xs font-medium border border-orange-200">
            {caseData.tag}
          </span>
          <span className="text-sm text-gray-400">{caseData.date}</span>
        </div>
        
        <h1 className="text-2xl font-bold text-gray-800 mb-3 leading-tight">
          {caseData.title}
        </h1>
        
        <p className="text-gray-600 leading-relaxed">
          {caseData.desc}
        </p>
      </div>

      {/* 案例详情卡片 */}
      <div className="space-y-4">
        {/* 案件背景 */}
        <div className="bg-white rounded-2xl shadow-lg p-5 animate-fade-in">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
              <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h2 className="text-lg font-bold text-gray-800">案件背景</h2>
          </div>
          <p className="text-gray-700 leading-relaxed pl-11">
            {caseData.detail.background}
          </p>
        </div>

        {/* 遇到的问题 */}
        <div className="bg-white rounded-2xl shadow-lg p-5 animate-fade-in" style={{ animationDelay: '0.1s' }}>
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center mr-3">
              <svg className="w-4 h-4 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            <h2 className="text-lg font-bold text-gray-800">遇到的问题</h2>
          </div>
          <p className="text-gray-700 leading-relaxed pl-11">
            {caseData.detail.problem}
          </p>
        </div>

        {/* 解决方案 */}
        <div className="bg-white rounded-2xl shadow-lg p-5 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center mr-3">
              <svg className="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h2 className="text-lg font-bold text-gray-800">解决方案</h2>
          </div>
          <p className="text-gray-700 leading-relaxed pl-11">
            {caseData.detail.solution}
          </p>
        </div>

        {/* 最终结果 */}
        <div className="bg-white rounded-2xl shadow-lg p-5 animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mr-3">
              <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h2 className="text-lg font-bold text-gray-800">最终结果</h2>
          </div>
          <p className="text-gray-700 leading-relaxed pl-11 mb-4">
            {caseData.detail.result}
          </p>
          
          {/* 关键信息 */}
          <div className="pl-11 grid grid-cols-2 gap-3">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-3 border border-blue-100">
              <p className="text-xs text-gray-500 mb-1">处理时长</p>
              <p className="font-bold text-blue-600">{caseData.detail.duration}</p>
            </div>
            {caseData.detail.compensation && (
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-3 border border-green-100">
                <p className="text-xs text-gray-500 mb-1">获得赔偿</p>
                <p className="font-bold text-green-600">{caseData.detail.compensation}</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* 底部提示 */}
      <div className="mt-6 bg-blue-50 border border-blue-200 rounded-xl p-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
        <div className="flex items-start space-x-3">
          <svg className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <div className="flex-1">
            <h3 className="font-semibold text-blue-800 mb-1">遇到类似问题？</h3>
            <p className="text-sm text-blue-700 leading-relaxed">
              立即使用我们的一键维权功能，AI将为您生成专业的维权方案。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
