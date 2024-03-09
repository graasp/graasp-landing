const graasp = "#5050d2";
const player = "#56B0F8";
const builder = "#00C38B";
const library = "#C658D0";
const analytics = "#FA5B7D";
const account = "#0707A3";
const graaspDark = "#0707A3";
const graaspLight = "#E4DFFF";
const accentDark = "#61399A";
const secondary = "#E4DFFF";
const secondaryContent = "#00639A";
const accent = "#CEE5FF";
const accentContent = "#00639A";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontFamily: {
      sans: ["Nunito", "sans-serif"],
      serif: ["Nunito", "sans-serif"],
    },
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
        background: "#FCF8FF",
        playButtons: "#0A0623",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: graasp,
          secondary,
          accent,
          accentContent,
          neutral: "#3d4451",

          "base-100": "#fefefe",

          // spacing: {
          //   test: "5px",
          // },
        },
      },
    ],
  },
};
