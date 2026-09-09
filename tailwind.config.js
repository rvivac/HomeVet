/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-bg': '#FAF9F6',
        'brand-card': '#FFFFFF',
        'brand-cream': '#FDFBF7',
        'brand-green': {
          50: '#F2F8F5',
          100: '#E2F1E9', // verde menta pastel suave
          200: '#C5E2D3',
          300: '#9DCDB6',
          400: '#64AE8D',
          500: '#348B67',
          600: '#277053',
          700: '#205A43',
          800: '#1B4D3E', // verde escuro acolhedor
          900: '#12362B',
        },
        'brand-yellow': {
          50: '#FFFEF5',
          100: '#FEF9E1', // amarelo manteiga suave
          200: '#FEF3C3',
          300: '#FDE68A',
          400: '#FBBF24',
          500: '#F59E0B',
        },
        'brand-peach': {
          50: '#FFF9F7',
          100: '#FDF1ED',
          200: '#FCE0D7',
          300: '#F9BDB0',
        },
        'whatsapp': {
          DEFAULT: '#25D366',
          hover: '#20BA5A',
          dark: '#128C7E',
          glow: 'rgba(37, 211, 102, 0.4)',
        }
      },
      fontFamily: {
        display: ['Quicksand', 'sans-serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 8px 30px -4px rgba(27, 77, 62, 0.08)',
        'soft-hover': '0 16px 36px -4px rgba(27, 77, 62, 0.14)',
        'pill': '0 4px 14px 0 rgba(37, 211, 102, 0.35)',
        'card': '0 10px 25px -3px rgba(0, 0, 0, 0.04), 0 4px 6px -2px rgba(0, 0, 0, 0.02)',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      animation: {
        'float': 'float 4s ease-in-out infinite',
        'float-slow': 'float 6s ease-in-out infinite',
        'pulse-ring': 'pulse-ring 2.2s cubic-bezier(0.215, 0.61, 0.355, 1) infinite',
        'bounce-subtle': 'bounce-subtle 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        'pulse-ring': {
          '0%': { transform: 'scale(0.95)', boxShadow: '0 0 0 0 rgba(37, 211, 102, 0.7)' },
          '70%': { transform: 'scale(1)', boxShadow: '0 0 0 16px rgba(37, 211, 102, 0)' },
          '100%': { transform: 'scale(0.95)', boxShadow: '0 0 0 0 rgba(37, 211, 102, 0)' },
        },
        'bounce-subtle': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-4px)' },
        }
      }
    },
  },
  plugins: [],
}
