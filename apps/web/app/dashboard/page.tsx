import type { Metadata } from 'next'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { SignOutButton } from '@/components/auth/sign-out-button'

export const metadata: Metadata = {
  title: 'Dashboard - PropGo.my',
  description: 'Your PropGo.my dashboard - manage properties, deals, and connections.',
}

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
              <p className="mt-1 text-sm text-gray-500">
                Welcome to PropGo.my - Malaysia's Premier B2B Real Estate Platform
              </p>
            </div>
            <SignOutButton variant="outline" />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Properties Card */}
          <Card>
            <CardHeader>
              <CardTitle>Properties</CardTitle>
              <CardDescription>
                Manage your property listings
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-blue-600 mb-2">0</div>
              <p className="text-sm text-gray-600">Active listings</p>
              <Button className="mt-4 w-full" size="sm">
                Add Property
              </Button>
            </CardContent>
          </Card>

          {/* Deals Card */}
          <Card>
            <CardHeader>
              <CardTitle>Deals</CardTitle>
              <CardDescription>
                Track your transactions
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600 mb-2">0</div>
              <p className="text-sm text-gray-600">Active deals</p>
              <Button className="mt-4 w-full" size="sm" variant="outline">
                View Deals
              </Button>
            </CardContent>
          </Card>

          {/* Connections Card */}
          <Card>
            <CardHeader>
              <CardTitle>Connections</CardTitle>
              <CardDescription>
                Your professional network
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-purple-600 mb-2">0</div>
              <p className="text-sm text-gray-600">Professional connections</p>
              <Button className="mt-4 w-full" size="sm" variant="outline">
                Find Professionals
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Welcome Section */}
        <div className="mt-8">
          <Card>
            <CardHeader>
              <CardTitle>🎉 Welcome to PropGo.my!</CardTitle>
              <CardDescription>
                You've successfully completed the authentication and onboarding process
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-gray-600">
                  Your account is now set up and ready to use. Here are some next steps to get you started:
                </p>
                <ul className="list-disc list-inside space-y-2 text-sm text-gray-600">
                  <li>Complete your professional profile verification</li>
                  <li>Add your first property listing</li>
                  <li>Connect with other professionals in your area</li>
                  <li>Explore the marketplace for potential deals</li>
                </ul>
                <div className="flex gap-4 mt-6">
                  <Button>Complete Profile</Button>
                  <Button variant="outline">Take Tour</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
} 