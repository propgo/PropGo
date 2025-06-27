import { z } from 'zod'

// Base User Profile
export const UserProfileSchema = z.object({
  id: z.string().uuid(),
  email: z.string().email(),
  role: z.enum(['agent', 'agency_owner', 'lawyer', 'banker', 'buyer', 'seller', 'admin', 'support']),
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  displayName: z.string().optional(),
  avatar: z.string().url().optional(),
  phone: z.string().regex(/^(\+?6?01[0-46-9])\d{7,8}$/, 'Invalid Malaysian phone number'),
  whatsapp: z.string().regex(/^(\+?6?01[0-46-9])\d{7,8}$/, 'Invalid WhatsApp number').optional(),
  dateOfBirth: z.string().date().optional(),
  gender: z.enum(['male', 'female', 'other', 'prefer_not_to_say']).optional(),
  languages: z.array(z.enum(['english', 'malay', 'chinese', 'tamil', 'other'])).default(['english']),
  timezone: z.string().default('Asia/Kuala_Lumpur'),
  isEmailVerified: z.boolean().default(false),
  isPhoneVerified: z.boolean().default(false),
  isActive: z.boolean().default(true),
  lastLoginAt: z.string().datetime().optional(),
  createdAt: z.string().datetime(),
  updatedAt: z.string().datetime(),
})

export type UserProfile = z.infer<typeof UserProfileSchema>

// Agent Profile (extends base profile)
export const AgentProfileSchema = UserProfileSchema.extend({
  role: z.literal('agent'),
  renNumber: z.string().regex(/^REN\d{5}$/, 'Invalid REN number format'),
  agencyId: z.string().uuid(),
  position: z.string().optional(),
  specializations: z.array(z.enum([
    'residential_sale',
    'residential_rental', 
    'commercial_sale',
    'commercial_rental',
    'industrial',
    'land',
    'luxury_properties',
    'investment_properties'
  ])).default([]),
  areasOfExpertise: z.array(z.string()).default([]),
  yearsOfExperience: z.number().min(0).optional(),
  totalTransactions: z.number().min(0).default(0),
  totalVolume: z.number().min(0).default(0),
  averageRating: z.number().min(0).max(5).optional(),
  bio: z.string().max(1000).optional(),
  website: z.string().url().optional(),
  socialMedia: z.object({
    facebook: z.string().url().optional(),
    instagram: z.string().url().optional(),
    linkedin: z.string().url().optional(),
    tiktok: z.string().url().optional(),
  }).optional(),
})

export type AgentProfile = z.infer<typeof AgentProfileSchema>

// Agency Owner Profile
export const AgencyOwnerProfileSchema = UserProfileSchema.extend({
  role: z.literal('agency_owner'),
  renNumber: z.string().regex(/^REN\d{5}$/, 'Invalid REN number format'),
  agencyId: z.string().uuid(),
  position: z.literal('owner'),
  yearsOfExperience: z.number().min(0).optional(),
})

export type AgencyOwnerProfile = z.infer<typeof AgencyOwnerProfileSchema>

// Lawyer Profile
export const LawyerProfileSchema = UserProfileSchema.extend({
  role: z.literal('lawyer'),
  barCouncilNumber: z.string().min(1, 'Bar Council number is required'),
  firmId: z.string().uuid(),
  position: z.string().optional(),
  specializations: z.array(z.enum([
    'property_law',
    'conveyancing',
    'commercial_law',
    'litigation',
    'corporate_law',
    'banking_law'
  ])).default([]),
  yearsOfExperience: z.number().min(0).optional(),
  admittedYear: z.number().min(1970).max(new Date().getFullYear()).optional(),
})

export type LawyerProfile = z.infer<typeof LawyerProfileSchema>

// Banker Profile
export const BankerProfileSchema = UserProfileSchema.extend({
  role: z.literal('banker'),
  bankId: z.string().uuid(),
  employeeId: z.string().min(1, 'Employee ID is required'),
  position: z.string().optional(),
  department: z.enum([
    'mortgage',
    'commercial_lending',
    'relationship_management',
    'credit_analysis',
    'branch_operations'
  ]).optional(),
  specializations: z.array(z.enum([
    'home_loans',
    'commercial_loans',
    'islamic_banking',
    'investment_products',
    'wealth_management'
  ])).default([]),
  yearsOfExperience: z.number().min(0).optional(),
})

