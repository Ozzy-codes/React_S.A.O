/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        'xs': '480px'
      },
      keyframes: {
        translateLeft: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" }
        },
        shimmer: {
          "100%": { transform: "translateX(100%)" }
        }
      },
      animation: {
        translateLeft: "translateLeft .5s ease-out",
        shimmer: "shimmer 1.5s infinite"
      },
      boxShadow: {
        'header': 'var(--header-shadow)'
      }
    }
  },
  plugins: []
}
