'use client'

import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

interface ProfessionalInfoStepProps {
  data?: any
  onUpdate: (data: any) => void
  userRole: string
}

export function ProfessionalInfoStep({ data, onUpdate, userRole }: ProfessionalInfoStepProps) {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4">
          Professional Information
        </h3>
        <p className="text-sm text-gray-600 mb-6">
          Provide your professional credentials and experience.
        </p>
      </div>

      <div className="space-y-4">
        {userRole === 'agent' && (
          <>
            <div className="space-y-2">
              <Label htmlFor="renLicense">REN License Number *</Label>
              <Input
                id="renLicense"
                placeholder="e.g., REN12345"
                value={data?.renLicense || ''}
                onChange={(e) => onUpdate({ ...data, renLicense: e.target.value })}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="experienceYears">Years of Experience</Label>
              <Input
                id="experienceYears"
                type="number"
                placeholder="e.g., 5"
                value={data?.experienceYears || ''}
                onChange={(e) => onUpdate({ ...data, experienceYears: parseInt(e.target.value) })}
              />
            </div>
          </>
        )}

        {userRole === 'lawyer' && (
          <>
            <div className="space-y-2">
              <Label htmlFor="barCouncilNumber">Bar Council Number *</Label>
              <Input
                id="barCouncilNumber"
                placeholder="e.g., BC12345"
                value={data?.barCouncilNumber || ''}
                onChange={(e) => onUpdate({ ...data, barCouncilNumber: e.target.value })}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="hourlyRate">Hourly Rate (RM)</Label>
              <Input
                id="hourlyRate"
                type="number"
                placeholder="e.g., 500"
                value={data?.hourlyRate || ''}
                onChange={(e) => onUpdate({ ...data, hourlyRate: parseFloat(e.target.value) })}
              />
            </div>
          </>
        )}

        {userRole === 'banker' && (
          <>
            <div className="space-y-2">
              <Label htmlFor="employeeId">Employee ID</Label>
              <Input
                id="employeeId"
                placeholder="e.g., EMP12345"
                value={data?.employeeId || ''}
                onChange={(e) => onUpdate({ ...data, employeeId: e.target.value })}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="department">Department</Label>
              <Input
                id="department"
                placeholder="e.g., Home Loans"
                value={data?.department || ''}
                onChange={(e) => onUpdate({ ...data, department: e.target.value })}
              />
            </div>
          </>
        )}
      </div>
    </div>
  )
} 