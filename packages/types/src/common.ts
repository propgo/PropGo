import { z } from 'zod'

// Base Types
export type UUID = string
export type Timestamp = string
export type Email = string
export type Phone = string
export type URL = string

// Common Status Types
export const StatusSchema = z.enum(['active', 'inactive', 'pending', 'archived'])
export type Status = z.infer<typeof StatusSchema>

// Pagination Types
export const PaginationSchema = z.object({
  page: z.number().min(1).default(1),
  limit: z.number().min(1).max(100).default(20),
  offset: z.number().min(0).optional(),
})

export type Pagination = z.infer<typeof PaginationSchema>

export interface PaginatedResponse<T> {
  data: T[]
  pagination: {
    page: number
    limit: number
    total: number
    totalPages: number
    hasNext: boolean
    hasPrev: boolean
  }
}

// Sort Types
export const SortOrderSchema = z.enum(['asc', 'desc'])
export type SortOrder = z.infer<typeof SortOrderSchema>

export interface SortConfig {
  field: string
  order: SortOrder
}

// Malaysian Currency
export const MYRSchema = z.number().positive()
export type MYR = z.infer<typeof MYRSchema>

// Address Components
export const AddressSchema = z.object({
  street: z.string().min(1, 'Street address is required'),
  unit: z.string().optional(),
  city: z.string().min(1, 'City is required'),
  state: z.enum([
    'Johor',
    'Kedah', 
    'Kelantan',
    'Kuala Lumpur',
    'Labuan',
    'Malacca',
    'Negeri Sembilan',
    'Pahang',
    'Penang',
    'Perak',
    'Perlis',
    'Putrajaya',
    'Sabah',
    'Sarawak',
    'Selangor',
    'Terengganu'
  ]),
  postcode: z.string().regex(/^\d{5}$/, 'Invalid Malaysian postcode'),
  country: z.literal('Malaysia').default('Malaysia'),
})

export type Address = z.infer<typeof AddressSchema>

// Contact Information
export const ContactSchema = z.object({
  email: z.string().email('Invalid email address'),
  phone: z.string().regex(/^(\+?6?01[0-46-9])\d{7,8}$/, 'Invalid Malaysian phone number'),
  whatsapp: z.string().regex(/^(\+?6?01[0-46-9])\d{7,8}$/, 'Invalid WhatsApp number').optional(),
  wechat: z.string().optional(),
  telegram: z.string().optional(),
})

export type Contact = z.infer<typeof ContactSchema>

// File Upload Types
export const FileTypeSchema = z.enum([
  'image/jpeg',
  'image/png', 
  'image/webp',
  'application/pdf',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
])

export type FileType = z.infer<typeof FileTypeSchema>

export const FileUploadSchema = z.object({
  id: z.string().uuid(),
  filename: z.string(),
  originalName: z.string(),
  mimeType: FileTypeSchema,
  size: z.number().positive(),
  url: z.string().url(),
  thumbnailUrl: z.string().url().optional(),
  uploadedAt: z.string().datetime(),
  uploadedBy: z.string().uuid(),
})

export type FileUpload = z.infer<typeof FileUploadSchema>

// Error Types (basic error interface, API-specific ones are in api.ts)
export interface BaseError {
  code: string
  message: string
  details?: Record<string, unknown>
  timestamp: string
}

// Malaysian specific constants
export const MALAYSIAN_STATES = [
  'Johor',
  'Kedah', 
  'Kelantan',
  'Kuala Lumpur',
  'Labuan',
  'Malacca',
  'Negeri Sembilan',
  'Pahang',
  'Penang',
  'Perak',
  'Perlis',
  'Putrajaya',
  'Sabah',
  'Sarawak',
  'Selangor',
  'Terengganu'
] as const

export type MalaysianState = typeof MALAYSIAN_STATES[number] 