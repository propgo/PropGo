'use client'

interface ComplianceStepProps {
  data?: any
  onUpdate: (data: any) => void
  userRole: string
}

export function ComplianceStep({ data, onUpdate, userRole }: ComplianceStepProps) {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4">
          Compliance & Verification
        </h3>
        <p className="text-sm text-gray-600 mb-6">
          Upload your professional documents for verification.
        </p>
      </div>

      <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
        <p className="text-gray-500 mb-4">Document upload will be implemented in the next phase</p>
        <p className="text-sm text-gray-400">
          Required documents for {userRole}s will be handled here
        </p>
      </div>
    </div>
  )
} 