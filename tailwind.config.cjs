/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      black: "#000",
      green: {
        light: "#85bb4e",
        DEFAULT: "hsl(99deg 33% 35%)",
        dark: "hsl(99deg 33% 25%)",
      },
      red: {
        DEFAULT: "hsl(358deg 68% 52%)",
        dark: "hsl(358deg 68% 42%)",
      },
      grey: {
        light: "#fafafa",
        DEFAULT: "#333",
      },
      yellow: {
        light: "#f9d467",
        DEFAULT: "#ddbc5b",
        dark: "#c7aa52",
      },
    },
    fontSize: {
      sm: ["1.2rem", "1.5"],
      base: ["1.4rem", "1.5"],
      lg: ["2.4rem", "1.5"],
    },
    fontWeight: {
      normal: 400,
      bold: 700,
    },
    extend: {
      fontFamily: {
        sans: ["Open Sans", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
