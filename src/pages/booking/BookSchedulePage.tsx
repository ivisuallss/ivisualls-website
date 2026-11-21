import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { CalendarPicker } from '../../components/booking/CalendarPicker'
import { ProgressSteps } from '../../components/booking/ProgressSteps'
import { Button } from '../../components/ui/Button'
import { BUSINESS } from '../../config/business'
import { useBooking } from '../../contexts/BookingContext'

export function BookSchedulePage() {
  const { draft, updateDraft } = useBooking()
  const navigate = useNavigate()
  const slots = BUSINESS.booking.timeSlots
  const [error, setError] = useState('')

  useEffect(() => {
    if (!draft.serviceId) navigate('/book', { replace: true })
  }, [draft.serviceId, navigate])

  const onNext = () => {
    if (!draft.eventDate) {
      setError('Select a date')
      return
    }
    if (!draft.eventTime) {
      setError('Select a time slot')
      return
    }
    setError('')
    navigate('/book/details')
  }

  return (
    <div className="px-4 py-8 max-w-lg mx-auto space-y-6">
      <ProgressSteps currentIndex={1} />
      <div className="flex items-center justify-between">
        <h1 className="font-serif-display text-2xl">Select Date &amp; Time</h1>
        <Link to="/book" className="text-sm text-accent">
          Back
        </Link>
      </div>

      <CalendarPicker
        selectedDate={draft.eventDate}
        blockedDates={[]}
        onSelect={(d) => updateDraft({ eventDate: d, eventTime: '' })}
      />

      <div>
        <p className="text-sm text-text-muted mb-3">Preferred time slots</p>
        <div className="flex flex-wrap gap-2">
          {slots.map((slot) => {
            const selected = draft.eventTime === slot
            return (
              <button
                key={slot}
                type="button"
                onClick={() => updateDraft({ eventTime: slot })}
                className={`rounded-full px-4 py-2 text-sm border transition-all ${
                  selected
                    ? 'gradient-accent text-bg-primary border-transparent'
                    : 'border-border text-text-main hover:border-accent'
                }`}
              >
                {slot}
              </button>
            )
          })}
        </div>
        <p className="text-xs text-text-muted mt-3">
          Final availability will be confirmed by i.visuallss on WhatsApp.
        </p>
      </div>

      {error && <p className="text-error text-sm">{error}</p>}

      <Button fullWidth onClick={onNext}>
        Next →
      </Button>
    </div>
  )
}