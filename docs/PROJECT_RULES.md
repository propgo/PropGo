# PropGo.my Project Rules

🎯 General Purpose:
This project is PropGo.my — a Malaysian B2B real estate SaaS platform...

## Overview
This document establishes comprehensive rules and guidelines for the PropGo B2B real estate SaaS platform development to ensure successful project completion, maintainability, and Malaysian market compliance.

## Development Standards

### Technology Stack Requirements
- Web App: Next.js 14+ with App Router only
- Mobile App: Expo SDK 50+ with Expo Router  
- Database: Supabase PostgreSQL with RLS enabled
- Authentication: Supabase Auth with Malaysian phone support
- UI Framework: Tailwind CSS + shadcn/ui components
- State Management: Zustand + TanStack Query
- Forms: React Hook Form + Zod validation
- AI Integration: Claude 3.5 Sonnet via Anthropic API

### Coding Standards
```typescript
// Required: All functions must have TypeScript types
interface UserProfile {
  id: string;
  email: string;
  role: 'agent' | 'lawyer' | 'banker' | 'agency_owner';
}

// Required: Proper error handling
try {
  const result = await supabase.from('profiles').select('*');
  if (result.error) throw result.error;
  return result.data;
} catch (error) {
  console.error('Database error:', error);
  throw new Error('Failed to fetch profiles');
}
```

## File Structure Rules

### Monorepo Organization
```
PropGo/
├── apps/web/              # Next.js web application
├── apps/mobile/           # Expo mobile application  
├── packages/shared/       # Shared utilities and types
├── packages/ui/          # Shared UI components
├── supabase/             # Database schema and functions
├── docs/                 # Project documentation
└── design-system/        # Design mockups and assets
```

### Naming Conventions
- Files: kebab-case (property-listing.tsx)
- Components: PascalCase (PropertyListing.tsx)
- Functions: camelCase (fetchPropertyData)
- Constants: SCREAMING_SNAKE_CASE (MAX_LISTING_IMAGES)
- Database: snake_case (property_listings)

## Documentation Requirements

### Code Documentation
```typescript
/**
 * Generates AI-enhanced property description using Claude
 * @param propertyData - Basic property information
 * @param imageUrls - Array of property image URLs
 * @returns Enhanced property description with SEO keywords
 * @throws Error if AI service is unavailable
 */
export async function generatePropertyDescription(
  propertyData: PropertyData,
  imageUrls: string[]
): Promise<string> {
  // Implementation
}
```

### Required README Files
- apps/web/README.md - Web app setup and development
- apps/mobile/README.md - Mobile app setup and development
- packages/shared/README.md - Shared package documentation
- supabase/README.md - Database setup and migrations

## Code Quality Standards

### TypeScript Configuration
```json
{
  "compilerOptions": {
    "strict": true,
    "noImplicitAny": true,
    "noImplicitReturns": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true
  }
}
```

### Code Quality Checklist
- No console.log in production code
- All async operations have proper error handling
- All user inputs validated with Zod schemas
- All database queries use proper error handling
- All API responses follow consistent format
- All images have alt text for accessibility

## Testing Requirements

### Unit Testing
```typescript
describe('Malaysian Currency Formatter', () => {
  it('should format MYR currency correctly', () => {
    expect(formatMalaysianCurrency(1000)).toBe('RM1,000.00');
  });
});
```

### Integration Testing
- All API routes must have integration tests
- Database operations must be tested
- Authentication flows must be tested

### E2E Testing
- User registration and onboarding
- Property creation and management
- Deal pipeline management
- Payment processing

## Security Guidelines

### Authentication & Authorization
```typescript
export async function middleware(request: NextRequest) {
  const token = request.cookies.get('supabase-auth-token');
  
  if (!token) {
    return NextResponse.redirect(new URL('/login', request.url));
  }
  
  const { data: user } = await supabase.auth.getUser(token.value);
  if (!user) {
    return NextResponse.redirect(new URL('/login', request.url));
  }
}
```

### Security Checklist
- All forms use CSRF protection
- All file uploads are validated
- All API endpoints have rate limiting
- All sensitive data is encrypted at rest
- All external API calls use HTTPS

