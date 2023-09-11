import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://www.reksio-wet.pl",
  integrations: [tailwind(), sitemap()],
  compressHTML: true,
});
