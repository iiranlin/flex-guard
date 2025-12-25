import React, { useState } from 'react';
import { UserCase, JOB_TYPES, LegalAdvice } from '../types';
import { analyzeCase } from '../services/geminiService';

export const RightsForm: React.FC = () => {
  const [step, setStep] = useState<1 | 2>(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [advice, setAdvice] = useState<LegalAdvice | null>(null);

  const [formData, setFormData] = useState<UserCase>({
    name: '',
    phone: '',
    wechat: '',
    jobType: JOB_TYPES[0],
    employer: '',
    description: '',
    evidence: [],
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.description || !formData.phone) {
        alert("请填写必要的联系方式和描述");
        return;
    }

    setIsSubmitting(true);
    // Call Gemini API
    const result = await analyzeCase(formData);
    setAdvice(result);
    setStep(2);
    setIsSubmitting(false);
  };

  if (step === 2 && advice) {
    return (
      <div className="pb-8 bg-gray-50 min-h-full p-4 animate-fade-in">
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-4">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-green-100 p-2 rounded-full text-green-600">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            </div>
            <div>
                <h2 className="text-xl font-bold text-gray-800">提交成功</h2>
                <p className="text-sm text-gray-500">AI 已为您生成初步分析</p>
            </div>
          </div>
          
          <div className="border-t border-gray-100 pt-4">
            <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-bold text-gray-600">风险评估</span>
                <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                    advice.riskLevel === 'Low' ? 'bg-green-100 text-green-700' :
                    advice.riskLevel === 'Medium' ? 'bg-yellow-100 text-yellow-700' :
                    'bg-red-100 text-red-700'
                }`}>
                    {advice.riskLevel === 'Low' ? '低风险' : advice.riskLevel === 'Medium' ? '中等风险' : '高风险'}
                </span>
            </div>
            <p className="text-gray-700 text-sm mb-4 bg-gray-50 p-3 rounded-lg leading-relaxed">
                {advice.summary}
            </p>

            <h3 className="font-bold text-gray-800 text-sm mb-2">建议步骤：</h3>
            <ul className="list-disc pl-5 space-y-1 mb-4 text-sm text-gray-600">
                {advice.suggestedSteps.map((step, idx) => (
                    <li key={idx}>{step}</li>
                ))}
            </ul>

             <h3 className="font-bold text-gray-800 text-sm mb-2">涉及法规：</h3>
             <div className="flex flex-wrap gap-2">
                {advice.relevantLaws.map((law, idx) => (
                    <span key={idx} className="bg-blue-50 text-blue-600 px-2 py-1 rounded text-xs border border-blue-100">{law}</span>
                ))}
             </div>
          </div>
        </div>

        <button 
            onClick={() => setStep(1)} 
            className="w-full bg-gray-200 text-gray-700 font-bold py-3 rounded-xl mb-4"
        >
            返回修改
        </button>
        
        <p className="text-center text-xs text-gray-400">
            * 本分析由 AI 生成，仅供参考，不构成法律意见。
        </p>
      </div>
    );
  }

  return (
    <div className="pb-8 bg-gray-50 min-h-full">
      <div className="bg-blue-600 pb-16 pt-6 px-4 rounded-b-[3rem]">
        <h2 className="text-2xl font-bold text-white mb-1">一键维权提交</h2>
        <p className="text-blue-200 text-sm">请如实填写，我们将保护您的隐私</p>
      </div>

      <div className="px-4 -mt-12 relative z-10">
        <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-xl p-6 space-y-5">
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">您的职业</label>
            <select
              name="jobType"
              value={formData.jobType}
              onChange={handleChange}
              className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
            >
              {JOB_TYPES.map(type => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">姓名/称呼</label>
                <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="张师傅"
                className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
            </div>
             <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">联系电话 <span className="text-red-500">*</span></label>
                <input
                type="tel"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                placeholder="138..."
                className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">微信号 (选填)</label>
            <input
              type="text"
              name="wechat"
              value={formData.wechat}
              onChange={handleChange}
              placeholder="方便律师联系您"
              className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">雇主/平台名称</label>
            <input
              type="text"
              name="employer"
              value={formData.employer}
              onChange={handleChange}
              placeholder="例如：某某物流公司"
              className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">维权事由描述 <span className="text-red-500">*</span></label>
            <textarea
              name="description"
              rows={4}
              required
              value={formData.description}
              onChange={handleChange}
              placeholder="请详细描述发生了什么？例如：拖欠了2个月工资共计8000元，有微信聊天记录为证..."
              className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none resize-none"
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full py-4 rounded-xl font-bold text-white shadow-lg transition-transform active:scale-95 ${
                isSubmitting ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'
            }`}
          >
            {isSubmitting ? (
                <div className="flex items-center justify-center gap-2">
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    AI 分析中...
                </div>
            ) : '立即提交 & 获取方案'}
          </button>
          
          <p className="text-xs text-center text-gray-400 mt-2">
            提交即代表您同意我们的隐私政策。我们会对您的信息严格保密。
          </p>
        </form>
      </div>
    </div>
  );
};