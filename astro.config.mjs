import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";

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
    icon(),
  ],
  i18n: {
    defaultLocale: "en",
    locales: ["en", "fr", "de", "es"],
    // routingStrategy: "prefix-always",
  },
});
