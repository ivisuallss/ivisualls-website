import { Link, useNavigate } from 'react-router-dom'
import { ProgressSteps } from '../../components/booking/ProgressSteps'
import { Button } from '../../components/ui/Button'
import { useBooking } from '../../contexts/BookingContext'
import { formatBookingDate } from '../../lib/format'
import { buildWhatsAppMessage } from '../../lib/whatsapp'

export function BookReviewPage() {
  const { draft } = useBooking()
  const navigate = useNavigate()
  const preview = buildWhatsAppMessage(draft)

  const rows: [string, string][] = [
    ['Service', draft.serviceTitle],
    ['Event type', draft.eventType],
    ['Package', `${draft.packageName} (${draft.packagePriceLabel})`],
    ['Date', formatBookingDate(draft.eventDate)],
    ['Time', draft.eventTime],
    ['Location', draft.location],
    ['Name', draft.fullName],
    ['Mobile', draft.mobile],
    ['WhatsApp', draft.whatsapp],
  ]
  if (draft.email) rows.push(['Email', draft.email])

  return (
    <div className="px-4 py-8 max-w-lg mx-auto space-y-6">
      <ProgressSteps currentIndex={3} />
      <div className="flex items-center justify-between">
        <h1 className="font-serif-display text-2xl">Review Booking</h1>
        <Link to="/book/details" className="text-sm text-accent">
          Back
        </Link>
      </div>

      <div className="card-surface divide-y divide-border">
        {rows.map(([label, value]) => (
          <div
            key={label}
            className="flex justify-between gap-4 px-5 py-3 text-sm"
          >
            <span className="text-text-muted">{label}</span>
            <span className="text-text-main text-right">{value}</span>
          </div>
        ))}
      </div>

      <div className="card-surface p-5 space-y-2">
        <p className="text-sm text-text-muted">WhatsApp message preview</p>
        <pre className="text-xs text-text-secondary whitespace-pre-wrap font-sans leading-relaxed max-h-64 overflow-y-auto rounded-xl bg-bg-secondary p-3 border border-border">
          {preview}
        </pre>
      </div>

      <p className="text-xs text-text-muted">
        Your booking is received only after you send this message on WhatsApp and
        the business acknowledges it.
      </p>

      <Button fullWidth onClick={() => navigate('/book/whatsapp')}>
        Continue to WhatsApp →
      </Button>
    </div>
  )
}