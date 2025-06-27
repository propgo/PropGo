'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/lib/auth-context'
import { Button } from '@/components/ui/button'
import { Loader2, LogOut } from 'lucide-react'

interface SignOutButtonProps {
  variant?: 'outline' | 'default' | 'destructive' | 'secondary' | 'ghost' | 'link'
  size?: 'default' | 'sm' | 'lg' | 'icon'
  className?: string
}

export function SignOutButton({ variant = 'outline', size = 'default', className }: SignOutButtonProps) {
  const [loading, setLoading] = useState(false)
  const { signOut } = useAuth()
  const router = useRouter()

  const handleSignOut = async () => {
    try {
      setLoading(true)
      console.log('🔓 Starting sign out process...')
      
      const result = await signOut()
      
      if (result.success) {
        console.log('🔓 Sign out successful, redirecting to home page')
        router.push('/')
      } else {
        console.error('🔓 Sign out failed:', result.error)
        // Even if there's an error, redirect to home as a fallback
        router.push('/')
      }
    } catch (error) {
      console.error('🔓 Sign out error:', error)
      // Redirect to home on any error
      router.push('/')
    } finally {
      setLoading(false)
    }
  }

  return (
    <Button 
      variant={variant} 
      size={size} 
      className={className}
      onClick={handleSignOut}
      disabled={loading}
    >
      {loading ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Signing out...
        </>
      ) : (
        <>
          <LogOut className="mr-2 h-4 w-4" />
          Sign Out
        </>
      )}
    </Button>
  )
} 