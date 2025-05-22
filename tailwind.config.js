/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Nunito', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#E6F5F5',
          100: '#CCE9E9',
          200: '#99D3D3',
          300: '#66BEBE',
          400: '#4DC7C7',
          500: '#38B2AC', // Primary teal
          600: '#2C8F8A',
          700: '#236C68',
          800: '#194845',
          900: '#0E2423',
        },
        secondary: {
          50: '#FDF3EA',
          100: '#FCE7D5',
          200: '#F9CFAB',
          300: '#F6B781',
          400: '#F19F57',
          500: '#ED8936', // Secondary orange
          600: '#E66A0E',
          700: '#B5530B',
          800: '#843D08',
          900: '#422004',
        },
        accent: {
          50: '#F0EDF8',
          100: '#E1DCF2',
          200: '#C3B8E5',
          300: '#A594D7',
          400: '#9480D0',
          500: '#805AD5', // Accent purple
          600: '#6738CD',
          700: '#522DA4',
          800: '#3E227B',
          900: '#1F113D',
        },
        success: {
          500: '#48BB78',
        },
        warning: {
          500: '#ECC94B',
        },
        error: {
          500: '#F56565',
        },
      },
      animation: {
        'bounce-slow': 'bounce 3s infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
};