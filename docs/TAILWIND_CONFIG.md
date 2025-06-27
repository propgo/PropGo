# PropGo Tailwind CSS Configuration

This configuration implements the PropGo design system with the exact colors, spacing, and component styles from the design specifications.

## Tailwind Config Files

### Root tailwind.config.js
```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './apps/web/src/**/*.{js,ts,jsx,tsx,mdx}',
    './apps/mobile/src/**/*.{js,ts,jsx,tsx}',
    './packages/ui/src/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // PropGo Primary Colors
        primary: {
          50: '#F0F4FF',
          100: '#E1EAFF',
          200: '#C3D4FF',
          300: '#A4BFFF',
          400: '#86A9FF',
          500: '#4A6CF7', // main
          600: '#3B5BF0', // dark
          700: '#2C45E9',
          800: '#1D2FE2',
          900: '#0E19DB',
          DEFAULT: '#4A6CF7',
          light: '#6B7EFF',
          dark: '#3B5BF0',
        },
        // PropGo Secondary Colors
        secondary: {
          50: '#ECFDF5',
          100: '#D1FAE5',
          200: '#A7F3D0',
          300: '#6EE7B7',
          400: '#34D399',
          500: '#10B981', // main
          600: '#059669', // dark
          700: '#047857',
          800: '#065F46',
          900: '#064E3B',
          DEFAULT: '#10B981',
          light: '#34D399',
          dark: '#059669',
        },
        // PropGo Accent
        accent: {
          DEFAULT: '#F59E0B',
          light: '#FCD34D',
          dark: '#D97706',
        },
        // PropGo Neutral Scale
        neutral: {
          50: '#F8FAFC',
          100: '#F1F5F9',
          200: '#E2E8F0',
          300: '#CBD5E1',
          400: '#94A3B8',
          500: '#64748B',
          600: '#475569',
          700: '#334155',
          800: '#1E293B',
          900: '#0F172A',
        },
        // PropGo Background System
        background: {
          primary: '#FFFFFF',
          secondary: '#F8FAFC',
          tertiary: '#F1F5F9',
          card: '#FFFFFF',
        },
        // PropGo Text System
        text: {
          primary: '#0F172A',
          secondary: '#475569',
          tertiary: '#64748B',
          inverse: '#FFFFFF',
          muted: '#94A3B8',
        },
        // PropGo Border System
        border: {
          light: '#E2E8F0',
          medium: '#CBD5E1',
          dark: '#94A3B8',
          DEFAULT: '#E2E8F0',
        },
        // PropGo Status Colors
        status: {
          success: '#10B981',
          warning: '#F59E0B',
          error: '#EF4444',
          info: '#3B82F6',
        },
        // Dark Mode Overrides
        dark: {
          primary: {
            50: '#0E19DB',
            100: '#1D2FE2',
            200: '#2C45E9',
            300: '#3B5BF0',
            400: '#4A6CF7',
            500: '#6B7EFF',
            600: '#8B9AFF',
            700: '#A4BFFF',
            800: '#C3D4FF',
            900: '#F0F4FF',
            DEFAULT: '#6B7EFF',
          },
          background: {
            primary: '#0F172A',
            secondary: '#1E293B',
            tertiary: '#334155',
            card: '#1E293B',
          },
          text: {
            primary: '#F8FAFC',
            secondary: '#CBD5E1',
            tertiary: '#94A3B8',
            inverse: '#0F172A',
            muted: '#64748B',
          },
        },
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      fontSize: {
        xs: ['0.75rem', { lineHeight: '1rem' }],
        sm: ['0.875rem', { lineHeight: '1.25rem' }],
        base: ['1rem', { lineHeight: '1.5rem' }],
        lg: ['1.125rem', { lineHeight: '1.75rem' }],
        xl: ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      borderRadius: {
        'none': '0px',
        'sm': '0.125rem',
        'base': '0.25rem',
        'md': '0.375rem',
        'lg': '0.5rem',
        'xl': '0.75rem',
        '2xl': '1rem',
        '3xl': '1.5rem',
        'full': '9999px',
      },
      boxShadow: {
        'sm': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        'base': '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        'md': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'xl': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        'inner': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
        'card': '0 4px 12px rgba(0, 0, 0, 0.08)',
        'elevated': '0 8px 30px rgba(0, 0, 0, 0.12)',
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #4A6CF7 0%, #6B7EFF 100%)',
        'gradient-secondary': 'linear-gradient(135deg, #10B981 0%, #34D399 100%)',
        'gradient-accent': 'linear-gradient(135deg, #F59E0B 0%, #FCD34D 100%)',
        'gradient-brand': 'linear-gradient(135deg, #4A6CF7 0%, #10B981 100%)',
        'gradient-dark': 'linear-gradient(135deg, #1E293B 0%, #334155 100%)',
        'gradient-overlay': 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.6) 100%)',
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'slide-down': 'slideDown 0.3s ease-out',
        'scale-in': 'scaleIn 0.2s ease-out',
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
        slideDown: {
          '0%': { transform: 'translateY(-10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
      transitionDuration: {
        '150': '150ms',
        '300': '300ms',
        '500': '500ms',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
}
```

