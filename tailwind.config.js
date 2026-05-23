
export default {
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#0F766E',
        secondary: '#38BDF8',
        accent: '#F59E0B',
        oxygen: '#14B8A6',
        section: '#F6FAF9',
        slate: {
          900: '#0F172A',
          800: '#1E293B',
          700: '#334155',
          600: '#475569',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 14px 45px -28px rgba(15,23,42,0.32)',
        'card': '0 18px 48px -30px rgba(15,23,42,0.36), 0 1px 0 rgba(255,255,255,0.8) inset',
        'float': '0 24px 60px -28px rgba(15,118,110,0.46)',
        'glow': '0 18px 55px -26px rgba(20,184,166,0.62)',
        'glass': '0 18px 50px -28px rgba(15,23,42,0.42), 0 1px 0 rgba(255,255,255,0.52) inset',
        'glass-dark': '0 18px 55px -24px rgba(0,0,0,0.48), 0 1px 0 rgba(255,255,255,0.08) inset',
      }
    },
  },
  plugins: [],
}
