import { z } from 'zod'

// Deal Status
export const DealStatusSchema = z.enum([
  'lead',
  'viewing_scheduled',
  'viewing_completed',
  'offer_made',
  'offer_accepted',
  'spa_signed',
  'loan_approved',
  'completion',
  'closed_won',
  'closed_lost'
])

export type DealStatus = z.infer<typeof DealStatusSchema>

// Deal Types
export const DealTypeSchema = z.enum(['sale', 'rent', 'buy', 'lease'])
export type DealType = z.infer<typeof DealTypeSchema>

// Deal Priority
export const DealPrioritySchema = z.enum(['low', 'medium', 'high', 'urgent'])
export type DealPriority = z.infer<typeof DealPrioritySchema>

// Deal Source
export const DealSourceSchema = z.enum([
  'website',
  'referral',
  'social_media',
  'walk_in',
  'cold_call',
  'email_marketing',
  'property_portal',
  'agent_network',
  'other'
])

export type DealSource = z.infer<typeof DealSourceSchema>

// Main Deal Schema
export const DealSchema = z.object({
  id: z.string().uuid(),
  
  // Basic Information
  title: z.string().min(1, 'Deal title is required'),
  description: z.string().optional(),
  
  // Deal Classification
  type: DealTypeSchema,
  status: DealStatusSchema.default('lead'),
  priority: DealPrioritySchema.default('medium'),
  source: DealSourceSchema,
  
  // Property Information
  propertyId: z.string().uuid(),
  
  // Client Information
  clientId: z.string().uuid(),
  clientType: z.enum(['buyer', 'seller', 'tenant', 'landlord']),
  
  // Financial Information
  offerPrice: z.number().positive().optional(),
  agreedPrice: z.number().positive().optional(),
  commission: z.object({
    percentage: z.number().min(0).max(100),
    amount: z.number().min(0),
    currency: z.literal('MYR').default('MYR'),
  }).optional(),
  
  // Timeline
  expectedCloseDate: z.string().datetime().optional(),
  actualCloseDate: z.string().datetime().optional(),
  
  // Team
  primaryAgentId: z.string().uuid(),
  secondaryAgentId: z.string().uuid().optional(),
  agencyId: z.string().uuid(),
  
  // Deal Stages with timestamps
  stages: z.array(z.object({
    status: DealStatusSchema,
    timestamp: z.string().datetime(),
    notes: z.string().optional(),
    userId: z.string().uuid(),
  })).default([]),
  
  // Notes and Communications
  notes: z.string().optional(),
  lastContactDate: z.string().datetime().optional(),
  nextFollowUpDate: z.string().datetime().optional(),
  
  // Metrics
  isActive: z.boolean().default(true),
  probability: z.number().min(0).max(100).default(50),
  
  // Timestamps
  createdAt: z.string().datetime(),
  updatedAt: z.string().datetime(),
})

export type Deal = z.infer<typeof DealSchema>

// Deal Activity
export const DealActivitySchema = z.object({
  id: z.string().uuid(),
  dealId: z.string().uuid(),
  
  // Activity Details
  type: z.enum([
    'status_change',
    'note_added',
    'viewing_scheduled',
    'viewing_completed',
    'offer_made',
    'offer_accepted',
    'document_uploaded',
    'payment_received',
    'call_made',
    'email_sent',
    'meeting_scheduled'
  ]),
  
  title: z.string().min(1, 'Activity title is required'),
  description: z.string().optional(),
  
  // Activity Metadata
  metadata: z.record(z.unknown()).optional(),
  
  // User Information
  userId: z.string().uuid(),
  
  // Timestamps
  createdAt: z.string().datetime(),
})

export type DealActivity = z.infer<typeof DealActivitySchema>

// Pipeline Configuration
export const PipelineStageSchema = z.object({
  id: z.string().uuid(),
  name: z.string().min(1, 'Stage name is required'),
  status: DealStatusSchema,
  color: z.string().regex(/^#[0-9A-F]{6}$/i, 'Invalid color format'),
  order: z.number().min(0),
  isActive: z.boolean().default(true),
  
  // Stage Settings
  requirements: z.array(z.string()).default([]),
  automatedActions: z.array(z.object({
    trigger: z.string(),
    action: z.string(),
    conditions: z.record(z.unknown()).optional(),
  })).default([]),
})

export type PipelineStage = z.infer<typeof PipelineStageSchema>

// Deal Search/Filter Schema
export const DealSearchSchema = z.object({
  q: z.string().optional(),
  status: z.array(DealStatusSchema).optional(),
  type: z.array(DealTypeSchema).optional(),
  priority: z.array(DealPrioritySchema).optional(),
  agentId: z.string().uuid().optional(),
  clientId: z.string().uuid().optional(),
  minValue: z.number().min(0).optional(),
  maxValue: z.number().min(0).optional(),
  dateFrom: z.string().datetime().optional(),
  dateTo: z.string().datetime().optional(),
  sortBy: z.enum(['created_desc', 'created_asc', 'value_desc', 'value_asc', 'priority_desc']).default('created_desc'),
  page: z.number().min(1).default(1),
  limit: z.number().min(1).max(50).default(20),
})

export type DealSearch = z.infer<typeof DealSearchSchema> 