### Web App tailwind.config.js (apps/web)
```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [require('../../tailwind.config.js')],
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    '../../packages/ui/src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      // Web-specific extensions
      screens: {
        'xs': '475px',
      },
    },
  },
}
```

### Mobile App tailwind.config.js (apps/mobile)
```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [require('../../tailwind.config.js')],
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    '../../packages/ui/src/**/*.{js,ts,jsx,tsx}',
  ],
  plugins: [],
}
```

## Component-Specific Classes

### Navigation Classes
```css
/* Sidebar Navigation */
.sidebar {
  @apply bg-neutral-800 w-60 border-none shadow-none;
}

.sidebar-item {
  @apply bg-transparent text-neutral-300 p-3 rounded-lg mx-3 my-0.5;
}

.sidebar-item:hover {
  @apply bg-neutral-700 text-neutral-50;
}

.sidebar-item.active {
  @apply bg-primary-500 text-white font-semibold;
}

.topbar {
  @apply bg-white border-b border-border-light h-16 shadow-sm;
}
```

### Card Classes
```css
/* Default Card */
.card {
  @apply bg-white border border-border-light rounded-xl shadow-card p-6;
}

/* Metric Card */
.metric-card {
  @apply bg-white border-none rounded-xl shadow-card p-6;
}

.metric-icon {
  @apply bg-primary-100 text-primary-500 rounded-lg p-3 w-6 h-6;
}

/* Property Card */
.property-card {
  @apply bg-white border border-border-light rounded-xl shadow-sm overflow-hidden;
}

.property-image {
  @apply rounded-t-lg aspect-video;
}
```

### Button Classes
```css
/* Primary Button */
.btn-primary {
  @apply bg-primary-500 text-white border-none rounded-lg px-6 py-3 font-semibold text-sm shadow-sm;
  @apply hover:bg-primary-600 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary-400/40;
  @apply active:bg-primary-700 active:translate-y-0;
  @apply disabled:bg-neutral-400 disabled:cursor-not-allowed;
}

/* Secondary Button */
.btn-secondary {
  @apply bg-background-secondary text-text-secondary border border-border-light rounded-lg px-6 py-3 font-semibold text-sm;
  @apply hover:bg-background-tertiary hover:border-border-medium;
}

/* Ghost Button */
.btn-ghost {
  @apply bg-transparent text-text-secondary border-none rounded-lg px-6 py-3 font-semibold text-sm;
  @apply hover:bg-background-tertiary;
}

/* Icon Button */
.btn-icon {
  @apply bg-transparent text-text-tertiary border-none rounded-lg p-2;
  @apply hover:bg-background-tertiary hover:text-text-secondary;
}
```

### Form Classes
```css
/* Input */
.input {
  @apply bg-white border border-border-light rounded-lg px-4 py-3 text-sm text-text-primary placeholder-text-muted;
  @apply focus:border-primary-500 focus:ring-4 focus:ring-primary-100;
}

/* Select */
.select {
  @apply bg-white border border-border-light rounded-lg px-4 py-3 text-sm text-text-primary;
}

/* Search Box */
.search-box {
  @apply bg-background-secondary border border-border-light rounded-lg py-3 pl-10 pr-4 text-sm;
}

.search-icon {
  @apply text-text-muted absolute left-3 top-1/2 transform -translate-y-1/2;
}
```

