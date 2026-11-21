import { BUSINESS } from '../config/business'

export function PrivacyPage() {
  return (
    <div className="px-4 py-8 max-w-2xl mx-auto space-y-4 text-text-secondary text-sm leading-relaxed">
      <h1 className="font-serif-display text-3xl text-text-main">
        Privacy Policy
      </h1>
      <p>
        {BUSINESS.brand} uses the information you enter in the booking form to
        prepare your WhatsApp booking enquiry. When you tap &quot;Send Booking on
        WhatsApp&quot;, your details are included in a message that you send
        directly to our business WhatsApp number ({BUSINESS.contact.whatsappNational}).
      </p>
      <p>
        We do not store your booking details in a customer database on this
        website. Temporary form progress may be kept in your browser session
        until you finish or clear it. We do not sell your personal data.
      </p>
      <p>
        Please review your message carefully before sending it on WhatsApp. Do
        not share sensitive information you are not comfortable transmitting via
        chat.
      </p>
      <p>
        For questions about how your data is handled after you message us, contact
        i.visuallss on WhatsApp or Instagram.
      </p>
    </div>
  )
}