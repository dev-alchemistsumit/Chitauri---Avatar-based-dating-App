// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        cyberpunk: {
          bg: '#0f0f1b',
          accent: '#ff00f7',
          neonBlue: '#00ffe7',
          neonPurple: '#b300ff',
        },
      },
    },
  },
  plugins: [],
};
