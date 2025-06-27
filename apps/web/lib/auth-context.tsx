'use client'

import React, { createContext, useContext, useEffect, useState } from 'react'
import { User, Session } from '@supabase/supabase-js'
import { createClient } from '@supabase/supabase-js'

// Simple client for now
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

interface AuthContextType {
  user: User | null
  session: Session | null
  loading: boolean
  signUp: (data: any) => Promise<any>
  signIn: (data: any) => Promise<any>
  signOut: () => Promise<any>
  resetPassword: (data: any) => Promise<any>
  updatePassword: (data: any) => Promise<any>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

interface AuthProviderProps {
  children: React.ReactNode
  initialSession?: Session | null
}

export function AuthProvider({ children, initialSession }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(initialSession?.user ?? null)
  const [session, setSession] = useState<Session | null>(initialSession ?? null)
  const [loading, setLoading] = useState(!initialSession)

  useEffect(() => {
    // Get initial session if not provided
    if (!initialSession) {
      supabase.auth.getSession().then(({ data }) => {
        setSession(data.session)
        setUser(data.session?.user ?? null)
        setLoading(false)
      })
    }

    // Listen for auth changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(async (event: any, session: any) => {
      setSession(session)
      setUser(session?.user ?? null)
      setLoading(false)

      // Handle auth events
      if (event === 'SIGNED_IN') {
        console.log('User signed in:', session?.user?.email)
      } else if (event === 'SIGNED_OUT') {
        console.log('User signed out')
      } else if (event === 'TOKEN_REFRESHED') {
        console.log('Token refreshed')
      }
    })

    return () => {
      subscription.unsubscribe()
    }
  }, [initialSession])

  const signUp = async (data: any) => {
    const { data: result, error } = await supabase.auth.signUp({
      email: data.email,
      password: data.password,
      options: {
        data: {
          full_name: data.fullName,
          role: data.role,
          phone: data.phone,
        }
      }
    })
    
    if (error) {
      return { success: false, error: error.message }
    }
    
    return { success: true, data: result }
  }

  const signIn = async (data: any) => {
    const { data: result, error } = await supabase.auth.signInWithPassword({
      email: data.email,
      password: data.password,
    })
    
    if (error) {
      return { success: false, error: error.message }
    }
    
    return { success: true, data: result }
  }

  const signOut = async () => {
    const { error } = await supabase.auth.signOut()
    if (error) {
      return { success: false, error: error.message }
    }
    return { success: true }
  }

  const resetPassword = async (data: any) => {
    const { error } = await supabase.auth.resetPasswordForEmail(data.email)
    if (error) {
      return { success: false, error: error.message }
    }
    return { success: true }
  }

  const updatePassword = async (data: any) => {
    const { error } = await supabase.auth.updateUser({
      password: data.password
    })
    if (error) {
      return { success: false, error: error.message }
    }
    return { success: true }
  }

  const value: AuthContextType = {
    user,
    session,
    loading,
    signUp,
    signIn,
    signOut,
    resetPassword,
    updatePassword,
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

export function useUser() {
  const { user } = useAuth()
  return user
}

export function useSession() {
  const { session } = useAuth()
  return session
} 