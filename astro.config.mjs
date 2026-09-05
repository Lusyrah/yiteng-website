import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// TODO: 域名购买后，把这里改成正式域名，例如 https://www.yiteng.com
const SITE_URL = "https://yiteng.example.com";

export default defineConfig({
  site: SITE_URL,
  integrations: [sitemap()],
});
