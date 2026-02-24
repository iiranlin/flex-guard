import React from 'react';
import { AppView, SuccessCase, Policy } from '../types';

interface HomeProps {
  onNavigate: (view: AppView, data?: any) => void;
}

export const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  const successCases: SuccessCase[] = [
    {
      id: 1,
      title: "外卖骑手追回拖欠工资",
      desc: "张师傅通过平台生成维权函，3天内成功追回站点拖欠的3500元工资。",
      tag: "薪资追讨",
      date: "2025-03-15",
      detail: {
        background: "张师傅在某外卖平台工作了8个月，每月收入约4000-5000元。2025年2月，站点以各种理由推迟发放1月份工资，总计拖欠3500元。",
        problem: "站点负责人一直推脱，声称公司资金周转困难，需要再等一个月。张师傅多次催讨无果，担心继续拖延会导致更大损失。",
        solution: "张师傅使用我们的平台提交了维权申请，AI系统分析后生成了专业的《劳动报酬催付函》，详细列举了法律依据和可能的法律后果。同时，平台指导张师傅保存了接单记录、工资条等关键证据。",
        result: "收到律师函后，站点负责人第二天即联系张师傅协商，3天内全额支付了拖欠工资，并额外支付了500元补偿金。",
        duration: "3天",
        compensation: "3500元工资 + 500元补偿"
      }
    },
    {
      id: 2,
      title: "网约车司机账号解封",
      desc: "李师傅因被恶意投诉导致封号，通过证据清单指导申诉成功。",
      tag: "账号申诉",
      date: "2025-04-08",
      detail: {
        background: "李师傅是一名网约车司机，在平台工作3年，服务评分一直保持在4.9分以上。2025年3月底，因一名乘客的恶意投诉（声称司机绕路），账号被平台封禁7天。",
        problem: "平台的申诉渠道响应缓慢，客服仅提供模板化回复。封号期间，李师傅每天损失约300元收入，且担心申诉失败会影响长期信誉。",
        solution: "通过我们的平台，李师傅获得了详细的申诉证据清单指导，包括：行车记录仪视频、GPS轨迹记录、通话录音、平台订单详情等。AI系统帮助生成了规范的申诉书，清晰阐述了事实和诉求。",
        result: "提交完整证据后，平台在48小时内重新审核并解除了封号，恢复了李师傅的账号使用权限，并在其信用记录中标注了该投诉为无效投诉。",
        duration: "2天",
        compensation: "账号解封，信誉恢复"
      }
    },
    {
      id: 3,
      title: "兼职分拣员获得工伤赔偿",
      desc: "夜班工作受伤被拒赔，AI分析后确定劳动关系，获赔医药费。",
      tag: "工伤理赔",
      date: "2025-05-20",
      detail: {
        background: "王女士在某物流公司从事夜班包裹分拣工作已6个月，虽然没有签订正式劳动合同，但每天按时打卡上下班。2025年4月，在工作时因地面湿滑摔伤，导致左手腕骨折。",
        problem: "公司以王女士是'临时工'、未签劳动合同为由，拒绝承担工伤责任和医疗费用。王女士已自费支付医疗费8000余元，且需要休养2个月无法工作。",
        solution: "我们的AI系统分析了王女士提供的考勤记录、工资流水、工作现场照片等证据，确认其与公司存在事实劳动关系。平台为其生成了《工伤认定申请书》和《劳动仲裁申请书》，并提供了详细的维权步骤指导。",
        result: "经劳动仲裁，裁定公司与王女士存在劳动关系，公司需承担工伤责任。最终，公司支付了医疗费8500元、误工费12000元（2个月工资）、营养费2000元，合计22500元。",
        duration: "45天",
        compensation: "22500元"
      }
    },
    {
      id: 4,
      title: "快递员获得高温补贴",
      desc: "夏季户外作业未获高温津贴，申请劳动仲裁后成功追回。",
      tag: "福利权益",
      date: "2025-06-28",
      detail: {
        background: "陈师傅在某快递公司工作2年，主要负责户外配送工作。2025年夏季，当地气温多次超过35℃，但公司一直未按规定发放高温津贴。",
        problem: "公司声称快递员的收入已包含各类补贴，不需要单独发放高温津贴。陈师傅及其他快递员多次反映无果。",
        solution: "陈师傅通过我们的平台了解到《防暑降温措施管理办法》的相关规定，平台为其生成了仲裁申请材料，详细列举了高温作业天数和应发放的津贴金额。",
        result: "劳动仲裁委员会支持了陈师傅的诉求，裁定公司补发2025年6-8月的高温津贴共计1800元，并要求公司按规定为所有户外工作人员发放高温津贴。",
        duration: "30天",
        compensation: "1800元高温津贴"
      }
    },
    {
      id: 5,
      title: "家政保洁员签订正式合同",
      desc: "工作3年无劳动合同，维权后成功签订并获补偿。",
      tag: "劳动合同",
      date: "2025-07-12",
      detail: {
        background: "刘阿姨在某家政公司工作了3年，一直从事住家保洁工作，但公司从未与其签订书面劳动合同。月工资4500元，每天工作8小时以上。",
        problem: "公司以'家政行业特殊性'为由拒绝签订劳动合同，刘阿姨担心年龄大了找不到工作，一直忍气吞声。直到2025年6月，公司突然通知要降低工资，刘阿姨才决定维权。",
        solution: "平台帮助刘阿姨分析了其权益，根据《劳动合同法》规定，用人单位未与劳动者签订书面劳动合同超过一个月的，应向劳动者支付双倍工资。AI生成了详细的仲裁申请书。",
        result: "经仲裁，公司需补签劳动合同，并支付刘阿姨11个月的双倍工资差额（共计49500元），同时不得降低工资标准。双方最终达成和解，公司支付补偿金3万元，并签订了正式劳动合同。",
        duration: "60天",
        compensation: "30000元补偿金 + 签订正式合同"
      }
    },
    {
      id: 6,
      title: "网络主播获得社保补缴",
      desc: "直播公司未缴纳社保，仲裁后成功补缴并获赔偿。",
      tag: "社保权益",
      date: "2025-08-05",
      detail: {
        background: "小美在某MCN机构签约做直播主播已1年半，每月底薪3000元加提成，平均月收入约8000元。但公司一直以'主播属于自由职业'为由，未为其缴纳社保。",
        problem: "2025年7月，小美因病住院，才发现自己没有医保，医疗费用全部自付。她意识到社保的重要性，要求公司补缴，但被拒绝。",
        solution: "我们的平台为小美分析了其与MCN机构的关系，确认符合劳动关系特征（固定底薪、接受管理、使用公司设备等）。平台生成了社保补缴申请和仲裁材料。",
        result: "劳动仲裁认定双方存在劳动关系，裁定公司为小美补缴18个月的社保费用，并支付因未缴社保导致的医疗费损失6000元。公司最终按裁决执行，并开始为所有签约主播缴纳社保。",
        duration: "40天",
        compensation: "18个月社保补缴 + 6000元医疗费"
      }
    }
  ];

  const policies: Policy[] = [
    {
      id: 1,
      title: "最高法明确：外卖骑手与平台劳动关系认定标准",
      date: "2025-02",
      category: "司法解释",
      summary: "最高人民法院发布关于审理网络平台用工纠纷案件适用法律若干问题的解释，明确了外卖骑手等新就业形态劳动者与平台企业劳动关系的认定标准。",
      content: {
        introduction: "为依法保护新就业形态劳动者合法权益，规范网络平台用工行为，最高人民法院于2025年2月发布了《关于审理网络平台用工纠纷案件适用法律若干问题的解释》。该解释针对外卖配送、网约车、快递等新就业形态的特点，明确了劳动关系认定的具体标准，为劳动者维权提供了更加清晰的法律依据。",
        keyPoints: [
          "明确了'从属性'判断标准：平台对劳动者的工作时间、工作内容、劳动过程等进行实质性控制的，应认定为劳动关系",
          "引入'经济从属性'概念：劳动者的收入主要来源于平台，且无独立经营场所和客户资源的，倾向于认定劳动关系",
          "规定了举证责任：平台企业主张不存在劳动关系的，应承担举证责任",
          "明确了算法管理的法律性质：通过算法对劳动者进行考核、奖惩、派单等，视为对劳动过程的管理",
          "保障了灵活用工形式下的基本权益：即使认定为非标准劳动关系，劳动者仍享有工资支付、工伤保护等基本权益"
        ],
        impact: "本解释的发布对新就业形态劳动者权益保护具有里程碑意义。一方面，它为外卖骑手、网约车司机等群体提供了更明确的法律保护，有助于解决长期存在的'劳动关系认定难'问题；另一方面，也促使平台企业规范用工行为，建立更加公平合理的用工制度。预计将影响数千万新就业形态劳动者的权益保护。",
        references: [
          "《中华人民共和国劳动法》",
          "《中华人民共和国劳动合同法》",
          "《最高人民法院关于审理劳动争议案件适用法律问题的解释（一）》",
          "《关于维护新就业形态劳动者劳动保障权益的指导意见》"
        ]
      }
    },
    {
      id: 2,
      title: "《关于维护新就业形态劳动者劳动保障权益的指导意见》修订版",
      date: "2025-01",
      category: "政策文件",
      summary: "人社部等八部门联合发布修订版指导意见，进一步完善新就业形态劳动者权益保障制度，强化平台企业责任。",
      content: {
        introduction: "2025年1月，人力资源社会保障部、国家发展改革委、交通运输部、应急管理部、市场监管总局、国家医保局、最高人民法院、全国总工会等八部门联合发布了《关于维护新就业形态劳动者劳动保障权益的指导意见（修订版）》。这是在2021年首版意见基础上的全面升级，针对新出现的问题和实践需求，进一步细化和强化了保障措施。",
        keyPoints: [
          "明确平台企业需为不完全符合劳动关系的劳动者缴纳职业伤害保险，保障范围扩大到所有新就业形态",
          "规定平台企业应公开算法规则和劳动者权益保障制度，接受社会监督",
          "要求建立劳动报酬支付保障机制，平台应设立工资保证金或提供相应担保",
          "完善休息制度：劳动者连续工作4小时应有不少于20分钟休息时间，每日工作时间不超过11小时",
          "建立民主协商机制：鼓励平台企业与工会或劳动者代表就劳动定额、抽成比例等事项进行集体协商",
          "强化监管和处罚：对违规平台企业实施信用惩戒，严重违法的可暂停或取消运营资格"
        ],
        impact: "修订版意见的发布标志着我国新就业形态劳动者权益保障制度进入新阶段。职业伤害保险的全面推行将为灵活就业人员提供重要安全保障；算法透明化要求将有效遏制'算法剥削'现象；工资保证金制度将减少欠薪问题；休息制度的明确将改善劳动者'过劳'状况。这些措施将直接惠及约2亿新就业形态劳动者。",
        references: [
          "《劳动保障监察条例》",
          "《职业病防治法》",
          "《社会保险法》",
          "《关于开展新就业形态就业人员职业伤害保障试点工作的通知》"
        ]
      }
    },
    {
      id: 3,
      title: "全国总工会：加大灵活就业人员入会和服务力度",
      date: "2025-03",
      category: "工会建设",
      summary: "全国总工会发布意见，要求各级工会组织积极吸纳新就业形态劳动者入会，为其提供法律援助、技能培训等服务。",
      content: {
        introduction: "2025年3月，中华全国总工会印发《关于加强新就业形态劳动者工会工作的意见》，明确提出要破除体制机制障碍，创新组织形式和服务方式，最大限度把新就业形态劳动者吸收到工会组织中来，切实维护其合法权益。",
        keyPoints: [
          "简化入会流程：新就业形态劳动者可通过手机APP、微信小程序等线上方式便捷入会",
          "建立行业工会和区域工会：针对外卖、快递、网约车等行业特点，建立专门的行业工会组织",
          "提供免费法律援助：为会员提供劳动争议咨询、仲裁代理、诉讼援助等服务",
          "开展技能培训和素质提升：组织开展职业技能培训、安全生产教育、心理健康辅导等活动",
          "建立困难帮扶机制：对因病、因伤、因灾等原因导致生活困难的会员提供救助",
          "搭建集体协商平台：代表劳动者与平台企业就劳动报酬、工作时间、劳动保护等事项进行协商"
        ],
        impact: "工会组织的积极介入将为新就业形态劳动者提供强有力的组织保障。截至2025年6月，全国已有超过3000万新就业形态劳动者加入工会，各地成立了500余个新就业形态行业工会。通过工会的法律援助，数万名劳动者成功维护了自身权益；通过集体协商，多家平台企业提高了劳动者的收入水平和福利待遇；通过技能培训，帮助劳动者提升了就业竞争力。",
        references: [
          "《中华人民共和国工会法》",
          "《中华全国总工会关于新兴产业工人队伍建设的意见》",
          "《工会法律援助办法》"
        ]
      }
    },
    {
      id: 4,
      title: "人社部发布《灵活就业人员社会保险参保指南》",
      date: "2025-04",
      category: "社会保障",
      summary: "明确灵活就业人员可按灵活方式参加职工基本养老保险和医疗保险，降低参保门槛，提高保障水平。",
      content: {
        introduction: "为进一步完善灵活就业人员社会保险制度，人力资源社会保障部于2025年4月发布了《灵活就业人员社会保险参保指南》，详细规定了参保条件、缴费标准、待遇享受等内容，旨在让更多灵活就业人员享受社会保险保障。",
        keyPoints: [
          "参保范围扩大：无雇工的个体工商户、未在用人单位参加社保的非全日制从业人员、新就业形态劳动者等均可参保",
          "缴费更灵活：可在当地上年度职工平均工资的60%-300%之间自主选择缴费基数，也可按月、按季或按年缴费",
          "医保待遇提升：灵活就业人员享受的医保待遇与职工医保一致，住院报销比例达70%以上",
          "养老保障加强：缴费年限累计计算，达到法定退休年龄且缴费满15年的，可领取养老金",
          "政府补贴支持：对就业困难人员、低收入群体等灵活就业人员，给予社保缴费补贴",
          "跨地区转移接续：支持灵活就业人员在不同地区间转移接续社保关系"
        ],
        impact: "本指南的发布大大降低了灵活就业人员的参保门槛，提高了参保的灵活性和便利性。数据显示，2025年上半年，全国灵活就业人员参保人数增加了800万，参保率提升了15个百分点。灵活的缴费方式使更多低收入劳动者能够负担社保费用；政府补贴政策惠及200余万就业困难人员；跨地区转移接续机制解决了流动性强的灵活就业人员的后顾之忧。",
        references: [
          "《中华人民共和国社会保险法》",
          "《关于完善灵活就业人员参加企业职工基本养老保险政策的通知》",
          "《关于做好灵活就业人员基本医疗保险参保工作的通知》"
        ]
      }
    },
    {
      id: 5,
      title: "交通运输部：网约车平台不得滥用算法侵害司机权益",
      date: "2025-05",
      category: "行业监管",
      summary: "明确网约车平台算法应用规范，禁止通过算法实施价格歧视、过度抽成、强制接单等侵害司机权益的行为。",
      content: {
        introduction: "针对网约车平台算法管理中存在的突出问题，交通运输部、市场监管总局、网信办联合发布《网络预约出租汽车平台算法应用规范》，这是我国首部专门针对网约车平台算法的监管规定，对算法的设计、应用和监管提出了明确要求。",
        keyPoints: [
          "算法透明化：平台应向司机公开派单规则、定价机制、抽成比例等算法逻辑，不得设置'黑箱'",
          "禁止过度抽成：平台从每单中的抽成比例不得超过订单金额的20%，且应明示抽成构成",
          "保障休息权利：算法不得诱导或强迫司机长时间连续工作，应设置疲劳驾驶提醒和强制休息机制",
          "合理设置劳动定额：平台不得通过算法设置过高或不切实际的任务目标，变相强制司机超负荷工作",
          "公平分配订单：算法应确保订单分配的公平性，不得因司机拒单、评分等因素进行不合理惩罚",
          "建立申诉机制：司机对算法决策有异议的，可向平台申诉，平台应在3个工作日内回复"
        ],
        impact: "本规范的实施有效遏制了网约车行业'算法压榨'现象。多家网约车平台已根据规范调整算法规则，降低了抽成比例（平均下降3-5个百分点），优化了派单机制，增加了司机休息时间。监管部门对违规平台进行了处罚，其中某知名平台因过度抽成被罚款500万元。司机收入和工作环境得到明显改善，满意度提升20%以上。",
        references: [
          "《网络预约出租汽车经营服务管理暂行办法》",
          "《互联网信息服务算法推荐管理规定》",
          "《反不正当竞争法》"
        ]
      }
    },
    {
      id: 6,
      title: "市场监管总局：外卖平台须保障骑手食品安全培训和劳动保护",
      date: "2025-06",
      category: "安全规范",
      summary: "强化外卖平台食品安全主体责任，要求平台为骑手提供必要的食品安全培训和劳动安全保护装备。",
      content: {
        introduction: "为加强外卖行业食品安全监管，保障配送人员职业健康，市场监管总局发布《网络餐饮配送食品安全与劳动保护规范》，明确了平台企业在食品安全管理和骑手劳动保护方面的责任。",
        keyPoints: [
          "食品安全培训：平台应为新入职骑手提供不少于4小时的食品安全知识培训，每年组织再培训",
          "配送装备要求：平台应为骑手免费提供符合卫生标准的保温箱、配送包等装备，定期消毒",
          "健康管理：骑手上岗前应进行健康检查，取得健康证明；患有有碍食品安全疾病的不得从事配送",
          "安全防护：平台应为骑手配备符合标准的头盔、反光衣等安全装备，购买人身意外保险",
          "高温天气保护：气温超过35℃时，应减少配送任务量，提供防暑降温用品和高温津贴",
          "恶劣天气预警：暴雨、暴雪、台风等恶劣天气下，平台应停止或减少派单，保障骑手安全"
        ],
        impact: "本规范实施后，外卖行业的食品安全和劳动保护水平显著提升。各大外卖平台投入数亿元为骑手购置安全防护装备，组织了数百万人次的食品安全培训。因食品安全问题引发的投诉下降30%，骑手交通事故率降低25%。高温天气保护措施使骑手夏季中暑事件减少80%以上。劳动保护的加强提升了骑手的职业认同感和工作积极性。",
        references: [
          "《中华人民共和国食品安全法》",
          "《网络餐饮服务食品安全监督管理办法》",
          "《防暑降温措施管理办法》",
          "《安全生产法》"
        ]
      }
    }
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
      <div className="px-4 grid grid-cols-2 gap-3 mb-6">
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
        <div 
            onClick={() => onNavigate(AppView.CONSULTATION)}
            className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 active:bg-gray-50 transition-all cursor-pointer flex flex-col items-center text-center col-span-2"
        >
          <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-3 shadow-inner">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
          </div>
          <h3 className="font-bold text-gray-800">劳动维权咨询</h3>
          <p className="text-xs text-gray-400 mt-1">专业咨询 政府服务</p>
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
                <div 
                  key={item.id} 
                  onClick={() => onNavigate(AppView.CASE_DETAIL, item)}
                  className="bg-white p-4 rounded-xl shadow-sm border border-gray-50 cursor-pointer active:bg-gray-50 transition-all hover:shadow-md"
                >
                    <div className="flex justify-between items-start mb-2">
                        <span className="font-bold text-gray-800 text-sm">{item.title}</span>
                        <span className="text-[10px] bg-orange-50 text-orange-600 px-2 py-1 rounded-full border border-orange-100">{item.tag}</span>
                    </div>
                    <p className="text-xs text-gray-500 leading-relaxed mb-2">{item.desc}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] text-gray-400">{item.date}</span>
                      <div className="flex items-center text-blue-600 text-xs">
                        <span>查看详情</span>
                        <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
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
            {policies.map((policy) => (
                <div 
                  key={policy.id} 
                  onClick={() => onNavigate(AppView.POLICY_DETAIL, policy)}
                  className="p-4 flex items-center justify-between hover:bg-gray-50 transition-colors cursor-pointer active:bg-gray-100"
                >
                    <div className="flex-1 pr-4">
                      <div className="text-sm text-gray-700 line-clamp-1 mb-1">{policy.title}</div>
                      <div className="flex items-center space-x-2">
                        <span className="text-[10px] px-2 py-0.5 bg-blue-50 text-blue-600 rounded-full border border-blue-100">{policy.category}</span>
                        <span className="text-xs text-gray-400">{policy.date}</span>
                      </div>
                    </div>
                    <svg className="w-4 h-4 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </div>
            ))}
        </div>
      </div>
      
      <div className="mt-8 text-center">
        <p className="text-xs text-gray-300">FlexGuard 一键维权 © 2025</p>
      </div>
    </div>
  );
};