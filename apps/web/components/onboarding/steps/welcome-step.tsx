'use client'

import { Button } from '@/components/ui/button'
import { Loader2, CheckCircle, Users, Building, MessageSquare } from 'lucide-react'

interface WelcomeStepProps {
  onboardingData: any
  userRole: string
  onComplete: () => void
  loading: boolean
}

export function WelcomeStep({ onboardingData, userRole, onComplete, loading }: WelcomeStepProps) {
  const features = [
    {
      icon: Users,
      title: 'Connect with Professionals',
      description: 'Network with agents, lawyers, bankers, and property buyers across Malaysia'
    },
    {
      icon: Building,
      title: 'Manage Properties',
      description: 'List, search, and manage property transactions efficiently'
    },
    {
      icon: MessageSquare,
      title: 'Communicate Seamlessly',
      description: 'Chat with clients and professionals in real-time'
    }
  ]

  return (
    <div className="space-y-6">
      <div className="text-center">
        <CheckCircle className="mx-auto h-12 w-12 text-green-500 mb-4" />
        <h3 className="text-2xl font-bold text-gray-900 mb-2">
          Welcome to PropGo.my!
        </h3>
        <p className="text-gray-600 mb-6">
          Your profile is almost ready. Here's what you can do next:
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {features.map((feature, index) => {
          const Icon = feature.icon
          return (
            <div key={index} className="text-center p-4 border rounded-lg">
              <Icon className="mx-auto h-8 w-8 text-blue-500 mb-3" />
              <h4 className="font-medium text-gray-900 mb-2">{feature.title}</h4>
              <p className="text-sm text-gray-600">{feature.description}</p>
            </div>
          )
        })}
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <h4 className="font-medium text-blue-900 mb-2">What happens next?</h4>
        <ul className="text-sm text-blue-800 space-y-1">
          <li>• Your profile will be reviewed for verification</li>
          <li>• You'll receive email confirmation once approved</li>
          <li>• You can start connecting with professionals immediately</li>
          {userRole === 'agent' && <li>• Upload your REN license for full verification</li>}
          {userRole === 'lawyer' && <li>• Submit your Bar Council credentials for verification</li>}
        </ul>
      </div>

      <div className="text-center">
        <Button
          onClick={onComplete}
          disabled={loading}
          size="lg"
          className="px-8 py-3"
        >
          {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          Complete Setup & Continue
        </Button>
      </div>
    </div>
  )
} 