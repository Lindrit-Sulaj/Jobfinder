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
        },
        'dark-purple': '#0D0221',
        'federal-blue': '#0F084B',
        'federal-hover': '#140B66',
        'marian-blue': '#26408B',
        'light-blue': '#A6CFD5',
        'mint-green': '#C2E7D9'
      }
    },
  },
  plugins: [],
  darkMode: 'class'
}
