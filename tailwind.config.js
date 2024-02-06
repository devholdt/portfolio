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
    extend: {
      colors: {
        gray: {
          0: "#222831",
          50: "#313946",
          100: "#3E4858",
          200: "#4b576a",
          300: "#5c6a82",
          400: "#687894",
          500: "#7587a6",
          600: "#8297ba",
          700: "#91a8d0",
          800: "#a5bde8",
          900: "#c8d6f0",
          999: "#eeeeee",
        },
        graydark: {
          0: "#ffffff",
          50: "#eeeeee",
          100: "#a5bde8",
          200: "#91a8d0",
          300: "#8297ba",
          400: "#7587a6",
          500: "#687894",
          600: "#5c6a82",
          700: "#4b576a",
          800: "#3e4858",
          900: "#313946",
          999: "#222831",
          40: "#00000040",
        },
        primary: {
          light: "#00838A",
          regular: "#006F75",
          dark: "#005c61",
          link: "#006F75",
        },
        primarydark: {
          light: "#00deea",
          regular: "#00ADB5",
          dark: "#006065",
          link: "#00ADB5",
        },
      },
      spacing: {
        380: "380px",
        400: "400px",
      },
      boxShadow: {
        light: "1px 2px 5px rgba(0,0,0,0.5)",
        dark: "1px 2px 5px rgba(0,92,97,0.5)",
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
