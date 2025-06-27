'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const personalInfoSchema = z.object({
  fullName: z.string().min(2, 'Full name must be at least 2 characters'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  languagePreference: z.string().default('en'),
  timezone: z.string().default('Asia/Kuala_Lumpur'),
})

type PersonalInfoData = z.infer<typeof personalInfoSchema>

interface PersonalInfoStepProps {
  data?: PersonalInfoData
  onUpdate: (data: PersonalInfoData) => void
  userRole: string
}

export function PersonalInfoStep({ data, onUpdate, userRole }: PersonalInfoStepProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<PersonalInfoData>({
    resolver: zodResolver(personalInfoSchema),
    defaultValues: data || {
      fullName: '',
      phone: '',
      languagePreference: 'en',
      timezone: 'Asia/Kuala_Lumpur',
    },
  })

  // Watch for changes and update parent
  const watchedValues = watch()
  
  const onSubmit = (formData: PersonalInfoData) => {
    onUpdate(formData)
  }

  // Update parent whenever form values change
  const handleInputChange = () => {
    const currentValues = watchedValues
    if (currentValues.fullName && currentValues.phone) {
      onUpdate(currentValues)
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4">
          Personal Information
        </h3>
        <p className="text-sm text-gray-600 mb-6">
          Please provide your basic information to complete your profile.
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="fullName">Full Name *</Label>
          <Input
            id="fullName"
            {...register('fullName')}
            onChange={handleInputChange}
            placeholder="Enter your full name"
            className={errors.fullName ? 'border-red-500' : ''}
          />
          {errors.fullName && (
            <p className="text-sm text-red-500">{errors.fullName.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone">Phone Number *</Label>
          <Input
            id="phone"
            {...register('phone')}
            onChange={handleInputChange}
            placeholder="+60 12-345 6789"
            className={errors.phone ? 'border-red-500' : ''}
          />
          {errors.phone && (
            <p className="text-sm text-red-500">{errors.phone.message}</p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="languagePreference">Preferred Language</Label>
            <select
              id="languagePreference"
              {...register('languagePreference')}
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background"
            >
              <option value="en">English</option>
              <option value="ms">Bahasa Malaysia</option>
              <option value="zh">中文</option>
            </select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="timezone">Timezone</Label>
            <select
              id="timezone"
              {...register('timezone')}
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background"
            >
              <option value="Asia/Kuala_Lumpur">Kuala Lumpur (UTC+8)</option>
              <option value="Asia/Singapore">Singapore (UTC+8)</option>
              <option value="Asia/Bangkok">Bangkok (UTC+7)</option>
            </select>
          </div>
        </div>
      </form>
    </div>
  )
} 