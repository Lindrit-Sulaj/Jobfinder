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
        neutral: {
          '850': 'rgb(30, 30, 30)',
          '80': '#e6f3ef'
        }
      }
    },
  },
  plugins: [],
  darkMode: 'class'
}
