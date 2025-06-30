'use client'

import { useState } from 'react'
import { Search, Bell, ChevronDown, Menu } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

interface DashboardHeaderProps {
  title: string
  user?: {
    name: string
    email: string
    avatar?: string
  }
  notificationCount?: number
  onMenuClick?: () => void
}

export function DashboardHeader({ 
  title, 
  user, 
  notificationCount = 0,
  onMenuClick 
}: DashboardHeaderProps) {
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <header className="bg-white shadow-sm px-4 sm:px-6 py-4 flex items-center justify-between sticky top-0 z-10">
      <div className="flex items-center space-x-4">
        {/* Mobile Menu Button */}
        <button
          onClick={onMenuClick}
          className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition"
        >
          <Menu className="w-5 h-5 text-gray-600" />
        </button>
        
        <h1 className="text-lg sm:text-xl font-semibold text-dark">{title}</h1>
      </div>
      
      <div className="flex items-center space-x-2 sm:space-x-4">
        {/* Search Input - Hidden on mobile, visible on tablet+ */}
        <div className="relative hidden md:block">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <Input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 pr-4 py-2 w-48 lg:w-64 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
        
        {/* Mobile Search Button */}
        <Button variant="ghost" size="sm" className="md:hidden p-2">
          <Search className="w-5 h-5 text-gray-600" />
        </Button>
        
        {/* Notification Bell */}
        <Button variant="ghost" size="sm" className="relative p-2">
          <Bell className="w-5 h-5 text-gray-600" />
          {notificationCount > 0 && (
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
              {notificationCount}
            </span>
          )}
        </Button>
        
        {/* User Dropdown */}
        <div className="flex items-center space-x-2 cursor-pointer">
          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gray-300 flex items-center justify-center overflow-hidden">
            {user?.avatar ? (
              <img src={user.avatar || '/placeholder-avatar.jpg'} alt={user.name} className="w-full h-full object-cover" />
            ) : (
              <span className="text-gray-600 font-semibold text-sm">
                {user?.name?.charAt(0)?.toUpperCase() || 'U'}
              </span>
            )}
          </div>
          <span className="text-sm font-medium text-gray-700 hidden sm:block">{user?.name || 'User'}</span>
          <ChevronDown className="w-4 h-4 text-gray-400 hidden sm:block" />
        </div>
      </div>
    </header>
  )
} 