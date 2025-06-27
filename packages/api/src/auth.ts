import { createClient, createServerSupabaseClient, createServiceRoleClient } from './client'
import { z } from 'zod'

// Validation schemas
export const signUpSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
  fullName: z.string().min(2, 'Full name must be at least 2 characters'),
  role: z.enum(['agent', 'agency_owner', 'lawyer', 'banker', 'buyer']),
  phone: z.string().optional(),
})

export const signInSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(1, 'Password is required'),
})

export const resetPasswordSchema = z.object({
  email: z.string().email('Invalid email address'),
})

export const updatePasswordSchema = z.object({
  password: z.string().min(8, 'Password must be at least 8 characters'),
})

export type SignUpData = z.infer<typeof signUpSchema>
export type SignInData = z.infer<typeof signInSchema>
export type ResetPasswordData = z.infer<typeof resetPasswordSchema>
export type UpdatePasswordData = z.infer<typeof updatePasswordSchema>

// Authentication service for client-side operations
export class AuthService {
  private supabase = createClient()

  async signUp(data: SignUpData) {
    try {
      const validatedData = signUpSchema.parse(data)
      
      const { data: authData, error } = await this.supabase.auth.signUp({
        email: validatedData.email,
        password: validatedData.password,
        options: {
          data: {
            full_name: validatedData.fullName,
            role: validatedData.role,
            phone: validatedData.phone,
          },
        },
      })

      if (error) {
        throw new Error(error.message)
      }

      return { success: true, data: authData, error: null }
    } catch (error) {
      return { 
        success: false, 
        data: null, 
        error: error instanceof Error ? error.message : 'Sign up failed' 
      }
    }
  }

  async signIn(data: SignInData) {
    try {
      const validatedData = signInSchema.parse(data)
      
      const { data: authData, error } = await this.supabase.auth.signInWithPassword({
        email: validatedData.email,
        password: validatedData.password,
      })

      if (error) {
        throw new Error(error.message)
      }

      return { success: true, data: authData, error: null }
    } catch (error) {
      return { 
        success: false, 
        data: null, 
        error: error instanceof Error ? error.message : 'Sign in failed' 
      }
    }
  }

  async signOut() {
    try {
      const { error } = await this.supabase.auth.signOut()
      
      if (error) {
        throw new Error(error.message)
      }

      return { success: true, error: null }
    } catch (error) {
      return { 
        success: false, 
        error: error instanceof Error ? error.message : 'Sign out failed' 
      }
    }
  }

  async resetPassword(data: ResetPasswordData) {
    try {
      const validatedData = resetPasswordSchema.parse(data)
      
      const { error } = await this.supabase.auth.resetPasswordForEmail(
        validatedData.email,
        {
          redirectTo: `${window.location.origin}/auth/reset-password`,
        }
      )

      if (error) {
        throw new Error(error.message)
      }

      return { success: true, error: null }
    } catch (error) {
      return { 
        success: false, 
        error: error instanceof Error ? error.message : 'Password reset failed' 
      }
    }
  }

  async updatePassword(data: UpdatePasswordData) {
    try {
      const validatedData = updatePasswordSchema.parse(data)
      
      const { error } = await this.supabase.auth.updateUser({
        password: validatedData.password
      })

      if (error) {
        throw new Error(error.message)
      }

      return { success: true, error: null }
    } catch (error) {
      return { 
        success: false, 
        error: error instanceof Error ? error.message : 'Password update failed' 
      }
    }
  }

  async getCurrentUser() {
    try {
      const { data: { user }, error } = await this.supabase.auth.getUser()
      
      if (error) {
        throw new Error(error.message)
      }

      return { success: true, data: user, error: null }
    } catch (error) {
      return { 
        success: false, 
        data: null, 
        error: error instanceof Error ? error.message : 'Failed to get current user' 
      }
    }
  }

  async getCurrentSession() {
    try {
      const { data: { session }, error } = await this.supabase.auth.getSession()
      
      if (error) {
        throw new Error(error.message)
      }

      return { success: true, data: session, error: null }
    } catch (error) {
      return { 
        success: false, 
        data: null, 
        error: error instanceof Error ? error.message : 'Failed to get current session' 
      }
    }
  }

  onAuthStateChange(callback: (event: string, session: any) => void) {
    return this.supabase.auth.onAuthStateChange(callback)
  }
}

// Server-side authentication utilities
export async function getServerSession(cookieStore: any) {
  try {
    const supabase = createServerSupabaseClient(cookieStore)
    const { data: { session }, error } = await supabase.auth.getSession()
    
    if (error) {
      console.error('Server session error:', error)
      return null
    }

    return session
  } catch (error) {
    console.error('Failed to get server session:', error)
    return null
  }
}

export async function getServerUser(cookieStore: any) {
  try {
    const supabase = createServerSupabaseClient(cookieStore)
    const { data: { user }, error } = await supabase.auth.getUser()
    
    if (error) {
      console.error('Server user error:', error)
      return null
    }

    return user
  } catch (error) {
    console.error('Failed to get server user:', error)
    return null
  }
}

export async function getUserProfile(userId: string, cookieStore?: any) {
  try {
    const supabase = cookieStore 
      ? createServerSupabaseClient(cookieStore)
      : createClient()
    
    const { data, error } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', userId)
      .single()
    
    if (error) {
      throw new Error(error.message)
    }

    return { success: true, data, error: null }
  } catch (error) {
    return { 
      success: false, 
      data: null, 
      error: error instanceof Error ? error.message : 'Failed to get user profile' 
    }
  }
}

// Export service instance
export const authService = new AuthService() 