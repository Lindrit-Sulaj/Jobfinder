/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'customBlue': {
          '900': '#08044C',
          '800': '#090560',
          '700': '#0C077D',
          '500': '#1209B4',
          '400': '#150BD0'
        }
      }
    },
  },
  plugins: [],
  darkMode: 'class'
}
