# PropGo Project Structure

This document outlines the complete monorepo structure for PropGo, aligned with the package versions from PACKAGE-COMPLETEJSON.md and design system specifications.

## Monorepo Structure

```
propgo/
├── apps/
│   ├── web/                    # Next.js 15.3.0 Web Application
│   └── mobile/                 # Expo SDK 53 Mobile Application
├── packages/
│   ├── types/                  # Shared TypeScript types and schemas
│   ├── utils/                  # Shared utility functions
│   ├── api/                    # API client and data fetching
│   ├── compliance/             # Malaysian compliance utilities
│   ├── integrations/           # Third-party integrations
│   ├── config/                 # Shared configuration
│   └── ui/                     # Shared UI components (design system)
├── supabase/
│   ├── migrations/             # Database migrations
│   ├── functions/              # Edge functions
│   └── config.toml            # Supabase configuration
├── docs/                       # Project documentation
├── design-system/              # Design system assets and specs
├── .cursor/                    # Cursor IDE configuration
├── package.json               # Root package.json (Turbo 2.3.0)
├── turbo.json                 # Turborepo configuration
├── tailwind.config.js         # Root Tailwind configuration
├── tsconfig.json              # Root TypeScript configuration
└── .env.example               # Environment variables template
```

## Application Structure

### Web App (apps/web) - Next.js 15.3.0

```
apps/web/
├── src/
│   ├── app/                   # Next.js App Router (15.3.0)
│   │   ├── (auth)/           # Authentication routes
│   │   │   ├── login/
│   │   │   ├── register/
│   │   │   └── layout.tsx
│   │   ├── (dashboard)/      # Dashboard routes
│   │   │   ├── dashboard/
│   │   │   ├── properties/
│   │   │   ├── clients/
│   │   │   ├── deals/
│   │   │   ├── documents/
│   │   │   ├── reports/
│   │   │   └── layout.tsx
│   │   ├── (public)/         # Public routes
│   │   │   ├── blog/
│   │   │   ├── pricing/
│   │   │   └── about/
│   │   ├── api/              # API routes
│   │   │   ├── auth/
│   │   │   ├── properties/
│   │   │   ├── clients/
│   │   │   ├── deals/
│   │   │   ├── ai/
│   │   │   └── webhooks/
│   │   ├── globals.css       # Global styles with Tailwind
│   │   ├── layout.tsx        # Root layout
│   │   ├── loading.tsx       # Global loading UI
│   │   ├── error.tsx         # Global error UI
│   │   └── page.tsx          # Home page
│   ├── components/           # React components
│   │   ├── ui/               # Design system components
│   │   │   ├── Button.tsx
│   │   │   ├── Card.tsx
│   │   │   ├── Input.tsx
│   │   │   ├── Badge.tsx
│   │   │   ├── Table.tsx
│   │   │   └── index.ts
│   │   ├── layout/           # Layout components
│   │   │   ├── Sidebar.tsx
│   │   │   ├── Topbar.tsx
│   │   │   ├── Navigation.tsx
│   │   │   └── DashboardLayout.tsx
│   │   ├── features/         # Feature-specific components
│   │   │   ├── auth/
│   │   │   ├── properties/
│   │   │   ├── clients/
│   │   │   ├── deals/
│   │   │   ├── documents/
│   │   │   ├── reports/
│   │   │   └── ai/
│   │   └── shared/           # Shared components
│   │       ├── DataTable.tsx
│   │       ├── SearchBox.tsx
│   │       ├── FileUpload.tsx
│   │       └── Charts.tsx
│   ├── lib/                  # Utility libraries
│   │   ├── supabase.ts       # Supabase client (v2.50.0)
│   │   ├── auth.ts           # Authentication utilities
│   │   ├── api.ts            # API client
│   │   ├── validations.ts    # Zod schemas (v3.24.1)
│   │   ├── utils.ts          # General utilities
│   │   └── constants.ts      # App constants
│   ├── hooks/                # Custom React hooks
│   │   ├── useAuth.ts
│   │   ├── useProperties.ts
│   │   ├── useClients.ts
│   │   ├── useDeals.ts
│   │   └── useSupabase.ts
│   ├── stores/               # Zustand stores (v5.0.1)
│   │   ├── authStore.ts
│   │   ├── propertiesStore.ts
│   │   ├── clientsStore.ts
│   │   └── uiStore.ts
│   ├── types/                # TypeScript type definitions
│   │   ├── auth.ts
│   │   ├── properties.ts
│   │   ├── clients.ts
│   │   ├── deals.ts
│   │   └── api.ts
│   └── styles/               # Additional styles
│       ├── components.css    # Component-specific styles
│       └── utilities.css     # Utility classes
├── public/                   # Static assets
│   ├── images/
│   ├── icons/
│   └── favicon.ico
├── package.json              # Web app dependencies (Next.js 15.3.0)
├── next.config.js            # Next.js configuration
├── tailwind.config.js        # Tailwind configuration
├── tsconfig.json             # TypeScript configuration
└── .env.local               # Environment variables
```

