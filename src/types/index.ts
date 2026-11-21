export interface Service {
  id: string
  slug: string
  title: string
  shortDescription: string
  description: string
  features: string[]
  eventTypes: string[]
  imageUrl: string
  enabled: boolean
  sortOrder: number
}

export interface Package {
  id: string
  serviceId: string
  name: string
  priceInr: number
  priceLabel: string
  duration: string
  videoCount: string
  deliverables: string
  features: string[]
  enabled: boolean
}

export interface BookingDraft {
  serviceId: string
  serviceTitle: string
  eventType: string
  packageId: string
  packageName: string
  packagePrice: number
  packagePriceLabel: string
  eventDate: string
  eventTime: string
  location: string
  fullName: string
  mobile: string
  whatsapp: string
  email: string
  additionalRequirements: string
  instagram?: string
  referenceLink?: string
  extraInstructions?: string
  consent: boolean
}

export const BOOKING_STEPS = [
  'Service',
  'Schedule',
  'Details',
  'Review',
  'WhatsApp',
] as const

export type BookingStep = (typeof BOOKING_STEPS)[number]