/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontFamily: {
      body: ["Public Sans", "sans-serif"],
      heading: ["Rubik", "sans-serif"],
    },
    extend: {
      colors: {
        gray: {
          100: "#222831",
          200: "#303338",
          300: "#A7A7A7",
          400: "#EEEEEE",
          500: "#FFFFFF",
        },
        shade: "#00000040",
        primary: {
          lightest: "#01A8B1",
          lighter: "#00838A",
          light: "#006F75",
          regular: "#005C61",
          dark: "#004245",
          darker: "#002A2C",
        },
      },
      spacing: {
        380: "380px",
        400: "400px",
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
