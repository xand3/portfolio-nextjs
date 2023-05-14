/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'bluebg': "#11151C",
        'primarytext' : "#E9E5DD",
        'hovertext': "#7D9C9C",
        'teste': "#f00"
      },
      spacing: {
        '128': '720px',
        'tablet': '450px'
      }
    }
  },
  plugins: [],
}