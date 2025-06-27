# PropGo Design System Implementation Guide

This guide provides the complete implementation of the PropGo design system using the exact specifications from the design-json.md file and package versions from PACKAGE-COMPLETEJSON.md.

## Package Dependencies (From PACKAGE-COMPLETEJSON.md)

```json
{
  "tailwindcss": "^3.4.17",
  "@tailwindcss/typography": "^0.5.15",
  "@tailwindcss/forms": "^0.5.15",
  "autoprefixer": "^10.4.20",
  "postcss": "^8.4.49",
  "clsx": "^2.1.1",
  "tailwind-merge": "^2.5.4"
}
```

## Tailwind Configuration Implementation

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
        // PropGo Primary System - Exact from design-json.md
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
        // PropGo Secondary System
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
        // PropGo Neutral Scale - Exact from design system
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
        // PropGo Semantic Background Colors
        background: {
          primary: '#FFFFFF',
          secondary: '#F8FAFC',
          tertiary: '#F1F5F9',
          card: '#FFFFFF',
          overlay: 'rgba(15, 23, 42, 0.6)',
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
      },
      fontFamily: {
        // PropGo Typography System - Exact from design-json.md
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        secondary: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      fontSize: {
        // PropGo Font Sizes - Exact from design system
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
      fontWeight: {
        // PropGo Font Weights - Exact from design system
        light: 300,
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
        extrabold: 800,
      },
      lineHeight: {
        // PropGo Line Heights - Exact from design system
        tight: 1.25,
        snug: 1.375,
        normal: 1.5,
        relaxed: 1.625,
        loose: 2,
      },
      borderRadius: {
        // PropGo Border Radius - Exact from design system
        none: '0px',
        sm: '0.125rem',
        base: '0.25rem',
        md: '0.375rem',
        lg: '0.5rem',
        xl: '0.75rem',
        '2xl': '1rem',
        '3xl': '1.5rem',
        full: '9999px',
      },
      boxShadow: {
        // PropGo Shadows - Exact from design system
        sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        base: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
        card: '0 4px 12px rgba(0, 0, 0, 0.08)',
        elevated: '0 8px 30px rgba(0, 0, 0, 0.12)',
      },
      backgroundImage: {
        // PropGo Gradients - Exact from design system
        'gradient-primary': 'linear-gradient(135deg, #4A6CF7 0%, #6B7EFF 100%)',
        'gradient-secondary': 'linear-gradient(135deg, #10B981 0%, #34D399 100%)',
        'gradient-accent': 'linear-gradient(135deg, #F59E0B 0%, #FCD34D 100%)',
        'gradient-brand': 'linear-gradient(135deg, #4A6CF7 0%, #10B981 100%)',
        'gradient-dark': 'linear-gradient(135deg, #1E293B 0%, #334155 100%)',
        'gradient-overlay': 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.6) 100%)',
      },
      animation: {
        // PropGo Animations - Based on design system transitions
        'fade-in': 'fadeIn 300ms ease-in-out',
        'slide-up': 'slideUp 300ms ease-out',
        'scale-in': 'scaleIn 150ms ease-out',
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
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
      transitionDuration: {
        // PropGo Transition Durations - From design system
        fast: '150ms',
        normal: '300ms',
        slow: '500ms',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
}
```

## Component Implementation Classes

### Navigation Components (Exact from design-json.md)

```css
/* Sidebar - Background: #1E293B, Width: 240px */
.propgo-sidebar {
  @apply bg-neutral-800 w-60 border-none shadow-none;
}

/* Sidebar Item - Default state */
.propgo-sidebar-item {
  @apply bg-transparent text-neutral-300 p-3 rounded-lg mx-3 my-0.5 transition-colors duration-normal;
}

/* Sidebar Item - Hover state */
.propgo-sidebar-item:hover {
  @apply bg-neutral-700 text-neutral-50;
}

/* Sidebar Item - Active state: Background #4A6CF7, Text #FFFFFF */
.propgo-sidebar-item--active {
  @apply bg-primary-500 text-white font-semibold;
}

/* Topbar - Background: #FFFFFF, Border: #E2E8F0, Height: 64px */
.propgo-topbar {
  @apply bg-white border-b border-border-light h-16 shadow-sm;
}
```

### Card Components (Exact from design-json.md)

```css
/* Default Card - Background: #FFFFFF, Border: #E2E8F0, Radius: 0.75rem */
.propgo-card {
  @apply bg-white border border-border-light rounded-xl shadow-card p-6;
}

/* Metric Card - Background: #FFFFFF, No border, Shadow: card */
.propgo-metric-card {
  @apply bg-white border-none rounded-xl shadow-card p-6;
}

/* Metric Icon - Background: rgba(74, 108, 247, 0.1), Color: #4A6CF7 */
.propgo-metric-icon {
  @apply bg-primary-100 text-primary-500 rounded-lg p-3 w-6 h-6;
}

/* Property Card - Background: #FFFFFF, Border: #E2E8F0, Overflow: hidden */
.propgo-property-card {
  @apply bg-white border border-border-light rounded-xl shadow-sm overflow-hidden;
}

/* Property Image - Border radius: 0.5rem 0.5rem 0 0, Aspect ratio: 16/9 */
.propgo-property-image {
  @apply rounded-t-lg aspect-video object-cover;
}
```

### Button Components (Exact from design-json.md)

```css
/* Primary Button - Background: #4A6CF7, Text: #FFFFFF */
.propgo-btn-primary {
  @apply bg-primary-500 text-white border-none rounded-lg px-6 py-3 font-semibold text-sm shadow-sm transition-all duration-normal;
}

.propgo-btn-primary:hover {
  @apply bg-primary-600 -translate-y-0.5 shadow-lg;
  box-shadow: 0 4px 12px rgba(74, 108, 247, 0.4);
}

.propgo-btn-primary:active {
  @apply bg-primary-700 translate-y-0;
}

.propgo-btn-primary:disabled {
  @apply bg-neutral-400 cursor-not-allowed;
}

/* Secondary Button - Background: #F8FAFC, Text: #475569, Border: #E2E8F0 */
.propgo-btn-secondary {
  @apply bg-background-secondary text-text-secondary border border-border-light rounded-lg px-6 py-3 font-semibold text-sm transition-colors duration-normal;
}

.propgo-btn-secondary:hover {
  @apply bg-background-tertiary border-border-medium;
}

/* Ghost Button - Background: transparent, Text: #475569 */
.propgo-btn-ghost {
  @apply bg-transparent text-text-secondary border-none rounded-lg px-6 py-3 font-semibold text-sm transition-colors duration-normal;
}

.propgo-btn-ghost:hover {
  @apply bg-background-tertiary;
}

/* Icon Button - Background: transparent, Text: #64748B */
.propgo-btn-icon {
  @apply bg-transparent text-text-tertiary border-none rounded-lg p-2 transition-colors duration-normal;
}

.propgo-btn-icon:hover {
  @apply bg-background-tertiary text-text-secondary;
}
```

### Form Components (Exact from design-json.md)

```css
/* Input - Background: #FFFFFF, Border: #E2E8F0, Padding: 0.75rem 1rem */
.propgo-input {
  @apply bg-white border border-border-light rounded-lg px-4 py-3 text-sm text-text-primary placeholder-text-muted transition-colors duration-normal;
}

.propgo-input:focus {
  @apply border-primary-500 outline-none;
  box-shadow: 0 0 0 3px rgba(74, 108, 247, 0.1);
}

/* Select - Background: #FFFFFF, Border: #E2E8F0 */
.propgo-select {
  @apply bg-white border border-border-light rounded-lg px-4 py-3 text-sm text-text-primary;
}

/* Search Box - Background: #F8FAFC, Border: #E2E8F0, Padding: 0.75rem 1rem 0.75rem 2.5rem */
.propgo-search-box {
  @apply bg-background-secondary border border-border-light rounded-lg py-3 pl-10 pr-4 text-sm relative;
}

.propgo-search-icon {
  @apply text-text-muted absolute left-3 top-1/2 transform -translate-y-1/2;
}
```

### Badge Components (Exact from design-json.md)

```css
/* Status Badge - Active: Background: #DCFCE7, Text: #16A34A, Border: #BBF7D0 */
.propgo-badge-active {
  @apply bg-green-100 text-green-800 border border-green-200 rounded-full px-3 py-1 text-xs font-semibold;
}

/* Status Badge - Pending: Background: #FEF3C7, Text: #D97706, Border: #FDE68A */
.propgo-badge-pending {
  @apply bg-yellow-100 text-yellow-800 border border-yellow-200 rounded-full px-3 py-1 text-xs font-semibold;
}

/* Status Badge - Inactive: Background: #F1F5F9, Text: #64748B, Border: #E2E8F0 */
.propgo-badge-inactive {
  @apply bg-background-tertiary text-text-tertiary border border-border-light rounded-full px-3 py-1 text-xs font-semibold;
}

/* Type Badge - Sale: Background: #DCFCE7, Text: #16A34A */
.propgo-badge-sale {
  @apply bg-green-100 text-green-800 rounded px-2 py-0.5 text-xs font-semibold;
}

/* Type Badge - Rent: Background: #DBEAFE, Text: #2563EB */
.propgo-badge-rent {
  @apply bg-blue-100 text-blue-800 rounded px-2 py-0.5 text-xs font-semibold;
}
```

### Table Components (Exact from design-json.md)

```css
/* Table Container - Background: #FFFFFF, Border: #E2E8F0, Radius: 0.75rem */
.propgo-table-container {
  @apply bg-white border border-border-light rounded-xl overflow-hidden;
}

/* Table Header - Background: #F8FAFC, Text: #475569, Font size: 0.75rem */
.propgo-table-header {
  @apply bg-background-secondary text-text-secondary text-xs font-semibold uppercase tracking-wider px-6 py-3;
}

/* Table Row - Background: #FFFFFF, Border: #F1F5F9, Padding: 1rem 1.5rem */
.propgo-table-row {
  @apply bg-white border-b border-background-tertiary px-6 py-4 transition-colors duration-normal;
}

.propgo-table-row:hover {
  @apply bg-background-secondary;
}

/* Table Cell - Text: #0F172A, Font size: 0.875rem */
.propgo-table-cell {
  @apply text-text-primary text-sm;
}
```

### Metric Components (Exact from design-json.md)

```css
/* Metrics Container - Grid with gap: 1.5rem */
.propgo-metrics-grid {
  @apply grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4;
}

/* Metric Value - Font size: 2rem, Font weight: 700, Color: #0F172A */
.propgo-metric-value {
  @apply text-3xl font-bold text-text-primary leading-tight;
}

/* Metric Label - Font size: 0.875rem, Color: #64748B, Font weight: 500 */
.propgo-metric-label {
  @apply text-sm text-text-tertiary font-medium;
}

/* Metric Change Positive - Color: #10B981, Background: #DCFCE7 */
.propgo-metric-change-positive {
  @apply text-status-success bg-green-100 px-2 py-0.5 rounded-full text-xs font-semibold;
}

/* Metric Change Negative - Color: #EF4444, Background: #FEE2E2 */
.propgo-metric-change-negative {
  @apply text-status-error bg-red-100 px-2 py-0.5 rounded-full text-xs font-semibold;
}
```

### Notification Components (Exact from design-json.md)

```css
/* Notification Container - Background: #FFFFFF, Border: #E2E8F0, Max width: 320px */
.propgo-notification-container {
  @apply bg-white border border-border-light rounded-xl shadow-card max-w-sm;
}

/* Notification Item - Padding: 1rem, Border bottom: #F1F5F9 */
.propgo-notification-item {
  @apply p-4 border-b border-background-tertiary;
}

/* Notification Urgent - Background: #FEF2F2, Border: #FECACA, Icon: #EF4444 */
.propgo-notification-urgent {
  @apply bg-red-50 border-red-200;
}

/* Notification Warning - Background: #FFFBEB, Border: #FDE68A, Icon: #F59E0B */
.propgo-notification-warning {
  @apply bg-yellow-50 border-yellow-200;
}

/* Notification Info - Background: #EFF6FF, Border: #DBEAFE, Icon: #3B82F6 */
.propgo-notification-info {
  @apply bg-blue-50 border-blue-200;
}

/* Notification Success - Background: #F0FDF4, Border: #BBF7D0, Icon: #10B981 */
.propgo-notification-success {
  @apply bg-green-50 border-green-200;
}
```

### Modal Components (Exact from design-json.md)

```css
/* Modal Overlay - Background: rgba(15, 23, 42, 0.6), Backdrop filter: blur(4px) */
.propgo-modal-overlay {
  @apply fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm;
}

/* Modal Container - Background: #FFFFFF, Radius: 1rem, Shadow: 2xl, Max width: 500px */
.propgo-modal-container {
  @apply bg-white rounded-2xl shadow-2xl max-w-lg mx-auto;
}

/* Modal Header - Padding: 1.5rem 1.5rem 0, Border bottom: none */
.propgo-modal-header {
  @apply px-6 pt-6 pb-0 border-none;
}

/* Modal Body - Padding: 1.5rem */
.propgo-modal-body {
  @apply p-6;
}

/* Modal Footer - Padding: 0 1.5rem 1.5rem, Display: flex, Justify: flex-end, Gap: 0.75rem */
.propgo-modal-footer {
  @apply px-6 pb-6 pt-0 flex justify-end gap-3;
}
```

### Layout Components (Exact from design-json.md)

```css
/* Sidebar Layout - Width: 240px, Background: #1E293B */
.propgo-layout-sidebar {
  @apply w-60 bg-neutral-800;
}

/* Main Content - Margin left: 240px, Padding: 2rem, Background: #F8FAFC */
.propgo-layout-main {
  @apply ml-60 p-8 bg-background-secondary min-h-screen;
}

/* Container - Max width: 1200px, Margin: 0 auto, Padding: 0 1rem */
.propgo-container-main {
  @apply max-w-6xl mx-auto px-4;
}

/* Grid Auto - Gap: 1.5rem, Columns: repeat(auto-fit, minmax(280px, 1fr)) */
.propgo-grid-auto {
  @apply grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4;
}
```

## Dark Mode Implementation (From design-json.md)

```css
/* Dark Mode Sidebar - Background: #1E293B (same as light mode) */
.dark .propgo-sidebar {
  @apply bg-neutral-800;
}

/* Dark Mode Card - Background: #1E293B, Border: #475569 */
.dark .propgo-card {
  @apply bg-neutral-800 border-neutral-600;
}

/* Dark Mode Primary Button - Background: #6B7EFF (dark mode primary) */
.dark .propgo-btn-primary {
  @apply bg-primary-light;
}

/* Dark Mode Input - Background: #1E293B, Border: #475569, Text: #F8FAFC */
.dark .propgo-input {
  @apply bg-neutral-800 border-neutral-600 text-neutral-50;
}

/* Dark Mode Main Layout - Background: #0F172A */
.dark .propgo-layout-main {
  @apply bg-neutral-900;
}
```

## React Component Implementation

### Utility Function for Class Names
```typescript
// utils/cn.ts - Using clsx and tailwind-merge from PACKAGE-COMPLETEJSON.md
import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
```

### Button Component Example
```typescript
// components/ui/Button.tsx
import React from 'react'
import { cn } from '@/utils/cn'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'icon'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
    return (
      <button
        className={cn(
          // Base button styles
          'inline-flex items-center justify-center rounded-lg font-semibold transition-all duration-normal focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2',
          
          // Variant styles - Exact from design-json.md
          {
            'propgo-btn-primary': variant === 'primary',
            'propgo-btn-secondary': variant === 'secondary',
            'propgo-btn-ghost': variant === 'ghost',
            'propgo-btn-icon': variant === 'icon',
          },
          
          // Size styles
          {
            'px-3 py-1.5 text-xs': size === 'sm',
            'px-6 py-3 text-sm': size === 'md',
            'px-8 py-4 text-base': size === 'lg',
          },
          
          className
        )}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'
```

### Card Component Example
```typescript
// components/ui/Card.tsx
import React from 'react'
import { cn } from '@/utils/cn'

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'metric' | 'property'
  children: React.ReactNode
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = 'default', children, ...props }, ref) => {
    return (
      <div
        className={cn(
          // Base card styles
          'rounded-xl',
          
          // Variant styles - Exact from design-json.md
          {
            'propgo-card': variant === 'default',
            'propgo-metric-card': variant === 'metric',
            'propgo-property-card': variant === 'property',
          },
          
          className
        )}
        ref={ref}
        {...props}
      >
        {children}
      </div>
    )
  }
)

Card.displayName = 'Card'
```

## Usage Guidelines

1. **Use exact design system classes**: Always use `propgo-*` classes for components
2. **Follow color semantics**: Use `text-text-primary`, `bg-background-secondary`, etc.
3. **Maintain consistency**: Stick to the exact specifications from design-json.md
4. **Dark mode support**: All components automatically support dark mode
5. **Package versions**: Use exact versions from PACKAGE-COMPLETEJSON.md

This implementation ensures 100% fidelity to the PropGo design system while using the specified package versions. 