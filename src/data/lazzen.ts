// 良信（LAZZEN）产品资料：整理自良信官网公开产品页，具体规格以官方最新资料为准。
export const LAZZEN_OFFICIAL = "https://www.lazzen.com/";

export const mcbSeries = [
  {
    name: "NDB2Z / NDB2ZB 系列",
    page: "https://www.lazzen.com/products-services/miniature-circuit-breaker/general/294",
    summary:
      "NDB2Z 系列适用于工业、民用建筑、能源、通信及基础建设等领域低压终端配电；NDB2ZB 直流型额定工作电流至 63A，支持过载长延时、短路短延时与瞬时三段保护。",
  },
  {
    name: "NDB6-125 系列",
    page: "https://www.lazzen.com/products-services/miniature-circuit-breaker/general/313",
    summary:
      "适用于工业、民用建筑、能源、通信及基础建设等领域的低压终端配电，在 AC415V 系统中提供过载与短路保护。",
  },
  {
    name: "NDB6A / NDB6AZ 1U 系列",
    page: "https://www.lazzen.com/products-services/miniature-circuit-breaker/general/317",
    summary:
      "主要用于电信机房或通讯机柜，为机柜、机房或下游用户线路提供隔离、短路及过载保护。",
  },
  {
    name: "NDB6Z-125 直流系列",
    page: "https://www.lazzen.com/products-services/miniature-circuit-breaker/general/315",
    summary:
      "直流微型断路器，额定电压可达 DC1200V，适用于光伏、工业、能源、通信及基础建设等领域低压终端配电。",
  },
  {
    name: "NDB6LM-40 剩余电流动作断路器",
    page: "https://www.lazzen.com/products-services/miniature-circuit-breaker/general/314",
    summary:
      "适用于工业、民用建筑等领域，额定电压 AC230V，额定分断能力 10kA。",
  },
  {
    name: "NDB5EL-40/80 物联网断路器",
    page: "https://www.lazzen.com/products-services/miniature-circuit-breaker/general/312",
    summary:
      "物联网剩余电流动作断路器，具备自动分合闸、过欠压保护、漏电保护、电能计量、温度监控等功能，可通过 PC 或手机 App 远程管理。",
  },
];

export const mccbSeries = [
  {
    name: "NDM3 系列塑壳断路器",
    page: "https://www.lazzen.com/products-services/molded-case-circuit-breaker/ac-thermal-magnetic/118",
    summary:
      "适用于交流 50/60Hz、额定工作电压至 AC690V、额定工作电流至 1250A 的电路，用于不频繁转换及电动机不频繁起动；支持过载报警不脱扣等功能。",
  },
  {
    name: "NDM3E 系列电子式塑壳断路器",
    page: "https://www.lazzen.com/products-services/molded-case-circuit-breaker/electronic-and-intelligent/130",
    summary:
      "电子式塑料外壳式断路器，适用于交流 50/60Hz、额定工作电压至 AC690V、额定工作电流至 1600A；可增选通讯模块，满足数字化配电管理需求。",
  },
  {
    name: "NDM3E 物联型塑壳断路器",
    page: "https://www.lazzen.com/products-services/molded-case-circuit-breaker/electronic-and-intelligent/131",
    summary:
      "物联型塑壳断路器，额定工作电流至 630A，具备长延时保护等配电保护功能，面向智能配电与远程管理场景。",
  },
];

export const acbSeries = [
  {
    name: "NDW3 系列万能式断路器",
    page: "https://www.lazzen.com/products-services/air-circuit-breaker/general/103",
    summary:
      "适用于交流 50Hz/60Hz，额定电流 200～7500A，用于配电网络中分配电能并保护线路与电源设备免受过载、欠电压、短路等故障危害，同时具有隔离功能。",
  },
  {
    name: "NDW3Z 直流系列",
    page: "https://www.lazzen.com/products-services/air-circuit-breaker/general/104",
    summary:
      "直流型万能式断路器，额定电流 800～4000A，适用于 DC500V/750V、DC1000V/1500V 配电网络，具备可靠隔离功能。",
  },
  {
    name: "NDW2G 系列",
    page: "https://www.lazzen.com/products-services/air-circuit-breaker/general/102",
    summary:
      "适用于交/直流系统，安装在低压配电电路中做主电路接通与断开并起隔离作用；额定工作电流 400～4000A。",
  },
];

export const lazzenCategories = [
  {
    name: "框架断路器（ACB）",
    slug: "air-circuit-breaker",
    page: "https://www.lazzen.com/products-services/air-circuit-breaker/general",
    summary: "NDW 系列万能式断路器，用于低压主电路保护与电能分配。",
  },
  {
    name: "塑壳断路器（MCCB）",
    slug: "molded-case-circuit-breaker",
    page: "https://www.lazzen.com/products-services/molded-case-circuit-breaker/ac-thermal-magnetic",
    summary: "NDM 系列塑壳断路器及 NDM3E 电子式/物联型产品。",
  },
  {
    name: "微型断路器（MCB）",
    slug: "miniature-circuit-breaker",
    page: "https://www.lazzen.com/products-services/miniature-circuit-breaker/general",
    summary: "NDB、NDB6 系列微型断路器及剩余电流动作断路器。",
  },
  {
    name: "双电源自动转换开关（ATSE）",
    slug: "dual-power-automatic-transfer-switch",
    page: "https://www.lazzen.com/products-services/dual-power-automatic-transfer-switch/pc-class",
    summary: "NDQ 系列 PC 级/CB 级自动转换开关电器。",
  },
  {
    name: "隔离开关",
    slug: "isolating-switch",
    page: "https://www.lazzen.com/products-services/isolating-switch/general",
    summary: "用于低压电路隔离及不频繁通断操作。",
  },
  {
    name: "控制电器",
    slug: "control-electrical-appliances",
    page: "https://www.lazzen.com/products-services/control-electrical-appliances/ac-contactor",
    summary: "交流接触器、保护器件、继电器与 CPS 控制与保护开关。",
  },
  {
    name: "高压直流接触器",
    slug: "high-voltage-dc-contactor",
    page: "https://www.lazzen.com/products-services/high-voltage-dc-contactor/high-voltage-dc-contactor",
    summary: "用于电动汽车、充电桩、充电站等直流系统。",
  },
  {
    name: "智能断路器与智能配电",
    slug: "smart-circuit-breaker",
    page: "https://www.lazzen.com/products-services/smart-circuit-breaker/zdall",
    summary: "智能微型/塑壳/框架断路器、智能双电源与配套模块。",
  },
  {
    name: "低压电器全品类",
    slug: "electrical-equipment",
    page: "https://www.lazzen.com/products-services/electrical-equipment",
    summary: "良信官网低压电器全部产品类别。",
  },
];