### Mobile App (apps/mobile) - Expo SDK 53

```
apps/mobile/
├── src/
│   ├── app/                  # Expo Router v4.0.0
│   │   ├── (auth)/          # Authentication screens
│   │   │   ├── login.tsx
│   │   │   ├── register.tsx
│   │   │   └── _layout.tsx
│   │   ├── (tabs)/          # Tab navigation
│   │   │   ├── dashboard.tsx
│   │   │   ├── properties.tsx
│   │   │   ├── clients.tsx
│   │   │   ├── deals.tsx
│   │   │   └── _layout.tsx
│   │   ├── (modal)/         # Modal screens
│   │   │   ├── property-details.tsx
│   │   │   ├── client-form.tsx
│   │   │   └── deal-form.tsx
│   │   ├── _layout.tsx      # Root layout
│   │   └── index.tsx        # Entry screen
│   ├── components/          # React Native components
│   │   ├── ui/              # Design system components
│   │   │   ├── Button.tsx
│   │   │   ├── Card.tsx
│   │   │   ├── Input.tsx
│   │   │   ├── Badge.tsx
│   │   │   └── index.ts
│   │   ├── layout/          # Layout components
│   │   │   ├── Screen.tsx
│   │   │   ├── Header.tsx
│   │   │   └── TabBar.tsx
│   │   ├── features/        # Feature components
│   │   │   ├── auth/
│   │   │   ├── properties/
│   │   │   ├── clients/
│   │   │   └── deals/
│   │   └── shared/          # Shared components
│   │       ├── DataList.tsx
│   │       ├── SearchBar.tsx
│   │       └── ImagePicker.tsx
│   ├── lib/                 # Utility libraries
│   │   ├── supabase.ts      # Supabase client
│   │   ├── auth.ts          # Authentication
│   │   ├── storage.ts       # AsyncStorage utilities
│   │   └── constants.ts     # App constants
│   ├── hooks/               # Custom hooks
│   │   ├── useAuth.ts
│   │   ├── useProperties.ts
│   │   └── useOffline.ts
│   ├── stores/              # Zustand stores
│   │   ├── authStore.ts
│   │   ├── propertiesStore.ts
│   │   └── offlineStore.ts
│   └── types/               # TypeScript types
│       ├── navigation.ts
│       └── screens.ts
├── assets/                  # Static assets
│   ├── images/
│   ├── icons/
│   └── fonts/
├── package.json             # Mobile app dependencies (Expo 53)
├── app.json                 # Expo configuration
├── eas.json                 # EAS Build configuration
├── tailwind.config.js       # NativeWind configuration (v4.1.23)
├── tsconfig.json            # TypeScript configuration
└── .env                     # Environment variables
```

## Shared Packages Structure

### Types Package (packages/types)

