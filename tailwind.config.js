/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        'neumorphic': '8px 8px 16px #babecc, -8px -8px 16px #ffffff',
        'neumorphic-sm': '4px 4px 8px #babecc, -4px -4px 8px #ffffff',
        'neumorphic-lg': '12px 12px 24px #babecc, -12px -12px 24px #ffffff',
        'neumorphic-floating': '12px 12px 24px #babecc, -12px -12px 24px #ffffff, inset 1px 1px 0 rgba(255,255,255,0.5)',
        'neumorphic-pressed': 'inset 6px 6px 12px #babecc, inset -6px -6px 12px #ffffff',
        'neumorphic-inset': 'inset 4px 4px 8px #babecc, inset -4px -4px 8px #ffffff',
        'led-red': '0 0 10px rgba(255,71,87,0.6)',
        'led-green': '0 0 10px rgba(46,213,115,0.6)',
        'dark-panel': '0 0 30px rgba(0,0,0,0.3)',
      },
      colors: {
        chassis: '#e0e5ec',
        recessed: '#d1d9e6',
        accent: '#ff4757',
        'accent-dark': '#e84142',
        'text-primary': '#2d3436',
        'text-muted': '#4a5568',
        'dark-panel': '#2d3436',
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'scanline': 'scanline 8s linear infinite',
      },
      keyframes: {
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 5px rgba(255,71,87,0.4)' },
          '50%': { boxShadow: '0 0 20px rgba(255,71,87,0.8)' },
        },
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
      },
    },
  },
  plugins: [],
}
