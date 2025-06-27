# 🧠 Cursor + MCP Command Cheat Sheet (PropGo.my Edition)

This guide shows what you can do inside Cursor using `Cmd+K` (Mac) or `Ctrl+K` (Windows/Linux) powered by MCP tools.

---

## 🛠️ General Development

| Task | Command |
|------|---------|
| Generate component | `"Generate a property card with price, location, and agent photo"` |
| Generate Zod schema | `"Create Zod schema for rental agreement form"` |
| Add types | Highlight function → `Cmd+K` → “Add types” |
| Fix bug | Highlight bug → `Cmd+K` → “Fix this issue” |
| Refactor to Zustand | Highlight store logic → `Cmd+K` → “Refactor this to Zustand” |
| Generate form | `"Generate tenant onboarding form using react-hook-form"` |

---

## 📦 Supabase (via MCP)

| Task | Command |
|------|---------|
| Query data | `"Query all active properties in Selangor"` |
| Write RLS policy | `"Allow agents to view their own listings only"` |
| Create edge function | `"Create Supabase function for BOVAEA license validation"` |
| Modify schema | `"Add field 'floor_plan_url' to properties table"` |

---

## 🤖 Claude AI (via MCP)

| Task | Command |
|------|---------|
| Generate property description | `"Generate listing copy for 3BR condo in Bangsar with MRT access"` |
| Generate flyer | `"Write flyer for auction property in Klang"` |
| Draft agreement | `"Generate legal draft for 12-month residential tenancy"` |

---

## 💳 Stripe & Payments

| Task | Command |
|------|---------|
| Create subscription | `"Add Stripe subscription for agent_pro plan"` |
| Generate webhook handler | `"Generate Stripe webhook for subscription.updated"` |
| Simulate payment error | `"Write test for failed FPX transaction"` |

---

## 🐛 Testing & Quality

| Task | Command |
|------|---------|
| Generate unit test | `"Write Vitest unit test for currency formatter"` |
| Create E2E test | `"Create Playwright test for deal creation"` |
| Add Sentry capture | `"Add error tracking to AI doc generation"` |

---

## 📊 Analytics & Monitoring

| Task | Command |
|------|---------|
| Track user events | `"Send PostHog event on new listing publish"` |
| Performance monitoring | `"Add Sentry trace to deal pipeline page"` |

---

## 📁 Filesystem & Scaffolding

| Task | Command |
|------|---------|
| Scaffold route | `"Create page at /dashboard/agent/deals"` |
| Scaffold API | `"Create POST /api/properties with Supabase insert"` |
| Convert to TypeScript | `"Convert this file to TypeScript"` |

---

## 📑 Docs & GitHub

| Task | Command |
|------|---------|
| Write README | `"Create README for PropertyCard.tsx"` |
| Document API | `"Document all endpoints under /api/ai/*"` |
| Create GitHub issue | `"Create GitHub issue: search too slow"` |
| Write PR message | `"Draft PR description for new deal timeline"` |

---

## 🧠 Smart Context Tricks

| Task | Result |
|------|--------|
| `"What's schema for deals?"` | Cursor checks `DATABASE_SCHEMA.md` |
| `"List routes for agents"` | Cursor checks `SITEMAP.md` |
| `"API with RLS access"` | Cursor respects `PROJECT_RULES.md` & `README.md` |

---

Save this in `/docs/` as `CURSOR_MCP_CHEATSHEET.md` to keep it accessible.

**Last Updated:** June 2025