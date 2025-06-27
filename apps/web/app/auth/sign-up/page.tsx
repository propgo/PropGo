import type { Metadata } from 'next'
import { SignUpForm } from '@/components/auth/sign-up-form'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { EnvDebug } from '@/components/debug/env-debug'

export const metadata: Metadata = {
  title: 'Sign Up - PropGo.my',
  description: 'Join PropGo.my and connect with Malaysia\'s leading real estate professionals, lawyers, and banking partners.',
}

export default function SignUpPage() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <Header />
      <main className="flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <EnvDebug />
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Join PropGo.my
            </h1>
            <p className="text-gray-600">
              Connect with Malaysia's leading real estate professionals
            </p>
          </div>
          <SignUpForm />
        </div>
      </main>
      <Footer />
    </div>
  )
} 