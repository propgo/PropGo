import { z } from 'zod'
import { FileUploadSchema } from './common'

// Malaysian Property Types
export const PropertyTypeSchema = z.enum([
  // Residential
  'terrace',
  'semi_detached', 
  'detached',
  'bungalow',
  'townhouse',
  'condominium',
  'apartment',
  'flat',
  'studio',
  'penthouse',
  'duplex',
  'serviced_residence',
  
  // Commercial
  'shop_house',
  'shop_lot',
  'office',
  'retail_space',
  'warehouse',
  'factory',
  'hotel',
  'restaurant',
  
  // Land
  'residential_land',
  'commercial_land',
  'industrial_land',
  'agricultural_land',
  
  // Others
  'parking',
  'storage',
  'mixed_development'
])

export type PropertyType = z.infer<typeof PropertyTypeSchema>

// Property Status
export const PropertyStatusSchema = z.enum([
  'draft',
  'active',
  'pending',
  'sold',
  'rented',
  'withdrawn',
  'expired',
  'under_offer'
])

export type PropertyStatus = z.infer<typeof PropertyStatusSchema>

// Listing Type
export const ListingTypeSchema = z.enum(['sale', 'rent'])
export type ListingType = z.infer<typeof ListingTypeSchema>

// Tenure Types (Malaysian specific)
export const TenureTypeSchema = z.enum([
  'freehold',
  'leasehold_99',
  'leasehold_999',
  'malay_reserve',
  'bumiputera_lot'
])

export type TenureType = z.infer<typeof TenureTypeSchema>

// Furnishing Status
export const FurnishingSchema = z.enum([
  'unfurnished',
  'partially_furnished', 
  'fully_furnished'
])

export type Furnishing = z.infer<typeof FurnishingSchema>

// Facing Direction
export const FacingDirectionSchema = z.enum([
  'north',
  'south',
  'east',
  'west',
  'northeast',
  'northwest',
  'southeast',
  'southwest'
])

export type FacingDirection = z.infer<typeof FacingDirectionSchema>

// Property Features
export const PropertyFeaturesSchema = z.object({
  // Basic Details
  bedrooms: z.number().min(0).optional(),
  bathrooms: z.number().min(0).optional(),
  parkingSpaces: z.number().min(0).optional(),
  
  // Area Details (in square feet)
  builtUpArea: z.number().positive().optional(),
  landArea: z.number().positive().optional(),
  
  // Building Details
  floor: z.number().min(0).optional(),
  totalFloors: z.number().min(1).optional(),
  unitNumber: z.string().optional(),
  
  // Property Condition
  age: z.number().min(0).optional(), // in years
  condition: z.enum(['excellent', 'good', 'fair', 'needs_renovation']).optional(),
  
  // Utilities
  electricity: z.boolean().default(true),
  water: z.boolean().default(true),
  gas: z.boolean().default(false),
  internet: z.boolean().default(false),
  
  // Accessibility
  wheelchairAccessible: z.boolean().default(false),
  lift: z.boolean().default(false),
  
  // Views
  view: z.array(z.enum([
    'city_view',
    'sea_view', 
    'mountain_view',
    'garden_view',
    'pool_view',
    'golf_view',
    'no_view'
  ])).default([]),
})

export type PropertyFeatures = z.infer<typeof PropertyFeaturesSchema>

// Amenities (Malaysian focused)
export const AmenitiesSchema = z.object({
  // Security
  security: z.object({
    gatedGuarded: z.boolean().default(false),
    cctv: z.boolean().default(false),
    securityGuard: z.boolean().default(false),
    intercom: z.boolean().default(false),
    keyCard: z.boolean().default(false),
  }).optional(),
  
  // Facilities
  facilities: z.object({
    swimmingPool: z.boolean().default(false),
    gymnasium: z.boolean().default(false),
    playground: z.boolean().default(false),
    barbecueArea: z.boolean().default(false),
    multipurposeHall: z.boolean().default(false),
    clubhouse: z.boolean().default(false),
    tennis: z.boolean().default(false),
    basketball: z.boolean().default(false),
    badminton: z.boolean().default(false),
    joggingTrack: z.boolean().default(false),
    garden: z.boolean().default(false),
    sauna: z.boolean().default(false),
  }).optional(),
  
  // Nearby Amenities
  nearby: z.object({
    school: z.boolean().default(false),
    hospital: z.boolean().default(false),
    shoppingMall: z.boolean().default(false),
    publicTransport: z.boolean().default(false),
    highway: z.boolean().default(false),
    airport: z.boolean().default(false),
    university: z.boolean().default(false),
    mosque: z.boolean().default(false),
    temple: z.boolean().default(false),
    church: z.boolean().default(false),
  }).optional(),
})

