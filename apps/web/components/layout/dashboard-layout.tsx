'use client'

import { ReactNode } from 'react'
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
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <DashboardSidebar user={user} />
      
      {/* Main Content Area */}
      <div className="flex-1 ml-64 flex flex-col">
        {/* Header */}
        <DashboardHeader 
          title={title} 
          user={user} 
          notificationCount={notificationCount} 
        />
        
        {/* Main Content */}
        <main className="flex-1 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  )
} 