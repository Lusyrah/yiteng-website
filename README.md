# 弈藤实业官网（AI GEO）

弈藤实业有限公司官网框架，主打面向国内主流 AI 产品（百度 AI 搜索、豆包、Kimi、DeepSeek、通义等）的 **GEO（生成式引擎优化）** 服务。

项目基于 [Astro 5](https://astro.build) 构建，最终产物是纯静态 HTML/CSS，天然适合免费静态托管，也对 AI 抓取和搜索引擎友好。

## 本地运行

```bash
cd /Users/luyu/github/yiteng-website
nvm use 22        # 本机已安装 Node 22，或确保 node >= 22.12
npm install
npm run dev       # 打开 http://localhost:4321
```

> 如果 `npm install` 报 `.npm` 缓存目录权限错误，可以临时换缓存目录：
> `npm install --cache /tmp/yiteng-npm-cache`

构建与预览：

```bash
npm run build     # 输出到 dist/
npm run preview
```

## 目录结构

```text
.
├── astro.config.mjs        # 站点域名、sitemap 集成
├── package.json
├── public/
│   ├── favicon.svg
│   └── robots.txt
└── src/
    ├── config.ts           # ★ 全站配置：域名、公司名、联系方式、导航、AI 平台清单
    ├── components/         # Header / Footer 等公共组件
    ├── layouts/            # BaseLayout：全站 meta / OG / JSON-LD
    ├── pages/              # 首页、服务、案例、洞察、关于、联系、404
    ├── styles/global.css   # 全局样式
    └── data/               # （后续）案例、文章等结构化内容
```

## 上线前需要补齐的 TODO

1. 购买正式域名，并替换 `src/config.ts`、`astro.config.mjs`、`public/robots.txt` 中的 `yiteng.example.com`。
2. 在 `src/config.ts` 补齐企业真实联系方式、地址、导航及重点 AI 平台清单。
3. 提供真实文案与图片，替换首页和各内页的占位内容。
4. 补充企业 logo / 分享封面图（og-image）。
5. 决定是否做 ICP 备案，并同步部署方案（见下）。

## 域名购买建议

**优先 .com**，越短越好，并尽量包含品牌名或“ai”关键词，例如 `yiteng.com`、`yitengai.com` 这类（需查询是否可注册）。

- **国内注册商（阿里云/腾讯云等）**：常有首年低价，和备案、国内 CDN/OSS 流程衔接方便；域名需按企业实名认证。适合确定要把站点放国内、需要 ICP 备案的情况。
- **Cloudflare Registrar**：按注册局成本价续费、无隐藏费用，免费提供 WHOIS 隐私保护和 DNS，适合先海外免费托管、成本透明的方案；但后续若要国内备案，流程通常不如国内注册商省心。
- 不建议只为了“便宜”选冷门新顶级域。`.ai` 类域名续费通常很贵；`.cn/.com.cn` 更适合只服务国内，但多数场景对公司和备案材料有要求。
- 建议以公司名义注册域名，注册商、域名所有人、网站主体保持一致，后期 ICP 备案和品牌保护都会更顺利。

> 具体价格每年都在变，购买前以注册商实时报价为准；一般 .com 每年几十元到一百多元人民币。

## 免费部署方案

静态站可以做到“零服务器费用”，推荐按优先级考虑：

| 方案 | 费用 | 优点 | 注意点 |
| --- | --- | --- | --- |
| Cloudflare Pages（推荐） | 免费额度充足 | 全球 CDN、免费 HTTPS、自定义域名免费、连接 GitHub 仓库后 push 自动发布 | 免费线路没有中国大陆优化，大陆访问速度看当地网络 |
| GitHub Pages | 免费 | 和 GitHub 仓库天然一体，本仓库已附部署工作流 | 免费计划仓库需 Public；大陆访问稳定性一般 |
| Netlify / Vercel | 免费额度 | 配置简单、预览方便 | 均为海外节点，同样没有大陆访问优化；商用注意免费条款 |

如果目标用户以大陆为主、且需要稳定快速的国内访问，建议后期再升级为：

1. **ICP 备案 + 国内云**（如阿里云/腾讯云）：域名备案通过后，可把静态站放在对象存储 OSS/COS + CDN，费用很低但不是零成本；备案一般需几周。
2. **香港/海外轻量服务器**：免备案，适合低成本过渡，但大陆访问稳定性同样不保证。

对 AI GEO 业务而言，海外免费托管通常已足够——国内主流 AI 抓取官网内容时不受大陆用户访问速度影响，重点是网站结构、内容质量和可验证信源。可以先免费上线验证，等业务需要再做国内加速。

## 推送到 GitHub 并部署

本地 git 仓库已在项目内初始化。后续只需：

1. 在 GitHub 网页新建一个仓库（公开仓库即可用 GitHub Pages 免费发布）。
2. 按 GitHub 提示把本仓库推上去：

```bash
git remote add origin https://github.com/你的用户名/仓库名.git
git branch -M main
git push -u origin main
```

3. 若用 **GitHub Pages**：仓库 Settings → Pages → Source 选择 `GitHub Actions`，Push 后自动发布。
4. 若用 **Cloudflare Pages**：Cloudflare 控制台 → Pages → Create → Connect to Git；构建命令填 `npm run build`，输出目录填 `dist`，Node 版本选 22。

## 给 AI GEO 预留的技术基础

- 每个页面有独立 `<title>`、description、canonical、Open Graph 标签。
- 全站注入 Organization / WebSite 结构化数据，后续可继续加 FAQ、Service、Article 等 Schema。
- Astro 默认输出静态 HTML，无客户端 JS 负担，内容全部可直接被 AI 抓取。
- 已配置 sitemap 和 robots，正式域名替换后自动生成站点地图。
