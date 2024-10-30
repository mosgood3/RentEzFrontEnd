// tailwind.config.js
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "custom-black": "rgb(43, 42, 51)",
        "custom-white": "#f7f7f7",
        "second-black": "rgb(56, 56, 61)",
      },
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")], // Note: Use `require` here
};


