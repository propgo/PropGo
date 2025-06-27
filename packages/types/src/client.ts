import { z } from 'zod'

// Client Types
export const ClientTypeSchema = z.enum(['buyer', 'seller', 'tenant', 'landlord', 'investor'])
export type ClientType = z.infer<typeof ClientTypeSchema>

// Client Status
export const ClientStatusSchema = z.enum(['lead', 'active', 'inactive', 'converted', 'archived'])
export type ClientStatus = z.infer<typeof ClientStatusSchema>

// Main Client Schema
export const ClientSchema = z.object({
  id: z.string().uuid(),
  
  // Personal Information
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  salutation: z.enum(['Mr', 'Ms', 'Mrs', 'Dr', 'Dato', 'Datuk', 'Tan Sri']).optional(),
  
  // Contact Information
  email: z.string().email('Invalid email address'),
  phone: z.string().regex(/^(\+?6?01[0-46-9])\d{7,8}$/, 'Invalid Malaysian phone number'),
  whatsapp: z.string().regex(/^(\+?6?01[0-46-9])\d{7,8}$/, 'Invalid WhatsApp number').optional(),
  
  // Client Classification
  type: ClientTypeSchema,
  status: ClientStatusSchema.default('lead'),
  
  // Preferences
  budget: z.object({
    min: z.number().min(0).optional(),
    max: z.number().min(0).optional(),
    currency: z.literal('MYR').default('MYR'),
  }).optional(),
  
  propertyPreferences: z.object({
    types: z.array(z.enum([
      'terrace', 'semi_detached', 'detached', 'bungalow', 'condominium',
      'apartment', 'shop_house', 'office', 'warehouse'
    ])).default([]),
    locations: z.array(z.string()).default([]),
    minBedrooms: z.number().min(0).optional(),
    maxBedrooms: z.number().min(0).optional(),
    furnishing: z.enum(['unfurnished', 'partially_furnished', 'fully_furnished']).optional(),
  }).optional(),
  
  // Address
  address: z.object({
    street: z.string().optional(),
    city: z.string().optional(),
    state: z.enum([
      'Johor', 'Kedah', 'Kelantan', 'Kuala Lumpur', 'Labuan', 'Malacca',
      'Negeri Sembilan', 'Pahang', 'Penang', 'Perak', 'Perlis', 'Putrajaya',
      'Sabah', 'Sarawak', 'Selangor', 'Terengganu'
    ]).optional(),
    postcode: z.string().regex(/^\d{5}$/, 'Invalid Malaysian postcode').optional(),
    country: z.literal('Malaysia').default('Malaysia'),
  }).optional(),
  
  // Agent Assignment
  primaryAgentId: z.string().uuid(),
  secondaryAgentId: z.string().uuid().optional(),
  agencyId: z.string().uuid(),
  
  // Client History
  source: z.enum([
    'website', 'referral', 'social_media', 'walk_in', 'cold_call',
    'email_marketing', 'property_portal', 'agent_network', 'other'
  ]),
  
  // Notes and Tags
  notes: z.string().optional(),
  tags: z.array(z.string()).default([]),
  
  // Important Dates
  lastContactDate: z.string().datetime().optional(),
  nextFollowUpDate: z.string().datetime().optional(),
  
  // Timestamps
  createdAt: z.string().datetime(),
  updatedAt: z.string().datetime(),
})

export type Client = z.infer<typeof ClientSchema> 