export type BankerProfile = z.infer<typeof BankerProfileSchema>

// Organization Types
export const OrganizationTypeSchema = z.enum(['agency', 'law_firm', 'bank', 'developer'])
export type OrganizationType = z.infer<typeof OrganizationTypeSchema>

export const OrganizationSchema = z.object({
  id: z.string().uuid(),
  name: z.string().min(1, 'Organization name is required'),
  type: OrganizationTypeSchema,
  registrationNumber: z.string().min(1, 'Registration number is required'),
  licenseNumber: z.string().optional(),
  address: z.object({
    street: z.string().min(1, 'Street address is required'),
    unit: z.string().optional(),
    city: z.string().min(1, 'City is required'),
    state: z.enum([
      'Johor', 'Kedah', 'Kelantan', 'Kuala Lumpur', 'Labuan', 'Malacca',
      'Negeri Sembilan', 'Pahang', 'Penang', 'Perak', 'Perlis', 'Putrajaya',
      'Sabah', 'Sarawak', 'Selangor', 'Terengganu'
    ]),
    postcode: z.string().regex(/^\d{5}$/, 'Invalid Malaysian postcode'),
    country: z.literal('Malaysia').default('Malaysia'),
  }),
  contact: z.object({
    email: z.string().email('Invalid email address'),
    phone: z.string().regex(/^(\+?6?01[0-46-9]|\+?6?03[0-9]|\+?6?04[0-9]|\+?6?05[0-9]|\+?6?06[0-9]|\+?6?07[0-9]|\+?6?08[0-9]|\+?6?09[0-9])\d{7,8}$/, 'Invalid Malaysian phone number'),
    fax: z.string().optional(),
    website: z.string().url().optional(),
  }),
  logo: z.string().url().optional(),
  description: z.string().max(1000).optional(),
  establishedYear: z.number().min(1900).max(new Date().getFullYear()).optional(),
  employeeCount: z.number().min(1).optional(),
  isVerified: z.boolean().default(false),
  isActive: z.boolean().default(true),
  createdAt: z.string().datetime(),
  updatedAt: z.string().datetime(),
})

export type Organization = z.infer<typeof OrganizationSchema>

// Team and Membership
export const TeamMemberRoleSchema = z.enum(['member', 'manager', 'admin', 'owner'])
export type TeamMemberRole = z.infer<typeof TeamMemberRoleSchema>

export const TeamMemberSchema = z.object({
  id: z.string().uuid(),
  userId: z.string().uuid(),
  organizationId: z.string().uuid(),
  role: TeamMemberRoleSchema,
  position: z.string().optional(),
  department: z.string().optional(),
  permissions: z.array(z.string()).default([]),
  joinedAt: z.string().datetime(),
  isActive: z.boolean().default(true),
  invitedBy: z.string().uuid().optional(),
  invitedAt: z.string().datetime().optional(),
})

export type TeamMember = z.infer<typeof TeamMemberSchema>

// Notification Preferences
export const NotificationChannelSchema = z.enum(['email', 'sms', 'whatsapp', 'push', 'in_app'])
export type NotificationChannel = z.infer<typeof NotificationChannelSchema>

export const NotificationTypeSchema = z.enum([
  'new_lead',
  'deal_update',
  'document_signed',
  'commission_received',
  'team_invitation',
  'system_announcement',
  'security_alert',
  'marketing_update'
])
export type NotificationType = z.infer<typeof NotificationTypeSchema>

export const NotificationPreferencesSchema = z.object({
  userId: z.string().uuid(),
  preferences: z.record(
    NotificationTypeSchema,
    z.object({
      enabled: z.boolean().default(true),
      channels: z.array(NotificationChannelSchema).default(['email', 'in_app']),
    })
  ),
  quietHours: z.object({
    enabled: z.boolean().default(false),
    startTime: z.string().regex(/^([01]?[0-9]|2[0-3]):[0-5][0-9]$/).optional(),
    endTime: z.string().regex(/^([01]?[0-9]|2[0-3]):[0-5][0-9]$/).optional(),
    timezone: z.string().default('Asia/Kuala_Lumpur'),
  }).optional(),
  updatedAt: z.string().datetime(),
})

export type NotificationPreferences = z.infer<typeof NotificationPreferencesSchema> 