# complete package.json templates for each part of the monorepo with the latest stable versions.

## Root package json

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


## Web App package json (apps/web)

{
  "name": "web",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "build": "next build",
    "dev": "next dev",
    "lint": "next lint",
    "start": "next start",
    "type-check": "tsc --noEmit"
  },
  "dependencies": {
    "next": "^15.3.0",
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "@supabase/supabase-js": "^2.50.0",
    "@supabase/auth-ui-react": "^0.4.7",
    "@supabase/auth-ui-shared": "^0.1.8",
    "react-hook-form": "^7.56.1",
    "@hookform/resolvers": "^3.10.0",
    "zod": "^3.24.1",
    "date-fns": "^4.1.0",
    "lodash": "^4.17.21",
    "@tanstack/react-query": "^5.61.0",
    "zustand": "^5.0.1",
    "clsx": "^2.1.1",
    "tailwind-merge": "^2.5.4"
  },
  "devDependencies": {
    "@next/eslint-config-next": "^15.3.0",
    "@types/node": "^22.10.2",
    "@types/react": "^19.0.2",
    "@types/react-dom": "^19.0.2",
    "@types/lodash": "^4.17.13",
    "autoprefixer": "^10.4.20",
    "eslint": "^9.15.0",
    "eslint-config-next": "^15.3.0",
    "postcss": "^8.4.49",
    "tailwindcss": "^3.4.17",
    "@tailwindcss/typography": "^0.5.15",
    "typescript": "^5.8.4"
  }
}


## Mobile App package json (apps/mobile)

{
  "name": "mobile",
  "version": "1.0.0",
  "main": "expo-router/entry",
  "scripts": {
    "android": "expo start --android",
    "ios": "expo start --ios",
    "start": "expo start",
    "build:android": "eas build --platform android",
    "build:ios": "eas build --platform ios",
    "lint": "eslint . --ext .js,.jsx,.ts,.tsx",
    "type-check": "tsc --noEmit"
  },
  "dependencies": {
    "expo": "~53.0.0",
    "expo-router": "~4.0.0",
    "react": "^19.0.0",
    "react-native": "0.79.0",
    "react-native-safe-area-context": "4.14.0",
    "react-native-screens": "4.3.0",
    "@expo/vector-icons": "^14.0.4",
    "@supabase/supabase-js": "^2.50.0",
    "react-hook-form": "^7.56.1",
    "@hookform/resolvers": "^3.10.0",
    "zod": "^3.24.1",
    "date-fns": "^4.1.0",
    "lodash": "^4.17.21",
    "@tanstack/react-query": "^5.61.0",
    "zustand": "^5.0.1",
    "nativewind": "^4.1.23",
    "react-native-reanimated": "~3.16.1",
    "expo-status-bar": "~2.0.0",
    "expo-constants": "~17.0.3",
    "expo-linking": "~7.0.3"
  },
  "devDependencies": {
    "@babel/core": "^7.25.9",
    "@types/react": "^19.0.2",
    "@types/react-native": "^0.73.0",
    "@types/lodash": "^4.17.13",
    "@typescript-eslint/eslint-plugin": "^8.15.0",
    "@typescript-eslint/parser": "^8.15.0",
    "eslint": "^9.15.0",
    "eslint-config-expo": "^7.1.2",
    "tailwindcss": "^3.4.17",
    "typescript": "^5.8.4"
  },
  "expo": {
    "install": {
      "exclude": ["react-native-safe-area-context"]
    }
  },
  "private": true
}


## Shared Packages package json templates

// packages/types/package.json
{
  "name": "@propgo/types",
  "version": "0.1.0",
  "main": "index.ts",
  "types": "index.ts",
  "private": true,
  "dependencies": {
    "zod": "^3.24.1"
  },
  "devDependencies": {
    "typescript": "^5.8.4"
  }
}

// packages/utils/package.json
{
  "name": "@propgo/utils",
  "version": "0.1.0",
  "main": "index.ts",
  "types": "index.ts",
  "private": true,
  "dependencies": {
    "date-fns": "^4.1.0",
    "lodash": "^4.17.21",
    "zod": "^3.24.1"
  },
  "devDependencies": {
    "@types/lodash": "^4.17.13",
    "typescript": "^5.8.4"
  }
}

// packages/api/package.json
{
  "name": "@propgo/api",
  "version": "0.1.0",
  "main": "index.ts",
  "types": "index.ts",
  "private": true,
  "dependencies": {
    "@supabase/supabase-js": "^2.50.0",
    "@tanstack/react-query": "^5.61.0",
    "zod": "^3.24.1"
  },
  "devDependencies": {
    "@types/node": "^22.10.2",
    "typescript": "^5.8.4"
  }
}

