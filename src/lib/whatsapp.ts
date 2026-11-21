import { BUSINESS } from '../config/business'
import { formatBookingDate, displayOptional } from './format'
import type { BookingDraft } from '../types'

export function buildWhatsAppMessage(draft: BookingDraft): string {
  const price =
    draft.packagePrice > 0
      ? `₹${draft.packagePrice.toLocaleString('en-IN')}`
      : displayOptional(draft.packagePriceLabel)

  return `*NEW BOOKING ENQUIRY — i.visuallss*

━━━━━━━━━━━━━━━━━━
*CUSTOMER DETAILS*

Name: ${draft.fullName}
Phone: ${draft.mobile}
WhatsApp: ${draft.whatsapp}
Email: ${displayOptional(draft.email)}

━━━━━━━━━━━━━━━━━━
*SHOOT DETAILS*

Service: ${draft.serviceTitle}
Event Type: ${draft.eventType}
Package: ${draft.packageName}
Package Price: ${price}
Event Date: ${formatBookingDate(draft.eventDate)}
Preferred Time: ${draft.eventTime}
Event Location: ${draft.location}

━━━━━━━━━━━━━━━━━━
*ADDITIONAL REQUIREMENTS*

${displayOptional(draft.additionalRequirements)}

Instagram Username: ${displayOptional(draft.instagram)}
Reference Video: ${displayOptional(draft.referenceLink)}

━━━━━━━━━━━━━━━━━━
*BOOKING SUMMARY*

Estimated Package Price: ${price}
Booking Status: Booking Enquiry
Location: ${BUSINESS.location.display}

━━━━━━━━━━━━━━━━━━

I would like to book this service with i.visuallss.
Please confirm the availability and next steps.

Thank you!

i.visuallss
Every Frame Tells a Story.`
}

export function buildWhatsAppBookingUrl(draft: BookingDraft): string {
  const text = buildWhatsAppMessage(draft)
  return `${BUSINESS.contact.whatsappUrl}?text=${encodeURIComponent(text)}`
}