import { Button } from '../../components/ui/Button'
import { useBooking } from '../../contexts/BookingContext'

export function BookSentPage() {
  const { clearSessionDraft, resetDraft } = useBooking()

  const handleSent = () => {
    clearSessionDraft()
    resetDraft()
  }

  return (
    <div className="px-4 py-12 max-w-lg mx-auto text-center space-y-6">
      <h1 className="font-serif-display text-2xl md:text-3xl">
        Have you sent your booking request?
      </h1>
      <p className="text-sm text-text-secondary leading-relaxed">
        Your enquiry is received only after you send the WhatsApp message and
        i.visuallss acknowledges it. We cannot detect message delivery
        automatically.
      </p>
      <div className="card-surface p-5 text-sm text-text-secondary text-left space-y-2">
        <p>What happens next:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>We review your preferred date and package.</li>
          <li>We reply on WhatsApp to confirm availability.</li>
          <li>Travel outside Hyderabad may be discussed separately.</li>
        </ul>
      </div>
      <div className="space-y-3">
        <Button fullWidth onClick={handleSent} to="/">
          Yes, I&apos;ve sent it
        </Button>
        <Button variant="outline" fullWidth to="/">
          Return to website
        </Button>
        <Button variant="secondary" fullWidth to="/book">
          Start a new booking
        </Button>
      </div>
    </div>
  )
}