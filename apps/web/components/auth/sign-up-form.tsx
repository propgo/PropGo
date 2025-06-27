'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useAuth } from '@/lib/auth-context'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { Badge } from '@/components/ui/badge'
import { Loader2, Eye, EyeOff, Building2, Scale, CreditCard, Home, User } from 'lucide-react'
import Link from 'next/link'
import { z } from 'zod'

// Create a simple schema since we can't import from @propgo/api yet
const signUpSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
  fullName: z.string().min(2, 'Full name must be at least 2 characters'),
  role: z.enum(['agent', 'agency_owner', 'lawyer', 'banker', 'buyer']),
  phone: z.string().optional(),
})

type SignUpData = z.infer<typeof signUpSchema>

const roleOptions = [
  {
    value: 'agent',
    label: 'Real Estate Agent',
    description: 'Individual property agent',
    icon: Home,
    color: 'bg-blue-100 text-blue-800 border-blue-200',
  },
  {
    value: 'agency_owner',
    label: 'Agency Owner',
    description: 'Real estate agency owner/manager',
    icon: Building2,
    color: 'bg-purple-100 text-purple-800 border-purple-200',
  },
  {
    value: 'lawyer',
    label: 'Property Lawyer',
    description: 'Legal professional handling property transactions',
    icon: Scale,
    color: 'bg-green-100 text-green-800 border-green-200',
  },
  {
    value: 'banker',
    label: 'Banker',
    description: 'Banking professional for property financing',
    icon: CreditCard,
    color: 'bg-orange-100 text-orange-800 border-orange-200',
  },
  {
    value: 'buyer',
    label: 'Property Buyer',
    description: 'Individual looking to buy or rent property',
    icon: User,
    color: 'bg-gray-100 text-gray-800 border-gray-200',
  },
]

export function SignUpForm() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const router = useRouter()
  const { signUp } = useAuth()

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<SignUpData>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      role: 'agent',
    },
  })

  const selectedRole = watch('role')

  const onSubmit = async (data: SignUpData) => {
    try {
      setLoading(true)
      setError(null)

      const result = await signUp(data)

      if (!result.success) {
        setError(result.error || 'Sign up failed')
        return
      }

      setSuccess(true)
      // Don't redirect immediately, show success message first
    } catch (err) {
      setError('An unexpected error occurred. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  if (success) {
    return (
      <Card className="w-full max-w-md mx-auto">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold text-center text-green-600">
            Account Created Successfully!
          </CardTitle>
          <CardDescription className="text-center">
            Please check your email to verify your account before signing in.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-center space-y-4">
            <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
              <p className="text-sm text-green-700">
                We've sent a verification email to your inbox. Click the link in the email to activate your account.
              </p>
            </div>
            <Button 
              onClick={() => router.push('/auth/sign-in')} 
              className="w-full"
            >
              Go to Sign In
            </Button>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl font-bold text-center">
          Join PropGo
        </CardTitle>
        <CardDescription className="text-center">
          Create your account to start connecting with Malaysia's property professionals
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {error && (
            <Alert variant="destructive">
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          {/* Role Selection */}
          <div className="space-y-3">
            <Label>Select Your Role</Label>
            <div className="grid grid-cols-1 gap-2">
              {roleOptions.map((option) => {
                const Icon = option.icon
                return (
                  <button
                    key={option.value}
                    type="button"
                    onClick={() => setValue('role', option.value as any)}
                    className={`p-3 border rounded-lg text-left transition-all hover:border-blue-300 ${
                      selectedRole === option.value
                        ? 'border-blue-500 bg-blue-50'
                        : 'border-gray-200'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <Icon className="h-5 w-5 text-gray-600" />
                      <div className="flex-1">
                        <div className="font-medium text-sm">{option.label}</div>
                        <div className="text-xs text-gray-500">{option.description}</div>
                      </div>
                      {selectedRole === option.value && (
                        <Badge variant="default" className="text-xs">
                          Selected
                        </Badge>
                      )}
                    </div>
                  </button>
                )
              })}
            </div>
            {errors.role && (
              <p className="text-sm text-red-500">{errors.role.message}</p>
            )}
          </div>

          {/* Personal Information */}
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="fullName">Full Name</Label>
              <Input
                id="fullName"
                type="text"
                placeholder="Enter your full name"
                {...register('fullName')}
                className={errors.fullName ? 'border-red-500' : ''}
              />
              {errors.fullName && (
                <p className="text-sm text-red-500">{errors.fullName.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="you@example.com"
                {...register('email')}
                className={errors.email ? 'border-red-500' : ''}
              />
              {errors.email && (
                <p className="text-sm text-red-500">{errors.email.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number (Optional)</Label>
              <Input
                id="phone"
                type="tel"
                placeholder="+60 12-345 6789"
                {...register('phone')}
                className={errors.phone ? 'border-red-500' : ''}
              />
              {errors.phone && (
                <p className="text-sm text-red-500">{errors.phone.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Create a strong password"
                  {...register('password')}
                  className={errors.password ? 'border-red-500 pr-10' : 'pr-10'}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                >
                  {showPassword ? (
                    <EyeOff className="h-4 w-4" />
                  ) : (
                    <Eye className="h-4 w-4" />
                  )}
                </button>
              </div>
              {errors.password && (
                <p className="text-sm text-red-500">{errors.password.message}</p>
              )}
              <p className="text-xs text-gray-500">
                Password must be at least 8 characters long
              </p>
            </div>
          </div>

          <Button type="submit" className="w-full" disabled={loading}>
            {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            Create Account
          </Button>

          <div className="text-center text-sm">
            Already have an account?{' '}
            <Link
              href="/auth/sign-in"
              className="text-blue-600 hover:text-blue-500 font-medium"
            >
              Sign in
            </Link>
          </div>

          <div className="text-xs text-gray-500 text-center">
            By creating an account, you agree to our{' '}
            <Link href="/terms" className="text-blue-600 hover:text-blue-500">
              Terms of Service
            </Link>{' '}
            and{' '}
            <Link href="/privacy" className="text-blue-600 hover:text-blue-500">
              Privacy Policy
            </Link>
          </div>
        </form>
      </CardContent>
    </Card>
  )
} 