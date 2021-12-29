module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'main-gray': '#1d2025',
        'main': '#E7E4D5'
      }
    },
  },
  plugins: [
    require('@themesberg/flowbite/plugin')
  ],
}
