/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
    './node_modules/@frostui/tailwindcss/**/*.js'
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@frostui/tailwindcss/plugin'),
  ],
}

