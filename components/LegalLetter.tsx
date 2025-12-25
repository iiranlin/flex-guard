import React, { useState } from 'react';
import { generateLegalLetter } from '../services/geminiService';
import { UserCase, JOB_TYPES } from '../types';

export const LegalLetter: React.FC = () => {
  const [generatedLetter, setGeneratedLetter] = useState('');
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState<UserCase>({
    name: '',
    phone: '',
    wechat: '',
    jobType: JOB_TYPES[0],
    employer: '',
    description: '',
    evidence: [],
  });

  const handleGenerate = async () => {
    if (!formData.description || !formData.employer || !formData.name) {
        alert("请至少填写姓名、雇主名称和事由");
        return;
    }
    setLoading(true);
    setGeneratedLetter('');
    
    try {
        // 使用 for await...of 消费流式数据
        const stream = generateLegalLetter(formData);
        let fullText = '';
        
        for await (const chunk of stream) {
            fullText += chunk;
            // 实时更新 UI
            setGeneratedLetter(fullText);
        }
    } catch (e) {
        console.error("Stream error", e);
        alert("生成出错，请重试");
    } finally {
        setLoading(false);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedLetter);
    alert('已复制到剪贴板');
  };

  return (
    <div className="pb-8 p-4 bg-gray-50 min-h-full">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800">智能函件生成</h2>
        <p className="text-sm text-gray-500">输入基本信息，AI自动生成正式维权函</p>
      </div>

      {!generatedLetter && !loading ? (
        <div className="bg-white rounded-xl shadow-sm p-4 space-y-4">
             <div>
                <label className="text-xs font-bold text-gray-500 uppercase">您的姓名</label>
                <input 
                    className="w-full border-b border-gray-200 py-2 focus:outline-none focus:border-blue-500 transition-colors" 
                    placeholder="张三"
                    value={formData.name}
                    onChange={e => setFormData({...formData, name: e.target.value})}
                />
            </div>
            <div>
                <label className="text-xs font-bold text-gray-500 uppercase">雇主/平台名称</label>
                <input 
                    className="w-full border-b border-gray-200 py-2 focus:outline-none focus:border-blue-500 transition-colors" 
                    placeholder="XX科技有限公司"
                    value={formData.employer}
                    onChange={e => setFormData({...formData, employer: e.target.value})}
                />
            </div>
             <div>
                <label className="text-xs font-bold text-gray-500 uppercase">联系电话</label>
                <input 
                    className="w-full border-b border-gray-200 py-2 focus:outline-none focus:border-blue-500 transition-colors" 
                    placeholder="138xxxx"
                    value={formData.phone}
                    onChange={e => setFormData({...formData, phone: e.target.value})}
                />
            </div>
            <div>
                <label className="text-xs font-bold text-gray-500 uppercase">具体诉求</label>
                <textarea 
                    className="w-full border border-gray-200 rounded-lg p-3 mt-1 text-sm focus:outline-none focus:border-blue-500 transition-colors" 
                    rows={4}
                    placeholder="例如：2023年10月工资未发，要求立即支付..."
                    value={formData.description}
                    onChange={e => setFormData({...formData, description: e.target.value})}
                />
            </div>
            <button 
                onClick={handleGenerate}
                disabled={loading}
                className="w-full bg-purple-600 text-white font-bold py-3 rounded-xl shadow-md hover:bg-purple-700 active:scale-95 transition-all"
            >
                生成维权函
            </button>
        </div>
      ) : (
        <div className="animate-fade-in">
            <div className="bg-white rounded-xl shadow-lg p-6 mb-4 relative">
                {loading && generatedLetter.length === 0 ? (
                    <div className="flex items-center justify-center py-10">
                         <svg className="animate-spin h-8 w-8 text-purple-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        <span className="ml-2 text-gray-500">正在撰写...</span>
                    </div>
                ) : (
                    <>
                    <div className="absolute top-4 right-4 text-gray-200">
                        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/></svg>
                    </div>
                    <h3 className="font-bold text-center text-lg mb-4 border-b pb-2">维权告知书</h3>
                    <pre className="whitespace-pre-wrap font-serif text-sm text-gray-700 leading-relaxed min-h-[200px]">
                        {generatedLetter}
                        {loading && <span className="inline-block w-1.5 h-4 ml-1 bg-purple-600 animate-pulse align-middle"></span>}
                    </pre>
                    </>
                )}
            </div>
            {!loading && (
                <div className="flex gap-3">
                    <button 
                        onClick={() => setGeneratedLetter('')}
                        className="flex-1 bg-gray-200 text-gray-700 font-bold py-3 rounded-xl"
                    >
                        重新生成
                    </button>
                    <button 
                        onClick={copyToClipboard}
                        className="flex-1 bg-blue-600 text-white font-bold py-3 rounded-xl shadow-md"
                    >
                        复制内容
                    </button>
                </div>
            )}
        </div>
      )}
    </div>
  );
};