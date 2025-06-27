'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Alert } from '@/components/ui/alert'
import { useAuth } from '@/lib/auth-context'
import { useRouter } from 'next/navigation'
import { Loader2, Mail, RefreshCw } from 'lucide-react'

const verificationSchema = z.object({
  code: z.string()
    .min(6, 'Verification code must be 6 digits')
    .max(6, 'Verification code must be 6 digits')
    .regex(/^\d{6}$/, 'Verification code must contain only numbers')
})

type VerificationFormData = z.infer<typeof verificationSchema>

interface VerificationFormProps {
  email: string
  onBack?: () => void
}

export function VerificationForm({ email, onBack }: VerificationFormProps) {
  const [isLoading, setIsLoading] = useState(false)
  const [isResending, setIsResending] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const [resendCooldown, setResendCooldown] = useState(0)
  const { verifyOtp, resendVerification } = useAuth()
  const router = useRouter()

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch
  } = useForm<VerificationFormData>({
    resolver: zodResolver(verificationSchema)
  })

  const codeValue = watch('code')

  const onSubmit = async (data: VerificationFormData) => {
    setIsLoading(true)
    setError('')
    setSuccess('')

    try {
      const result = await verifyOtp({
        email,
        token: data.code
      })

      if (result.success) {
        setSuccess('Email verified successfully! Redirecting...')
        setTimeout(() => {
          router.push('/onboarding')
        }, 1500)
      } else {
        setError(result.error || 'Verification failed')
      }
    } catch (err) {
      setError('An unexpected error occurred')
    } finally {
      setIsLoading(false)
    }
  }

  const handleResend = async () => {
    if (resendCooldown > 0) return

    setIsResending(true)
    setError('')
    setSuccess('')

    try {
      const result = await resendVerification(email)

      if (result.success) {
        setSuccess('Verification code sent! Please check your email.')
        setResendCooldown(60)
        
        // Start countdown
        const countdown = setInterval(() => {
          setResendCooldown((prev) => {
            if (prev <= 1) {
              clearInterval(countdown)
              return 0
            }
            return prev - 1
          })
        }, 1000)
      } else {
        setError(result.error || 'Failed to resend verification code')
      }
    } catch (err) {
      setError('Failed to resend verification code')
    } finally {
      setIsResending(false)
    }
  }

  const handleCodeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, '').slice(0, 6)
    setValue('code', value)
  }

  return (
    <div className="w-full max-w-md mx-auto space-y-6">
      <div className="text-center space-y-2">
        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
          <Mail className="w-8 h-8 text-blue-600" />
        </div>
        <h1 className="text-2xl font-bold text-gray-900">
          Verify Your Email
        </h1>
        <p className="text-gray-600">
          We've sent a 6-digit verification code to
        </p>
        <p className="font-medium text-gray-900">{email}</p>
      </div>

      {error && (
        <Alert className="border-red-200 bg-red-50 text-red-800">
          {error}
        </Alert>
      )}

      {success && (
        <Alert className="border-green-200 bg-green-50 text-green-800">
          {success}
        </Alert>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="code" className="text-gray-900">
            Verification Code
          </Label>
          <Input
            id="code"
            type="text"
            placeholder="123456"
            value={codeValue || ''}
            onChange={handleCodeInput}
            className="text-center text-2xl font-mono tracking-widest"
            maxLength={6}
            autoComplete="one-time-code"
          />
          {errors.code && (
            <p className="text-sm text-red-600">{errors.code.message}</p>
          )}
        </div>

        <Button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700"
          disabled={isLoading || !codeValue || codeValue.length !== 6}
        >
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Verifying...
            </>
          ) : (
            'Verify Email'
          )}
        </Button>
      </form>

      <div className="text-center space-y-4">
        <div className="text-sm text-gray-600">
          Didn't receive the code?
        </div>
        
        <Button
          type="button"
          variant="outline"
          onClick={handleResend}
          disabled={isResending || resendCooldown > 0}
          className="w-full"
        >
          {isResending ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Sending...
            </>
          ) : resendCooldown > 0 ? (
            <>
              <RefreshCw className="mr-2 h-4 w-4" />
              Resend in {resendCooldown}s
            </>
          ) : (
            <>
              <RefreshCw className="mr-2 h-4 w-4" />
              Resend Code
            </>
          )}
        </Button>

        {onBack && (
          <Button
            type="button"
            variant="ghost"
            onClick={onBack}
            className="w-full"
          >
            Back to Sign Up
          </Button>
        )}
      </div>
    </div>
  )
} 