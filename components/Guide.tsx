import React from 'react';

export const Guide: React.FC = () => {
  return (
    <div className="pb-8 p-4 bg-gray-50 min-h-full">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">维权证据清单</h2>
      
      <div className="space-y-4">
        <div className="bg-white p-5 rounded-xl shadow-sm border-l-4 border-green-500">
            <h3 className="font-bold text-lg text-gray-800 mb-2">1. 确立劳动关系/劳务关系</h3>
            <ul className="list-disc pl-5 text-sm text-gray-600 space-y-2">
                <li><span className="font-bold">电子合同/协议：</span>APP内的签约截图。</li>
                <li><span className="font-bold">工牌/制服：</span>穿着工服的照片，工牌照片。</li>
                <li><span className="font-bold">APP账号页：</span>显示姓名、工号的个人中心截图。</li>
            </ul>
        </div>

        <div className="bg-white p-5 rounded-xl shadow-sm border-l-4 border-blue-500">
            <h3 className="font-bold text-lg text-gray-800 mb-2">2. 证明工作事实</h3>
            <ul className="list-disc pl-5 text-sm text-gray-600 space-y-2">
                <li><span className="font-bold">考勤记录：</span>APP打卡记录、接单记录。</li>
                <li><span className="font-bold">工作照片：</span>配送过程、工作现场照片。</li>
                <li><span className="font-bold">薪资流水：</span>银行转账记录、微信/支付宝收款记录（需注明是工资）。</li>
            </ul>
        </div>

        <div className="bg-white p-5 rounded-xl shadow-sm border-l-4 border-orange-500">
            <h3 className="font-bold text-lg text-gray-800 mb-2">3. 纠纷相关证据</h3>
            <ul className="list-disc pl-5 text-sm text-gray-600 space-y-2">
                <li><span className="font-bold">沟通记录：</span>与站长、调度、客服的微信聊天记录、通话录音。</li>
                <li><span className="font-bold">处罚通知：</span>APP内的罚款通知、封号通知截图。</li>
                <li><span className="font-bold">医院诊断：</span>（如果是工伤）病历本、医药费单据。</li>
            </ul>
        </div>
      </div>

      <div className="mt-8 bg-blue-50 p-4 rounded-xl">
        <h4 className="font-bold text-blue-800 mb-2">常用维权电话</h4>
        <div className="space-y-2 text-sm text-blue-700">
            <div className="flex justify-between">
                <span>劳动保障监察热线</span>
                <span className="font-mono font-bold">12333</span>
            </div>
             <div className="flex justify-between">
                <span>政务服务便民热线</span>
                <span className="font-mono font-bold">12345</span>
            </div>
             <div className="flex justify-between">
                <span>工会职工服务热线</span>
                <span className="font-mono font-bold">12351</span>
            </div>
        </div>
      </div>
    </div>
  );
};