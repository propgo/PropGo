**PropGo.my – Project Brief & Technical Blueprint (Updated January 2025)**

---

### 1. Project Summary

PropGo.my is a full-featured AI-enhanced B2B real estate platform tailored for Malaysian real estate professionals including agents, agency owners, lawyers, and bankers. It is designed to digitize and automate the property transaction process—from listings and legal documentation to financing pipelines and firm compliance.

Users interact through role-based dashboards, mobile apps, and marketing-ready landing pages. The system is powered by Supabase (PostgreSQL, Edge Functions), Typesense, and Claude AI for natural language processing. Hosting is managed via Vercel (web) and EAS (mobile).

**Market Position**: PropGo.my addresses critical gaps in the Malaysian proptech market by providing the first comprehensive B2B platform that integrates all stakeholders (agents, lawyers, bankers) with mandatory regulatory compliance (BOVAEA, MOF, legal frameworks) built-in.

---

### 2. Malaysian Market Analysis & Competitive Positioning

#### 2.1 Competitive Landscape
**Current Players**: iProperty, PropertyGuru, EdgeProp, Rumah123, Propsocial, iBilik, Durianproperty
**Market Gaps**: 
- No B2B-focused platforms for professionals
- Limited AI integration
- Poor inter-stakeholder connectivity
- Minimal regulatory compliance automation
- Lack of integrated legal/banking workflows

#### 2.2 PropGo.my Differentiation Strategy
- **First B2B Professional Platform**: Unlike consumer-focused competitors
- **Regulatory Compliance First**: Built-in BOVAEA, MOF, legal compliance
- **AI-Enhanced Workflows**: Advanced automation vs basic listing platforms
- **Full Transaction Lifecycle**: End-to-end vs listing-only platforms
- **Multi-Stakeholder Integration**: Connects agents, lawyers, bankers seamlessly

---

### 3. Malaysian Regulatory Compliance Framework

#### 3.1 BOVAEA (LPPEH) Integration Requirements
- **REN License Verification**: Real-time validation via BOVAEA Board Information System (BIS)
- **CDP/RRP Training Tracking**: Automated compliance alerts for continuing education
- **License Renewal Monitoring**: Proactive notifications for expiring licenses
- **Agency Registration**: Verification of registered estate agencies
- **Compliance Dashboard**: Real-time status for all regulatory requirements

#### 3.2 Legal & Documentation Compliance
- **MOF Stamp Duty Integration**: API connection for stamp duty calculations and payments
- **SPA Template Compliance**: Legal-compliant Sale & Purchase Agreement templates
- **Tenancy Act 1950**: Compliant tenancy agreement templates
- **Digital Signature Integration**: MyEG, SSM, or equivalent for legal document signing
- **Document Retention**: 7-year legal document storage requirements

#### 3.3 Banking & Financial Compliance
- **Bank Negara Guidelines**: Compliance with central bank regulations
- **KYC/AML Integration**: Know Your Customer and Anti-Money Laundering checks
- **Loan Documentation**: Standardized formats for major Malaysian banks
- **Valuation Standards**: RISM-compliant property valuation integration

---

### 4. Enhanced Key Features

#### 4.1 Agents & Agencies

- AI Listing Assistant: Auto-generate listing metadata (room count, facilities, pricing) from photos, address, and notes.
- AI Marketing Generator: One-click flyers, posters, and captions.
- **Malaysian-Specific Listings**: Support for local property types (terrace, semi-D, bungalow, SOHO, etc.)
- **Malay/English Dual Language**: Automated content translation
- **Local Market Intelligence**: Neighborhood price trends, comparable sales
- Listings & Responses: Post property ads, reply to buyer/tenant WTB/WTR posts.
- KPI Dashboard: Conversion metrics, response time, commission earned.
- Deal Pipeline: Drag-and-drop board from lead to key handover.
- Agency Structure: Claimed agencies must verify and approve agents.
- **BOVAEA Compliance Monitor**: Real-time license status, CDP tracking
- **Commission Transparency**: Clear breakdown per Malaysian regulations
- Document Uploads: Auto-tagged files by deal.
- Commission Reporting: Daily, monthly, and exportable views.

#### 4.2 Lawyers & Legal Firms

