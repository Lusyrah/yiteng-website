// 全站核心配置：换域名、改联系方式、增删导航等都在这里统一维护。
export const SITE = {
  name: "弈藤实业有限公司",
  shortName: "弈藤",
  englishName: "Yiteng Industrial Co., Ltd.",
  lang: "zh-CN",

  // TODO: 购买正式域名后替换下面两处，并同步修改 astro.config.mjs / public/robots.txt
  domain: "yiteng.example.com",
  url: "https://yiteng.example.com",

  description:
    "弈藤实业专注 AI GEO（生成式引擎优化），帮助企业品牌在百度 AI 搜索、豆包、Kimi、DeepSeek、通义等国内主流 AI 助手中被准确识别、持续提及与优先推荐。",

  contact: {
    // TODO: 补充企业真实联系方式
    phone: "400-000-0000",
    email: "contact@yiteng.example.com",
    address: "（公司注册地址待补充）",
    wechat: "（企业微信待补充）",
  },

  // 导航菜单
  nav: [
    { href: "/", label: "首页" },
    { href: "/services/", label: "GEO 服务" },
    { href: "/cases/", label: "案例" },
    { href: "/insights/", label: "洞察" },
    { href: "/about/", label: "关于我们" },
    { href: "/contact/", label: "联系" },
  ],

  // 我们服务的国内 AI 平台/入口（后续可按业务重点增删）
  aiPlatforms: [
    "百度 AI 搜索",
    "豆包",
    "Kimi",
    "DeepSeek",
    "通义",
    "文小言",
    "腾讯元宝",
    "智谱清言",
    "讯飞星火",
    "360 AI 搜索",
  ],
} as const;
