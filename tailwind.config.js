/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/*.astro",
    "./src/components/*.astro",
    "./src/layouts/*.astro",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      white: "#FFFFFF",
      black: "#000000",
      dark: "#222831",
      teal: "#00ADB5",
      light: "#EEEEEE",
      grey: {
        100: "#F8F8F8",
        200: "#F0F0F0",
        300: "#E8E8E8",
        400: "#D0D0D0",
        500: "#B8B8B8",
        600: "#A0A0A0",
        700: "#888888",
        800: "#707070",
        900: "#585858",
      },
      // grey: "#393E46",
    },
    extend: {},
  },
  plugins: [],
};
