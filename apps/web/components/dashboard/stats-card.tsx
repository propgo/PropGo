import { ReactNode } from 'react'
import { LucideIcon, TrendingUp, TrendingDown } from 'lucide-react'
import { cn } from '@/lib/utils'

interface StatsCardProps {
  title: string
  value: string | number
  icon: LucideIcon
  trend?: {
    value: string
    isPositive: boolean
  }
  className?: string
  iconBgColor?: string
  iconColor?: string
}

export function StatsCard({ 
  title, 
  value, 
  icon: Icon, 
  trend, 
  className,
  iconBgColor = 'bg-blue-50',
  iconColor = 'text-primary'
}: StatsCardProps) {
  return (
    <div className={cn('w-full h-full min-h-[120px] flex flex-col', className)}>
      <div className={cn('rounded-lg p-4 flex-1 flex flex-col justify-between', iconBgColor)}>
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-gray-500 font-medium">{title}</span>
          <Icon className={cn('w-5 h-5', iconColor)} />
        </div>
        <div className="flex items-end mt-auto">
          <span className="text-2xl font-bold text-gray-900">{value}</span>
          {trend && (
            <span className={cn(
              'text-xs ml-2 mb-1 flex items-center',
              trend.isPositive ? 'text-green-500' : 'text-red-500'
            )}>
              {trend.isPositive ? (
                <TrendingUp className="w-3 h-3 mr-1" />
              ) : (
                <TrendingDown className="w-3 h-3 mr-1" />
              )}
              {trend.value}
            </span>
          )}
        </div>
      </div>
    </div>
  )
} 