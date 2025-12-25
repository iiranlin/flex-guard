import React from 'react';

interface HeaderProps {
  title?: string;
  onBack?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ title = '一键维权', onBack }) => {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-md mx-auto px-4 h-14 flex items-center justify-between">
        <div className="flex items-center gap-3">
          {onBack && (
            <button 
              onClick={onBack}
              className="p-1 -ml-2 rounded-full hover:bg-gray-100 text-gray-600 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          )}
          
          {!onBack && (
             <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-lg">
                护
             </div>
          )}
          
          <h1 className="text-xl font-bold text-gray-800 tracking-tight">{title}</h1>
        </div>
        
        <div className="text-xs text-blue-600 font-medium bg-blue-50 px-2 py-1 rounded-full border border-blue-100">
          AI 智能版
        </div>
      </div>
    </header>
  );
};