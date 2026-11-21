import { Calendar, MapPin, Smartphone, Zap, type LucideIcon } from 'lucide-react'
import { Button } from '../components/ui/Button'
import { ServiceImage } from '../components/ui/ServiceImage'
import { InstagramHighlight } from '../components/home/InstagramHighlight'
import { BUSINESS } from '../config/business'
import { getServices } from '../lib/catalog'
import { getPackages } from '../lib/catalog'

const highlights: { icon: LucideIcon; title: string; desc: string }[] = [
  {
    icon: Zap,
    title: 'Instant Reels',
    desc: 'Share-ready vertical reels in cinematic style.',
  },
  {
    icon: Smartphone,
    title: 'iPhone Clips',
    desc: 'Modern iPhone videography for everyday moments.',
  },
  {
    icon: Calendar,
    title: 'Event Coverage',
    desc: 'Weddings, celebrations, and special occasions.',
  },
]

export function HomePage() {
  const services = getServices().slice(0, 3)
  const starterPrices = getPackages()
    .filter((p) => p.id.endsWith('-a'))
    .slice(0, 3)

  return (
    <div>
      <section className="relative min-h-[78vh] flex flex-col justify-end overflow-hidden">
        <img
          src={BUSINESS.hero.imageUrl}
          alt="Videographer capturing a sunset moment on iPhone"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="relative z-10 px-4 pb-10 pt-28 max-w-6xl mx-auto w-full">
          <h1 className="font-serif-display text-4xl md:text-5xl leading-tight max-w-md">
            Every Frame
            <br />
            Tells a <span className="text-accent italic">Story</span>
          </h1>
          <p className="mt-3 text-text-secondary text-sm md:text-base">
            {BUSINESS.hero.subtitle}
          </p>
          <p className="mt-2 text-text-muted text-sm max-w-sm">
            {BUSINESS.hero.support}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 mt-6 max-w-md">
            <Button to="/book" className="flex-1">
              BOOK YOUR SHOOT
            </Button>
            <Button
              href={BUSINESS.contact.instagramProfile}
              variant="outline"
              className="flex-1"
            >
              EXPLORE OUR INSTAGRAM
            </Button>
          </div>
          <div className="grid grid-cols-3 gap-3 mt-8 max-w-sm">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl bg-bg-card/80 border border-border/60 p-3 text-center backdrop-blur-sm"
              >
                <item.icon className="w-5 h-5 text-accent mx-auto mb-2" />
                <p className="text-xs font-medium">{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10">
        <InstagramHighlight />
      </section>

      <section className="px-4 py-8 max-w-6xl mx-auto space-y-8">
        <p className="flex items-center gap-2 text-sm text-text-muted">
          <MapPin className="w-4 h-4 text-accent" />
          {BUSINESS.location.hyderabadTagline}
        </p>

        <div>
          <h2 className="font-serif-display text-2xl md:text-3xl">
            {BUSINESS.hero.pricingPreview}
          </h2>
          <p className="mt-2 text-sm text-text-secondary">
            {BUSINESS.booking.priceDisclaimer}
          </p>
          <div className="grid gap-3 mt-4 md:grid-cols-3">
            {starterPrices.map((p) => (
              <div key={p.id} className="card-surface p-4 text-sm">
                <p className="font-medium">{p.name}</p>
                <p className="text-accent text-lg font-semibold mt-1">
                  {p.priceLabel}
                  <span className="text-xs text-text-muted font-normal">
                    {' '}
                    starting
                  </span>
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {services.map((service) => (
            <article key={service.id} className="card-surface overflow-hidden">
              <ServiceImage src={service.imageUrl} alt={service.title} />
              <div className="p-5 space-y-3">
                <h3 className="font-medium text-lg">{service.title}</h3>
                <p className="text-sm text-text-secondary">
                  {service.shortDescription}
                </p>
                <Button
                  to={`/services#${service.slug}`}
                  variant="outline"
                  fullWidth
                >
                  Explore Service
                </Button>
              </div>
            </article>
          ))}
        </div>

        <div className="card-surface p-6 text-center space-y-4">
          <p className="font-serif-display text-xl">{BUSINESS.hero.finalCta}</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button to="/book">BOOK NOW</Button>
            <Button to="/services" variant="outline">
              View All Services
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}