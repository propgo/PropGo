'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useUser } from '@/lib/auth-context'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { Check, ArrowRight, ArrowLeft } from 'lucide-react'
import { PersonalInfoStep } from './steps/personal-info-step'
import { ProfessionalInfoStep } from './steps/professional-info-step'
import { ComplianceStep } from './steps/compliance-step'
import { PreferencesStep } from './steps/preferences-step'
import { WelcomeStep } from './steps/welcome-step'

export interface OnboardingData {
  personalInfo?: {
    fullName: string
    phone: string
    languagePreference: string
    timezone: string
  }
  professionalInfo?: {
    // Agent specific
    renLicense?: string
    renExpiryDate?: string
    agencyId?: string
    specializations?: string[]
    experienceYears?: number
    serviceAreas?: string[]
    commissionRate?: number
    
    // Lawyer specific
    barCouncilNumber?: string
    barAdmissionDate?: string
    firmId?: string
    practiceAreas?: string[]
    hourlyRate?: number
    
    // Banker specific
    bankId?: string
    employeeId?: string
    department?: string
  }
  compliance?: {
    documents?: Array<{
      type: string
      file: File
      verified: boolean
    }>
  }
  preferences?: {
    notifications: {
      email: boolean
      sms: boolean
      push: boolean
    }
    privacy: {
      profileVisibility: 'public' | 'private'
      contactPreferences: string[]
    }
  }
}

const steps = [
  { id: 'personal', title: 'Personal Information', description: 'Basic personal details' },
  { id: 'professional', title: 'Professional Details', description: 'Your professional information' },
  { id: 'compliance', title: 'Compliance & Verification', description: 'Upload required documents' },
  { id: 'preferences', title: 'Preferences', description: 'Notification and privacy settings' },
  { id: 'welcome', title: 'Welcome', description: 'Complete your setup' },
]

export function OnboardingWizard() {
  const [currentStep, setCurrentStep] = useState(0)
  const [onboardingData, setOnboardingData] = useState<OnboardingData>({})
  const [loading, setLoading] = useState(false)
  const user = useUser()
  const router = useRouter()

  useEffect(() => {
    // Redirect if user is not authenticated
    if (!user) {
      router.push('/auth/sign-in')
      return
    }

    // Check if onboarding is already completed
    if (user.user_metadata?.onboarding_completed) {
      router.push('/dashboard')
      return
    }
  }, [user, router])

  const updateOnboardingData = (stepData: Partial<OnboardingData>) => {
    setOnboardingData(prev => ({
      ...prev,
      ...stepData,
    }))
  }

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  const completeOnboarding = async () => {
    setLoading(true)
    try {
      // Save onboarding data to the database
      // This will be implemented when we create the API endpoints
      console.log('Completing onboarding with data:', onboardingData)
      
      // Mark onboarding as completed
      // await updateUserProfile({ onboarding_completed: true })
      
      // Redirect to dashboard
      router.push('/dashboard')
    } catch (error) {
      console.error('Failed to complete onboarding:', error)
    } finally {
      setLoading(false)
    }
  }

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
      </div>
    )
  }

  const userRole = user.user_metadata?.role || 'agent'
  const progress = ((currentStep + 1) / steps.length) * 100

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Welcome to PropGo.my
          </h1>
          <p className="text-gray-600 mb-4">
            Let's set up your profile to get started
          </p>
          <Badge variant="secondary" className="mb-4">
            {userRole.charAt(0).toUpperCase() + userRole.slice(1).replace('_', ' ')}
          </Badge>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-gray-700">
              Step {currentStep + 1} of {steps.length}
            </span>
            <span className="text-sm text-gray-500">
              {Math.round(progress)}% complete
            </span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        {/* Steps Navigation */}
        <div className="flex justify-between items-center mb-8 overflow-x-auto">
          {steps.map((step, index) => (
            <div
              key={step.id}
              className={`flex flex-col items-center min-w-0 flex-1 ${
                index < steps.length - 1 ? 'border-r border-gray-200 pr-4' : ''
              } ${index > 0 ? 'pl-4' : ''}`}
            >
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium mb-2 ${
                  index < currentStep
                    ? 'bg-green-500 text-white'
                    : index === currentStep
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-300 text-gray-600'
                }`}
              >
                {index < currentStep ? (
                  <Check className="h-4 w-4" />
                ) : (
                  index + 1
                )}
              </div>
              <div className="text-center">
                <div className="text-sm font-medium text-gray-900">
                  {step.title}
                </div>
                <div className="text-xs text-gray-500 hidden sm:block">
                  {step.description}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Step Content */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>{steps[currentStep].title}</CardTitle>
            <CardDescription>{steps[currentStep].description}</CardDescription>
          </CardHeader>
          <CardContent>
            {currentStep === 0 && (
              <PersonalInfoStep
                data={onboardingData.personalInfo}
                onUpdate={(data) => updateOnboardingData({ personalInfo: data })}
                userRole={userRole}
              />
            )}
            {currentStep === 1 && (
              <ProfessionalInfoStep
                data={onboardingData.professionalInfo}
                onUpdate={(data) => updateOnboardingData({ professionalInfo: data })}
                userRole={userRole}
              />
            )}
            {currentStep === 2 && (
              <ComplianceStep
                data={onboardingData.compliance}
                onUpdate={(data) => updateOnboardingData({ compliance: data })}
                userRole={userRole}
              />
            )}
            {currentStep === 3 && (
              <PreferencesStep
                data={onboardingData.preferences}
                onUpdate={(data) => updateOnboardingData({ preferences: data })}
                userRole={userRole}
              />
            )}
            {currentStep === 4 && (
              <WelcomeStep
                onboardingData={onboardingData}
                userRole={userRole}
                onComplete={completeOnboarding}
                loading={loading}
              />
            )}
          </CardContent>
        </Card>

        {/* Navigation Buttons */}
        {currentStep < steps.length - 1 && (
          <div className="flex justify-between">
            <Button
              variant="outline"
              onClick={prevStep}
              disabled={currentStep === 0}
              className="flex items-center gap-2"
            >
              <ArrowLeft className="h-4 w-4" />
              Previous
            </Button>
            <Button
              onClick={nextStep}
              className="flex items-center gap-2"
            >
              Next
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        )}
      </div>
    </div>
  )
} 