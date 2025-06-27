Here are the latest stable versions for your monorepo stack as of June 2025:

## Core Framework Versions

**Next.js Web App:**
- `next`: **15.3.x** Next.js 15.3 includes Turbopack for builds, new client instrumentation and navigation hooks, and more
- `react`: **19.x** (stable support since Next.js 15.1)
- `react-dom`: **19.x**

**Expo React Native:**
- `expo`: **~53.0.0** Today we're announcing the release of Expo SDK 53. SDK 53 includes React Native 0.79
- `react-native`: **0.79.x** (included with Expo SDK 53)

## Package Manager & Build Tools

**Monorepo Management:**
- `turbo`: **^2.3.0** (latest stable)
- `@turbo/gen`: **^2.3.0**

**TypeScript:**
- `typescript`: **^5.8.x**
- `@types/react`: **^19.x.x**
- `@types/react-dom`: **^19.x.x**
- `@types/node`: **^22.x.x**

## Supabase Integration

**Supabase Packages:**
- `@supabase/supabase-js`: **^2.50.x**
- `@supabase/auth-ui-react`: **^0.4.x**
- `@supabase/auth-ui-shared`: **^0.1.x**

## Styling & UI

**Tailwind CSS:**
- `tailwindcss`: **^3.4.x**
- `@tailwindcss/typography`: **^0.5.x**
- `autoprefixer`: **^10.4.x**
- `postcss`: **^8.4.x**

**React Native Styling:**
- `nativewind`: **^4.1.x**
- `tailwindcss`: **^3.4.x** (shared with web)

## Development Tools

**Linting & Formatting:**
- `eslint`: **^9.x.x**
- `@next/eslint-config-next`: **^15.3.x**
- `prettier`: **^3.4.x**
- `@typescript-eslint/parser`: **^8.x.x**
- `@typescript-eslint/eslint-plugin`: **^8.x.x**

## Shared Package Dependencies

**Utility Libraries:**
- `lodash`: **^4.17.21**
- `@types/lodash`: **^4.17.x**
- `date-fns`: **^4.1.x**
- `zod`: **^3.24.x**

**Form Handling:**
- `react-hook-form`: **^7.56.x**
- `@hookform/resolvers`: **^3.10.x**

**State Management (if needed):**
- `zustand`: **^5.0.x**
- `@tanstack/react-query`: **^5.61.x**

## Malaysian Compliance Packages

For your `packages/compliance/` you might want:
- `validator`: **^13.12.x** (for Malaysian IC, phone validation)
- `libphonenumber-js`: **^1.11.x** (for Malaysian phone numbers)
