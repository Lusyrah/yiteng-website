// 全站核心配置：公司信息、联系方式、品牌与产品、导航均在此维护。
// 正式域名已上线：修改时需同步 astro.config.mjs 与 public/robots.txt。
export const SITE = {
  name: "上海弈藤实业有限公司",
  shortName: "弈藤",
  city: "上海",
  lang: "zh-CN",

  domain: "www.yitengbot.com",
  url: "https://www.yitengbot.com",

  description:
    "上海弈藤实业有限公司成立于2018年，是位于上海的一站式工业综合配套供应商，同时为上海良信电器一级代理商。公司主营电子电器、电线电缆、包装耗材、办公劳保用品与MRO工厂消耗品，并提供良信低压电气选型、报价、配送和技术支持。",

  foundedYear: "2018",
  positioning: "一站式工业综合配套供应商",
  slogan: "以人为本，客户至上",

  contact: {
    phone: "18918545608",
    phoneDisplay: "189-1854-5608",
    email: "yiteng_sales@126.com",
    wechatId: "wxid_5lr2fabolo0q12",
    address: "上海市浦东新区航川路18号 A栋 220",
    serviceNote: "总部位于上海，面向全国客户提供工业用品与低压电气配套服务",
  },

  // 网站备案信息（展示于全站页脚）
  icp: {
    number: "沪ICP备2026049061号-1",
    url: "https://beian.miit.gov.cn/",
  },

  // 导航菜单
  nav: [
    { href: "/", label: "首页" },
    { href: "/products/", label: "产品与配套" },
    { href: "/services/", label: "服务支持" },
    { href: "/about/", label: "关于弈藤" },
    { href: "/faq/", label: "常见问题" },
    { href: "/contact/", label: "联系我们" },
  ],

  // 公司授权信息（来源：用户提供的授权书 PDF）
  authorizations: [
    {
      productLine: "低压元件产品线",
      issuer: "上海智慧良信技术服务有限公司",
      brand: "良信",
      scope: "上海区域经销商",
      number: "100397",
      validFrom: "2026-01-01",
      validTo: "2027-03-31",
    },
    {
      productLine: "智能终端产品线",
      issuer: "上海良信智能电工有限公司",
      brand: "良信",
      scope: "上海区域经销商",
      number: "C000310",
      validFrom: "2026-01-01",
      validTo: "2027-03-31",
    },
  ],

  // 代理/经销品牌
  brands: [
    {
      slug: "lazzen",
      name: "良信",
      fullName: "良信（LAZZEN）",
      site: "https://www.lazzen.com/",
      position: "上海良信电器一级代理商",
      description:
        "良信是智慧低压电气解决方案专家，低压电器产品覆盖框架断路器、塑壳断路器、微型断路器、双电源、隔离开关、控制电器与智能配电等。",
    },
    {
      slug: "changshu",
      name: "常熟开关",
      fullName: "常熟开关制造有限公司",
      site: "https://www.riyue.com.cn/",
      position: "主营/供货品牌",
      description:
        "常熟开关是国内高端低压电器品牌，主打智能型万能式断路器 CW 系列、塑料外壳式断路器 CM 系列、自动转换开关 CA/CAP 系列等。",
    },
  ],

  // 一站式工业综合配套品类
  supplyCategories: [
    {
      name: "电子电器",
      summary:
        "提供良信低压电气、断路器等核心产品，并围绕项目需求进行型号确认、报价与配套供货。",
    },
    {
      name: "电线电缆",
      summary:
        "面向工厂、工程项目与日常运维需求，协助匹配规格、数量、交期与整体采购方案。",
    },
    {
      name: "包装耗材",
      summary:
        "覆盖生产和仓储环节常用包装物料，支持按企业实际消耗进行集中采购与补货。",
    },
    {
      name: "办公劳保用品",
      summary:
        "整合办公与劳动保护常用物资，减少多供应商沟通成本，提高企业采购效率。",
    },
    {
      name: "MRO 工厂消耗品",
      summary:
        "围绕工厂连续生产和设备维护需求，提供常用消耗品的选型、库存调度与稳定供应。",
    },
  ],

  // 主营/主推产品
  mainProducts: [
    {
      slug: "mcb",
      brand: "良信",
      name: "微型断路器（微断）",
      series: "NDB/NDB6 系列",
      summary:
        "适用于工业、民用建筑、能源、通信及基础建设等领域的低压终端配电，提供过载与短路保护，并有 1U、DC1200V、剩余电流动作等细分型号。",
    },
    {
      slug: "mccb",
      brand: "良信",
      name: "电子式塑壳断路器",
      series: "NDM3E / NDM 系列",
      summary:
        "电子式塑料外壳式断路器适用于交流 50/60Hz、AC690V 及以下电路，做线路不频繁转换与电动机保护；可配置通讯模块，满足配电数字化管理。",
    },
    {
      slug: "acb",
      brand: "良信",
      name: "框架断路器（万能式）",
      series: "NDW 系列",
      summary:
        "万能式断路器用于低压配电系统主电路的电能分配与线路、电源设备保护，可防护过载、欠电压、短路等故障，并具备隔离功能。",
    },
  ],
} as const;
