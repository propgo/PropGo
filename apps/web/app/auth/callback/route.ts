import { createServerClient } from '@supabase/ssr'
import { NextResponse, type NextRequest } from 'next/server'

export async function GET(request: NextRequest) {
  const requestUrl = new URL(request.url)
  const code = requestUrl.searchParams.get('code')
  const next = requestUrl.searchParams.get('next') ?? '/dashboard'

  if (code) {
    let response = NextResponse.redirect(requestUrl.origin + next)

    const supabase = createServerClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      {
        cookies: {
          getAll: () => request.cookies.getAll(),
          setAll: (cookiesToSet) => {
            cookiesToSet.forEach(({ name, value, options }) => response.cookies.set(name, value, options))
          },
        },
      }
    )

    try {
      const { data, error } = await supabase.auth.exchangeCodeForSession(code)
      
      if (error) {
        console.error('Auth callback error:', error)
        return NextResponse.redirect(requestUrl.origin + '/auth/sign-in?error=' + encodeURIComponent(error.message))
      }

      if (data?.session) {
        // Check if user has completed onboarding
        const { data: profile } = await supabase
          .from('profiles')
          .select('onboarding_completed')
          .eq('id', data.session.user.id)
          .single()

        // Update the redirect URL based on onboarding status
        const redirectUrl = profile && !profile.onboarding_completed ? '/onboarding' : '/dashboard'
        
        // Create a new response with the correct redirect URL
        response = NextResponse.redirect(requestUrl.origin + redirectUrl)
        
        return response
      }
    } catch (error) {
      console.error('Callback handling error:', error)
      return NextResponse.redirect(requestUrl.origin + '/auth/sign-in?error=' + encodeURIComponent('Authentication failed'))
    }
  }

  // If no code, redirect to sign-in
  return NextResponse.redirect(requestUrl.origin + '/auth/sign-in')
} 