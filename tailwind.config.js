/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        translateDown: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(0)" }
        }
      },
      animation: {
        translateDown: "translateDown .5s ease-out"
      }
    }
  },
  plugins: []
}
