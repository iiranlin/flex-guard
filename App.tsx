import React, { useState } from 'react';
import { Header } from './components/Header';
import { Home } from './components/Home';
import { RightsForm } from './components/RightsForm';
import { LegalLetter } from './components/LegalLetter';
import { Guide } from './components/Guide';
import { LaborConsultation } from './components/LaborConsultation';
import { CaseDetail } from './components/CaseDetail';
import { PolicyDetail } from './components/PolicyDetail';
import { AppView, SuccessCase, Policy } from './types';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<AppView>(AppView.HOME);
  const [selectedCase, setSelectedCase] = useState<SuccessCase | null>(null);
  const [selectedPolicy, setSelectedPolicy] = useState<Policy | null>(null);

  const handleNavigate = (view: AppView, data?: any) => {
    setCurrentView(view);
    if (view === AppView.CASE_DETAIL && data) {
      setSelectedCase(data as SuccessCase);
    } else if (view === AppView.POLICY_DETAIL && data) {
      setSelectedPolicy(data as Policy);
    }
  };

  const goBack = () => {
    setCurrentView(AppView.HOME);
    setSelectedCase(null);
    setSelectedPolicy(null);
  };

  const getPageTitle = () => {
    switch (currentView) {
      case AppView.FORM: return '一键维权';
      case AppView.LETTER: return '智能函件';
      case AppView.GUIDE: return '维权指南';
      case AppView.CONSULTATION: return '劳动维权咨询';
      case AppView.CASE_DETAIL: return '案例详情';
      case AppView.POLICY_DETAIL: return '政策详情';
      default: return '一键维权';
    }
  };

  const renderContent = () => {
    switch (currentView) {
      case AppView.HOME:
        return <Home onNavigate={handleNavigate} />;
      case AppView.FORM:
        return <RightsForm />;
      case AppView.LETTER:
        return <LegalLetter />;
      case AppView.GUIDE:
        return <Guide />;
      case AppView.CONSULTATION:
        return <LaborConsultation />;
      case AppView.CASE_DETAIL:
        return selectedCase ? <CaseDetail caseData={selectedCase} onBack={goBack} /> : <Home onNavigate={handleNavigate} />;
      case AppView.POLICY_DETAIL:
        return selectedPolicy ? <PolicyDetail policy={selectedPolicy} onBack={goBack} /> : <Home onNavigate={handleNavigate} />;
      default:
        return <Home onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="font-sans text-gray-900 bg-gray-50 h-screen w-screen overflow-hidden flex flex-col">
      <Header 
        title={getPageTitle()} 
        onBack={currentView !== AppView.HOME ? goBack : undefined} 
      />
      <main className="flex-1 overflow-y-auto overflow-x-hidden scroll-smooth w-full max-w-md mx-auto bg-gray-50 shadow-2xl relative">
        {renderContent()}
      </main>
    </div>
  );
};

export default App;