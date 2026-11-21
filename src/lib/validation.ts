import { z } from 'zod'

const phoneRegex = /^[\d\s+\-()]{8,16}$/

export const planShootSchema = z.object({
  serviceId: z.string().min(1, 'Select a service'),
  eventType: z.string().min(1, 'Select an event type'),
  packageId: z.string().min(1, 'Select a package'),
  eventDate: z.string().min(1, 'Select a date'),
  eventTime: z.string().min(1, 'Select a time'),
  location: z.string().min(3, 'Enter event location'),
})

export const detailsSchema = z.object({
  fullName: z.string().min(2, 'Enter your full name'),
  mobile: z.string().regex(phoneRegex, 'Enter a valid mobile number'),
  whatsapp: z.string().regex(phoneRegex, 'Enter a valid WhatsApp number'),
  email: z
    .string()
    .optional()
    .refine((v) => !v || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v), {
      message: 'Enter a valid email',
    }),
  additionalRequirements: z.string().optional(),
  instagram: z.string().optional(),
  referenceLink: z
    .string()
    .optional()
    .refine((v) => !v || /^https?:\/\/.+/i.test(v), {
      message: 'Enter a valid URL',
    }),
  extraInstructions: z.string().optional(),
  consent: z.boolean().refine((v) => v === true, {
    message: 'You must agree to continue',
  }),
})

export type PlanShootForm = z.infer<typeof planShootSchema>
export type DetailsForm = z.infer<typeof detailsSchema>