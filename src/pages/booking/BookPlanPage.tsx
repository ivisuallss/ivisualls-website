import { Calendar, Clock, MapPin } from 'lucide-react'
import { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ProgressSteps } from '../../components/booking/ProgressSteps'
import { Button } from '../../components/ui/Button'
import { BUSINESS } from '../../config/business'
import { getPackages, getServices } from '../../lib/catalog'
import { useBooking } from '../../contexts/BookingContext'

export function BookPlanPage() {
  const { draft, updateDraft } = useBooking()
  const navigate = useNavigate()
  const services = useMemo(() => getServices(), [])
  const [error, setError] = useState('')

  const packages = useMemo(
    () => (draft.serviceId ? getPackages(draft.serviceId) : []),
    [draft.serviceId],
  )

  const selectedService = useMemo(
    () => services.find((s) => s.id === draft.serviceId),
    [services, draft.serviceId],
  )

  const eventTypes = selectedService?.eventTypes ?? []

  const validate = () => {
    if (!draft.serviceId) return 'Select a service'
    if (!draft.eventType) return 'Select an event type'
    if (!draft.packageId) return 'Select a package'
    if (!draft.location.trim()) return 'Enter event location'
    return ''
  }

  const goDate = () => {
    const msg = validate()
    if (msg) {
      setError(msg)
      return
    }
    setError('')
    navigate('/book/schedule')
  }

  return (
    <div className="px-4 py-8 max-w-lg mx-auto">
      <ProgressSteps currentIndex={0} />
      <p className="text-sm text-accent">Book via WhatsApp</p>
      <h1 className="font-serif-display text-3xl mt-1">Let&apos;s Plan Your Shoot</h1>
      <p className="text-text-secondary text-sm mt-2">
        Choose your service and preferred slot — we&apos;ll open WhatsApp with your
        booking enquiry.
      </p>
      <p className="text-xs text-text-muted mt-2 flex items-center gap-1">
        <MapPin className="w-3 h-3" />
        {BUSINESS.location.servingNote}
      </p>

      <div className="mt-8 space-y-5">
        <label className="block space-y-2">
          <span className="text-sm text-text-muted">Select Service</span>
          <select
            className="select-field"
            value={draft.serviceId}
            onChange={(e) => {
              const svc = services.find((s) => s.id === e.target.value)
              updateDraft({
                serviceId: e.target.value,
                serviceTitle: svc?.title ?? '',
                eventType: '',
                packageId: '',
                packageName: '',
                packagePrice: 0,
                packagePriceLabel: '',
              })
            }}
          >
            <option value="">Choose…</option>
            {services.map((s) => (
              <option key={s.id} value={s.id}>
                {s.title}
              </option>
            ))}
          </select>
        </label>

        <label className="block space-y-2">
          <span className="text-sm text-text-muted">Select Event Type</span>
          <select
            className="select-field"
            value={draft.eventType}
            disabled={!draft.serviceId}
            onChange={(e) => updateDraft({ eventType: e.target.value })}
          >
            <option value="">Choose…</option>
            {eventTypes.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </label>

        <label className="block space-y-2">
          <span className="text-sm text-text-muted">Select Package</span>
          <select
            className="select-field"
            value={draft.packageId}
            disabled={!draft.serviceId}
            onChange={(e) => {
              const pkg = packages.find((p) => p.id === e.target.value)
              updateDraft({
                packageId: e.target.value,
                packageName: pkg?.name ?? '',
                packagePrice: pkg?.priceInr ?? 0,
                packagePriceLabel: pkg?.priceLabel ?? '',
              })
            }}
          >
            <option value="">Choose…</option>
            {packages.map((p) => (
              <option key={p.id} value={p.id}>
                {p.name} — {p.priceLabel} (starting)
              </option>
            ))}
          </select>
          {draft.packageId && (
            <p className="text-xs text-text-muted">
              {packages.find((p) => p.id === draft.packageId)?.deliverables}
            </p>
          )}
        </label>

        <label className="block space-y-2">
          <span className="text-sm text-text-muted flex items-center gap-2">
            <MapPin className="w-4 h-4 text-accent" />
            Event Location
          </span>
          <input
            className="input-field"
            value={draft.location}
            onChange={(e) => updateDraft({ location: e.target.value })}
            placeholder="Venue or address in Hyderabad"
          />
        </label>

        <div className="grid grid-cols-2 gap-3">
          <button
            type="button"
            onClick={goDate}
            className="card-surface p-4 text-left text-sm hover:border-accent transition-colors"
          >
            <Calendar className="w-4 h-4 text-accent mb-2" />
            <span className="text-text-muted block">Select Date</span>
            <span className="text-text-main">
              {draft.eventDate || 'Tap to choose'}
            </span>
          </button>
          <button
            type="button"
            onClick={goDate}
            className="card-surface p-4 text-left text-sm hover:border-accent transition-colors"
          >
            <Clock className="w-4 h-4 text-accent mb-2" />
            <span className="text-text-muted block">Select Time</span>
            <span className="text-text-main">
              {draft.eventTime || 'Tap to choose'}
            </span>
          </button>
        </div>

        {error && <p className="text-error text-sm">{error}</p>}

        <Button fullWidth onClick={goDate}>
          Continue →
        </Button>
      </div>
    </div>
  )
}