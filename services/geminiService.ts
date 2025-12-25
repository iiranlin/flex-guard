import { UserCase, LegalAdvice } from "../types";

// ============================================================================
// 🛠️ AI 接口配置中心 / AI Configuration Center
// ============================================================================

// 获取环境变量的辅助函数，兼容 Vite (import.meta.env) 和 普通 process.env
// 注意：为了让构建工具正确替换，必须静态访问 process.env.XXX
const getApiKey = () => {
  

  // 3. 默认值
  return process.env.TOKEN
};

const getBaseUrl = () => {
    try {
        // @ts-ignore
        if (typeof import.meta !== 'undefined' && import.meta.env && import.meta.env.VITE_BASE_URL) return import.meta.env.VITE_BASE_URL;
        if (typeof process !== 'undefined' && process.env && process.env.BASE_URL) return process.env.BASE_URL;
    } catch(e) {}
    return "https://open.bigmodel.cn/api/paas/v4/";
}

const getModelName = () => {
    try {
        // @ts-ignore
        if (typeof import.meta !== 'undefined' && import.meta.env && import.meta.env.VITE_MODEL_NAME) return import.meta.env.VITE_MODEL_NAME;
        if (typeof process !== 'undefined' && process.env && process.env.MODEL_NAME) return process.env.MODEL_NAME;
    } catch(e) {}
    return "glm-4-flash";
}

const AI_CONFIG = {
  baseUrl: getBaseUrl(),
  apiKey: getApiKey(),
  model: getModelName(),
};

// ============================================================================

const SYSTEM_INSTRUCTION = `
你是一位精通中国劳动法和灵活用工相关法规（如《关于维护新就业形态劳动者劳动保障权益的指导意见》）的法律专家助手。
你的目标是帮助弱势的灵活用工人员（如外卖员、司机）维护合法权益。
请用通俗易懂、富有同理心的语言回答，但法律依据必须严谨。
`;

/**
 * 通用流式请求生成器
 * Generic Async Generator for Streaming Chat Completions
 */
async function* streamRequest(messages: any[]): AsyncGenerator<string, void, unknown> {
  const { baseUrl, apiKey, model } = AI_CONFIG;
    
  if (!apiKey) {
      throw new Error("⚠️ 配置错误: 未配置 API Key。");
  }
  
  // 移除可能存在的末尾斜杠
  const cleanBaseUrl = baseUrl.replace(/\/+$/, '');
  const endpoint = `${cleanBaseUrl}/chat/completions`;

  console.log(AI_CONFIG,'config')
  

  // 调试日志 (开发模式可见)
  console.log(`[AI Service] Sending request to ${model}`);

  const response = await fetch(endpoint, {
      method: 'POST',
       headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`
        },
      body: JSON.stringify({
          model: model,
          messages: messages,
          temperature: 0.7,
          stream: true
      })
  });

  if (!response.ok) {
      const errorText = await response.text();
      console.error('[AI Service] Error Response:', errorText);
      throw new Error(`API Request Failed (${response.status}): ${errorText}`);
  }

  if (!response.body) throw new Error("Response body is null");

  const reader = response.body.getReader();
  const decoder = new TextDecoder("utf-8");
  let buffer = "";

  while (true) {
      const { done, value } = await reader.read();
      if (done) break;

      buffer += decoder.decode(value, { stream: true });
      const lines = buffer.split('\n');
      
      buffer = lines.pop() || ""; 

      for (const line of lines) {
          const trimmedLine = line.trim();
          if (!trimmedLine || trimmedLine === 'data: [DONE]') continue;
          
          if (trimmedLine.startsWith('data: ')) {
              try {
                  const jsonStr = trimmedLine.substring(6);
                  const json = JSON.parse(jsonStr);
                  const content = json.choices?.[0]?.delta?.content;
                  if (content) {
                      yield content;
                  }
              } catch (e) {
                  console.warn("Failed to parse SSE JSON:", e);
              }
          }
      }
  }
}

/**
 * 案件分析 - 返回 Promise (内部消费流以构建完整 JSON)
 */
export const analyzeCase = async (userCase: UserCase): Promise<LegalAdvice> => {
  const prompt = `
    请分析以下维权案件，并以纯JSON格式返回（不要包含Markdown代码块标记）：
    - 职业：${userCase.jobType}
    - 诉求/描述：${userCase.description}
    - 雇主/平台：${userCase.employer}

    JSON结构必须严格遵守：
    {
      "summary": "案件简述总结",
      "riskLevel": "Low" | "Medium" | "High",
      "suggestedSteps": ["步骤1", "步骤2"...],
      "relevantLaws": ["法规1", "法规2"...]
    }
  `;

  const messages = [
    { role: "system", content: SYSTEM_INSTRUCTION },
    { role: "user", content: prompt }
  ];

  let fullContent = "";

  try {
    for await (const chunk of streamRequest(messages)) {
        fullContent += chunk;
    }

    // JSON Cleaning and Parsing
    try {
        const cleaned = fullContent.replace(/```json/g, '').replace(/```/g, '').trim();
        return JSON.parse(cleaned) as LegalAdvice;
    } catch (e) {
        console.warn("JSON Parse failed", e);
        throw new Error("AI 返回数据格式错误");
    }

  } catch (error) {
    console.error("AI Analysis failed:", error);
    return {
      summary: "网络连接不稳定或服务异常，无法进行智能分析。建议您保留所有证据，咨询当地劳动监察部门。",
      riskLevel: "Medium",
      suggestedSteps: ["保留所有聊天记录", "联系当地劳动监察大队", "拨打12345热线"],
      relevantLaws: ["劳动合同法", "关于维护新就业形态劳动者劳动保障权益的指导意见"],
    };
  }
};

/**
 * 生成维权函 - 返回 AsyncGenerator (流式输出)
 */
export async function* generateLegalLetter(userCase: UserCase): AsyncGenerator<string, void, unknown> {
  const prompt = `
    基于以下信息，为用户生成一份正式的《催告函》或《维权告知书》，用于发送给雇主或平台。
    语气要严肃、专业、有力，但不要过度激进。
    
    用户信息：
    姓名：${userCase.name}
    电话：${userCase.phone}
    职位：${userCase.jobType}
    雇主：${userCase.employer}
    
    维权事由：
    ${userCase.description}
    
    要求：
    直接输出函件内容，不需要Markdown格式，不需要解释。
  `;

  const messages = [
    { role: "system", content: SYSTEM_INSTRUCTION },
    { role: "user", content: prompt }
  ];

  try {
      yield* streamRequest(messages);
  } catch (error) {
      console.error("Letter generation failed:", error);
      yield "\n\n[系统提示: 生成过程中发生错误，请稍后重试]";
  }
}