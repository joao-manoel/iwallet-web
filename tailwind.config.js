module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      white: {
        500: '#fff'
      },
      ice: {
        500: '#EBE9EA'
      },
      bg: {
        500: '#E4E4E4'
      },
      blue: {
        500: '#5983FB'
      },
      purple: {
        500: '#765AE8'
      },
      red: {
        500: '#F65164'
      },
      green: {
        500: '#62BE76'
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
