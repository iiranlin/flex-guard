import React from 'react';
import { Policy } from '../types';

interface PolicyDetailProps {
  policy: Policy;
  onBack: () => void;
}

export const PolicyDetail: React.FC<PolicyDetailProps> = ({ policy, onBack }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 p-4 pb-8">
      {/* 头部信息 */}
      <div className="mb-6 animate-fade-in">
        <div className="flex items-center justify-between mb-4">
          <span className="inline-block px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-xs font-medium border border-blue-200">
            {policy.category}
          </span>
          <span className="text-sm text-gray-400">{policy.date}</span>
        </div>
        
        <h1 className="text-2xl font-bold text-gray-800 mb-3 leading-tight">
          {policy.title}
        </h1>
        
        <p className="text-gray-600 leading-relaxed bg-blue-50 p-4 rounded-xl border border-blue-100">
          {policy.summary}
        </p>
      </div>

      {/* 政策详情 */}
      <div className="space-y-4">
        {/* 政策简介 */}
        <div className="bg-white rounded-2xl shadow-lg p-5 animate-fade-in">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
              <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h2 className="text-lg font-bold text-gray-800">政策简介</h2>
          </div>
          <p className="text-gray-700 leading-relaxed pl-11">
            {policy.content.introduction}
          </p>
        </div>

        {/* 核心要点 */}
        <div className="bg-white rounded-2xl shadow-lg p-5 animate-fade-in" style={{ animationDelay: '0.1s' }}>
          <div className="flex items-center mb-4">
            <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center mr-3">
              <svg className="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </div>
            <h2 className="text-lg font-bold text-gray-800">核心要点</h2>
          </div>
          <div className="pl-11 space-y-3">
            {policy.content.keyPoints.map((point, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-gradient-to-br from-purple-500 to-indigo-600 text-white rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 text-xs font-bold">
                  {index + 1}
                </div>
                <p className="text-gray-700 leading-relaxed flex-1">{point}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 影响分析 */}
        <div className="bg-white rounded-2xl shadow-lg p-5 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mr-3">
              <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
            <h2 className="text-lg font-bold text-gray-800">影响分析</h2>
          </div>
          <p className="text-gray-700 leading-relaxed pl-11">
            {policy.content.impact}
          </p>
        </div>

        {/* 相关法规 */}
        <div className="bg-white rounded-2xl shadow-lg p-5 animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <div className="flex items-center mb-4">
            <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center mr-3">
              <svg className="w-4 h-4 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h2 className="text-lg font-bold text-gray-800">相关法规</h2>
          </div>
          <div className="pl-11 space-y-2">
            {policy.content.references.map((ref, index) => (
              <div key={index} className="flex items-start space-x-2">
                <svg className="w-4 h-4 text-orange-500 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-gray-700 text-sm leading-relaxed">{ref}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 底部提示 */}
      <div className="mt-6 bg-indigo-50 border border-indigo-200 rounded-xl p-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
        <div className="flex items-start space-x-3">
          <svg className="w-5 h-5 text-indigo-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <div className="flex-1">
            <h3 className="font-semibold text-indigo-800 mb-1">需要法律咨询？</h3>
            <p className="text-sm text-indigo-700 leading-relaxed">
              如您在劳动权益保护方面有疑问，欢迎使用我们的一键维权服务。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
