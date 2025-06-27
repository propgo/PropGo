import { createServerClient } from '@supabase/ssr'
import { NextResponse, type NextRequest } from 'next/server'

export async function middleware(request: NextRequest) {
  try {
    // Create a response object
    const response = NextResponse.next({
      request: {
        headers: request.headers,
      },
    })

    // Create supabase client
    const supabase = createServerClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      {
        cookies: {
          get: (name: string) => request.cookies.get(name)?.value,
          set: (name: string, value: string, options: any) => {
            response.cookies.set(name, value, options)
          },
          remove: (name: string, options: any) => {
            response.cookies.set(name, '', { ...options, maxAge: 0 })
          },
        }
      }
    )

    const { pathname } = request.nextUrl
    
    // Get the current session
    const { data: { session }, error } = await supabase.auth.getSession()
    
    console.log('Middleware - pathname:', pathname, 'session exists:', !!session)

    // Define public routes that don't require authentication
    const publicRoutes = [
      '/auth/sign-in',
      '/auth/sign-up',
      '/auth/forgot-password',
      '/auth/reset-password',
      '/auth/callback',
      '/',
    ]

    // Define protected routes that require authentication
    const protectedRoutes = [
      '/dashboard',
      '/onboarding',
      '/profile',
      '/properties',
      '/deals',
      '/messages',
      '/settings',
    ]

    const isPublicRoute = publicRoutes.some(route => pathname.startsWith(route))
    const isProtectedRoute = protectedRoutes.some(route => pathname.startsWith(route))

    // If no session and trying to access protected route, redirect to sign in
    if (!session && isProtectedRoute) {
      const signInUrl = new URL('/auth/sign-in', request.url)
      signInUrl.searchParams.set('redirectTo', pathname)
      return NextResponse.redirect(signInUrl)
    }

    // Check if user needs onboarding first (before redirecting from auth pages)
    if (session && pathname !== '/onboarding' && !pathname.startsWith('/auth/')) {
      const { data: profile } = await supabase
        .from('profiles')
        .select('onboarding_completed')
        .eq('id', session.user.id)
        .single()

      // If profile exists but onboarding not completed, redirect to onboarding
      if (profile && !profile.onboarding_completed) {
        return NextResponse.redirect(new URL('/onboarding', request.url))
      }
    }

    // If logged in and trying to access auth pages, redirect appropriately
    if (session && isPublicRoute && pathname !== '/') {
      console.log('User is logged in and on auth page, redirecting...', { pathname, userId: session.user.id })
      
      try {
        // Check onboarding status before deciding where to redirect
        const { data: profile, error: profileError } = await supabase
          .from('profiles')
          .select('onboarding_completed')
          .eq('id', session.user.id)
          .single()

        console.log('Profile query result:', { profile, profileError })

        // Redirect to onboarding if not completed, otherwise to dashboard
        const redirectUrl = profile && !profile.onboarding_completed ? '/onboarding' : '/dashboard'
        console.log('Redirecting to:', redirectUrl)
        return NextResponse.redirect(new URL(redirectUrl, request.url))
      } catch (error) {
        console.error('Error checking profile:', error)
        // Default to dashboard if there's an error
        return NextResponse.redirect(new URL('/dashboard', request.url))
      }
    }

    // Refresh session if needed
    if (session) {
      const { data: { session: refreshedSession } } = await supabase.auth.getSession()
      if (!refreshedSession) {
        // Session is invalid, redirect to sign in
        return NextResponse.redirect(new URL('/auth/sign-in', request.url))
      }
    }

    return response
  } catch (error) {
    console.error('Middleware error:', error)
    // On error, allow the request to continue
    return NextResponse.next()
  }
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder
     */
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
} 