- AI Document Generator: Generate tenancy or SPA documents based on selected party, property, and type.
- **Malaysian Legal Templates**: SPA, tenancy agreements compliant with local laws
- **Stamp Duty Calculator**: Integrated MOF stamp duty computation
- **Legal Workflow Automation**: S&P process, tenancy renewals, legal searches
- Transaction Tracker: Follow legal document flow.
- Compliance Alerts: Notifications for license expiry, audit flags.
- **Document Authentication**: Integration with digital signature providers
- **Legal Search Integration**: TNB, IWK, quit rent, assessment searches
- Multi-User Law Firms: Add/remove staff, manage permissions.

#### 4.3 Bankers & Banking Firms

- Application Pipeline: Filter deals by state (new, processing, approved).
- **Malaysian Bank Integration**: API connections with Maybank, CIMB, Public Bank, RHB
- **Loan Calculator**: Current interest rates, loan eligibility assessment
- **Valuation Management**: Property valuer assignment and report tracking
- **Credit Bureau Integration**: CTOS, CCRIS integration for credit checks
- Document Panel: Upload loan letters, valuation, approval forms.
- Firm Staff View: Banker firm account structure with user management.
- Performance Metrics: Monthly volume, deal age, processing time.

#### 4.4 Enhanced Platform-Wide Tools

- Messaging Hub: In-app and external (WhatsApp-like) communication.
- **Multi-Language Support**: Malay, English, Chinese interface options
- **Location Intelligence**: Integration with Malaysian postal codes, state boundaries
- **Market Data Integration**: NAPIC property index, transaction volume data
- Notifications: Push and email for replies, tasks, compliance.
- AI Assistant: Personalized suggestions per role.
- Smart Tags: Auto-classification of documents.
- Client Portal: Buyers and sellers track deal stages, view files.
- **Digital Wallet Integration**: Support for local payment methods (FPX, TNG, GrabPay)
- **Government API Integration**: JPJ, SSM, LHDN data verification
- Onboarding Assistant: Interactive, role-specific walkthroughs.

---

### 5. Advanced Technical Features

#### 5.1 AI & Machine Learning
- **Property Valuation AI**: ML model trained on Malaysian property data
- **Market Prediction Engine**: Price trend forecasting
- **Document OCR**: Extract data from Malaysian property documents
- **Fraud Detection**: AI-powered suspicious activity monitoring
- **Smart Matching**: Connect buyers with suitable properties/agents

#### 5.2 Security & Compliance
- **Data Protection**: PDPA-compliant data handling
- **Audit Trail**: Complete transaction history for regulatory compliance
- **Role-Based Access Control**: Granular permissions system
- **Encryption**: End-to-end encryption for sensitive documents
- **Backup & Recovery**: Automated daily backups with 99.9% uptime SLA

#### 5.3 Integration Capabilities
- **CRM Integration**: Support for existing agency CRM systems
- **Accounting Software**: Integration with local accounting platforms
- **Property Management**: Connect with existing property management tools
- **Marketing Automation**: Social media scheduling, email campaigns
- **Analytics & Reporting**: Advanced business intelligence dashboards

---

### 6. SEO & Blog CRM

- SEO Blog CMS: Categorized, taggable blog engine (with editor auth).
- Dynamic SEO Pages: Autogenerate pages like "property near me", "agent near [location]".
- **Malaysian Local SEO**: Location-specific content for all states and major cities
- **Multilingual SEO**: Optimized content in Malay, English, Chinese
- Analytics: GA4, PostHog, Meta Pixel.
- Sitemap/robots.txt: Auto-updated with each new listing.
- Schema.org: Listing + blog markup.
- Cookie Consent: PDPA compliance.
- Email Marketing: Mailchimp-integrated newsletter form.

---

### 7. Project Structure (Monorepo)

