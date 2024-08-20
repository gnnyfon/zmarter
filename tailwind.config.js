/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      carrot: "#FBA847",
      spinach: "#4EA239",
      matcha: "#ABCB92",
      secondary: "#C5E8A9",
      soil: "#A58282",
      background1: "#FAE6D4",
      background2: "#EDEBEB",
      textBlack: "#000000",
      textSecondary: "#828282",
      garlic: "#ffffff",
    },
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
    },
  },
};