/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,cjs,ts,tsx,vue}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        "cream": "#F7F2EF",
        "cacao": "#30251D"
      },
      fontFamily: {
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};