```
packages/types/
├── src/
│   ├── auth.ts              # Authentication types
│   ├── users.ts             # User management types
│   ├── properties.ts        # Property types
│   ├── clients.ts           # Client types
│   ├── deals.ts             # Deal pipeline types
│   ├── documents.ts         # Document types
│   ├── reports.ts           # Reporting types
│   ├── ai.ts                # AI service types
│   ├── integrations.ts      # Third-party integration types
│   ├── compliance.ts        # Malaysian compliance types
│   ├── api.ts               # API response types
│   ├── database.ts          # Database schema types
│   └── index.ts             # Export all types
├── package.json             # Dependencies (Zod v3.24.1)
├── tsconfig.json            # TypeScript configuration
└── README.md                # Package documentation
```

### Utils Package (packages/utils)

```
packages/utils/
├── src/
│   ├── auth/                # Authentication utilities
│   │   ├── validation.ts
│   │   ├── permissions.ts
│   │   └── tokens.ts
│   ├── data/                # Data transformation utilities
│   │   ├── formatters.ts
│   │   ├── validators.ts
│   │   └── parsers.ts
│   ├── dates/               # Date utilities (date-fns v4.1.0)
│   │   ├── malaysian.ts
│   │   ├── business.ts
│   │   └── formatting.ts
│   ├── strings/             # String utilities
│   │   ├── formatting.ts
│   │   ├── validation.ts
│   │   └── search.ts
│   ├── numbers/             # Number utilities
│   │   ├── currency.ts
│   │   ├── percentages.ts
│   │   └── calculations.ts
│   ├── files/               # File utilities
│   │   ├── upload.ts
│   │   ├── validation.ts
│   │   └── processing.ts
│   └── index.ts             # Export all utilities
├── package.json             # Dependencies (lodash v4.17.21, date-fns v4.1.0)
├── tsconfig.json
└── README.md
```

### API Package (packages/api)

```
packages/api/
├── src/
│   ├── clients/             # API clients
│   │   ├── supabase.ts      # Supabase client (v2.50.0)
│   │   ├── anthropic.ts     # Claude AI client
│   │   ├── stripe.ts        # Stripe client
│   │   └── typesense.ts     # Typesense client
│   ├── services/            # Service layer
│   │   ├── auth.ts
│   │   ├── properties.ts
│   │   ├── clients.ts
│   │   ├── deals.ts
│   │   ├── documents.ts
│   │   ├── reports.ts
│   │   └── ai.ts
│   ├── hooks/               # React Query hooks (v5.61.0)
│   │   ├── useAuth.ts
│   │   ├── useProperties.ts
│   │   ├── useClients.ts
│   │   └── useDeals.ts
│   ├── mutations/           # Mutation hooks
│   │   ├── auth.ts
│   │   ├── properties.ts
│   │   └── clients.ts
│   ├── queries/             # Query hooks
│   │   ├── properties.ts
│   │   ├── clients.ts
│   │   └── deals.ts
│   └── index.ts
├── package.json             # Dependencies (@supabase/supabase-js v2.50.0)
├── tsconfig.json
└── README.md
```

### Compliance Package (packages/compliance)

```
packages/compliance/
├── src/
│   ├── malaysian/           # Malaysian-specific compliance
│   │   ├── ic-validation.ts # IC number validation
│   │   ├── phone.ts         # Malaysian phone validation (libphonenumber-js v1.11.14)
│   │   ├── addresses.ts     # Address validation
│   │   ├── business.ts      # Business registration validation
│   │   └── banking.ts       # Banking compliance
│   ├── real-estate/         # Real estate compliance
│   │   ├── licensing.ts     # Agent licensing
│   │   ├── documentation.ts # Required documents
│   │   ├── transactions.ts  # Transaction compliance
│   │   └── reporting.ts     # Regulatory reporting
│   ├── data-protection/     # PDPA compliance
│   │   ├── consent.ts
│   │   ├── retention.ts
│   │   └── access.ts
│   └── index.ts
├── package.json             # Dependencies (validator v13.12.0, libphonenumber-js v1.11.14)
├── tsconfig.json
└── README.md
```

### Integrations Package (packages/integrations)

