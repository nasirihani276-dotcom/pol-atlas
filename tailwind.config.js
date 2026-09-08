/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0057ff',
        dark: '#030014', // پس‌زمینه فضایی
        accent: '#00e5ff',
        neon: '#39ff14',
        gold: '#ffd700'
      },
      fontFamily: {
        sans: ['Vazirmatn', 'sans-serif'],
      },
      animation: {
        'spin-slow': 'spin 20s linear infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 3s infinite',
        'sheen': 'sheen 4s infinite',
        'grid-move': 'gridMove 20s linear infinite'
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-30px) rotate(10deg)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4', boxShadow: '0 0 20px rgba(255, 215, 0, 0.3)' },
          '50%': { opacity: '1', boxShadow: '0 0 50px rgba(255, 215, 0, 0.8)' }
        },
        sheen: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' }
        },
        gridMove: {
          '0%': { backgroundPosition: '0 0' },
          '100%': { backgroundPosition: '100px 100px' }
        }
      }
    },
  },
  plugins: [],
}
