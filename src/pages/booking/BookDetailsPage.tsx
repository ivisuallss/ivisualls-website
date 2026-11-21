import {
  AtSign,
  FileText,
  Link2,
  Mail,
  MapPin,
  Phone,
  User,
} from 'lucide-react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ProgressSteps } from '../../components/booking/ProgressSteps'
import { Button } from '../../components/ui/Button'
import { useBooking } from '../../contexts/BookingContext'
import { detailsSchema } from '../../lib/validation'
import { formatBookingDate } from '../../lib/format'

export function BookDetailsPage() {
  const { draft, updateDraft } = useBooking()
  const navigate = useNavigate()
  const [errors, setErrors] = useState<Record<string, string>>({})

  const onSubmit = () => {
    const parsed = detailsSchema.safeParse({
      fullName: draft.fullName,
      mobile: draft.mobile,
      whatsapp: draft.whatsapp,
      email: draft.email || undefined,
      additionalRequirements: draft.additionalRequirements,
      instagram: draft.instagram,
      referenceLink: draft.referenceLink || '',
      extraInstructions: draft.extraInstructions,
      consent: draft.consent,
    })
    if (!parsed.success) {
      const map: Record<string, string> = {}
      parsed.error.issues.forEach((i) => {
        const key = i.path[0]?.toString() ?? 'form'
        map[key] = i.message
      })
      setErrors(map)
      return
    }
    setErrors({})
    navigate('/book/review')
  }

  return (
    <div className="px-4 py-8 max-w-lg mx-auto space-y-6">
      <ProgressSteps currentIndex={2} />
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-serif-display text-2xl">Your Details</h1>
          <p className="text-sm text-text-secondary mt-1">
            Tell us a bit about your event.
          </p>
        </div>
        <Link to="/book/schedule" className="text-sm text-accent">
          Back
        </Link>
      </div>

      <div className="card-surface p-4 text-sm text-text-secondary space-y-1">
        <p>
          {draft.serviceTitle} · {draft.eventType}
        </p>
        <p>
          {formatBookingDate(draft.eventDate)} · {draft.eventTime}
        </p>
      </div>

      <div className="space-y-4">
        <Field
          icon={User}
          label="Full Name *"
          value={draft.fullName}
          onChange={(v) => updateDraft({ fullName: v })}
          error={errors.fullName}
        />
        <Field
          icon={Phone}
          label="Mobile Number *"
          value={draft.mobile}
          onChange={(v) => updateDraft({ mobile: v })}
          error={errors.mobile}
          type="tel"
        />
        <Field
          icon={Phone}
          label="WhatsApp Number *"
          value={draft.whatsapp}
          onChange={(v) => updateDraft({ whatsapp: v })}
          error={errors.whatsapp}
          type="tel"
        />
        <Field
          icon={Mail}
          label="Email Address"
          value={draft.email}
          onChange={(v) => updateDraft({ email: v })}
          error={errors.email}
          type="email"
        />
        <Field
          icon={MapPin}
          label="Event Location"
          value={draft.location}
          onChange={(v) => updateDraft({ location: v })}
        />
        <label className="block space-y-2">
          <span className="text-sm text-text-muted flex items-center gap-2">
            <FileText className="w-4 h-4 text-accent" />
            Additional Requirements
          </span>
          <textarea
            className="input-field min-h-28 resize-y"
            value={draft.additionalRequirements}
            onChange={(e) =>
              updateDraft({ additionalRequirements: e.target.value })
            }
            placeholder="Tell us about your event, preferred shooting style, special moments, or anything else we should know."
          />
        </label>
        <Field
          icon={AtSign}
          label="Instagram username (optional)"
          value={draft.instagram ?? ''}
          onChange={(v) => updateDraft({ instagram: v })}
        />
        <Field
          icon={Link2}
          label="Reference video link (optional)"
          value={draft.referenceLink ?? ''}
          onChange={(v) => updateDraft({ referenceLink: v })}
          error={errors.referenceLink}
        />
        <Field
          icon={FileText}
          label="Additional instructions (optional)"
          value={draft.extraInstructions ?? ''}
          onChange={(v) => updateDraft({ extraInstructions: v })}
        />

        <label className="flex items-start gap-3 text-sm">
          <input
            type="checkbox"
            className="mt-1 accent-[#FF896F]"
            checked={draft.consent}
            onChange={(e) => updateDraft({ consent: e.target.checked })}
          />
          <span className="text-text-secondary">
            I agree to share my booking details with i.visuallss via WhatsApp for
            enquiry purposes and understand the{' '}
            <Link to="/privacy" className="text-accent underline">
              privacy policy
            </Link>
            .
          </span>
        </label>
        {errors.consent && (
          <p className="text-error text-sm">{errors.consent}</p>
        )}
      </div>

      <Button fullWidth onClick={onSubmit}>
        Continue to Review →
      </Button>
    </div>
  )
}

function Field({
  icon: Icon,
  label,
  value,
  onChange,
  error,
  type = 'text',
}: {
  icon: typeof User
  label: string
  value: string
  onChange: (v: string) => void
  error?: string
  type?: string
}) {
  return (
    <label className="block space-y-2">
      <span className="text-sm text-text-muted flex items-center gap-2">
        <Icon className="w-4 h-4 text-accent" />
        {label}
      </span>
      <input
        type={type}
        className="input-field"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      {error && <p className="text-error text-xs">{error}</p>}
    </label>
  )
}