## Malaysian Compliance

### Legal Requirements
```typescript
// REN license validation
const validateRENLicense = (licenseNumber: string): boolean => {
  const renPattern = /^REN\d{5}$/;
  return renPattern.test(licenseNumber);
};

// PDPA compliance
interface PDPAConsent {
  user_id: string;
  consent_type: 'marketing' | 'analytics' | 'essential';
  granted: boolean;
  granted_at: string;
  ip_address: string;
}
```

### Malaysian-Specific Features
- Stamp Duty: MOF calculator integration
- Banking: Malaysian banks integration (Maybank, CIMB, etc.)
- Legal: Proper SPA document generation
- Payments: FPX, Touch 'n Go, GrabPay support

## Performance Standards

### Web Performance
- Core Web Vitals: LCP < 2.5s, FID < 100ms, CLS < 0.1
- Bundle Size: Initial bundle < 200KB gzipped
- Image Optimization: All images use Next.js Image component
- Caching: Implement proper caching strategies

### Mobile Performance
- App Size: < 50MB initial download
- Startup Time: < 3 seconds on mid-range devices
- Memory Usage: < 200MB during normal operation
- Offline Support: Core features work offline

## Deployment Rules

### Staging Environment
- All features must pass staging tests
- Use sanitized production data
- Full regression testing required

### Production Deployment Checklist
- Database migrations tested
- Environment variables configured
- SSL certificates valid
- CDN configured
- Monitoring enabled
- Backup strategy implemented
- Rollback plan documented

## Team Collaboration

### Git Workflow
```bash
# Feature branch workflow
git checkout -b feature/property-search-filters
git commit -m "feat: add advanced property search filters"
git push origin feature/property-search-filters
# Create pull request
```

### Commit Messages
Use conventional commits:
- feat: add REN license validation
- fix: resolve property image upload issue
- docs: update API documentation
- test: add unit tests for currency formatter

### Pull Request Requirements
- Description includes what and why
- Screenshots for UI changes
- Tests pass
- Documentation updated
- Security review completed
- Performance impact assessed

## Quality Gates

### Pre-commit Hooks
```json
{
  "husky": {
    "hooks": {
      "pre-commit": "lint-staged",
      "commit-msg": "commitlint -E HUSKY_GIT_PARAMS"
    }
  },
  "lint-staged": {
    "*.{ts,tsx}": ["eslint --fix", "prettier --write"],
    "*.{md,json}": ["prettier --write"]
  }
}
```

### CI/CD Pipeline
1. Code Quality: ESLint, Prettier, TypeScript checks
2. Testing: Unit tests, integration tests, E2E tests
3. Security: Dependency scanning, SAST analysis
4. Performance: Lighthouse CI, bundle analysis
5. Deployment: Staging deployment and testing

## Forbidden Practices

### Never Do These
- Don't use `any` type in TypeScript
- Don't commit secrets or API keys
- Don't skip error handling
- Don't use `console.log` in production
- Don't bypass TypeScript strict mode
- Don't ignore accessibility requirements
- Don't hardcode Malaysian-specific values
- Don't skip database migrations
- Don't deploy without testing
- Don't ignore security warnings

## Success Metrics

### Development Metrics
- Code Coverage: > 80% for critical paths
- Type Coverage: > 95% TypeScript coverage
- Performance: Core Web Vitals in green
- Security: Zero high-severity vulnerabilities
- Documentation: All public APIs documented

### Business Metrics
- User Onboarding: < 5 minutes to first value
- App Performance: < 3 second load times
- Error Rate: < 0.1% error rate
- Uptime: > 99.9% availability
- User Satisfaction: > 4.5/5 rating

## Maintenance Rules

### Regular Tasks
- Weekly: Dependency updates, security patches
- Monthly: Performance audits, database optimization
- Quarterly: Full security audit, penetration testing

### Documentation Updates
- Code Changes: Update relevant documentation
- API Changes: Update API documentation
- Database Changes: Update schema documentation
- Architecture Changes: Update system design docs

---

*This document is living and should be updated as the project evolves. All team members are responsible for following these rules and suggesting improvements.* 