/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        slide: {
          "0%": { opacity: "1", transform: "scale(1.0)" },
          "30%": { opacity: "1" },
          "33%": { opacity: "0" },
          "100%": { opacity: "0", transform: "scale(1.05)" }
        },
        slide2: {
          "0%": { opacity: "0" },
          "33%": { opacity: "1", transform: "scale(1.0)" },
          "63%": { opacity: "1" },
          "66%": { opacity: "0" },
          "100%": { opacity: "0", transform: "scale(1.05)" }
        },
        slide3: {
          "0%": { opacity: "0" },
          "66%": { opacity: "1", transform: "scale(1.0)" },
          "96%": { opacity: "1" },
          "100%": { opacity: "0", transform: "scale(1.05)" }
        }
      },
      animation: {
        "slide_12s_infinite": "slide 12s infinite",
        "slide2_12s_infinite": "slide2 12s infinite",
        "slide3_12s_infinite": "slide3 12s infinite"
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
