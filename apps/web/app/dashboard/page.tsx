import type { Metadata } from 'next'
import { Building, Handshake, CheckCircle, DollarSign, Search, Plus, Edit, Share, Trash2 } from 'lucide-react'
import { DashboardLayout } from '@/components/layout/dashboard-layout'
import { StatsCard } from '@/components/dashboard/stats-card'
import { AiAssistantCard } from '@/components/dashboard/ai-assistant-card'

export const metadata: Metadata = {
  title: 'Agent Dashboard - PropGo.my',
  description: 'Your PropGo.my dashboard - manage properties, deals, and connections.',
}

// Placeholder user data - in real app, this would come from auth context
const mockUser = {
  name: 'Ahmad Zulkifli',
  email: 'ahmad@propgo.my',
  avatar: '/placeholder-avatar.jpg',
  role: 'Premium Agent'
}

export default function DashboardPage() {
  return (
    <DashboardLayout 
      title="Agent Dashboard" 
      user={mockUser}
      notificationCount={2}
    >
      <div className="p-6 max-w-7xl mx-auto">
        {/* Welcome & Quick Stats Section */}
        <div className="flex flex-col md:flex-row items-start gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-sm p-6 flex-1 w-full">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h2 className="text-xl font-semibold mb-1">Welcome back, Ahmad!</h2>
                <p className="text-gray-500">Here's what's happening with your properties today.</p>
              </div>
              <span className="text-xs text-gray-500">Last updated: Today, 10:30 AM</span>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6 w-full">
              <StatsCard
                title="Active Listings"
                value="24"
                icon={Building}
                trend={{ value: '+3', isPositive: true }}
                iconBgColor="bg-blue-50"
                iconColor="text-primary"
              />
              
              <StatsCard
                title="Active Deals"
                value="7"
                icon={Handshake}
                trend={{ value: '+2', isPositive: true }}
                iconBgColor="bg-indigo-50"
                iconColor="text-indigo-600"
              />
              
              <StatsCard
                title="Closed Deals (MTD)"
                value="3"
                icon={CheckCircle}
                trend={{ value: '+1', isPositive: true }}
                iconBgColor="bg-green-50"
                iconColor="text-green-600"
              />
              
              <StatsCard
                title="Commission (MTD)"
                value="RM 42K"
                icon={DollarSign}
                trend={{ value: '+15%', isPositive: true }}
                iconBgColor="bg-amber-50"
                iconColor="text-amber-600"
              />
            </div>
          </div>
          
          {/* AI Assistant Card */}
          <AiAssistantCard />
        </div>

        {/* Performance Metrics Section */}
        <div className="mb-10">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold">Performance Metrics</h2>
            <div className="flex items-center space-x-2">
              <select className="text-sm border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary bg-white">
                <option>Last 30 Days</option>
                <option>Last Quarter</option>
                <option>Last Year</option>
              </select>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
              <h3 className="text-md font-medium mb-4 text-gray-800">Deal Progress</h3>
              <div className="h-64 flex flex-col items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg border-2 border-dashed border-gray-200">
                <div className="text-center">
                  <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Handshake className="w-6 h-6 text-gray-400" />
                  </div>
                  <p className="text-gray-500 text-sm font-medium">Deal Progress Chart</p>
                  <p className="text-gray-400 text-xs mt-1">Coming soon</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
              <h3 className="text-md font-medium mb-4 text-gray-800">Commission Trend</h3>
              <div className="h-64 flex flex-col items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg border-2 border-dashed border-gray-200">
                <div className="text-center">
                  <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-3">
                    <DollarSign className="w-6 h-6 text-gray-400" />
                  </div>
                  <p className="text-gray-500 text-sm font-medium">Commission Trend Chart</p>
                  <p className="text-gray-400 text-xs mt-1">Coming soon</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Active Listings Section */}
        <div className="mb-10">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold">Active Listings</h2>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input 
                  type="text" 
                  placeholder="Search listings..." 
                  className="pl-10 pr-4 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <select className="text-sm border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary">
                <option>All Types</option>
                <option>Condominiums</option>
                <option>Landed</option>
                <option>Commercial</option>
              </select>
              <button className="bg-primary text-white px-4 py-2 rounded-lg text-sm hover:bg-secondary transition flex items-center">
                <Plus className="w-4 h-4 mr-2" />
                Add Listing
              </button>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Property</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Views</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Listed Date</th>
                    <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="h-10 w-10 flex-shrink-0 rounded overflow-hidden mr-3 bg-gray-200">
                          <div className="h-10 w-10 bg-gray-300"></div>
                        </div>
                        <div>
                          <div className="text-sm font-medium text-gray-900">The Tropika, Bukit Jalil</div>
                          <div className="text-xs text-gray-500">3 bed, 2 bath, 1,200 sqft</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Condominium</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">RM 850,000</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">Active</span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">245</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">May 12, 2023</td>
                    <td className="px-6 py-4 whitespace-nowrap text-center text-sm">
                      <div className="flex justify-center space-x-2">
                        <button className="text-indigo-600 hover:text-indigo-900">
                          <Edit className="w-4 h-4" />
                        </button>
                        <button className="text-blue-600 hover:text-blue-900">
                          <Share className="w-4 h-4" />
                        </button>
                        <button className="text-red-600 hover:text-red-900">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="h-10 w-10 flex-shrink-0 rounded overflow-hidden mr-3 bg-gray-200">
                          <div className="h-10 w-10 bg-gray-300"></div>
                        </div>
                        <div>
                          <div className="text-sm font-medium text-gray-900">Desa ParkCity, Kuala Lumpur</div>
                          <div className="text-xs text-gray-500">4 bed, 3 bath, 2,400 sqft</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Landed</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">RM 1,950,000</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">Active</span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">189</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Jun 3, 2023</td>
                    <td className="px-6 py-4 whitespace-nowrap text-center text-sm">
                      <div className="flex justify-center space-x-2">
                        <button className="text-indigo-600 hover:text-indigo-900">
                          <Edit className="w-4 h-4" />
                        </button>
                        <button className="text-blue-600 hover:text-blue-900">
                          <Share className="w-4 h-4" />
                        </button>
                        <button className="text-red-600 hover:text-red-900">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="h-10 w-10 flex-shrink-0 rounded overflow-hidden mr-3 bg-gray-200">
                          <div className="h-10 w-10 bg-gray-300"></div>
                        </div>
                        <div>
                          <div className="text-sm font-medium text-gray-900">Eco Sky, Kuala Lumpur</div>
                          <div className="text-xs text-gray-500">2 bed, 2 bath, 950 sqft</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Condominium</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">RM 650,000</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">Under Offer</span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">312</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Apr 18, 2023</td>
                    <td className="px-6 py-4 whitespace-nowrap text-center text-sm">
                      <div className="flex justify-center space-x-2">
                        <button className="text-indigo-600 hover:text-indigo-900">
                          <Edit className="w-4 h-4" />
                        </button>
                        <button className="text-blue-600 hover:text-blue-900">
                          <Share className="w-4 h-4" />
                        </button>
                        <button className="text-red-600 hover:text-red-900">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="h-10 w-10 flex-shrink-0 rounded overflow-hidden mr-3 bg-gray-200">
                          <div className="h-10 w-10 bg-gray-300"></div>
                        </div>
                        <div>
                          <div className="text-sm font-medium text-gray-900">Solaris Dutamas, Kuala Lumpur</div>
                          <div className="text-xs text-gray-500">Shop lot, 1,800 sqft</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Commercial</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">RM 1,200,000</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">Active</span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">97</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Jun 22, 2023</td>
                    <td className="px-6 py-4 whitespace-nowrap text-center text-sm">
                      <div className="flex justify-center space-x-2">
                        <button className="text-indigo-600 hover:text-indigo-900">
                          <Edit className="w-4 h-4" />
                        </button>
                        <button className="text-blue-600 hover:text-blue-900">
                          <Share className="w-4 h-4" />
                        </button>
                        <button className="text-red-600 hover:text-red-900">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Deal Dashboard Section */}
        <div className="mb-10">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold">Deal Dashboard</h2>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-2">
              <Plus className="w-4 h-4" />
              New Deal
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="bg-white rounded-xl shadow-sm p-4">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-medium text-gray-800">Lead</h3>
                <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2 py-1 rounded-full">4</span>
              </div>
              <div className="space-y-3">
                <div className="bg-white border border-gray-200 rounded-lg p-3 shadow-sm hover:shadow-md transition cursor-pointer">
                  <div className="flex justify-between items-start">
                    <h4 className="font-medium text-sm">Mont Kiara Condo</h4>
                    <span className="bg-blue-100 text-blue-800 text-xs px-2 py-0.5 rounded">Sale</span>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">Initial inquiry received</p>
                  <div className="flex items-center justify-between mt-2 text-xs text-gray-500">
                    <span>RM 1.2M</span>
                    <span>Jun 20</span>
                  </div>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-3 shadow-sm hover:shadow-md transition cursor-pointer">
                  <div className="flex justify-between items-start">
                    <h4 className="font-medium text-sm">Bangsar South Office</h4>
                    <span className="bg-indigo-100 text-indigo-800 text-xs px-2 py-0.5 rounded">Rent</span>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">Price inquiry made</p>
                  <div className="flex items-center justify-between mt-2 text-xs text-gray-500">
                    <span>RM 8,500/mo</span>
                    <span>Jun 19</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-sm p-4">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-medium text-gray-800">Viewing</h3>
                <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2 py-1 rounded-full">2</span>
              </div>
              <div className="space-y-3">
                <div className="bg-white border border-gray-200 rounded-lg p-3 shadow-sm hover:shadow-md transition cursor-pointer">
                  <div className="flex justify-between items-start">
                    <h4 className="font-medium text-sm">Subang Jaya Condo</h4>
                    <span className="bg-blue-100 text-blue-800 text-xs px-2 py-0.5 rounded">Sale</span>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">Viewing scheduled for 28 Jun</p>
                  <div className="flex items-center justify-between mt-2 text-xs text-gray-500">
                    <span>RM 550,000</span>
                    <span>Jun 18</span>
                  </div>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-3 shadow-sm hover:shadow-md transition cursor-pointer">
                  <div className="flex justify-between items-start">
                    <h4 className="font-medium text-sm">KLCC Apartment</h4>
                    <span className="bg-indigo-100 text-indigo-800 text-xs px-2 py-0.5 rounded">Rent</span>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">Second viewing on 30 Jun</p>
                  <div className="flex items-center justify-between mt-2 text-xs text-gray-500">
                    <span>RM 4,200/mo</span>
                    <span>Jun 15</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-sm p-4">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-medium text-gray-800">Negotiation</h3>
                <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2 py-1 rounded-full">1</span>
              </div>
              <div className="space-y-3">
                <div className="bg-white border border-gray-200 rounded-lg p-3 shadow-sm hover:shadow-md transition cursor-pointer">
                  <div className="flex justify-between items-start">
                    <h4 className="font-medium text-sm">Bukit Bintang Shop</h4>
                    <span className="bg-blue-100 text-blue-800 text-xs px-2 py-0.5 rounded">Sale</span>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">Counter offer received</p>
                  <div className="flex items-center justify-between mt-2 text-xs text-gray-500">
                    <span>RM 2.8M</span>
                    <span>Jun 10</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-sm p-4">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-medium text-gray-800">Closing</h3>
                <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2 py-1 rounded-full">1</span>
              </div>
              <div className="space-y-3">
                <div className="bg-white border border-gray-200 rounded-lg p-3 shadow-sm hover:shadow-md transition cursor-pointer">
                  <div className="flex justify-between items-start">
                    <h4 className="font-medium text-sm">Petaling Jaya House</h4>
                    <span className="bg-blue-100 text-blue-800 text-xs px-2 py-0.5 rounded">Sale</span>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">SPA signing scheduled</p>
                  <div className="flex items-center justify-between mt-2 text-xs text-gray-500">
                    <span>RM 1.5M</span>
                    <span>Jun 5</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
} 