```
packages/integrations/
├── src/
│   ├── ai/                  # AI service integrations
│   │   ├── anthropic.ts     # Claude AI integration
│   │   ├── openai.ts        # OpenAI integration (backup)
│   │   └── prompts.ts       # AI prompts
│   ├── payment/             # Payment integrations
│   │   ├── stripe.ts        # Stripe integration
│   │   ├── fpx.ts           # Malaysian FPX integration
│   │   └── ewallet.ts       # E-wallet integrations
│   ├── search/              # Search integrations
│   │   ├── typesense.ts     # Typesense integration
│   │   └── elasticsearch.ts # Elasticsearch (alternative)
│   ├── storage/             # Storage integrations
│   │   ├── supabase.ts      # Supabase storage
│   │   └── s3.ts            # AWS S3 (backup)
│   ├── communication/       # Communication integrations
│   │   ├── email.ts         # Email service
│   │   ├── sms.ts           # SMS service
│   │   └── whatsapp.ts      # WhatsApp Business API
│   └── index.ts
├── package.json             # Dependencies (axios v1.7.9)
├── tsconfig.json
└── README.md
```

### Config Package (packages/config)

```
packages/config/
├── src/
│   ├── environments/        # Environment configurations
│   │   ├── development.ts
│   │   ├── staging.ts
│   │   ├── production.ts
│   │   └── test.ts
│   ├── features/            # Feature flags
│   │   ├── flags.ts
│   │   └── toggles.ts
│   ├── constants/           # Application constants
│   │   ├── api.ts
│   │   ├── ui.ts
│   │   ├── business.ts
│   │   └── malaysian.ts
│   ├── schemas/             # Configuration schemas (Zod v3.24.1)
│   │   ├── env.ts
│   │   ├── api.ts
│   │   └── features.ts
│   └── index.ts
├── package.json             # Dependencies (zod v3.24.1)
├── tsconfig.json
└── README.md
```

### UI Package (packages/ui) - Design System Implementation

```
packages/ui/
├── src/
│   ├── components/          # PropGo design system components
│   │   ├── buttons/
│   │   │   ├── Button.tsx   # Primary, secondary, ghost, icon variants
│   │   │   └── index.ts
│   │   ├── cards/
│   │   │   ├── Card.tsx     # Default, metric, property variants
│   │   │   ├── MetricCard.tsx
│   │   │   ├── PropertyCard.tsx
│   │   │   └── index.ts
│   │   ├── forms/
│   │   │   ├── Input.tsx    # Text input with PropGo styling
│   │   │   ├── Select.tsx   # Select dropdown
│   │   │   ├── SearchBox.tsx # Search input with icon
│   │   │   ├── FormField.tsx
│   │   │   └── index.ts
│   │   ├── navigation/
│   │   │   ├── Sidebar.tsx  # Dark sidebar (#1E293B)
│   │   │   ├── SidebarItem.tsx # Sidebar navigation items
│   │   │   ├── Topbar.tsx   # Top navigation bar
│   │   │   └── index.ts
│   │   ├── data-display/
│   │   │   ├── Table.tsx    # Data table with PropGo styling
│   │   │   ├── Badge.tsx    # Status and type badges
│   │   │   ├── Avatar.tsx   # User avatars
│   │   │   └── index.ts
│   │   ├── feedback/
│   │   │   ├── Notification.tsx # Notification component
│   │   │   ├── Modal.tsx    # Modal dialog
│   │   │   ├── Toast.tsx    # Toast notifications
│   │   │   └── index.ts
│   │   ├── layout/
│   │   │   ├── Container.tsx # Main container
│   │   │   ├── Grid.tsx     # Grid layout
│   │   │   ├── Stack.tsx    # Vertical stack
│   │   │   └── index.ts
│   │   └── charts/
│   │       ├── LineChart.tsx
│   │       ├── BarChart.tsx
│   │       ├── PieChart.tsx
│   │       └── index.ts
│   ├── styles/              # Design system styles
│   │   ├── globals.css      # Global CSS with design system
│   │   ├── components.css   # Component-specific styles
│   │   └── utilities.css    # Utility classes
│   ├── utils/               # UI utilities
│   │   ├── cn.ts            # Class name utility (clsx + tailwind-merge)
│   │   ├── colors.ts        # Color utilities
│   │   └── responsive.ts    # Responsive utilities
│   ├── hooks/               # UI-specific hooks
│   │   ├── useTheme.ts      # Theme management
│   │   ├── useBreakpoint.ts # Responsive breakpoints
│   │   └── useDisclosure.ts # Modal/disclosure state
│   ├── providers/           # UI providers
│   │   ├── ThemeProvider.tsx
│   │   └── UIProvider.tsx
│   └── index.ts             # Export all components
├── package.json             # Dependencies (clsx v2.1.1, tailwind-merge v2.5.4)
├── tailwind.config.js       # UI package Tailwind config
├── tsconfig.json
└── README.md
```

