/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          50: '#eaeaea',
          100: '#bfbfbf',
          200: '#a0a0a0',
          300: '#757575',
          400: '#5a5a5a',
          500: '#313131',
          600: '#2d2d2d',
          700: '#232323',
          800: '#1b1b1b',
          900: '#151515',
        },
        cyan: {
          50: '#e8f6f8',
          100: '#b7e4e9',
          200: '#95d7df',
          300: '#64c4d0',
          400: '#46b9c7',
          500: '#18a7b9',
          600: '#1698a8',
          700: '#117783',
          800: '#0d5c66',
          900: '#0a464e'
        },
      }
    },
  },
  plugins: [],
}
