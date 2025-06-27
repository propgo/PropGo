/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './apps/**/*.{js,ts,jsx,tsx,mdx}',
    './packages/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // PropGo Brand Colors
        primary: {
          50: '#EEF2FF',
          100: '#E0E7FF',
          200: '#C7D2FE',
          300: '#A5B4FC',
          400: '#818CF8',
          500: '#4A6CF7', // Main Primary
          600: '#4338CA',
          700: '#3730A3',
          800: '#312E81',
          900: '#1E1B4B',
        },
        secondary: {
          50: '#ECFDF5',
          100: '#D1FAE5',
          200: '#A7F3D0',
          300: '#6EE7B7',
          400: '#34D399',
          500: '#10B981', // Main Secondary
          600: '#059669',
          700: '#047857',
          800: '#065F46',
          900: '#064E3B',
        },
        // Malaysian Theme Colors
        malaysia: {
          red: '#CC0000',
          blue: '#0066CC',
          gold: '#FFD700',
        },
        // Neutral Colors
        gray: {
          50: '#F8FAFC',
          100: '#F1F5F9',
          200: '#E2E8F0',
          300: '#CBD5E1',
          400: '#94A3B8',
          500: '#64748B',
          600: '#475569',
          700: '#334155',
          800: '#1E293B', // Sidebar Dark
          900: '#0F172A',
        },
        // Status Colors
        success: {
          50: '#F0FDF4',
          500: '#22C55E',
          600: '#16A34A',
        },
        warning: {
          50: '#FFFBEB',
          500: '#F59E0B',
          600: '#D97706',
        },
        error: {
          50: '#FEF2F2',
          500: '#EF4444',
          600: '#DC2626',
        },
        info: {
          50: '#EFF6FF',
          500: '#3B82F6',
          600: '#2563EB',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Menlo', 'Monaco', 'monospace'],
      },
      fontSize: {
        // PropGo Typography Scale
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
      },
      spacing: {
        // PropGo Spacing System
        '18': '4.5rem',
        '88': '22rem',
        'sidebar': '16rem',
        'topbar': '4rem',
      },
      borderRadius: {
        'propgo': '0.5rem',
        'propgo-lg': '0.75rem',
        'propgo-xl': '1rem',
      },
      boxShadow: {
        'propgo': '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        'propgo-md': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'propgo-lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'propgo-xl': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'pulse-slow': 'pulse 3s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
    // PropGo Custom Components
    function({ addComponents, theme }) {
      addComponents({
        // Buttons
        '.propgo-btn-primary': {
          '@apply bg-primary-500 hover:bg-primary-600 text-white font-medium py-2 px-4 rounded-propgo transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2': {},
        },
        '.propgo-btn-secondary': {
          '@apply bg-gray-100 hover:bg-gray-200 text-gray-900 font-medium py-2 px-4 rounded-propgo transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2': {},
        },
        '.propgo-btn-danger': {
          '@apply bg-error-500 hover:bg-error-600 text-white font-medium py-2 px-4 rounded-propgo transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-error-500 focus:ring-offset-2': {},
        },
        // Cards
        '.propgo-card': {
          '@apply bg-white dark:bg-gray-800 rounded-propgo-lg shadow-propgo border border-gray-200 dark:border-gray-700': {},
        },
        '.propgo-card-header': {
          '@apply px-6 py-4 border-b border-gray-200 dark:border-gray-700': {},
        },
        '.propgo-card-body': {
          '@apply px-6 py-4': {},
        },
        // Inputs
        '.propgo-input': {
          '@apply block w-full rounded-propgo border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:border-primary-500 focus:ring-primary-500': {},
        },
        // Badges
        '.propgo-badge': {
          '@apply inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium': {},
        },
        '.propgo-badge-success': {
          '@apply propgo-badge bg-success-100 text-success-800': {},
        },
        '.propgo-badge-warning': {
          '@apply propgo-badge bg-warning-100 text-warning-800': {},
        },
        '.propgo-badge-error': {
          '@apply propgo-badge bg-error-100 text-error-800': {},
        },
        '.propgo-badge-info': {
          '@apply propgo-badge bg-info-100 text-info-800': {},
        },
        // Malaysian specific
        '.propgo-malaysia-flag': {
          background: 'linear-gradient(to right, #CC0000 50%, #FFFFFF 50%)',
        },
      })
    },
  ],
} 