## Supabase Structure

```
supabase/
├── migrations/              # Database migrations
│   ├── 20240101000000_initial_schema.sql
│   ├── 20240101000001_auth_setup.sql
│   ├── 20240101000002_properties_table.sql
│   ├── 20240101000003_clients_table.sql
│   ├── 20240101000004_deals_table.sql
│   ├── 20240101000005_documents_table.sql
│   ├── 20240101000006_rls_policies.sql
│   └── 20240101000007_functions.sql
├── functions/               # Edge functions
│   ├── ai-listing-assistant/
│   ├── ai-marketing-generator/
│   ├── ai-document-generator/
│   ├── property-search/
│   ├── commission-calculator/
│   ├── notification-handler/
│   └── webhook-handlers/
├── seed.sql                 # Seed data
├── config.toml             # Supabase configuration
└── .env.example            # Supabase environment variables
```

## Configuration Files

### Root Package.json (Turbo 2.3.0)
```json
{
  "name": "propgo-monorepo",
  "private": true,
  "scripts": {
    "build": "turbo build",
    "dev": "turbo dev",
    "lint": "turbo lint",
    "format": "prettier --write \"**/*.{ts,tsx,md}\"",
    "type-check": "turbo type-check",
    "clean": "turbo clean"
  },
  "devDependencies": {
    "@turbo/gen": "^2.3.0",
    "eslint": "^9.15.0",
    "prettier": "^3.4.0",
    "turbo": "^2.3.0",
    "typescript": "^5.8.4"
  },
  "packageManager": "pnpm@9.15.1",
  "engines": {
    "node": ">=18"
  },
  "workspaces": [
    "apps/*",
    "packages/*"
  ]
}
```

### Turbo.json Configuration
```json
{
  "$schema": "https://turbo.build/schema.json",
  "ui": "tui",
  "tasks": {
    "build": {
      "dependsOn": ["^build"],
      "outputs": [".next/**", "!.next/cache/**", "dist/**"]
    },
    "dev": {
      "cache": false,
      "persistent": true
    },
    "lint": {
      "dependsOn": ["^lint"]
    },
    "type-check": {
      "dependsOn": ["^type-check"]
    },
    "clean": {
      "cache": false
    }
  },
  "globalDependencies": ["**/.env.*local", "tsconfig.json", "tailwind.config.js"],
  "globalEnv": [
    "NODE_ENV",
    "NEXT_PUBLIC_SUPABASE_URL",
    "NEXT_PUBLIC_SUPABASE_ANON_KEY",
    "SUPABASE_SERVICE_ROLE_KEY"
  ]
}
```

## Development Workflow

1. **Install dependencies**: `pnpm install` (using pnpm@9.15.1)
2. **Development**: `pnpm dev` (runs all apps simultaneously)
3. **Build**: `pnpm build` (builds all apps and packages)
4. **Type checking**: `pnpm type-check` (TypeScript 5.8.4)
5. **Linting**: `pnpm lint` (ESLint 9.15.0)
6. **Formatting**: `pnpm format` (Prettier 3.4.0)

This structure follows the exact package versions from PACKAGE-COMPLETEJSON.md and implements the PropGo design system specifications from design-json.md. 