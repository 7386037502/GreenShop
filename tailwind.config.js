/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        green: {
          50: "#f2f9f3",
          100: "#e9f6eb",
          200: "#ccebd2",
          300: "#a8dcb2",
          400: "#75c783",
          500: "#46a358",
          600: "#3d914d",
          700: "#2f7b3e",
          800: "#255f31",
          900: "#194523"
        }
      },
      boxShadow: {
        soft: "0 8px 30px rgba(70,163,88,.08)"
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"]
      }
    }
  },
  plugins: []
}