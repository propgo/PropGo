import type { Metadata } from 'next'
import { FileText, Clock, CheckCircle, XCircle, AlertCircle, DollarSign, Calendar, User, MapPin, Phone, Mail, ExternalLink, Plus, Filter } from 'lucide-react'
import { DashboardLayout } from '@/components/layout/dashboard-layout'

export const metadata: Metadata = {
  title: 'My Deals - PropGo.my',
  description: 'Track your property offers, negotiations, and transaction progress.',
}

// Placeholder user data
const mockUser = {
  name: 'Sarah Lim',
  email: 'sarah@example.com',
  avatar: '/placeholder-avatar.jpg',
  role: 'Property Seeker'
}

// Mock deals data
const deals = [
  {
    id: 1,
    propertyTitle: 'The Tropika, Bukit Jalil',
    propertyLocation: 'Bukit Jalil, Kuala Lumpur',
    propertyType: 'Condominium',
    dealType: 'Purchase',
    status: 'Under Negotiation',
    stage: 'Offer Submitted',
    askingPrice: 'RM 850,000',
    offerPrice: 'RM 820,000',
    counterOffer: 'RM 840,000',
    agentName: 'Ahmad Zulkifli',
    agentPhone: '+60 12-345-6789',
    agentEmail: 'ahmad@propgo.my',
    submittedDate: '2023-06-20',
    lastUpdate: '2023-06-22',
    nextAction: 'Waiting for your response',
    timeline: [
      { date: '2023-06-20', action: 'Offer submitted', amount: 'RM 820,000', status: 'completed' },
      { date: '2023-06-21', action: 'Counter offer received', amount: 'RM 840,000', status: 'completed' },
      { date: '2023-06-22', action: 'Under review', amount: '', status: 'current' }
    ]
  },
  {
    id: 2,
    propertyTitle: 'KLCC Residence',
    propertyLocation: 'KLCC, Kuala Lumpur',
    propertyType: 'Condominium',
    dealType: 'Rental',
    status: 'Approved',
    stage: 'Documentation',
    askingPrice: 'RM 4,200/mo',
    offerPrice: 'RM 4,000/mo',
    counterOffer: null,
    agentName: 'Siti Rahman',
    agentPhone: '+60 12-987-6543',
    agentEmail: 'siti@propgo.my',
    submittedDate: '2023-06-15',
    lastUpdate: '2023-06-23',
    nextAction: 'Complete tenancy agreement',
    timeline: [
      { date: '2023-06-15', action: 'Rental application submitted', amount: 'RM 4,000/mo', status: 'completed' },
      { date: '2023-06-18', action: 'Application approved', amount: '', status: 'completed' },
      { date: '2023-06-23', action: 'Preparing documents', amount: '', status: 'current' }
    ]
  },
  {
    id: 3,
    propertyTitle: 'Eco Sky Residences',
    propertyLocation: 'Jalan Ipoh, Kuala Lumpur',
    propertyType: 'Condominium',
    dealType: 'Rental',
    status: 'Rejected',
    stage: 'Closed',
    askingPrice: 'RM 2,800/mo',
    offerPrice: 'RM 2,500/mo',
    counterOffer: null,
    agentName: 'Lisa Wong',
    agentPhone: '+60 12-111-2222',
    agentEmail: 'lisa@propgo.my',
    submittedDate: '2023-06-10',
    lastUpdate: '2023-06-12',
    nextAction: null,
    timeline: [
      { date: '2023-06-10', action: 'Rental application submitted', amount: 'RM 2,500/mo', status: 'completed' },
      { date: '2023-06-12', action: 'Application rejected', amount: '', status: 'completed' }
    ]
  }
]

const getStatusColor = (status: string) => {
  switch (status) {
    case 'Under Negotiation':
      return 'bg-yellow-100 text-yellow-800'
    case 'Approved':
      return 'bg-green-100 text-green-800'
    case 'Rejected':
      return 'bg-red-100 text-red-800'
    case 'Pending':
      return 'bg-blue-100 text-blue-800'
    default:
      return 'bg-gray-100 text-gray-800'
  }
}

const getStatusIcon = (status: string) => {
  switch (status) {
    case 'Under Negotiation':
      return <Clock className="w-4 h-4" />
    case 'Approved':
      return <CheckCircle className="w-4 h-4" />
    case 'Rejected':
      return <XCircle className="w-4 h-4" />
    case 'Pending':
      return <AlertCircle className="w-4 h-4" />
    default:
      return <FileText className="w-4 h-4" />
  }
}