export type Amenities = z.infer<typeof AmenitiesSchema>

// Pricing Information
export const PricingSchema = z.object({
  price: z.number().positive('Price must be positive'),
  pricePerSqft: z.number().positive().optional(),
  
  // Rental specific
  monthlyRent: z.number().positive().optional(),
  deposit: z.number().min(0).optional(),
  utilities: z.number().min(0).optional(),
  
  // Additional costs
  maintenanceFee: z.number().min(0).optional(),
  sinkingFund: z.number().min(0).optional(),
  assessmentTax: z.number().min(0).optional(),
  quitRent: z.number().min(0).optional(),
  
  // Negotiation
  negotiable: z.boolean().default(true),
  
  // Price history
  priceHistory: z.array(z.object({
    price: z.number().positive(),
    date: z.string().datetime(),
    reason: z.string().optional(),
  })).default([]),
})

export type Pricing = z.infer<typeof PricingSchema>

// Main Property Schema
export const PropertySchema = z.object({
  id: z.string().uuid(),
  
  // Basic Information
  title: z.string().min(5, 'Title must be at least 5 characters').max(200, 'Title too long'),
  description: z.string().min(20, 'Description must be at least 20 characters').max(5000, 'Description too long'),
  
  // Property Details
  type: PropertyTypeSchema,
  listingType: ListingTypeSchema,
  status: PropertyStatusSchema.default('draft'),
  tenure: TenureTypeSchema,
  furnishing: FurnishingSchema,
  facingDirection: FacingDirectionSchema.optional(),
  
  // Basic Features
  bedrooms: z.number().min(0).optional(),
  bathrooms: z.number().min(0).optional(),
  parkingSpaces: z.number().min(0).optional(),
  builtUpArea: z.number().positive().optional(),
  landArea: z.number().positive().optional(),
  
  // Location
  address: z.object({
    street: z.string().min(1, 'Street address is required'),
    unit: z.string().optional(),
    city: z.string().min(1, 'City is required'),
    state: z.enum([
      'Johor', 'Kedah', 'Kelantan', 'Kuala Lumpur', 'Labuan', 'Malacca',
      'Negeri Sembilan', 'Pahang', 'Penang', 'Perak', 'Perlis', 'Putrajaya',
      'Sabah', 'Sarawak', 'Selangor', 'Terengganu'
    ]),
    postcode: z.string().regex(/^\d{5}$/, 'Invalid Malaysian postcode'),
    country: z.literal('Malaysia').default('Malaysia'),
  }),
  coordinates: z.object({
    latitude: z.number().min(-90).max(90),
    longitude: z.number().min(-180).max(180),
  }).optional(),
  
  // Features and Amenities
  features: PropertyFeaturesSchema,
  amenities: AmenitiesSchema.optional(),
  
  // Pricing
  pricing: PricingSchema,
  
  // Media
  images: z.array(z.object({
    id: z.string().uuid(),
    url: z.string().url(),
    thumbnailUrl: z.string().url().optional(),
    caption: z.string().optional(),
    isPrimary: z.boolean().default(false),
    order: z.number().min(0).default(0),
  })).min(1, 'At least one image is required'),
  
  virtualTour: z.string().url().optional(),
  floorPlan: z.array(FileUploadSchema).optional(),
  videos: z.array(z.object({
    id: z.string().uuid(),
    url: z.string().url(),
    title: z.string().optional(),
    duration: z.number().positive().optional(),
  })).optional(),
  
  // Agent Information
  agentId: z.string().uuid(),
  agencyId: z.string().uuid(),
  
  // Listing Management
  isActive: z.boolean().default(false),
  isFeatured: z.boolean().default(false),
  publishedAt: z.string().datetime().optional(),
  expiresAt: z.string().datetime().optional(),
  
  // SEO and Marketing
  slug: z.string().regex(/^[a-z0-9-]+$/, 'Invalid slug format').optional(),
  seoTitle: z.string().max(60).optional(),
  seoDescription: z.string().max(160).optional(),
  tags: z.array(z.string()).default([]),
  
  // Analytics
  viewCount: z.number().min(0).default(0),
  inquiryCount: z.number().min(0).default(0),
  favoriteCount: z.number().min(0).default(0),
  
  // Timestamps
  createdAt: z.string().datetime(),
  updatedAt: z.string().datetime(),
})

