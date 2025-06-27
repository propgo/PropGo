'use client'

import { Suspense, useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { VerificationForm } from '@/components/auth/verification-form'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'

function VerificationContent() {
  const searchParams = useSearchParams()
  const [email, setEmail] = useState<string>('')

  useEffect(() => {
    // Get email from URL params or localStorage
    const emailFromParams = searchParams.get('email')
    const emailFromStorage = localStorage.getItem('verification_email')
    
    if (emailFromParams) {
      setEmail(emailFromParams)
      localStorage.setItem('verification_email', emailFromParams)
    } else if (emailFromStorage) {
      setEmail(emailFromStorage)
    }
  }, [searchParams])

  if (!email) {
    return (
      <div className="text-center">
        <p className="text-red-600">No email found. Please go back to sign up.</p>
      </div>
    )
  }

  return <VerificationForm email={email} />
}

export default function VerifyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="flex-1 flex items-center justify-center p-8">
        <Suspense fallback={<div>Loading...</div>}>
          <VerificationContent />
        </Suspense>
      </main>
      <Footer />
    </div>
  )
}

 