```
propgo-monorepo/
├── apps/
│   ├── web/                      # Next.js web frontend (agent/lawyer dashboards, public site)
│   │   ├── pages/                # Page routes (e.g. index.tsx, listings/[id].tsx)
│   │   ├── components/           # Reusable React components
│   │   ├── styles/               # Global styles, Tailwind config
│   │   ├── utils/                # Client-side helpers (e.g. formatters, hooks)
│   │   ├── locales/              # i18n translation files (EN, MY, ZH)
│   │   └── public/               # Static files (favicon, images)
│   │
│   └── mobile/                   # Expo app (for agents, lawyers, buyers)
│       ├── app/                  # App screens (e.g. Home, Deals, Profile)
│       ├── components/           # Shared React Native components
│       ├── assets/               # Fonts, icons, images
│       ├── utils/                # Shared mobile helpers
│       ├── locales/              # Mobile translation files
│       └── app.config.js         # Expo config file
│
├── packages/
│   ├── types/                    # Shared TypeScript types/interfaces
│   ├── utils/                    # Validation logic, formatters, common business logic
│   ├── api/                      # Shared API SDK wrappers (Supabase client, Stripe, Typesense)
│   ├── compliance/               # Malaysian regulatory compliance utilities
│   ├── integrations/             # Third-party API integrations (banks, govt)
│   └── config/                   # Tailwind, ESLint, Prettier, tsconfig base
│
├── supabase/                     # Supabase schema, edge functions, and policies
│   ├── functions/                # Supabase edge functions (AI handlers, match logic)
│   ├── sql/                      # SQL schema (DDL), seeding scripts
│   ├── compliance/               # Regulatory compliance database rules
│   └── storage/                  # Supabase storage rules config
│
├── .github/                      # GitHub Actions for CI/CD
├── turbo.json                   # Turborepo config
├── tsconfig.base.json           # Shared TS config
├── .eslintrc.js                 # Shared lint config
├── .prettierrc                  # Formatting rules
├── README.md                    # Project intro and getting started
```

---

### 🔧 Environment Variables (enhanced)

Each app (web, mobile) should use `.env.local` or `.env`:

```
# Core Services
SUPABASE_URL=
SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE=
STRIPE_PUBLIC_KEY=
STRIPE_SECRET_KEY=
TYPESENSE_API_KEY=
NEXT_PUBLIC_MAPBOX_KEY=

# Malaysian Integrations
BOVAEA_API_KEY=
MOF_STAMP_DUTY_API=
MYEG_API_KEY=
CTOS_API_KEY=
CCRIS_API_KEY=
NAPIC_DATA_API=

# Banking APIs
MAYBANK_API_KEY=
CIMB_API_KEY=
PUBLIC_BANK_API_KEY=
RHB_API_KEY=

# Payment Gateways
FPX_MERCHANT_ID=
TOUCH_N_GO_API=
GRABPAY_API_KEY=

# Government APIs
JPJ_API_KEY=
SSM_API_KEY=
LHDN_API_KEY=

# Localization
GOOGLE_TRANSLATE_API=
```

---

### 8. Full Stack Architecture (Enhanced)

| Layer           | Tool/Tech                          | Purpose                                   |
| --------------- | ---------------------------------- | ----------------------------------------- |
| Web Frontend    | Next.js + Tailwind CSS + i18n     | SEO-ready, multilingual UI               |
| Mobile App      | Expo + NativeWind + Localization  | Cross-platform for iOS/Android           |
| Auth & Security | Supabase Auth + RLS + 2FA         | Role-based, secure login with MFA        |
| Database        | Supabase (Postgres) + PostGIS     | Core app data and spatial search          |
| File Storage    | Supabase Storage + CDN            | Document and image handling               |
| Search          | Typesense + PostGIS + Elasticsearch| Location-aware fast search              |
| AI              | Claude 3 + Supabase Edge Functions | Listing/doc generation, suggestion engine |
| Payments        | Stripe + FPX + Local Gateways     | Multi-gateway payment processing         |
| Compliance      | Custom Malaysian Regulatory APIs   | BOVAEA, MOF, legal compliance            |
| Banking         | Open Banking APIs + Local Banks    | Loan applications, credit checks          |
| Government      | MyEG + JPJ + SSM + LHDN APIs      | Official document verification           |
| Admin Panel     | Supabase Studio, internal console  | Staff management, moderation              |
| Hosting         | Vercel (Web), EAS (Mobile)         | SSR and global hosting                    |
| Analytics       | GA4, PostHog, Meta Pixel           | Tracking, funnel analysis                 |
| Push Alerts     | OneSignal, Expo Notifications      | Task and alert delivery                   |

