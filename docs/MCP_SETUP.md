# MCP Tools Setup Guide for PropGo

## Overview
This guide explains how to set up and configure Model Context Protocol (MCP) tools for the PropGo real estate SaaS platform. These tools enhance development productivity by providing direct integration with various services.

## Configured MCP Tools

### 🔧 Core Development Tools

#### 1. **GitHub Integration**
- **Purpose**: Repository management, issue tracking, PR reviews
- **Features**: Create issues, manage PRs, code reviews, repository insights
- **Setup**: Requires `GITHUB_PERSONAL_ACCESS_TOKEN`

#### 2. **Supabase Integration**
- **Purpose**: Database management, authentication, real-time features
- **Features**: Query database, manage users, handle RLS policies
- **Setup**: Requires Supabase URL, anon key, and service role key

#### 3. **PostgreSQL Direct Access**
- **Purpose**: Advanced database operations and analytics
- **Features**: Complex queries, performance analysis, data migrations
- **Setup**: Uses `DATABASE_URL` connection string

#### 4. **Filesystem Access**
- **Purpose**: File operations and project structure management
- **Features**: Read/write files, directory operations, code generation
- **Setup**: Automatically configured for project directory

### 💳 Payment & Business Tools

#### 5. **Stripe Integration**
- **Purpose**: Payment processing, subscription management
- **Features**: Handle payments, manage subscriptions, webhook processing
- **Setup**: Requires Stripe secret key and webhook secret

### 🔍 Monitoring & Quality Tools

#### 6. **Sentry Integration**
- **Purpose**: Error tracking and performance monitoring
- **Features**: Error analysis, performance insights, release tracking
- **Setup**: Requires Sentry auth token, org, and project

#### 7. **Playwright Integration**
- **Purpose**: End-to-end testing and browser automation
- **Features**: Automated testing, screenshot capture, performance testing
- **Setup**: Configured for headless operation

### 🌐 AI & Search Tools

#### 8. **Anthropic Claude Integration**
- **Purpose**: AI-powered features and content generation
- **Features**: Property descriptions, marketing content, document analysis
- **Setup**: Requires Anthropic API key

#### 9. **Brave Search Integration**
- **Purpose**: Web search and market research
- **Features**: Property market research, competitor analysis
- **Setup**: Requires Brave API key

### 👥 Collaboration Tools

#### 10. **Slack Integration**
- **Purpose**: Team communication and notifications
- **Features**: Send notifications, team updates, alert management
- **Setup**: Requires Slack bot token and team ID

#### 11. **Linear Integration**
- **Purpose**: Project management and issue tracking
- **Features**: Create tasks, track progress, manage sprints
- **Setup**: Requires Linear API key

#### 12. **Notion Integration**
- **Purpose**: Documentation and knowledge management
- **Features**: Update docs, manage knowledge base, project notes
- **Setup**: Requires Notion API key

### 🎨 Design Tools

#### 13. **Figma Integration**
- **Purpose**: Design system management and asset extraction
- **Features**: Extract design tokens, manage assets, sync designs
- **Setup**: Requires Figma access token

### 🚀 Deployment Tools

#### 14. **Vercel Integration**
- **Purpose**: Deployment management and monitoring
- **Features**: Deploy applications, manage environments, monitor performance
- **Setup**: Requires Vercel access token and team ID

#### 15. **Memory Tool**
- **Purpose**: Context persistence and knowledge retention
- **Features**: Store project context, remember decisions, maintain history
- **Setup**: No configuration required

## Setup Instructions

### 1. Environment Configuration

Copy the environment template:
```bash
cp .env.example .env.local
```

Fill in your API keys and tokens in `.env.local`:

```bash
# Essential for PropGo
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-supabase-service-role-key
ANTHROPIC_API_KEY=your-anthropic-api-key
STRIPE_SECRET_KEY=sk_test_your-stripe-secret-key
GITHUB_PERSONAL_ACCESS_TOKEN=ghp_your-github-token
```

### 2. API Key Generation Guide

#### GitHub Personal Access Token
1. Go to GitHub Settings → Developer settings → Personal access tokens
2. Generate new token with these scopes:
   - `repo` (full control)
   - `workflow` (update workflows)
   - `admin:org` (if using organization)

#### Supabase Keys
1. Go to your Supabase project dashboard
2. Navigate to Settings → API
3. Copy the Project URL and anon/service role keys

#### Stripe Keys
1. Go to Stripe Dashboard → Developers → API keys
2. Copy the secret key for your environment
3. Set up webhooks and copy the webhook secret

#### Anthropic API Key
1. Go to Anthropic Console
2. Create new API key
3. Ensure sufficient credits for AI features

### 3. Tool-Specific Setup

