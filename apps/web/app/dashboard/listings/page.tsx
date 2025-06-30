import type { Metadata } from 'next'
import { Heart, Eye, Search, Filter, MapPin, Calendar, Phone, Mail, ExternalLink, Trash2, Edit, MessageSquare, Star, Bookmark } from 'lucide-react'
import { DashboardLayout } from '@/components/layout/dashboard-layout'

export const metadata: Metadata = {
  title: 'My Listings - PropGo.my',
  description: 'Manage your saved properties, inquiries, and property interests.',
}

// Placeholder user data - in real app, this would come from auth context
const mockUser = {
  name: 'Sarah Lim',
  email: 'sarah@example.com',
  avatar: '/placeholder-avatar.jpg',
  role: 'Property Seeker'
}

// Mock saved properties data
const savedProperties = [
  {
    id: 1,
    title: 'The Tropika, Bukit Jalil',
    location: 'Bukit Jalil, Kuala Lumpur',
    price: 'RM 850,000',
    priceType: 'sale',
    type: 'Condominium',
    beds: 3,
    baths: 2,
    sqft: 1200,
    status: 'Available',
    image: '/placeholder-property.jpg',
    savedDate: '2023-06-20',
    lastViewed: '2023-06-22',
    viewCount: 5,
    agentName: 'Ahmad Zulkifli',
    agentPhone: '+60 12-345-6789',
    agentEmail: 'ahmad@propgo.my',
    inquiryStatus: 'Pending Response',
    features: ['Near MRT', 'Swimming Pool', 'Gym', 'Security'],
    favorite: true
  },
  {
    id: 2,
    title: 'KLCC Residence',
    location: 'KLCC, Kuala Lumpur',
    price: 'RM 4,200',
    priceType: 'rent',
    type: 'Condominium',
    beds: 2,
    baths: 2,
    sqft: 950,
    status: 'Available',
    image: '/placeholder-property.jpg',
    savedDate: '2023-06-15',
    lastViewed: '2023-06-21',
    viewCount: 8,
    agentName: 'Siti Rahman',
    agentPhone: '+60 12-987-6543',
    agentEmail: 'siti@propgo.my',
    inquiryStatus: 'Responded',
    features: ['City View', 'Furnished', 'Near LRT', 'Shopping Mall'],
    favorite: true
  },
  {
    id: 3,
    title: 'Desa ParkCity',
    location: 'Kepong, Kuala Lumpur',
    price: 'RM 1,950,000',
    priceType: 'sale',
    type: 'Landed House',
    beds: 4,
    baths: 3,
    sqft: 2400,
    status: 'Available',
    image: '/placeholder-property.jpg',
    savedDate: '2023-06-10',
    lastViewed: '2023-06-18',
    viewCount: 3,
    agentName: 'David Tan',
    agentPhone: '+60 12-555-7777',
    agentEmail: 'david@propgo.my',
    inquiryStatus: 'Viewing Scheduled',
    features: ['Gated Community', 'Garden', 'Double Storey', 'Near School'],
    favorite: true
  },
  {
    id: 4,
    title: 'Eco Sky Residences',
    location: 'Jalan Ipoh, Kuala Lumpur',
    price: 'RM 2,800',
    priceType: 'rent',
    type: 'Condominium',
    beds: 1,
    baths: 1,
    sqft: 700,
    status: 'Available',
    image: '/placeholder-property.jpg',
    savedDate: '2023-06-05',
    lastViewed: '2023-06-16',
    viewCount: 2,
    agentName: 'Lisa Wong',
    agentPhone: '+60 12-111-2222',
    agentEmail: 'lisa@propgo.my',
    inquiryStatus: 'No Inquiry',
    features: ['Partial Furnished', 'Parking', 'Near LRT'],
    favorite: false
  }
]

