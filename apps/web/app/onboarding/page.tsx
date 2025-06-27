import type { Metadata } from 'next'
import { OnboardingWizard } from '@/components/onboarding/onboarding-wizard'

export const metadata: Metadata = {
  title: 'Complete Your Profile - PropGo.my',
  description: 'Complete your professional profile setup to start using PropGo.my effectively.',
}

export default function OnboardingPage() {
  return <OnboardingWizard />
} 