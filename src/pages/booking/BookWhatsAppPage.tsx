import { MessageCircle } from 'lucide-react'
import { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ProgressSteps } from '../../components/booking/ProgressSteps'
import { Button } from '../../components/ui/Button'
import { useBooking } from '../../contexts/BookingContext'
import { buildWhatsAppBookingUrl, buildWhatsAppMessage } from '../../lib/whatsapp'

export function BookWhatsAppPage() {
  const { draft } = useBooking()
  const navigate = useNavigate()
  const message = buildWhatsAppMessage(draft)
  const url = buildWhatsAppBookingUrl(draft)

  useEffect(() => {
    if (!draft.serviceId || !draft.fullName || !draft.consent) {
      navigate('/book', { replace: true })
    }
  }, [draft, navigate])

  const openWhatsApp = () => {
    window.open(url, '_blank', 'noopener,noreferrer')
    navigate('/book/sent')
  }

  return (
    <div className="px-4 py-8 max-w-lg mx-auto space-y-6">
      <ProgressSteps currentIndex={4} />

      <div className="text-center space-y-3">
        <div className="mx-auto w-16 h-16 rounded-full bg-[#25D366]/20 flex items-center justify-center border border-[#25D366]/40">
          <MessageCircle className="w-8 h-8 text-[#25D366]" />
        </div>
        <h1 className="font-serif-display text-2xl md:text-3xl">
          Your booking details are ready!
        </h1>
        <p className="text-sm text-text-secondary max-w-sm mx-auto">
          Continue to WhatsApp to send your booking request. We&apos;ll confirm
          availability after you send the message.
        </p>
      </div>

      <div className="card-surface p-5 space-y-2">
        <p className="text-sm text-text-muted">Message preview</p>
        <pre className="text-xs text-text-secondary whitespace-pre-wrap font-sans leading-relaxed max-h-72 overflow-y-auto rounded-xl bg-bg-secondary p-3 border border-border">
          {message}
        </pre>
      </div>

      <Button variant="whatsapp" fullWidth onClick={openWhatsApp}>
        SEND BOOKING ON WHATSAPP
      </Button>

      <p className="text-xs text-center text-text-muted">
        <Link to="/book/review" className="text-accent">
          Edit details
        </Link>
      </p>
    </div>
  )
}