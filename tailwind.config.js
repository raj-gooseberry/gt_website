const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx,md,mdx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#FBFDF7",
          100: "#FBFDF7",
          200: "#F8FAEF",
          300: "#F0F5E0",
          400: "#EDF3D8",
          500: "#E8F0CE",
          600: "#CCDE92",
          700: "#A9C748",
          800: "#8DA833",
          900: "#657925",
          950: "#48561A"
        },
        secondary: {
          50: "#F8F8F6",
          100: "#F1F2EE",
          200: "#E1E2DA",
          300: "#D0D2C6",
          400: "#BBBEAC",
          500: "#A4A890",
          600: "#93987C",
          700: "#828669",
          800: "#6B6F57",
          900: "#505341",
          950: "#37392D"
        },
        tertiary: {
          50: "#FBFBFE",
          100: "#F7F8FC",
          200: "#ECECF9",
          300: "#E4E5F6",
          400: "#DDDDF4",
          500: "#D2D3F0",
          600: "#9093DA",
          700: "#4B4FC3",
          800: "#2D3086",
          900: "#171845",
          950: "#0B0C22"
        },
        dark: {
          50: "#F7F7F8",
          100: "#EEEEF1",
          200: "#DDDDE4",
          300: "#C6C7D2",
          400: "#B0B1BF",
          500: "#9394A8",
          600: "#83849B",
          700: "#72738D",
          800: "#606177",
          900: "#444555",
          950: "#30303B"
        },
        info: {
          50: "#FEFCFB",
          100: "#FDF8F7",
          200: "#F9EEEB",
          300: "#F7E7E4",
          400: "#F3DDD8",
          500: "#F0D4CE",
          600: "#DB998A",
          700: "#C75F48",
          800: "#893B2A",
          900: "#461E16",
          950: "#230F0B"
        }
      },
      fontFamily: {
        sans: ['var(--font-custom)', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
  darkMode: 'class',
};
