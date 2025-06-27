import { z } from 'zod'
import type { UUID, Timestamp } from './common'

// User Roles in PropGo ecosystem
export const UserRoleSchema = z.enum([
  'agent',          // Real estate agent
  'agency_owner',   // Agency owner/manager
  'lawyer',         // Legal professional
  'banker',         // Banking professional  
  'buyer',          // Property buyer
  'seller',         // Property seller
  'admin',          // Platform admin
  'support'         // Customer support
])

export type UserRole = z.infer<typeof UserRoleSchema>

// Permission Types
export const PermissionSchema = z.enum([
  // Property permissions
  'property:create',
  'property:read',
  'property:update',
  'property:delete',
  'property:publish',
  
  // Client permissions
  'client:create',
  'client:read',
  'client:update',
  'client:delete',
  
  // Deal permissions
  'deal:create',
  'deal:read',
  'deal:update',
  'deal:delete',
  'deal:manage_pipeline',
  
  // Document permissions
  'document:create',
  'document:read',
  'document:update',
  'document:delete',
  'document:sign',
  
  // Commission permissions
  'commission:view',
  'commission:calculate',
  'commission:approve',
  
  // Team permissions
  'team:invite',
  'team:manage',
  'team:remove',
  
  // Admin permissions
  'admin:users',
  'admin:settings',
  'admin:compliance',
  'admin:reports'
])

export type Permission = z.infer<typeof PermissionSchema>

// Authentication Types
export const LoginSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
  remember: z.boolean().default(false),
})

export type LoginRequest = z.infer<typeof LoginSchema>

export const RegisterSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string()
    .min(8, 'Password must be at least 8 characters')
    .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/, 
           'Password must contain uppercase, lowercase, number and special character'),
  confirmPassword: z.string(),
  role: UserRoleSchema,
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  phone: z.string().regex(/^(\+?6?01[0-46-9])\d{7,8}$/, 'Invalid Malaysian phone number'),
  termsAccepted: z.boolean().refine(val => val === true, 'You must accept the terms and conditions'),
  marketingConsent: z.boolean().default(false),
}).refine(data => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
})

export type RegisterRequest = z.infer<typeof RegisterSchema>

export const ForgotPasswordSchema = z.object({
  email: z.string().email('Invalid email address'),
})

export type ForgotPasswordRequest = z.infer<typeof ForgotPasswordSchema>

export const ResetPasswordSchema = z.object({
  token: z.string().min(1, 'Reset token is required'),
  password: z.string()
    .min(8, 'Password must be at least 8 characters')
    .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/, 
           'Password must contain uppercase, lowercase, number and special character'),
  confirmPassword: z.string(),
}).refine(data => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
})

export type ResetPasswordRequest = z.infer<typeof ResetPasswordSchema>

// Session and Token Types
export interface AuthSession {
  user: AuthUser
  accessToken: string
  refreshToken: string
  expiresAt: Timestamp
  permissions: Permission[]
}

export interface AuthUser {
  id: UUID
  email: string
  role: UserRole
  firstName: string
  lastName: string
  avatar?: string
  isEmailVerified: boolean
  isPhoneVerified: boolean
  lastLoginAt?: Timestamp
  createdAt: Timestamp
  updatedAt: Timestamp
}

// JWT Claims
export interface JWTClaims {
  sub: UUID           // User ID
  email: string
  role: UserRole
  permissions: Permission[]
  iat: number        // Issued at
  exp: number        // Expires at
  iss: string        // Issuer
  aud: string        // Audience
}

// Multi-Factor Authentication
export const MFAMethodSchema = z.enum(['sms', 'email', 'totp'])
export type MFAMethod = z.infer<typeof MFAMethodSchema>

export const MFASetupSchema = z.object({
  method: MFAMethodSchema,
  phoneNumber: z.string().regex(/^(\+?6?01[0-46-9])\d{7,8}$/).optional(),
  backupCodes: z.array(z.string()).optional(),
})

export type MFASetup = z.infer<typeof MFASetupSchema>

export const MFAVerifySchema = z.object({
  method: MFAMethodSchema,
  code: z.string().min(4, 'Verification code is required'),
  backupCode: z.string().optional(),
})

export type MFAVerify = z.infer<typeof MFAVerifySchema>

// Role-based permissions mapping
export const ROLE_PERMISSIONS: Record<UserRole, Permission[]> = {
  agent: [
    'property:create', 'property:read', 'property:update', 'property:publish',
    'client:create', 'client:read', 'client:update',
    'deal:create', 'deal:read', 'deal:update', 'deal:manage_pipeline',
    'document:create', 'document:read', 'document:update',
    'commission:view'
  ],
  agency_owner: [
    'property:create', 'property:read', 'property:update', 'property:delete', 'property:publish',
    'client:create', 'client:read', 'client:update', 'client:delete',
    'deal:create', 'deal:read', 'deal:update', 'deal:delete', 'deal:manage_pipeline',
    'document:create', 'document:read', 'document:update', 'document:delete',
    'commission:view', 'commission:calculate', 'commission:approve',
    'team:invite', 'team:manage', 'team:remove'
  ],
  lawyer: [
    'document:create', 'document:read', 'document:update', 'document:sign',
    'deal:read', 'deal:update',
    'client:read', 'client:update'
  ],
  banker: [
    'deal:read', 'deal:update',
    'client:read', 'client:update',
    'document:read', 'document:sign'
  ],
  buyer: [
    'property:read',
    'deal:read', 'deal:update',
    'document:read', 'document:sign'
  ],
  seller: [
    'property:create', 'property:read', 'property:update',
    'deal:read', 'deal:update',
    'document:read', 'document:sign'
  ],
  admin: Object.values(PermissionSchema.enum),
  support: [
    'property:read',
    'client:read',
    'deal:read',
    'document:read'
  ]
} 