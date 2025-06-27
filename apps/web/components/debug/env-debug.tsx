'use client'

export function EnvDebug() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  
  return (
    <div className="p-4 border border-red-500 bg-red-50 text-sm">
      <h3 className="font-bold text-red-800 mb-2">Environment Debug</h3>
      <div className="space-y-1 text-red-700">
        <div>
          <strong>SUPABASE_URL:</strong> {supabaseUrl ? '✅ Set' : '❌ Missing'}
          {supabaseUrl && <span className="ml-2 text-xs">({supabaseUrl.substring(0, 20)}...)</span>}
        </div>
        <div>
          <strong>SUPABASE_ANON_KEY:</strong> {supabaseAnonKey ? '✅ Set' : '❌ Missing'}
          {supabaseAnonKey && <span className="ml-2 text-xs">({supabaseAnonKey.substring(0, 20)}...)</span>}
        </div>
      </div>
    </div>
  )
} 