export type Property = z.infer<typeof PropertySchema>

// Property Search/Filter Schema
export const PropertySearchSchema = z.object({
  // Basic filters
  q: z.string().optional(), // search query
  type: z.array(PropertyTypeSchema).optional(),
  listingType: ListingTypeSchema.optional(),
  status: z.array(PropertyStatusSchema).optional(),
  
  // Location filters
  state: z.array(z.enum([
    'Johor', 'Kedah', 'Kelantan', 'Kuala Lumpur', 'Labuan', 'Malacca',
    'Negeri Sembilan', 'Pahang', 'Penang', 'Perak', 'Perlis', 'Putrajaya',
    'Sabah', 'Sarawak', 'Selangor', 'Terengganu'
  ])).optional(),
  city: z.array(z.string()).optional(),
  postcode: z.array(z.string()).optional(),
  
  // Price filters
  minPrice: z.number().min(0).optional(),
  maxPrice: z.number().min(0).optional(),
  priceRange: z.enum(['0-300k', '300k-500k', '500k-1m', '1m-2m', '2m+']).optional(),
  
  // Feature filters
  minBedrooms: z.number().min(0).optional(),
  maxBedrooms: z.number().min(0).optional(),
  minBathrooms: z.number().min(0).optional(),
  minParking: z.number().min(0).optional(),
  minBuiltUp: z.number().min(0).optional(),
  maxBuiltUp: z.number().min(0).optional(),
  
  // Property characteristics
  tenure: z.array(TenureTypeSchema).optional(),
  furnishing: z.array(FurnishingSchema).optional(),
  
  // Amenities filters
  gatedGuarded: z.boolean().optional(),
  swimmingPool: z.boolean().optional(),
  gymnasium: z.boolean().optional(),
  nearSchool: z.boolean().optional(),
  nearMRT: z.boolean().optional(),
  
  // Agent/Agency filters
  agentId: z.string().uuid().optional(),
  agencyId: z.string().uuid().optional(),
  
  // Sorting
  sortBy: z.enum(['price_asc', 'price_desc', 'date_desc', 'date_asc', 'relevance']).default('relevance'),
  
  // Pagination
  page: z.number().min(1).default(1),
  limit: z.number().min(1).max(50).default(20),
})

export type PropertySearch = z.infer<typeof PropertySearchSchema>

// Property Inquiry
export const PropertyInquirySchema = z.object({
  id: z.string().uuid(),
  propertyId: z.string().uuid(),
  
  // Inquirer details
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email address'),
  phone: z.string().regex(/^(\+?6?01[0-46-9])\d{7,8}$/, 'Invalid Malaysian phone number'),
  
  // Inquiry details
  message: z.string().min(10, 'Message must be at least 10 characters').max(1000),
  inquiryType: z.enum(['general', 'viewing', 'offer', 'financing']).default('general'),
  budget: z.number().positive().optional(),
  preApproved: z.boolean().optional(),
  
  // Viewing request
  preferredViewingDate: z.string().datetime().optional(),
  alternativeViewingDate: z.string().datetime().optional(),
  
  // Privacy
  allowMarketing: z.boolean().default(false),
  
  // Status
  status: z.enum(['new', 'responded', 'scheduled', 'completed', 'closed']).default('new'),
  agentResponse: z.string().optional(),
  respondedAt: z.string().datetime().optional(),
  
  // Timestamps
  createdAt: z.string().datetime(),
  updatedAt: z.string().datetime(),
})

export type PropertyInquiry = z.infer<typeof PropertyInquirySchema> 