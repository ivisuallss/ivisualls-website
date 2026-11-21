import { useMemo } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Button } from '../components/ui/Button'
import { ServiceImage } from '../components/ui/ServiceImage'
import { getPackages, getServiceBySlug } from '../lib/catalog'
import { useBooking } from '../contexts/BookingContext'

export function ServiceDetailPage() {
  const { slug } = useParams()
  const { preselectService } = useBooking()
  const service = useMemo(
    () => (slug ? getServiceBySlug(slug) : undefined),
    [slug],
  )
  const packages = useMemo(
    () => (service ? getPackages(service.id) : []),
    [service],
  )

  if (!service) {
    return (
      <div className="px-4 py-12 text-center">
        <p className="text-text-secondary">Service not found.</p>
        <Button to="/services" className="mt-4">
          Back to Services
        </Button>
      </div>
    )
  }

  return (
    <div className="px-4 py-8 max-w-3xl mx-auto space-y-6">
      <Link to="/services" className="text-sm text-accent">
        ← All services
      </Link>
      <ServiceImage
        src={service.imageUrl}
        alt={service.title}
        className="h-52 w-full rounded-3xl object-cover"
      />
      <h1 className="font-serif-display text-3xl">{service.title}</h1>
      <p className="text-text-secondary">{service.description}</p>
      <ul className="space-y-2 text-sm text-text-muted">
        {service.features.map((f) => (
          <li key={f}>• {f}</li>
        ))}
      </ul>

      <section className="space-y-3">
        <h2 className="font-medium text-lg">Packages</h2>
        {packages.map((pkg) => (
          <article key={pkg.id} className="card-surface p-5 space-y-2">
            <div className="flex justify-between gap-4 items-start">
              <h3 className="font-medium">{pkg.name}</h3>
              <span className="text-accent font-semibold">
                {pkg.priceLabel}
                <span className="text-xs text-text-muted font-normal"> starting</span>
              </span>
            </div>
            <p className="text-sm text-text-secondary">{pkg.deliverables}</p>
            <ul className="text-xs text-text-muted space-y-1">
              {pkg.features.map((f) => (
                <li key={f}>• {f}</li>
              ))}
            </ul>
          </article>
        ))}
      </section>

      <Button
        fullWidth
        onClick={() => preselectService(service.id, service.title)}
        to="/book"
      >
        Book This Service
      </Button>
    </div>
  )
}