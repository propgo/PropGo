import type { Metadata } from 'next'
import { Home, Heart, Search, TrendingUp, Calculator, Bell, Eye, MapPin, DollarSign, Calendar, FileText, Plus } from 'lucide-react'
import { DashboardLayout } from '@/components/layout/dashboard-layout'
import { StatsCard } from '@/components/dashboard/stats-card'
import { AiAssistantCard } from '@/components/dashboard/ai-assistant-card'

export const metadata: Metadata = {
  title: 'Dashboard - PropGo.my',
  description: 'Your PropGo.my dashboard - discover properties, track favorites, and get market insights.',
}

// Placeholder user data - in real app, this would come from auth context
const mockUser = {
  name: 'Sarah Lim',
  email: 'sarah@example.com',
  avatar: '/placeholder-avatar.jpg',
  role: 'Property Seeker'
}

export default function DashboardPage() {
  return (
    <DashboardLayout 
      title="Dashboard" 
      user={mockUser}
      notificationCount={5}
    >
      <div className="p-6 max-w-7xl mx-auto">
        {/* Welcome & Quick Stats Section */}
        <div className="flex flex-col md:flex-row items-start gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-sm p-6 flex-1 w-full">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h2 className="text-xl font-semibold mb-1">Welcome back, Sarah!</h2>
                <p className="text-gray-500">Discover your next dream property with personalized insights.</p>
              </div>
              <span className="text-xs text-gray-500">Last updated: Today, 2:15 PM</span>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6 w-full">
              <StatsCard
                title="Saved Properties"
                value="12"
                icon={Heart}
                trend={{ value: '+2', isPositive: true }}
                iconBgColor="bg-red-50"
                iconColor="text-red-600"
              />
              
              <StatsCard
                title="Active Searches"
                value="3"
                icon={Search}
                trend={{ value: '+1', isPositive: true }}
                iconBgColor="bg-blue-50"
                iconColor="text-primary"
              />
              
              <StatsCard
                title="Properties Viewed"
                value="28"
                icon={Eye}
                trend={{ value: '+8', isPositive: true }}
                iconBgColor="bg-green-50"
                iconColor="text-green-600"
              />
              
              <StatsCard
                title="Market Alerts"
                value="5"
                icon={Bell}
                trend={{ value: '+2', isPositive: true }}
                iconBgColor="bg-amber-50"
                iconColor="text-amber-600"
              />
            </div>
          </div>
          
          {/* AI Assistant Card */}
          <AiAssistantCard />
        </div>

        {/* Quick Actions Section */}
        <div className="mb-10">
          <h2 className="text-lg font-semibold mb-6">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 hover:shadow-md transition-shadow cursor-pointer">
              <div className="flex items-center">
                <div className="bg-blue-50 p-3 rounded-lg mr-4">
                  <Search className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">Search Properties</h3>
                  <p className="text-sm text-gray-500">Find your perfect home</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 hover:shadow-md transition-shadow cursor-pointer">
              <div className="flex items-center">
                <div className="bg-green-50 p-3 rounded-lg mr-4">
                  <Calculator className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">Mortgage Calculator</h3>
                  <p className="text-sm text-gray-500">Calculate affordability</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 hover:shadow-md transition-shadow cursor-pointer">
              <div className="flex items-center">
                <div className="bg-purple-50 p-3 rounded-lg mr-4">
                  <TrendingUp className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">Market Insights</h3>
                  <p className="text-sm text-gray-500">Track property trends</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Saved Properties Section */}
        <div className="mb-10">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold">Saved Properties</h2>
            <div className="flex items-center space-x-4">
              <select className="text-sm border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary">
                <option>All Types</option>
                <option>Condominiums</option>
                <option>Landed</option>
                <option>Rental</option>
              </select>
              <button className="bg-primary text-white px-4 py-2 rounded-lg text-sm hover:bg-secondary transition flex items-center">
                <Search className="w-4 h-4 mr-2" />
                Browse Properties
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Property Card 1 */}
            <div className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow">
              <div className="h-48 bg-gray-200 relative">
                <div className="absolute top-4 left-4">
                  <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded-full">Available</span>
                </div>
                <div className="absolute top-4 right-4">
                  <Heart className="w-5 h-5 text-red-500 fill-current" />
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-medium text-gray-900 mb-1">The Tropika, Bukit Jalil</h3>
                <p className="text-sm text-gray-500 mb-2 flex items-center">
                  <MapPin className="w-3 h-3 mr-1" />
                  Bukit Jalil, Kuala Lumpur
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-primary">RM 850,000</span>
                  <span className="text-sm text-gray-500">3bed • 2bath</span>
                </div>
                <div className="mt-3 pt-3 border-t border-gray-100 text-xs text-gray-500">
                  Saved 3 days ago
                </div>
              </div>
            </div>

            {/* Property Card 2 */}
            <div className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow">
              <div className="h-48 bg-gray-200 relative">
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded-full">For Rent</span>
                </div>
                <div className="absolute top-4 right-4">
                  <Heart className="w-5 h-5 text-red-500 fill-current" />
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-medium text-gray-900 mb-1">KLCC Residence</h3>
                <p className="text-sm text-gray-500 mb-2 flex items-center">
                  <MapPin className="w-3 h-3 mr-1" />
                  KLCC, Kuala Lumpur
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-primary">RM 4,200/mo</span>
                  <span className="text-sm text-gray-500">2bed • 2bath</span>
                </div>
                <div className="mt-3 pt-3 border-t border-gray-100 text-xs text-gray-500">
                  Saved 1 week ago
                </div>
              </div>
            </div>

            {/* Property Card 3 */}
            <div className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow">
              <div className="h-48 bg-gray-200 relative">
                <div className="absolute top-4 left-4">
                  <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded-full">Available</span>
                </div>
                <div className="absolute top-4 right-4">
                  <Heart className="w-5 h-5 text-red-500 fill-current" />
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-medium text-gray-900 mb-1">Desa ParkCity</h3>
                <p className="text-sm text-gray-500 mb-2 flex items-center">
                  <MapPin className="w-3 h-3 mr-1" />
                  Kepong, Kuala Lumpur
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-primary">RM 1,950,000</span>
                  <span className="text-sm text-gray-500">4bed • 3bath</span>
                </div>
                <div className="mt-3 pt-3 border-t border-gray-100 text-xs text-gray-500">
                  Saved 2 weeks ago
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Activity & Market Insights */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Recent Activity */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">Recent Activity</h3>
              <Calendar className="w-5 h-5 text-gray-400" />
            </div>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="bg-blue-50 p-2 rounded-lg">
                  <Eye className="w-4 h-4 text-primary" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">Viewed The Tropika, Bukit Jalil</p>
                  <p className="text-xs text-gray-500">2 hours ago</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="bg-red-50 p-2 rounded-lg">
                  <Heart className="w-4 h-4 text-red-600" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">Saved KLCC Residence</p>
                  <p className="text-xs text-gray-500">1 day ago</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="bg-green-50 p-2 rounded-lg">
                  <Search className="w-4 h-4 text-green-600" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">Created search alert for Petaling Jaya</p>
                  <p className="text-xs text-gray-500">3 days ago</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="bg-purple-50 p-2 rounded-lg">
                  <Calculator className="w-4 h-4 text-purple-600" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">Used mortgage calculator</p>
                  <p className="text-xs text-gray-500">5 days ago</p>
                </div>
              </div>
            </div>
          </div>

          {/* Market Insights */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">Market Insights</h3>
              <TrendingUp className="w-5 h-5 text-gray-400" />
            </div>
            <div className="space-y-4">
              <div className="border border-gray-100 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium text-gray-900">Kuala Lumpur</h4>
                  <span className="text-green-600 text-sm font-medium flex items-center">
                    <TrendingUp className="w-3 h-3 mr-1" />
                    +2.3%
                  </span>
                </div>
                <p className="text-sm text-gray-500">Average condo price: RM 720,000</p>
                <p className="text-xs text-gray-400 mt-1">vs last quarter</p>
              </div>
              
              <div className="border border-gray-100 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium text-gray-900">Petaling Jaya</h4>
                  <span className="text-green-600 text-sm font-medium flex items-center">
                    <TrendingUp className="w-3 h-3 mr-1" />
                    +1.8%
                  </span>
                </div>
                <p className="text-sm text-gray-500">Average condo price: RM 650,000</p>
                <p className="text-xs text-gray-400 mt-1">vs last quarter</p>
              </div>
              
              <div className="border border-gray-100 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium text-gray-900">Subang Jaya</h4>
                  <span className="text-blue-600 text-sm font-medium flex items-center">
                    <TrendingUp className="w-3 h-3 mr-1" />
                    +0.5%
                  </span>
                </div>
                <p className="text-sm text-gray-500">Average condo price: RM 580,000</p>
                <p className="text-xs text-gray-400 mt-1">vs last quarter</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
} 