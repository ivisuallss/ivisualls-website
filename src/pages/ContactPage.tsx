import { Instagram, Mail, MapPin, MessageCircle, Youtube } from 'lucide-react'
import { Button } from '../components/ui/Button'
import { BUSINESS } from '../config/business'
import { InstagramHighlight } from '../components/home/InstagramHighlight'

export function ContactPage() {
  const { contact, location } = BUSINESS

  const whatsappHref = `${contact.whatsappUrl}?text=${encodeURIComponent('Hello i.visuallss! I would like to know more about your videography services.')}`

  const cards = [
    {
      label: 'WhatsApp',
      value: `+91 ${contact.whatsappNational}`,
      icon: MessageCircle,
      accent: 'text-[#25D366]',
      href: whatsappHref,
    },
    {
      label: 'Instagram',
      value: contact.instagramUsername,
      icon: Instagram,
      accent: 'text-accent-highlight',
      href: contact.instagramProfile,
    },
    {
      label: 'Email',
      value: contact.email || '[TO_BE_PROVIDED]',
      icon: Mail,
      accent: 'text-accent',
      href: contact.email ? `mailto:${contact.email}` : undefined,
    },
    {
      label: 'Business Location',
      value: location.display,
      icon: MapPin,
      accent: 'text-text-secondary',
      href: location.mapsUrl,
    },
  ]

  return (
    <div className="px-4 py-8 max-w-3xl mx-auto space-y-8">
      <header>
        <h1 className="font-serif-display text-3xl">Get in Touch</h1>
        <p className="text-text-secondary mt-2">
          We&apos;d love to hear from you!
        </p>
        <p className="text-sm text-text-muted mt-2">{location.servingNote}</p>
      </header>

      <InstagramHighlight />

      <div className="card-surface p-6 space-y-3">
        <h2 className="font-medium flex items-center gap-2">
          <MapPin className="w-5 h-5 text-accent" />
          Hyderabad Service Area
        </h2>
        <p className="text-sm text-text-secondary">{location.travelNote}</p>
        <Button href={location.mapsUrl} variant="outline">
          View Hyderabad on Google Maps
        </Button>
      </div>

      <div className="space-y-4">
        {cards.map((card) => {
          const Icon = card.icon
          const inner = (
            <article className="card-surface p-5 flex items-center gap-4 transition-colors hover:border-accent">
              <span
                className={`w-12 h-12 rounded-2xl bg-bg-elevated border border-border flex items-center justify-center ${card.accent}`}
              >
                <Icon className="w-6 h-6" />
              </span>
              <div>
                <p className="text-sm text-text-muted">{card.label}</p>
                <p className="font-medium break-all">{card.value}</p>
              </div>
            </article>
          )
          if (card.href) {
            return (
              <a
                key={card.label}
                href={card.href}
                target="_blank"
                rel="noreferrer"
              >
                {inner}
              </a>
            )
          }
          return <div key={card.label}>{inner}</div>
        })}
      </div>

      <div className="flex justify-center gap-4">
        <a
          href={contact.instagramProfile}
          target="_blank"
          rel="noreferrer"
          className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-accent hover:border-accent"
          aria-label="Instagram"
        >
          <Instagram className="w-5 h-5" />
        </a>
        {contact.youtube?.startsWith('http') && (
          <a
            href={contact.youtube}
            target="_blank"
            rel="noreferrer"
            className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-accent hover:border-accent"
            aria-label="YouTube"
          >
            <Youtube className="w-5 h-5" />
          </a>
        )}
      </div>

      <div className="text-center space-y-3">
        <Button to="/book">Book a Shoot</Button>
        <Button href={contact.instagramDm} variant="outline">
          DM us on Instagram
        </Button>
      </div>
    </div>
  )
}