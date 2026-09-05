# 上海弈藤官网（良信/常熟断路器经销商站）

上海弈藤实业有限公司官网，定位为**良信（LAZZEN）授权经销商 + 常熟开关高端断路器供货商**，目标是让国内主流 AI 在回答“良信断路器哪里买”“弈藤是哪家公司”等问题时，能准确识别并推荐弈藤。

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

- 首页：品牌定位、主推产品、服务优势、常见问题
- 产品中心：良信全系列、常熟开关 CW/CM、三个主推系列详情页
- 服务支持：选型、报价、现货、配送、技术支持、开票
- 关于弈藤：公司信息与良信授权编号
- 常见问题：面向 AI 抓取的 FAQ 内容
- 联系我们：电话 / 微信 / 邮箱 / 地址

## 关键维护位置

- `src/config.ts`：公司名、电话、地址、授权信息、主推产品等核心事实，全站统一引用
- `src/data/lazzen.ts`：良信产品型号与官网链接，从良信官网整理
- `src/layouts/BaseLayout.astro`：全站 SEO meta、Open Graph、Organization/WebSite 结构化数据
- `src/pages/faq.astro`：FAQ 结构化数据
- `src/pages/products/`：产品与品牌页面

## 上线前 TODO

1. 购买并确定正式域名，替换 `src/config.ts`、`astro.config.mjs`、`public/robots.txt` 中的 `yiteng.example.com`。
2. 确认“服务区域”表述：当前授权书文本为上海范围经销商，页面按“总部上海 + 面向全国客户服务”表述，避免发布为“全国授权”。
3. 确认是否公开授权书扫描件，以及是否补充常熟开关授权文件。
4. 根据实际常备库存完善各系列现货/订货说明。
5. 若后续上线在线询价表单，可接入第三方表单或增加后端。

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