### Badge Classes
```css
/* Status Badges */
.badge-active {
  @apply bg-green-100 text-green-800 border border-green-200 rounded-full px-3 py-1 text-xs font-semibold;
}

.badge-pending {
  @apply bg-yellow-100 text-yellow-800 border border-yellow-200 rounded-full px-3 py-1 text-xs font-semibold;
}

.badge-inactive {
  @apply bg-background-tertiary text-text-tertiary border border-border-light rounded-full px-3 py-1 text-xs font-semibold;
}

/* Type Badges */
.badge-sale {
  @apply bg-green-100 text-green-800 rounded px-2 py-0.5 text-xs font-semibold;
}

.badge-rent {
  @apply bg-blue-100 text-blue-800 rounded px-2 py-0.5 text-xs font-semibold;
}
```

### Table Classes
```css
/* Table Container */
.table-container {
  @apply bg-white border border-border-light rounded-xl overflow-hidden;
}

/* Table Header */
.table-header {
  @apply bg-background-secondary text-text-secondary text-xs font-semibold uppercase tracking-wider px-6 py-3;
}

/* Table Row */
.table-row {
  @apply bg-white border-b border-background-tertiary px-6 py-4;
  @apply hover:bg-background-secondary;
}

/* Table Cell */
.table-cell {
  @apply text-text-primary text-sm;
}
```

### Metric Classes
```css
/* Metrics Container */
.metrics-grid {
  @apply grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4;
}

/* Metric Value */
.metric-value {
  @apply text-3xl font-bold text-text-primary leading-tight;
}

/* Metric Label */
.metric-label {
  @apply text-sm text-text-tertiary font-medium;
}

/* Metric Change Positive */
.metric-change-positive {
  @apply text-status-success bg-green-100 px-2 py-0.5 rounded-full text-xs font-semibold;
}

/* Metric Change Negative */
.metric-change-negative {
  @apply text-status-error bg-red-100 px-2 py-0.5 rounded-full text-xs font-semibold;
}
```

### Notification Classes
```css
/* Notification Container */
.notification-container {
  @apply bg-white border border-border-light rounded-xl shadow-card max-w-sm;
}

/* Notification Item */
.notification-item {
  @apply p-4 border-b border-background-tertiary;
}

/* Notification Types */
.notification-urgent {
  @apply bg-red-50 border-red-200;
}

.notification-warning {
  @apply bg-yellow-50 border-yellow-200;
}

.notification-info {
  @apply bg-blue-50 border-blue-200;
}

.notification-success {
  @apply bg-green-50 border-green-200;
}
```

### Modal Classes
```css
/* Modal Overlay */
.modal-overlay {
  @apply fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm;
}

/* Modal Container */
.modal-container {
  @apply bg-white rounded-2xl shadow-2xl max-w-lg mx-auto;
}

/* Modal Header */
.modal-header {
  @apply px-6 pt-6 pb-0 border-none;
}

/* Modal Body */
.modal-body {
  @apply p-6;
}

/* Modal Footer */
.modal-footer {
  @apply px-6 pb-6 pt-0 flex justify-end gap-3;
}
```

### Layout Classes
```css
/* Sidebar Layout */
.layout-sidebar {
  @apply w-60 bg-neutral-800;
}

/* Main Content */
.layout-main {
  @apply ml-60 p-8 bg-background-secondary min-h-screen;
}

/* Container */
.container-main {
  @apply max-w-6xl mx-auto px-4;
}

/* Grid Layouts */
.grid-auto {
  @apply grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4;
}
```

## Dark Mode Classes

```css
/* Dark mode variants */
.dark .sidebar {
  @apply bg-dark-background-secondary;
}

.dark .card {
  @apply bg-dark-background-card border-dark-text-tertiary;
}

.dark .btn-primary {
  @apply bg-dark-primary-500;
}

.dark .input {
  @apply bg-dark-background-card border-dark-text-tertiary text-dark-text-primary;
}

.dark .layout-main {
  @apply bg-dark-background-primary;
}
```

## Usage Guidelines

1. **Use semantic color classes**: `text-text-primary` instead of `text-gray-900`
2. **Follow component patterns**: Use predefined component classes like `.btn-primary`
3. **Maintain consistency**: Stick to the design system spacing and colors
4. **Dark mode ready**: All components support dark mode automatically
5. **Mobile responsive**: Use responsive prefixes (`sm:`, `md:`, `lg:`, `xl:`)

This configuration ensures complete alignment with the PropGo design system while using the exact package versions specified in PACKAGE-COMPLETEJSON.md. 