const graasp = "#5050d2";
const player = "#009EFF";
const builder = "#1ECAA5";
const library = "#9300C6";
const analytics = "#F2B14F";
const account = "#0707A3";
const graaspDark = "#0707A3";
const graaspLight = "#7873D8";
const accentDark = "#61399A";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        graasp,
        player,
        builder,
        library,
        analytics,
        account,
        graaspDark,
        graaspLight,
        accentDark,
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: graasp,
          // secondary: graaspAccent,
          accent: player,
          neutral: "#3d4451",
          "base-100": "#ffffff",

          // spacing: {
          //   test: "5px",
          // },

          h2: {
            fontSize: "2em",
            color: graasp,
          },

          h3: {
            fontSize: "1.5em",
            color: graasp,
          },

          h4: {
            fontSize: "1.2em",
            color: graasp,
          },
        },
      },
    ],
  },
};
