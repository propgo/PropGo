import type { UUID, Timestamp } from './common'

// Database Tables Interface
export interface Database {
  public: {
    Tables: {
      // User and Auth Tables
      users: {
        Row: {
          id: UUID
          email: string
          role: 'agent' | 'agency_owner' | 'lawyer' | 'banker' | 'buyer' | 'seller' | 'admin' | 'support'
          first_name: string
          last_name: string
          phone: string
          avatar_url?: string
          is_email_verified: boolean
          is_phone_verified: boolean
          is_active: boolean
          last_login_at?: Timestamp
          created_at: Timestamp
          updated_at: Timestamp
        }
        Insert: Omit<Database['public']['Tables']['users']['Row'], 'id' | 'created_at' | 'updated_at'>
        Update: Partial<Database['public']['Tables']['users']['Insert']>
      }
      
      // Property Tables
      properties: {
        Row: {
          id: UUID
          title: string
          description: string
          type: string
          listing_type: 'sale' | 'rent'
          status: 'draft' | 'active' | 'pending' | 'sold' | 'rented' | 'withdrawn' | 'expired'
          price: number
          bedrooms?: number
          bathrooms?: number
          built_up_area?: number
          address_street: string
          address_city: string
          address_state: string
          address_postcode: string
          agent_id: UUID
          agency_id: UUID
          is_active: boolean
          created_at: Timestamp
          updated_at: Timestamp
        }
        Insert: Omit<Database['public']['Tables']['properties']['Row'], 'id' | 'created_at' | 'updated_at'>
        Update: Partial<Database['public']['Tables']['properties']['Insert']>
      }
      
      // Deal Tables
      deals: {
        Row: {
          id: UUID
          title: string
          type: 'sale' | 'rent' | 'buy' | 'lease'
          status: string
          property_id: UUID
          client_id: UUID
          primary_agent_id: UUID
          agency_id: UUID
          offer_price?: number
          agreed_price?: number
          commission_percentage?: number
          commission_amount?: number
          expected_close_date?: Timestamp
          actual_close_date?: Timestamp
          is_active: boolean
          created_at: Timestamp
          updated_at: Timestamp
        }
        Insert: Omit<Database['public']['Tables']['deals']['Row'], 'id' | 'created_at' | 'updated_at'>
        Update: Partial<Database['public']['Tables']['deals']['Insert']>
      }
      
      // Client Tables
      clients: {
        Row: {
          id: UUID
          first_name: string
          last_name: string
          email: string
          phone: string
          type: 'buyer' | 'seller' | 'tenant' | 'landlord' | 'investor'
          status: 'lead' | 'active' | 'inactive' | 'converted' | 'archived'
          primary_agent_id: UUID
          agency_id: UUID
          budget_min?: number
          budget_max?: number
          source: string
          notes?: string
          created_at: Timestamp
          updated_at: Timestamp
        }
        Insert: Omit<Database['public']['Tables']['clients']['Row'], 'id' | 'created_at' | 'updated_at'>
        Update: Partial<Database['public']['Tables']['clients']['Insert']>
      }
      
      // Organization Tables
      organizations: {
        Row: {
          id: UUID
          name: string
          type: 'agency' | 'law_firm' | 'bank' | 'developer'
          registration_number: string
          license_number?: string
          email: string
          phone: string
          address_street: string
          address_city: string
          address_state: string
          address_postcode: string
          is_verified: boolean
          is_active: boolean
          created_at: Timestamp
          updated_at: Timestamp
        }
        Insert: Omit<Database['public']['Tables']['organizations']['Row'], 'id' | 'created_at' | 'updated_at'>
        Update: Partial<Database['public']['Tables']['organizations']['Insert']>
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      user_role: 'agent' | 'agency_owner' | 'lawyer' | 'banker' | 'buyer' | 'seller' | 'admin' | 'support'
      property_type: 'terrace' | 'semi_detached' | 'detached' | 'bungalow' | 'condominium' | 'apartment'
      listing_type: 'sale' | 'rent'
      deal_status: 'lead' | 'viewing_scheduled' | 'offer_made' | 'spa_signed' | 'completion' | 'closed_won' | 'closed_lost'
    }
  }
} 