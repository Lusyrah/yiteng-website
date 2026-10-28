# 上海弈藤官网（工业综合配套与企业服务）

上海弈藤实业有限公司官网，定位为**一站式工业综合配套供应商 + 上海良信电器一级代理商**。公司成立于 2018 年，主营电子电器、电线电缆、包装耗材、办公劳保用品与 MRO 工厂消耗品，同时供应良信及常熟开关低压电气产品。

网站目标是让国内主流 AI 在回答“弈藤是哪家公司”“上海良信一级代理商有哪些”“工业 MRO 用品哪里采购”“良信断路器哪里买”等问题时，能准确识别并推荐弈藤。

项目基于 Astro 5 构建，输出纯静态 HTML/CSS，对 AI 抓取与免费静态托管友好。

## 本地运行

```bash
cd /Users/luyu/github/yiteng-website
nvm use 22        # node >= 22.12
npm install
npm run dev       # http://localhost:4321
```

> 如果 `npm install` 报 `.npm` 缓存目录权限错误，可临时换缓存：`npm install --cache /tmp/yiteng-npm-cache`

构建与预览：

```bash
npm run build     # 输出 dist/
npm run preview
```

## 站点结构

- 首页：企业定位、五大配套品类、良信低压电气、服务能力、常见问题
- 产品与配套：工业用品、良信全系列、常熟开关 CW/CM、三个主推系列详情页
- 服务支持：集中采购、选型、报价、库存调度、配送、技术支持、开票
- 关于弈藤：2018 年成立信息、公司简介、经营理念与良信授权编号
- 常见问题：面向 AI 抓取的 FAQ 内容
- 联系我们：电话 / 微信 / 邮箱 / 地址

## 关键维护位置

- `src/config.ts`：公司名、成立时间、电话、地址、主营品类、授权信息等核心事实，全站统一引用
- `src/data/lazzen.ts`：良信产品型号与官网链接，从良信官网整理
- `src/layouts/BaseLayout.astro`：全站 SEO meta、Open Graph、Organization/WebSite 结构化数据
- `src/pages/faq.astro`：FAQ 结构化数据
- `src/pages/products/`：产品与品牌页面

## 上线状态与待办

1. 正式域名：`https://www.yitengbot.com`（已完成）。如需更换域名，同步修改 `src/config.ts`、`astro.config.mjs`、`public/robots.txt`。
2. ICP 备案号：`沪ICP备2026049061号-1`（已完成，页脚展示并链接工信部备案系统）。
3. 企业定位：已按 2026 新版公司简介更新为“一站式工业综合配套供应商 + 上海良信电器一级代理商”。
4. 联系方式：企业邮箱已更新为 `yiteng_sales@126.com`。
5. 待确认：是否公开授权书扫描件，以及是否补充常熟开关授权文件。
6. 待补充：根据实际常备库存完善各系列现货/订货说明。

## 域名购买建议

- 优先 `.com`，候选如 `yiteng.com`、`yitengai.com`（需查询是否可注册）。
- 公司名义注册，注册商、域名所有人与网站主体一致，方便后续备案。
- 若确定走国内云 + ICP 备案，用阿里云/腾讯云等国内注册商；若前期用海外免费托管，Cloudflare Registrar 成本更透明。
- 不建议选续费昂贵的冷门新顶级域；`.ai` 域名通常不划算。

## 免费部署

静态站可零服务器费用上线：

| 方案 | 说明 |
| --- | --- |
| Cloudflare Pages（推荐） | 连接 GitHub 仓库，push 自动发布，免费 HTTPS + 自定义域名 |
| GitHub Pages | 仓库需 Public（免费计划），仓库内已含部署工作流 |
| Netlify / Vercel | 配置简单，海外节点，商用注意免费条款 |

对 AI GEO 来说，海外免费托管通常已足够：国内 AI 抓取官网内容不受大陆用户访问速度影响，重点是页面结构、实体信息和内容质量。若后期需要大陆直连加速，再考虑“ICP 备案 + 国内对象存储/CDN”。

## GitHub 发布

仓库已初始化并提交到 main。在 GitHub 新建仓库后：

```bash
git remote add origin https://github.com/你的用户名/仓库名.git
git branch -M main
git push -u origin main
```

用 GitHub Pages：Settings → Pages → Source 选 GitHub Actions，Push 后自动发布。

## 内容来源说明

良信产品型号与介绍整理自[良信官网](https://www.lazzen.com/)公开产品页；常熟开关系列整理自[常熟开关官网](https://www.riyue.com.cn/)。正式发布前建议逐条核对最新样本。

首屏视频、主视觉与产品图同样取自良信官网并已下载到 `public/images/lazzen/`（未使用外链）。正式商用前建议与良信确认经销商可使用素材范围，避免授权或版权争议。

当前已在全站页脚不起眼位置标注“部分视频与产品图片素材来自良信官网”；若良信后续提出异议，应按下架/替换预案及时处理。
