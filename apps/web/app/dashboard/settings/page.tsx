'use client'

import { useState } from 'react'
import { User, Bell, Shield, CreditCard, MapPin, Globe, Moon, Sun, Smartphone, Mail, Phone, Eye, Lock, Database, HelpCircle, LogOut } from 'lucide-react'
import { DashboardLayout } from '@/components/layout/dashboard-layout'

// Placeholder user data
const mockUser = {
  name: 'Sarah Lim',
  email: 'sarah@example.com',
  avatar: '/placeholder-avatar.jpg',
  role: 'Property Seeker'
}

export default function SettingsPage() {
  // State for editable form fields
  const [formData, setFormData] = useState({
    fullName: 'Sarah Lim',
    email: 'sarah@example.com',
    phone: '+60 12-345-6789',
    location: 'Kuala Lumpur',
    purchaseBudget: 'RM 500,000 - RM 1,000,000',
    rentalBudget: 'RM 2,000 - RM 5,000/month',
    language: 'English',
    theme: 'light',
    profileVisibility: 'Agents Only'
  })

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleSave = () => {
    // In real app, this would save to backend
    console.log('Saving settings:', formData)
    // You could add a toast notification here
    alert('Settings saved successfully!')
  }

  const handleReset = () => {
    setFormData({
      fullName: 'Sarah Lim',
      email: 'sarah@example.com',
      phone: '+60 12-345-6789',
      location: 'Kuala Lumpur',
      purchaseBudget: 'RM 500,000 - RM 1,000,000',
      rentalBudget: 'RM 2,000 - RM 5,000/month',
      language: 'English',
      theme: 'light',
      profileVisibility: 'Agents Only'
    })
  }
  return (
    <DashboardLayout 
      title="Settings" 
      user={mockUser}
      notificationCount={5}
    >
      <div className="p-6 max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Settings</h1>
          <p className="text-gray-500">Manage your account preferences and privacy settings</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Settings Navigation */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100">
              <nav className="p-4">
                <ul className="space-y-2">
                  <li>
                    <button className="w-full flex items-center px-3 py-2 text-sm text-left text-primary bg-blue-50 rounded-lg">
                      <User className="w-4 h-4 mr-3" />
                      Account
                    </button>
                  </li>
                  <li>
                    <button className="w-full flex items-center px-3 py-2 text-sm text-left text-gray-700 hover:bg-gray-50 rounded-lg">
                      <Bell className="w-4 h-4 mr-3" />
                      Notifications
                    </button>
                  </li>
                  <li>
                    <button className="w-full flex items-center px-3 py-2 text-sm text-left text-gray-700 hover:bg-gray-50 rounded-lg">
                      <Shield className="w-4 h-4 mr-3" />
                      Privacy & Security
                    </button>
                  </li>
                  <li>
                    <button className="w-full flex items-center px-3 py-2 text-sm text-left text-gray-700 hover:bg-gray-50 rounded-lg">
                      <MapPin className="w-4 h-4 mr-3" />
                      Preferences
                    </button>
                  </li>
                  <li>
                    <button className="w-full flex items-center px-3 py-2 text-sm text-left text-gray-700 hover:bg-gray-50 rounded-lg">
                      <CreditCard className="w-4 h-4 mr-3" />
                      Billing
                    </button>
                  </li>
                </ul>
              </nav>
            </div>
          </div>

          {/* Settings Content */}
          <div className="lg:col-span-3 space-y-6">
            {/* Account Information */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">Account Information</h3>
                <button className="text-primary hover:text-secondary text-sm">Edit</button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                  <input 
                    type="text" 
                    value={formData.fullName}
                    onChange={(e) => handleInputChange('fullName', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                  <input 
                    type="email" 
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                  <input 
                    type="tel" 
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
                  <select 
                    value={formData.location}
                    onChange={(e) => handleInputChange('location', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option>Kuala Lumpur</option>
                    <option>Selangor</option>
                    <option>Johor</option>
                    <option>Penang</option>
                    <option>Perak</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Notification Preferences */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Notification Preferences</h3>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between py-3 border-b border-gray-100">
                  <div className="flex items-center">
                    <Mail className="w-5 h-5 text-gray-400 mr-3" />
                    <div>
                      <p className="font-medium text-gray-900">Email Notifications</p>
                      <p className="text-sm text-gray-500">Receive updates about properties and deals</p>
                    </div>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" defaultChecked />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                  </label>
                </div>

                <div className="flex items-center justify-between py-3 border-b border-gray-100">
                  <div className="flex items-center">
                    <Smartphone className="w-5 h-5 text-gray-400 mr-3" />
                    <div>
                      <p className="font-medium text-gray-900">Push Notifications</p>
                      <p className="text-sm text-gray-500">Get notified on your mobile device</p>
                    </div>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" defaultChecked />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                  </label>
                </div>

                <div className="flex items-center justify-between py-3 border-b border-gray-100">
                  <div className="flex items-center">
                    <Bell className="w-5 h-5 text-gray-400 mr-3" />
                    <div>
                      <p className="font-medium text-gray-900">Market Alerts</p>
                      <p className="text-sm text-gray-500">Price changes and new properties</p>
                    </div>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                  </label>
                </div>

                <div className="flex items-center justify-between py-3">
                  <div className="flex items-center">
                    <Phone className="w-5 h-5 text-gray-400 mr-3" />
                    <div>
                      <p className="font-medium text-gray-900">SMS Notifications</p>
                      <p className="text-sm text-gray-500">Important updates via SMS</p>
                    </div>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                  </label>
                </div>
              </div>
            </div>

            {/* Privacy & Security */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Privacy & Security</h3>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between py-3 border-b border-gray-100">
                  <div className="flex items-center">
                    <Eye className="w-5 h-5 text-gray-400 mr-3" />
                    <div>
                      <p className="font-medium text-gray-900">Profile Visibility</p>
                      <p className="text-sm text-gray-500">Who can see your profile information</p>
                    </div>
                  </div>
                  <select 
                    value={formData.profileVisibility}
                    onChange={(e) => handleInputChange('profileVisibility', e.target.value)}
                    className="text-sm border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option>Agents Only</option>
                    <option>Public</option>
                    <option>Private</option>
                  </select>
                </div>

                <div className="flex items-center justify-between py-3 border-b border-gray-100">
                  <div className="flex items-center">
                    <Database className="w-5 h-5 text-gray-400 mr-3" />
                    <div>
                      <p className="font-medium text-gray-900">Data Sharing (PDPA)</p>
                      <p className="text-sm text-gray-500">Control how your data is used</p>
                    </div>
                  </div>
                  <button className="text-primary hover:text-secondary text-sm">Manage</button>
                </div>

                <div className="flex items-center justify-between py-3">
                  <div className="flex items-center">
                    <Lock className="w-5 h-5 text-gray-400 mr-3" />
                    <div>
                      <p className="font-medium text-gray-900">Two-Factor Authentication</p>
                      <p className="text-sm text-gray-500">Add extra security to your account</p>
                    </div>
                  </div>
                  <button className="bg-primary text-white px-4 py-2 rounded-lg text-sm hover:bg-secondary transition">
                    Enable
                  </button>
                </div>
              </div>
            </div>

            {/* Property Preferences */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Property Preferences</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Property Type</label>
                  <div className="space-y-2">
                    <label className="flex items-center">
                      <input type="checkbox" className="rounded text-primary focus:ring-primary" defaultChecked />
                      <span className="ml-2 text-sm text-gray-700">Condominiums</span>
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="rounded text-primary focus:ring-primary" defaultChecked />
                      <span className="ml-2 text-sm text-gray-700">Landed Houses</span>
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="rounded text-primary focus:ring-primary" />
                      <span className="ml-2 text-sm text-gray-700">Apartments</span>
                    </label>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Budget Range</label>
                  <div className="space-y-3">
                    <div>
                      <label className="block text-xs text-gray-500 mb-1">Purchase</label>
                      <input 
                        type="text" 
                        value={formData.purchaseBudget}
                        onChange={(e) => handleInputChange('purchaseBudget', e.target.value)}
                        className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="e.g., RM 500,000 - RM 1,000,000"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-gray-500 mb-1">Rental</label>
                      <input 
                        type="text" 
                        value={formData.rentalBudget}
                        onChange={(e) => handleInputChange('rentalBudget', e.target.value)}
                        className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="e.g., RM 2,000 - RM 5,000/month"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Language & Theme */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Display Preferences</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Language</label>
                  <select 
                    value={formData.language}
                    onChange={(e) => handleInputChange('language', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option>English</option>
                    <option>Bahasa Malaysia</option>
                    <option>中文 (Chinese)</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Theme</label>
                  <div className="flex items-center space-x-4">
                    <label className="flex items-center">
                      <input 
                        type="radio" 
                        name="theme" 
                        value="light"
                        checked={formData.theme === 'light'}
                        onChange={(e) => handleInputChange('theme', e.target.value)}
                        className="text-primary focus:ring-primary" 
                      />
                      <Sun className="w-4 h-4 ml-2 mr-1 text-gray-400" />
                      <span className="text-sm text-gray-700">Light</span>
                    </label>
                    <label className="flex items-center">
                      <input 
                        type="radio" 
                        name="theme" 
                        value="dark"
                        checked={formData.theme === 'dark'}
                        onChange={(e) => handleInputChange('theme', e.target.value)}
                        className="text-primary focus:ring-primary" 
                      />
                      <Moon className="w-4 h-4 ml-2 mr-1 text-gray-400" />
                      <span className="text-sm text-gray-700">Dark</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
              <button 
                onClick={handleSave}
                className="w-full sm:w-auto bg-primary text-white px-6 py-2 rounded-lg hover:bg-secondary transition"
              >
                Save Changes
              </button>
              <button 
                onClick={handleReset}
                className="w-full sm:w-auto text-gray-600 hover:text-gray-800 px-6 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition"
              >
                Reset to Default
              </button>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
} 