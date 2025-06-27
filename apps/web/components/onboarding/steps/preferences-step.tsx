'use client'

import { Label } from '@/components/ui/label'

interface PreferencesStepProps {
  data?: any
  onUpdate: (data: any) => void
  userRole: string
}

export function PreferencesStep({ data, onUpdate, userRole }: PreferencesStepProps) {
  const preferences = data || {
    notifications: { email: true, sms: false, push: true },
    privacy: { profileVisibility: 'public', contactPreferences: ['in_app'] }
  }

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4">
          Preferences
        </h3>
        <p className="text-sm text-gray-600 mb-6">
          Set your notification and privacy preferences.
        </p>
      </div>

      <div className="space-y-6">
        <div>
          <Label className="text-base font-medium">Notification Preferences</Label>
          <div className="mt-3 space-y-3">
            <label className="flex items-center space-x-3">
              <input
                type="checkbox"
                checked={preferences.notifications.email}
                onChange={(e) => onUpdate({
                  ...preferences,
                  notifications: { ...preferences.notifications, email: e.target.checked }
                })}
                className="rounded border-gray-300"
              />
              <span className="text-sm">Email notifications</span>
            </label>
            <label className="flex items-center space-x-3">
              <input
                type="checkbox"
                checked={preferences.notifications.sms}
                onChange={(e) => onUpdate({
                  ...preferences,
                  notifications: { ...preferences.notifications, sms: e.target.checked }
                })}
                className="rounded border-gray-300"
              />
              <span className="text-sm">SMS notifications</span>
            </label>
            <label className="flex items-center space-x-3">
              <input
                type="checkbox"
                checked={preferences.notifications.push}
                onChange={(e) => onUpdate({
                  ...preferences,
                  notifications: { ...preferences.notifications, push: e.target.checked }
                })}
                className="rounded border-gray-300"
              />
              <span className="text-sm">Push notifications</span>
            </label>
          </div>
        </div>

        <div>
          <Label className="text-base font-medium">Privacy Settings</Label>
          <div className="mt-3 space-y-3">
            <div>
              <Label className="text-sm text-gray-600">Profile Visibility</Label>
              <select
                value={preferences.privacy.profileVisibility}
                onChange={(e) => onUpdate({
                  ...preferences,
                  privacy: { ...preferences.privacy, profileVisibility: e.target.value }
                })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
              >
                <option value="public">Public</option>
                <option value="private">Private</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 