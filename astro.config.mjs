import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({
  // base: "/beta",
  site: "https://graasp.org",
  integrations: [
    tailwind(),
    partytown({
      config: {
        forward: ["dataLayer.push"],
      },
    }),
  ],
  experimental: {
    i18n: {
      defaultLocale: "en",
      locales: ["en", "fr", "de"],
      // routingStrategy: "prefix-always",
    },
  },
});
