/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        purple: {
          50: '#F1E6EF',
          100: '#DAB3D0',
          200: '#BF80A9',
          300: '#A24D82',
          400: '#80325E',
          500: '#461541',
          600: '#3F133B',
          700: '#351030',
          800: '#290C25',
          900: '#180616',
        },
      }
    },
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/typography"),
  ],
}
