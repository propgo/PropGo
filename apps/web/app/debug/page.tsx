'use client'

import { useEffect, useState } from 'react'
import { createClient } from '@supabase/supabase-js'

export default function DebugPage() {
  const [debugInfo, setDebugInfo] = useState<any>({})
  const [testResult, setTestResult] = useState<string>('')

  useEffect(() => {
    const info = {
      supabaseUrl: process.env.NEXT_PUBLIC_SUPABASE_URL,
      supabaseKeyPresent: !!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
      nodeEnv: process.env.NODE_ENV,
      timestamp: new Date().toISOString()
    }
    setDebugInfo(info)
    console.log('🔧 Debug Info:', info)
  }, [])

  const testSupabaseConnection = async () => {
    try {
      setTestResult('Testing...')
      
      const supabase = createClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
      )

      console.log('🔧 Supabase client created:', supabase)

      // Test connection
      const { data, error } = await supabase.auth.getSession()
      
      if (error) {
        setTestResult(`Error: ${error.message}`)
        console.error('🔧 Supabase test error:', error)
      } else {
        setTestResult('Connection successful!')
        console.log('🔧 Supabase test success:', data)
      }
    } catch (err) {
      setTestResult(`Unexpected error: ${err}`)
      console.error('🔧 Unexpected error:', err)
    }
  }

  const testSignIn = async () => {
    try {
      setTestResult('Testing sign in...')
      
      const supabase = createClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
      )

      const { data, error } = await supabase.auth.signInWithPassword({
        email: 'propgo.my@gmail.com',
        password: 'propgo123'
      })

      if (error) {
        setTestResult(`Sign in error: ${error.message}`)
        console.error('🔧 Sign in test error:', error)
      } else {
        setTestResult('Sign in successful!')
        console.log('🔧 Sign in test success:', data)
      }
    } catch (err) {
      setTestResult(`Sign in unexpected error: ${err}`)
      console.error('🔧 Sign in unexpected error:', err)
    }
  }

  return (
    <div className="p-8 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Debug Page</h1>
      
      <div className="bg-gray-100 p-4 rounded mb-6">
        <h2 className="text-lg font-semibold mb-3">Environment Variables</h2>
        <pre className="text-sm">
          {JSON.stringify(debugInfo, null, 2)}
        </pre>
      </div>

      <div className="space-y-4">
        <button
          onClick={testSupabaseConnection}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Test Supabase Connection
        </button>

        <button
          onClick={testSignIn}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 ml-4"
        >
          Test Sign In
        </button>
      </div>

      {testResult && (
        <div className="bg-yellow-100 p-4 rounded mt-6">
          <h3 className="font-semibold">Test Result:</h3>
          <p>{testResult}</p>
        </div>
      )}
    </div>
  )
} 