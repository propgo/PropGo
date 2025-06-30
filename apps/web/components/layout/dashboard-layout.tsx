'use client'

import { ReactNode, useState } from 'react'
import { DashboardSidebar } from './dashboard-sidebar'
import { DashboardHeader } from './dashboard-header'

interface DashboardLayoutProps {
  children: ReactNode
  title: string
  user?: {
    name: string
    email: string
    avatar?: string
    role?: string
  }
  notificationCount?: number
}

export function DashboardLayout({ 
  children, 
  title, 
  user, 
  notificationCount 
}: DashboardLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
      
      {/* Sidebar */}
      <DashboardSidebar 
        user={user} 
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />
      
      {/* Main Content Area */}
      <div className="flex-1 lg:ml-64 flex flex-col">
        {/* Header */}
        <DashboardHeader 
          title={title} 
          user={user} 
          notificationCount={notificationCount}
          onMenuClick={() => setSidebarOpen(true)}
        />
        
        {/* Main Content */}
        <main className="flex-1 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  )
} 