'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { 
  LayoutDashboard, 
  Building, 
  Handshake, 
  Users, 
  MessageSquare, 
  FileText, 
  Search, 
  Wand2, 
  Settings,
  HelpCircle,
  LogOut,
  X
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { SignOutButton } from '@/components/auth/sign-out-button'

interface SidebarItem {
  name: string
  href: string
  icon: React.ComponentType<{ className?: string }>
  badge?: number
  current?: boolean
}

const navigation: SidebarItem[] = [
  { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
  { name: 'My Listings', href: '/dashboard/listings', icon: Building },
  { name: 'Deals', href: '/dashboard/deals', icon: Handshake },
  { name: 'Clients', href: '/dashboard/clients', icon: Users },
  { name: 'Messages', href: '/dashboard/messages', icon: MessageSquare, badge: 3 },
  { name: 'Documents', href: '/dashboard/documents', icon: FileText },
  { name: 'WTB/WTR', href: '/dashboard/wtb', icon: Search },
  { name: 'AI Tools', href: '/dashboard/ai-tools', icon: Wand2 },
  { name: 'Settings', href: '/dashboard/settings', icon: Settings },
]

const bottomNavigation = [
  { name: 'Help & Support', href: '/dashboard/help', icon: HelpCircle },
]

interface DashboardSidebarProps {
  user?: {
    name: string
    email: string
    avatar?: string
    role?: string
  }
  isOpen?: boolean
  onClose?: () => void
}

export function DashboardSidebar({ user, isOpen = false, onClose }: DashboardSidebarProps) {
  const pathname = usePathname()

  return (
    <aside className={cn(
      "w-64 bg-dark text-white h-full flex-shrink-0 overflow-y-auto transition-transform duration-300 ease-in-out z-50",
      "fixed left-0 top-0",
      "lg:translate-x-0", // Always visible on large screens
      isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0" // Mobile: slide in/out, Desktop: always visible
    )}>
      <div className="p-6">
        {/* Mobile Close Button */}
        <div className="flex items-center justify-between mb-8">
          <Link href="/dashboard" className="flex items-center">
            <span className="text-2xl font-bold">
              PropGo
              <span className="text-secondary">.my</span>
            </span>
          </Link>
          
          {/* Close button for mobile */}
          <button
            onClick={onClose}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-800 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        
        {/* User Profile Section */}
        <div className="mb-8">
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center overflow-hidden">
              {user?.avatar ? (
                <img src={user.avatar || '/placeholder-avatar.jpg'} alt={user.name} className="w-full h-full object-cover" />
              ) : (
                <span className="text-dark font-semibold text-lg">
                  {user?.name?.charAt(0)?.toUpperCase() || 'U'}
                </span>
              )}
            </div>
            <div>
              <h3 className="font-medium text-white">{user?.name || 'User'}</h3>
              <p className="text-xs text-gray-400">{user?.role || 'Premium Agent'}</p>
            </div>
          </div>
        </div>
        
        {/* Navigation Menu */}
        <nav>
          <ul className="space-y-2">
            {navigation.map((item) => {
              const isActive = pathname === item.href
              return (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    onClick={onClose} // Close mobile menu when navigating
                    className={cn(
                      'flex items-center space-x-3 px-4 py-3 rounded-lg transition cursor-pointer',
                      isActive
                        ? 'bg-primary text-white'
                        : 'text-gray-300 hover:bg-gray-800'
                    )}
                  >
                    <item.icon className="w-5 h-5" />
                    <span>{item.name}</span>
                    {item.badge && (
                      <span className="ml-auto bg-secondary text-white text-xs px-2 py-1 rounded-full">
                        {item.badge}
                      </span>
                    )}
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>
        
        {/* Bottom Navigation */}
        <div className="mt-12 pt-6 border-t border-gray-700">
          {bottomNavigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={onClose} // Close mobile menu when navigating
              className="flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-300 hover:bg-gray-800 transition cursor-pointer"
            >
              <item.icon className="w-5 h-5" />
              <span>{item.name}</span>
            </Link>
          ))}
          
          {/* Sign Out Button */}
          <div className="flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-300 hover:bg-gray-800 transition">
            <LogOut className="w-5 h-5" />
            <SignOutButton 
              variant="ghost" 
              className="text-gray-300 hover:text-white hover:bg-transparent p-0 h-auto font-normal"
            />
          </div>
        </div>
      </div>
    </aside>
  )
} 