export default function DealsPage() {
  return (
    <DashboardLayout 
      title="My Deals" 
      user={mockUser}
      notificationCount={5}
    >
      <div className="p-6 max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">My Property Deals</h1>
            <p className="text-gray-500">Track your offers, negotiations, and transaction progress</p>
          </div>
          <div className="flex items-center space-x-3 mt-4 sm:mt-0">
            <button className="bg-primary text-white px-4 py-2 rounded-lg text-sm hover:bg-secondary transition flex items-center">
              <Plus className="w-4 h-4 mr-2" />
              Submit New Offer
            </button>
          </div>
        </div>

        {/* Summary Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white rounded-xl shadow-sm p-4 border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Active Deals</p>
                <p className="text-2xl font-bold text-gray-900">
                  {deals.filter(d => d.status === 'Under Negotiation' || d.status === 'Approved').length}
                </p>
              </div>
              <div className="bg-blue-50 p-3 rounded-lg">
                <FileText className="w-5 h-5 text-blue-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-4 border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Under Negotiation</p>
                <p className="text-2xl font-bold text-gray-900">
                  {deals.filter(d => d.status === 'Under Negotiation').length}
                </p>
              </div>
              <div className="bg-yellow-50 p-3 rounded-lg">
                <Clock className="w-5 h-5 text-yellow-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-4 border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Approved</p>
                <p className="text-2xl font-bold text-gray-900">
                  {deals.filter(d => d.status === 'Approved').length}
                </p>
              </div>
              <div className="bg-green-50 p-3 rounded-lg">
                <CheckCircle className="w-5 h-5 text-green-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-4 border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Total Value</p>
                <p className="text-2xl font-bold text-gray-900">RM 1.6M</p>
              </div>
              <div className="bg-purple-50 p-3 rounded-lg">
                <DollarSign className="w-5 h-5 text-purple-600" />
              </div>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-xl shadow-sm p-4 mb-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <select className="text-sm border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary">
              <option>All Statuses</option>
              <option>Under Negotiation</option>
              <option>Approved</option>
              <option>Rejected</option>
              <option>Pending</option>
            </select>
            <select className="text-sm border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary">
              <option>All Types</option>
              <option>Purchase</option>
              <option>Rental</option>
            </select>
            <select className="text-sm border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary">
              <option>All Dates</option>
              <option>Last 7 days</option>
              <option>Last 30 days</option>
              <option>Last 3 months</option>
            </select>
          </div>
        </div>

        {/* Deals List */}
        <div className="space-y-6">
          {deals.map((deal) => (
            <div key={deal.id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="p-6">
                {/* Deal Header */}
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-1">{deal.propertyTitle}</h3>
                        <p className="text-sm text-gray-500 flex items-center">
                          <MapPin className="w-3 h-3 mr-1" />
                          {deal.propertyLocation}
                        </p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(deal.status)}`}>
                          {getStatusIcon(deal.status)}
                          <span className="ml-1">{deal.status}</span>
                        </span>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                      <span>{deal.propertyType}</span>
                      <span>•</span>
                      <span>{deal.dealType}</span>
                      <span>•</span>
                      <span>Stage: {deal.stage}</span>
                    </div>
                  </div>
                </div>

                {/* Price Information */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <p className="text-xs text-gray-500 mb-1">Asking Price</p>
                    <p className="text-lg font-semibold text-gray-900">{deal.askingPrice}</p>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-4">
                    <p className="text-xs text-gray-500 mb-1">Your Offer</p>
                    <p className="text-lg font-semibold text-blue-900">{deal.offerPrice}</p>
                  </div>
                  {deal.counterOffer && (
                    <div className="bg-orange-50 rounded-lg p-4">
                      <p className="text-xs text-gray-500 mb-1">Counter Offer</p>
                      <p className="text-lg font-semibold text-orange-900">{deal.counterOffer}</p>
                    </div>
                  )}
                </div>

                {/* Timeline */}
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-gray-900 mb-3">Deal Timeline</h4>
                  <div className="space-y-3">
                    {deal.timeline.map((item, index) => (
                      <div key={index} className="flex items-start">
                        <div className={`w-3 h-3 rounded-full mr-3 mt-1 ${
                          item.status === 'completed' ? 'bg-green-500' :
                          item.status === 'current' ? 'bg-blue-500' : 'bg-gray-300'
                        }`}></div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <p className="text-sm font-medium text-gray-900">{item.action}</p>
                            <span className="text-xs text-gray-500">{new Date(item.date).toLocaleDateString()}</span>
                          </div>
                          {item.amount && (
                            <p className="text-xs text-gray-500">{item.amount}</p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Agent & Actions */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between border-t border-gray-100 pt-4">
                  <div className="flex items-center mb-3 sm:mb-0">
                    <div className="bg-gray-100 rounded-full p-2 mr-3">
                      <User className="w-4 h-4 text-gray-600" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">{deal.agentName}</p>
                      <p className="text-xs text-gray-500">Property Agent</p>
                    </div>
                    <div className="flex items-center space-x-2 ml-4">
                      <button className="p-1 text-gray-400 hover:text-primary">
                        <Phone className="w-4 h-4" />
                      </button>
                      <button className="p-1 text-gray-400 hover:text-primary">
                        <Mail className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    {deal.nextAction && (
                      <div className="text-right mr-4">
                        <p className="text-xs text-gray-500">Next Action</p>
                        <p className="text-sm font-medium text-gray-900">{deal.nextAction}</p>
                      </div>
                    )}
                    <button className="bg-primary text-white px-4 py-2 rounded-lg text-sm hover:bg-secondary transition">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {deals.length === 0 && (
          <div className="bg-white rounded-xl shadow-sm p-12 text-center">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <FileText className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">No Active Deals</h3>
            <p className="text-gray-500 mb-6 max-w-md mx-auto">
              Start making offers on properties you're interested in to track them here.
            </p>
            <button className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-secondary transition">
              Browse Properties
            </button>
          </div>
        )}
      </div>
    </DashboardLayout>
  )
} 