---

### 9. Enhanced Premium Plans

| Plan               | Price      | Inclusions                                           |
| ------------------ | ---------- | ---------------------------------------------------- |
| Free               | RM 0       | 3 listings, 1 doc upload/month, basic compliance    |
| Agent Starter      | RM 39/mo   | 15 listings, client chat, basic CRM, AI flyer       |
| Agent Professional| RM 79/mo   | 50 listings, AI tools, client portal, market data   |
| Agent Enterprise   | RM 149/mo  | Unlimited, full AI suite, white-label, priority     |
| Lawyer Basic       | RM 89/mo   | 20 documents/month, basic templates, compliance     |
| Lawyer Professional| RM 179/mo  | Unlimited docs, AI generation, firm management      |
| Banker Basic       | RM 99/mo   | Basic pipeline, document uploads, team access       |
| Banker Professional| RM 199/mo  | Advanced analytics, API integrations, white-label   |
| Enterprise Custom  | Contact    | Full customization, dedicated support, SLA          |

---

### 10. Malaysian Market Launch Strategy

#### 10.1 Phase 1: Core Platform (Months 1-3)
- Basic agent/lawyer/banker dashboards
- BOVAEA compliance integration
- Core document generation
- Multilingual support (EN/MY)

#### 10.2 Phase 2: Advanced Features (Months 4-6)
- Banking API integrations
- AI-powered market analysis
- Mobile app launch
- Chinese language support

#### 10.3 Phase 3: Market Expansion (Months 7-9)
- Government API integrations
- Advanced analytics and reporting
- White-label solutions
- Partnership programs

#### 10.4 Go-to-Market Strategy
- **Target Markets**: Klang Valley, Johor, Penang, then nationwide
- **Key Partnerships**: Major real estate agencies, law firms, banks
- **Marketing Channels**: Industry events, digital marketing, referral programs
- **Regulatory Strategy**: Early engagement with BOVAEA, MOF for official endorsement

---

### 11. Compliance & Risk Management

#### 11.1 Data Protection (PDPA Compliance)
- Consent management system
- Data minimization practices
- Right to erasure implementation
- Data breach notification procedures
- Regular compliance audits

#### 11.2 Financial Compliance
- Anti-money laundering checks
- Source of funds verification
- Transaction monitoring
- Regulatory reporting capabilities
- Audit trail maintenance

#### 11.3 Professional Standards
- BOVAEA code of conduct enforcement
- Professional indemnity insurance tracking
- Continuing education monitoring
- Disciplinary action alerts
- Quality assurance protocols

---

### 12. Deployment Checklist (Enhanced)

- [ ] Supabase database with Malaysian compliance schema
- [ ] BOVAEA API integration and testing
- [ ] MOF stamp duty calculator implementation
- [ ] Banking partner API connections
- [ ] Government API integrations (MyEG, JPJ, SSM)
- [ ] Multilingual content management
- [ ] Security audits and penetration testing
- [ ] PDPA compliance verification
- [ ] Performance testing with Malaysian data sets
- [ ] Mobile app store submissions
- [ ] Legal document template verification
- [ ] Payment gateway integrations (FPX, local methods)
- [ ] Customer support system in multiple languages
- [ ] Disaster recovery and backup procedures
- [ ] Regulatory approval documentation

---

### 13. Success Metrics & KPIs

#### 13.1 User Adoption
- Monthly active users by role
- Platform completion rates
- Feature adoption rates
- Customer retention rates

#### 13.2 Business Impact
- Transaction volume processed
- Commission facilitated
- Document processing efficiency
- Time-to-close improvements

#### 13.3 Compliance Metrics
- Regulatory compliance rate
- Audit pass rates
- Document accuracy scores
- Processing time reductions

---

### 14. Next Steps

- Finalize Malaysian regulatory partnerships
- Complete enhanced DB schema design
- Implement core compliance features
- Develop multilingual UI components
- Integrate government APIs
- Build advanced AI features
- Test with pilot agencies/firms
- Prepare regulatory submissions
- Launch beta program with key partners
- Scale to nationwide operations

---

**Last Updated**: January 2025  
**Document Version**: 2.0  
**Status**: Ready for Development

