import { Instagram } from 'lucide-react'
import { BUSINESS } from '../../config/business'

export function FloatingInstagram() {
  return (
    <a
      href={BUSINESS.contact.instagramProfile}
      target="_blank"
      rel="noreferrer"
      aria-label="Explore i.visuallss on Instagram"
      className="md:hidden fixed right-4 bottom-[calc(5.25rem+env(safe-area-inset-bottom))] z-30 flex h-12 w-12 items-center justify-center rounded-full gradient-accent shadow-lg shadow-accent/30 animate-pulse"
    >
      <Instagram className="w-6 h-6 text-bg-primary" />
    </a>
  )
}