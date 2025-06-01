/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#FFEBEB',
          100: '#FFD6D6',
          200: '#FFADAD',
          300: '#FF8585',
          400: '#FF5C5C',
          500: '#FF3A3A', // Main red
          600: '#E62E2E',
          700: '#CC2323',
          800: '#B31919',
          900: '#990F0F',
        },
        dark: {
          50: '#EAEAEA',
          100: '#D5D5D5',
          200: '#ABABAB',
          300: '#818181',
          400: '#575757',
          500: '#2D2D2D',
          600: '#222222',
          700: '#1A1A1A',
          800: '#141414',
          900: '#0F0F0F', // Main black
        },
        light: {
          50: '#FFFFFF', // Main white
          100: '#FAFAFA',
          200: '#F5F5F5',
          300: '#F0F0F0',
          400: '#E8E8E8',
          500: '#E0E0E0',
          600: '#D0D0D0',
          700: '#C0C0C0',
          800: '#B0B0B0',
          900: '#A0A0A0',
        },
        success: {
          500: '#10B981',
        },
        warning: {
          500: '#F59E0B',
        },
        error: {
          500: '#EF4444',
        },
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        opensans: ['Open Sans', 'sans-serif'],
      },
      spacing: {
        '8': '8px',
        '16': '16px',
        '24': '24px',
        '32': '32px',
        '40': '40px',
        '48': '48px',
        '56': '56px',
        '64': '64px',
      },
      borderRadius: {
        'sm': '4px',
        'md': '8px',
        'lg': '16px',
        'xl': '24px',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}