// packages/compliance/package.json
{
  "name": "@propgo/compliance",
  "version": "0.1.0",
  "main": "index.ts",
  "types": "index.ts",
  "private": true,
  "dependencies": {
    "validator": "^13.12.0",
    "libphonenumber-js": "^1.11.14",
    "zod": "^3.24.1",
    "date-fns": "^4.1.0"
  },
  "devDependencies": {
    "@types/validator": "^13.12.2",
    "typescript": "^5.8.4"
  }
}

// packages/integrations/package.json
{
  "name": "@propgo/integrations",
  "version": "0.1.0",
  "main": "index.ts",
  "types": "index.ts",
  "private": true,
  "dependencies": {
    "axios": "^1.7.9",
    "zod": "^3.24.1"
  },
  "devDependencies": {
    "@types/node": "^22.10.2",
    "typescript": "^5.8.4"
  }
}

// packages/config/package.json
{
  "name": "@propgo/config",
  "version": "0.1.0",
  "main": "index.ts",
  "types": "index.ts",
  "private": true,
  "dependencies": {
    "zod": "^3.24.1"
  },
  "devDependencies": {
    "typescript": "^5.8.4"
  }
}


## Turbo json configuration

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


## TypeScript Configuration Files

// Root tsconfig.json
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "preserve",
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true,
    "baseUrl": ".",
    "paths": {
      "@propgo/types": ["./packages/types"],
      "@propgo/utils": ["./packages/utils"],
      "@propgo/api": ["./packages/api"],
      "@propgo/compliance": ["./packages/compliance"],
      "@propgo/integrations": ["./packages/integrations"],
      "@propgo/config": ["./packages/config"]
    }
  },
  "include": [],
  "references": [
    {
      "path": "./apps/web"
    },
    {
      "path": "./apps/mobile"
    },
    {
      "path": "./packages/types"
    },
    {
      "path": "./packages/utils"
    },
    {
      "path": "./packages/api"
    },
    {
      "path": "./packages/compliance"
    },
    {
      "path": "./packages/integrations"
    },
    {
      "path": "./packages/config"
    }
  ]
}

// apps/web/tsconfig.json
{
  "extends": "../../tsconfig.json",
  "compilerOptions": {
    "target": "es5",
    "lib": ["dom", "dom.iterable", "es6"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"],
      "@propgo/types": ["../../packages/types"],
      "@propgo/utils": ["../../packages/utils"],
      "@propgo/api": ["../../packages/api"],
      "@propgo/compliance": ["../../packages/compliance"],
      "@propgo/integrations": ["../../packages/integrations"],
      "@propgo/config": ["../../packages/config"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}

// apps/mobile/tsconfig.json
{
  "extends": "expo/tsconfig.base",
  "compilerOptions": {
    "strict": true,
    "skipLibCheck": true,
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"],
      "@propgo/types": ["../../packages/types"],
      "@propgo/utils": ["../../packages/utils"],
      "@propgo/api": ["../../packages/api"],
      "@propgo/compliance": ["../../packages/compliance"],
      "@propgo/integrations": ["../../packages/integrations"],
      "@propgo/config": ["../../packages/config"]
    }
  },
  "include": ["**/*.ts", "**/*.tsx", ".expo/types/**/*.ts", "expo-env.d.ts"]
}

// packages/types/tsconfig.json
{
  "extends": "../../tsconfig.json",
  "compilerOptions": {
    "composite": true,
    "declaration": true,
    "declarationMap": true,
    "outDir": "dist",
    "rootDir": "src"
  },
  "include": ["src/**/*"],
  "exclude": ["dist", "node_modules"]
}



## Key Highlights:

**Framework Versions:**
- Next.js 15.3.0 with React 19 support
- Expo SDK 53 with React Native 0.79
- Turborepo 2.3.0 for monorepo management

**Shared Dependencies:**
- All packages use consistent versions across the monorepo
- TypeScript 5.8.4 throughout
- Supabase 2.50.0 for backend integration
- Zod 3.24.1 for schema validation

**Malaysian Compliance Ready:**
- Added `validator` and `libphonenumber-js` for Malaysian IC and phone validation
- Ready for your compliance package implementation

**Development Experience:**
- Consistent linting with ESLint 9.x
- Prettier for code formatting
- TypeScript project references for better build performance
- Turborepo configuration optimized for your structure

## Installation Instructions:

1. **Install pnpm** (recommended package manager):
   ```bash
   npm install -g pnpm@9.15.1
   ```

2. **Install dependencies** from root:
   ```bash
   pnpm install
   ```

3. **Run development servers**:
   ```bash
   # All apps
   pnpm dev
   
   # Just web
   pnpm --filter web dev
   
   # Just mobile  
   pnpm --filter mobile start
   ```

The configurations include proper workspace references, TypeScript project references for fast builds, and all the latest stable versions that work well together. The turbo.json is optimized for your specific app structure with proper caching strategies.
