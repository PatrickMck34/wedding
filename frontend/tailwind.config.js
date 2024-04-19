/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      transitionDelay: {
        '0': '0ms',
        '200': '200ms',
        '500': '5000ms',
        '1000': '1000ms',
      },
      fontFamily: {
        'tangerine': ['Tangerine', 'cursive'],
        'parisienne': ['Parisienne', 'cursive']
      }
    },
  },
  plugins: [],
}

