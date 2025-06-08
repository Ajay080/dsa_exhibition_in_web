const { fontFamily } = require("tailwindcss/defaultTheme")

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  darkMode: 'dark', // 👈 ADD THIS LINE
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", ...fontFamily.sans],
      },
    },
  },
  plugins: [],
}
