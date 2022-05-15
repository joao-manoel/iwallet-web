module.exports = {
  mode: 'jit',
  darkMode: 'class',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'roboto': ['roboto', 'sans-serif'],
      'inter': ['inter', 'sans-serif'],
    },
    extend: {
      colors: {
        background: {
          200: '#272727',
          500: '#212121'
        },
        black: {
          100: '#000000',
          500: '#050505',
          800: '#080808',
        },
        ice: {
          500: '#f8f9fa'
        },
        destak_one: {
          500: '#4a74f4'
        },
        destak_two: {
          500: '#8a3cec'
        }
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
