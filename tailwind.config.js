/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/*.astro",
    "./src/pages/projects/*.astro",
    "./src/components/*.astro",
    "./src/layouts/*.astro",
    "./src/content/*.md",
  ],
  theme: {
    fontFamily: {
      body: ["Public Sans", "sans-serif"],
      heading: ["Rubik", "sans-serif"],
    },
    colors: {
      white: "#ffffff",
      black: "#000000",
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
