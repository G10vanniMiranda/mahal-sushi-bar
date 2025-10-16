/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        'header-bg': '#2A2218',
        gold: '#FFD700', // usada em bg-gold
      },
    },
  },
  plugins: [],
}