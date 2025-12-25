import React from 'react';
import { AppView } from '../types';

interface HomeProps {
  onNavigate: (view: AppView) => void;
}

export const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  const successCases = [
    {
      id: 1,
      title: "外卖骑手追回拖欠工资",
      desc: "张师傅通过平台生成维权函，3天内成功追回站点拖欠的3500元工资。",
      tag: "薪资追讨"
    },
    {
      id: 2,
      title: "网约车司机账号解封",
      desc: "李师傅因被恶意投诉导致封号，通过证据清单指导申诉成功。",
      tag: "账号申诉"
    },
    {
      id: 3,
      title: "兼职分拣员获得工伤赔偿",
      desc: "夜班工作受伤被拒赔，AI分析后确定劳动关系，获赔医药费。",
      tag: "工伤理赔"
    }
  ];

  const policies = [
    { title: "最高法明确：外卖骑手与平台劳动关系认定标准", date: "2024-02" },
    { title: "《关于维护新就业形态劳动者劳动保障权益的指导意见》解读", date: "2023-11" },
    { title: "全国总工会：加大灵活就业人员入会和服务力度", date: "2024-01" }
  ];

  return (
    <div className="flex flex-col min-h-full pb-8">
      {/* Hero Banner */}
      <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white p-6 rounded-b-[2.5rem] shadow-lg relative overflow-hidden mb-6">
        <div className="absolute top-0 right-0 opacity-10 transform translate-x-8 -translate-y-8">
            <svg className="w-48 h-48" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zm0 9l2.5-1.25L12 8.75 9.5 9.75 12 11zm0 2.5l-5-2.5-5 2.5L12 22l10-8.5-5-2.5-5 2.5z"/></svg>
        </div>
        <h2 className="text-3xl font-bold mb-2">一键维权</h2>
        <p className="text-blue-100 text-sm mb-6 opacity-90 max-w-[80%]">
          专为灵活用工人员打造<br/>AI 智能法律助手，让维权不再难
        </p>
        
        {/* Main CTA */}
        <button 
          onClick={() => onNavigate(AppView.FORM)}
          className="bg-white text-blue-700 font-bold py-4 px-6 rounded-xl shadow-xl w-full active:scale-[0.98] transition-all flex items-center justify-between group"
        >
          <div className="flex flex-col items-start">
            <span className="text-lg">立即开始维权</span>
            <span className="text-xs text-gray-400 font-normal">智能分析 · 生成方案 · 免费咨询</span>
          </div>
          <div className="bg-blue-50 p-2 rounded-full group-hover:bg-blue-100 transition-colors">
            <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
          </div>
        </button>
      </div>

      {/* Functional Grid */}
      <div className="px-4 grid grid-cols-2 gap-4 mb-6">
        <div 
            onClick={() => onNavigate(AppView.LETTER)}
            className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 active:bg-gray-50 transition-all cursor-pointer flex flex-col items-center text-center"
        >
          <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-2xl flex items-center justify-center mb-3 shadow-inner">
             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
          </div>
          <h3 className="font-bold text-gray-800">生成维权函</h3>
          <p className="text-xs text-gray-400 mt-1">专业文书 一键生成</p>
        </div>
        <div 
            onClick={() => onNavigate(AppView.GUIDE)}
            className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 active:bg-gray-50 transition-all cursor-pointer flex flex-col items-center text-center"
        >
          <div className="w-12 h-12 bg-green-100 text-green-600 rounded-2xl flex items-center justify-center mb-3 shadow-inner">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" /></svg>
          </div>
          <h3 className="font-bold text-gray-800">维权证据包</h3>
          <p className="text-xs text-gray-400 mt-1">取证指导 关键清单</p>
        </div>
      </div>

      {/* Contact Us Section - NEW */}
      <div className="px-4 mb-8">
        <div className="bg-white rounded-2xl shadow-sm border border-blue-100 p-5 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-24 h-24 bg-blue-50 rounded-full -mr-8 -mt-8 opacity-50 group-hover:scale-110 transition-transform"></div>
            
            <h3 className="font-bold text-lg text-gray-800 mb-1 z-10 relative">联系我们</h3>
            <p className="text-xs text-gray-500 mb-4 z-10 relative">7x24小时为您提供法律援助支持</p>

            <div className="space-y-3 relative z-10">
                <a href="tel:400-666-8888" className="flex items-center p-3 bg-gray-50 rounded-xl hover:bg-blue-50 transition-colors border border-transparent hover:border-blue-100">
                    <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mr-3 shrink-0">
                         <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                    </div>
                    <div>
                        <div className="text-xs text-gray-400">官方客服热线</div>
                        <div className="font-bold text-gray-800">400-666-8888</div>
                    </div>
                </a>
                
                 <div className="flex items-center p-3 bg-gray-50 rounded-xl">
                    <div className="w-10 h-10 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mr-3 shrink-0">
                         <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                    </div>
                    <div>
                        <div className="text-xs text-gray-400">公司地址</div>
                        <div className="font-bold text-gray-800 text-sm">北京市朝阳区法律援助中心大厦A座</div>
                    </div>
                </div>
            </div>
        </div>
      </div>

      {/* Success Cases */}
      <div className="px-4 mb-8">
        <div className="flex items-center justify-between mb-4">
            <h3 className="font-bold text-lg text-gray-800 flex items-center">
            <span className="w-1 h-5 bg-orange-500 rounded-full mr-2"></span>
            成功案例
            </h3>
            <span className="text-xs text-gray-400">累计帮助 12,304 人</span>
        </div>
        
        <div className="space-y-3">
            {successCases.map((item) => (
                <div key={item.id} className="bg-white p-4 rounded-xl shadow-sm border border-gray-50">
                    <div className="flex justify-between items-start mb-2">
                        <span className="font-bold text-gray-800 text-sm">{item.title}</span>
                        <span className="text-[10px] bg-orange-50 text-orange-600 px-2 py-1 rounded-full border border-orange-100">{item.tag}</span>
                    </div>
                    <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
                </div>
            ))}
        </div>
      </div>

      {/* Policies */}
      <div className="px-4">
        <div className="flex items-center justify-between mb-4">
            <h3 className="font-bold text-lg text-gray-800 flex items-center">
            <span className="w-1 h-5 bg-blue-500 rounded-full mr-2"></span>
            政策解读
            </h3>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-50 divide-y divide-gray-50">
            {policies.map((policy, idx) => (
                <div key={idx} className="p-4 flex items-center justify-between hover:bg-gray-50 transition-colors">
                    <span className="text-sm text-gray-700 line-clamp-1 flex-1 pr-4">{policy.title}</span>
                    <span className="text-xs text-gray-400 whitespace-nowrap">{policy.date}</span>
                </div>
            ))}
        </div>
      </div>
      
      <div className="mt-8 text-center">
        <p className="text-xs text-gray-300">FlexGuard 一键维权 © 2024</p>
      </div>
    </div>
  );
};