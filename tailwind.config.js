/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat'],
      },
      colors: {
        primary: '#302C42',
        secondary: '#343045',
        gradientLeft: '#8176AF',
        gradientRight: '#C0B7E8',
        purpleCorner: '#211E2E',
        purpleMiddle: '#3A3456',
      },
      fontSize: {
        h1: 'clamp(2.25rem, calc(2.03rem + 1.09vw), 2.88rem);', //42px
        h2: 'clamp(1.50rem, calc(1.15rem + 1.74vw), 2.50rem)', //36px
        h3: '24px',
        paragraph: 'clamp(0.75rem, calc(0.66rem + 0.43vw), 1.00rem)',
      },
    },
  },
  plugins: [],
}
