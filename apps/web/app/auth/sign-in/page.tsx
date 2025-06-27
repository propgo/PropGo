import type { Metadata } from 'next'
import { SignInForm } from '@/components/auth/sign-in-form'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'

export const metadata: Metadata = {
  title: 'Sign In - PropGo.my',
  description: 'Sign in to your PropGo account to access Malaysia\'s premier B2B real estate platform.',
}

export default function SignInPage() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <Header />
      <main className="flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Welcome Back
            </h1>
            <p className="text-gray-600">
              Sign in to your PropGo.my account
            </p>
          </div>
          <SignInForm />
        </div>
      </main>
      <Footer />
    </div>
  )
} 