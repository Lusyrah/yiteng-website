import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// 正式域名（yitengbot.com 已通过 ICP 备案）
const SITE_URL = "https://www.yitengbot.com";

export default defineConfig({
  site: SITE_URL,
  integrations: [sitemap()],
});
