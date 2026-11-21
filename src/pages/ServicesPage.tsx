import { ArrowUpRight, Check, Zap } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Button } from '../components/ui/Button'
import { ServiceImage } from '../components/ui/ServiceImage'
import { BUSINESS } from '../config/business'
import { getServices } from '../lib/catalog'
import { useBooking } from '../contexts/BookingContext'

export function ServicesPage() {
  const { preselectService } = useBooking()
  const services = getServices()

  return (
    <div className="px-4 py-8 max-w-6xl mx-auto space-y-8">
      <header>
        <p className="text-sm text-accent uppercase tracking-widest">Services</p>
        <h1 className="font-serif-display text-3xl md:text-4xl mt-2">
          Our Services
        </h1>
        <p className="text-text-secondary mt-2">
          Capture More. Worry Less.
        </p>
        <p className="text-sm text-text-muted mt-2">
          {BUSINESS.location.servingNote}
        </p>
      </header>

      <div className="space-y-4">
        {services.map((service) => (
          <article
            key={service.id}
            id={service.slug}
            className="card-surface overflow-hidden scroll-mt-24"
          >
            <div className="flex flex-col md:flex-row">
              <ServiceImage
                src={service.imageUrl}
                alt={service.title}
                className="h-44 md:h-auto md:w-48 object-cover shrink-0"
              />
              <div className="p-5 flex-1 relative">
                <span className="inline-flex items-center justify-center w-9 h-9 rounded-xl bg-bg-elevated border border-border mb-3">
                  <Zap className="w-4 h-4 text-accent" />
                </span>
                <Link
                  to={`/services/${service.slug}`}
                  className="absolute top-5 right-5 p-2 text-text-muted hover:text-accent"
                  aria-label={`View ${service.title} details`}
                >
                  <ArrowUpRight className="w-5 h-5" />
                </Link>
                <h2 className="text-xl font-medium pr-10">{service.title}</h2>
                <p className="text-sm text-text-secondary mt-2">
                  {service.description}
                </p>
                <ul className="mt-4 space-y-1.5 text-sm text-text-muted">
                  {service.features.slice(0, 4).map((f) => (
                    <li key={f}>• {f}</li>
                  ))}
                </ul>
                <div className="flex flex-col sm:flex-row gap-3 mt-5">
                  <Button to={`/services/${service.slug}`} variant="outline" fullWidth>
                    View Details
                  </Button>
                  <Button
                    fullWidth
                    onClick={() => preselectService(service.id, service.title)}
                    to="/book"
                  >
                    Book This Service
                  </Button>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="card-surface p-6">
        <h2 className="font-medium text-lg">Why Choose i.visuallss?</h2>
        <ul className="mt-4 space-y-3">
          {[
            'Premium Quality',
            'Creative Storytelling',
            'On-Time Delivery',
          ].map((item) => (
            <li key={item} className="flex items-center gap-3 text-text-secondary">
              <Check className="w-5 h-5 text-success shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}