export default function ListingsPage() {
  return (
    <DashboardLayout 
      title="My Listings" 
      user={mockUser}
      notificationCount={5}
    >
      <div className="p-4 sm:p-6 max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
          <div>
            <h1 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">My Saved Properties</h1>
            <p className="text-gray-500 text-sm sm:text-base">Manage your favorite properties and track inquiries</p>
          </div>
          <div className="flex items-center space-x-3">
            <button className="bg-primary text-white px-3 sm:px-4 py-2 rounded-lg text-sm hover:bg-secondary transition flex items-center whitespace-nowrap">
              <Search className="w-4 h-4 mr-1 sm:mr-2" />
              <span className="hidden sm:inline">Browse More Properties</span>
              <span className="sm:hidden">Browse More</span>
            </button>
          </div>
        </div>

        {/* Summary Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white rounded-xl shadow-sm p-4 border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Total Saved</p>
                <p className="text-2xl font-bold text-gray-900">{savedProperties.length}</p>
              </div>
              <div className="bg-blue-50 p-3 rounded-lg">
                <Heart className="w-5 h-5 text-blue-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-4 border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Active Inquiries</p>
                <p className="text-2xl font-bold text-gray-900">
                  {savedProperties.filter(p => p.inquiryStatus !== 'No Inquiry').length}
                </p>
              </div>
              <div className="bg-green-50 p-3 rounded-lg">
                <MessageSquare className="w-5 h-5 text-green-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-4 border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Viewing Scheduled</p>
                <p className="text-2xl font-bold text-gray-900">
                  {savedProperties.filter(p => p.inquiryStatus === 'Viewing Scheduled').length}
                </p>
              </div>
              <div className="bg-purple-50 p-3 rounded-lg">
                <Calendar className="w-5 h-5 text-purple-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-4 border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Total Views</p>
                <p className="text-2xl font-bold text-gray-900">
                  {savedProperties.reduce((total, property) => total + property.viewCount, 0)}
                </p>
              </div>
              <div className="bg-amber-50 p-3 rounded-lg">
                <Eye className="w-5 h-5 text-amber-600" />
              </div>
            </div>
          </div>
        </div>

        {/* Filters and Search */}
        <div className="bg-white rounded-xl shadow-sm p-4 mb-6">
          <div className="flex flex-col space-y-4">
            {/* Search Input */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input 
                type="text" 
                placeholder="Search your saved properties..." 
                className="w-full pl-10 pr-4 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            
            {/* Filter Row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <select className="text-sm border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary">
                <option>All Types</option>
                <option>Condominiums</option>
                <option>Landed Houses</option>
                <option>Apartments</option>
              </select>
              <select className="text-sm border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary">
                <option>All Status</option>
                <option>Available</option>
                <option>Under Offer</option>
                <option>Sold/Rented</option>
              </select>
              <select className="text-sm border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary">
                <option>All Inquiries</option>
                <option>No Inquiry</option>
                <option>Pending Response</option>
                <option>Responded</option>
                <option>Viewing Scheduled</option>
              </select>
            </div>
          </div>
        </div>

        {/* Properties Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {savedProperties.map((property) => (
            <div key={property.id} className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow">
              <div className="flex">
                {/* Property Image */}
                <div className="w-48 h-48 bg-gray-200 relative flex-shrink-0">
                  <div className="absolute top-3 left-3">
                    <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                      property.status === 'Available' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {property.status}
                    </span>
                  </div>
                  <div className="absolute top-3 right-3">
                    {property.favorite ? (
                      <Heart className="w-5 h-5 text-red-500 fill-current" />
                    ) : (
                      <Heart className="w-5 h-5 text-gray-400" />
                    )}
                  </div>
                  <div className="absolute bottom-3 left-3">
                    <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                      property.priceType === 'sale' 
                        ? 'bg-blue-100 text-blue-800' 
                        : 'bg-indigo-100 text-indigo-800'
                    }`}>
                      For {property.priceType === 'sale' ? 'Sale' : 'Rent'}
                    </span>
                  </div>
                </div>

                {/* Property Details */}
                <div className="flex-1 p-4">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">{property.title}</h3>
                      <p className="text-sm text-gray-500 flex items-center mb-2">
                        <MapPin className="w-3 h-3 mr-1" />
                        {property.location}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-bold text-primary">
                        {property.price}{property.priceType === 'rent' ? '/mo' : ''}
                      </p>
                      <p className="text-xs text-gray-500">{property.type}</p>
                    </div>
                  </div>

                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <span>{property.beds} bed</span>
                    <span className="mx-2">•</span>
                    <span>{property.baths} bath</span>
                    <span className="mx-2">•</span>
                    <span>{property.sqft} sqft</span>
                  </div>

                  {/* Features */}
                  <div className="flex flex-wrap gap-1 mb-3">
                    {property.features.slice(0, 3).map((feature, index) => (
                      <span key={index} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                        {feature}
                      </span>
                    ))}
                    {property.features.length > 3 && (
                      <span className="text-xs text-gray-500">+{property.features.length - 3} more</span>
                    )}
                  </div>

                  {/* Inquiry Status */}
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center text-xs text-gray-500">
                      <span className={`inline-block w-2 h-2 rounded-full mr-2 ${
                        property.inquiryStatus === 'No Inquiry' ? 'bg-gray-400' :
                        property.inquiryStatus === 'Pending Response' ? 'bg-yellow-400' :
                        property.inquiryStatus === 'Responded' ? 'bg-green-400' :
                        'bg-blue-400'
                      }`}></span>
                      {property.inquiryStatus}
                    </div>
                    <div className="text-xs text-gray-500">
                      Viewed {property.viewCount} times
                    </div>
                  </div>

                  {/* Agent Info */}
                  <div className="bg-gray-50 rounded-lg p-3 mb-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-900">{property.agentName}</p>
                        <p className="text-xs text-gray-500">Property Agent</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <button className="p-1 text-gray-400 hover:text-primary">
                          <Phone className="w-4 h-4" />
                        </button>
                        <button className="p-1 text-gray-400 hover:text-primary">
                          <Mail className="w-4 h-4" />
                        </button>
                        <button className="p-1 text-gray-400 hover:text-primary">
                          <MessageSquare className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center justify-between">
                    <div className="text-xs text-gray-500">
                      Saved {new Date(property.savedDate).toLocaleDateString()}
                    </div>
                    <div className="flex items-center space-x-2">
                      <button className="text-xs text-primary hover:text-secondary flex items-center">
                        <ExternalLink className="w-3 h-3 mr-1" />
                        View Details
                      </button>
                      <button className="text-xs text-gray-400 hover:text-red-600">
                        <Trash2 className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State (hidden when there are properties) */}
        {savedProperties.length === 0 && (
          <div className="bg-white rounded-xl shadow-sm p-12 text-center">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">No Saved Properties</h3>
            <p className="text-gray-500 mb-6 max-w-md mx-auto">
              Start exploring properties and save your favorites to keep track of them here.
            </p>
            <button className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-secondary transition">
              Browse Properties
            </button>
          </div>
        )}

        {/* Pagination (if needed) */}
        {savedProperties.length > 0 && (
          <div className="flex items-center justify-between mt-8">
            <p className="text-sm text-gray-500">
              Showing {savedProperties.length} of {savedProperties.length} saved properties
            </p>
            <div className="flex items-center space-x-2">
              <button className="px-3 py-1 text-sm text-gray-500 border border-gray-200 rounded hover:bg-gray-50">
                Previous
              </button>
              <button className="px-3 py-1 text-sm bg-primary text-white rounded">
                1
              </button>
              <button className="px-3 py-1 text-sm text-gray-500 border border-gray-200 rounded hover:bg-gray-50">
                Next
              </button>
            </div>
          </div>
        )}
      </div>
    </DashboardLayout>
  )
} 