#### Sentry Setup
```bash
# Install Sentry CLI
npm install -g @sentry/cli

# Login to Sentry
sentry-cli login

# Create new project
sentry-cli projects create propgo-web
sentry-cli projects create propgo-mobile
```

#### Playwright Setup
```bash
# Install Playwright
npx playwright install

# Run test setup
npx playwright install-deps
```

## Usage Examples

### Database Operations with Supabase MCP
```typescript
// Query properties with MCP
const properties = await mcp.supabase.query({
  table: 'properties',
  select: '*',
  filters: {
    location: 'Kuala Lumpur',
    price_range: [500000, 1000000]
  }
});
```

### GitHub Operations
```typescript
// Create issue via MCP
await mcp.github.createIssue({
  title: 'Property search performance optimization',
  body: 'Need to optimize property search queries for better performance',
  labels: ['enhancement', 'performance']
});
```

### Stripe Payment Processing
```typescript
// Process subscription via MCP
const subscription = await mcp.stripe.createSubscription({
  customer: customerId,
  price_id: 'price_agent_pro_monthly',
  payment_method: paymentMethodId
});
```

### AI Content Generation
```typescript
// Generate property description
const description = await mcp.anthropic.generateContent({
  prompt: 'Generate property description for luxury condo in KLCC',
  context: propertyData,
  style: 'professional_marketing'
});
```

## Malaysian-Specific Integrations

### Banking APIs
```bash
# Additional environment variables for Malaysian banks
MAYBANK_API_KEY=your-maybank-api-key
CIMB_API_KEY=your-cimb-api-key
BANK_ISLAM_API_KEY=your-bank-islam-api-key
```

### Payment Gateways
```bash
# Malaysian payment methods
FPX_MERCHANT_ID=your-fpx-merchant-id
TNG_MERCHANT_ID=your-tng-merchant-id
GRABPAY_MERCHANT_ID=your-grabpay-merchant-id
```

## Security Best Practices

### 1. Environment Variable Security
- Never commit `.env.local` to version control
- Use different keys for development/staging/production
- Rotate API keys regularly
- Use least-privilege access for all tokens

### 2. API Key Management
```bash
# Use environment-specific configurations
.env.local          # Local development
.env.staging        # Staging environment
.env.production     # Production environment
```

### 3. Access Control
- Limit GitHub token scopes to minimum required
- Use read-only tokens where possible
- Implement IP restrictions where supported
- Monitor API usage and set up alerts

## Troubleshooting

### Common Issues

#### 1. MCP Server Connection Failed
```bash
# Check if MCP server is running
npx @modelcontextprotocol/server-github --version

# Verify environment variables
echo $GITHUB_PERSONAL_ACCESS_TOKEN
```

#### 2. Supabase Connection Issues
```bash
# Test database connection
npx supabase status
npx supabase db ping
```

#### 3. Stripe Webhook Issues
```bash
# Test webhook locally
stripe listen --forward-to localhost:3000/api/webhooks/stripe
```

### Debug Mode
Enable debug logging for MCP tools:
```bash
export MCP_DEBUG=true
export MCP_LOG_LEVEL=debug
```

## Performance Optimization

### 1. Connection Pooling
Configure connection limits for database operations:
```json
{
  "postgres": {
    "max_connections": 10,
    "idle_timeout": 30000
  }
}
```

### 2. Caching Strategy
Implement caching for frequently accessed data:
```typescript
// Cache Supabase queries
const cachedProperties = await mcp.memory.cache({
  key: 'properties_klcc',
  ttl: 300, // 5 minutes
  fetch: () => mcp.supabase.query('properties', filters)
});
```

## Monitoring & Analytics

### 1. Usage Tracking
Monitor MCP tool usage:
```typescript
// Track API usage
await mcp.sentry.track({
  event: 'mcp_tool_usage',
  properties: {
    tool: 'supabase',
    operation: 'query',
    duration: responseTime
  }
});
```

### 2. Error Handling
Implement proper error handling:
```typescript
try {
  const result = await mcp.stripe.createPayment(paymentData);
} catch (error) {
  await mcp.sentry.captureException(error, {
    tags: { component: 'payment_processing' }
  });
  throw new Error('Payment processing failed');
}
```

## Best Practices

### 1. Code Organization
- Group MCP operations by domain (payments, database, etc.)
- Use TypeScript interfaces for MCP responses
- Implement proper error handling for all MCP calls

### 2. Testing
```typescript
// Mock MCP tools in tests
jest.mock('@modelcontextprotocol/client', () => ({
  supabase: {
    query: jest.fn().mockResolvedValue(mockData)
  }
}));
```

### 3. Documentation
- Document all MCP integrations
- Maintain API key inventory
- Keep setup instructions updated

---

This MCP setup provides comprehensive tooling for the PropGo project, enabling efficient development, monitoring, and deployment of the Malaysian real estate SaaS platform. 