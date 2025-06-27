// Client exports
export { createClient, createServerSupabaseClient, createServiceRoleClient } from './client'

// Auth exports
export {
  AuthService,
  authService,
  getServerSession,
  getServerUser,
  getUserProfile,
  signUpSchema,
  signInSchema,
  resetPasswordSchema,
  updatePasswordSchema,
  type SignUpData,
  type SignInData,
  type ResetPasswordData,
  type UpdatePasswordData,
} from './auth' 