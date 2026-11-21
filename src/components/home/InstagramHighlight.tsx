import { ArrowUpRight, Instagram } from 'lucide-react'
import { BUSINESS } from '../../config/business'

export function InstagramHighlight() {
  const { instagram, contact } = BUSINESS

  return (
    <section className="px-4 max-w-6xl mx-auto">
      <a
        href={contact.instagramProfile}
        target="_blank"
        rel="noreferrer"
        className="block group relative overflow-hidden rounded-3xl border border-border bg-bg-card p-6 md:p-8 transition-all hover:border-accent/60 hover:shadow-lg hover:shadow-accent/10"
      >
        <div
          className="absolute inset-0 opacity-30 bg-gradient-to-br from-[#f09433]/40 via-[#e6683c]/30 to-[#bc1888]/40"
          aria-hidden
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg-primary via-bg-primary/60 to-transparent" />
        <div className="relative z-10 space-y-4">
          <p className="text-xs uppercase tracking-[0.2em] text-accent animate-pulse">
            {instagram.pulseLabel}
          </p>
          <div className="flex items-start justify-between gap-4">
            <div className="space-y-2">
              <h2 className="font-serif-display text-2xl md:text-3xl">
                {instagram.sectionHeading}
              </h2>
              <p className="text-sm text-text-secondary max-w-md">
                {instagram.sectionBody}
              </p>
            </div>
            <span className="rounded-2xl bg-bg-elevated/80 border border-border p-3 shrink-0">
              <Instagram className="w-8 h-8 text-accent group-hover:scale-110 transition-transform" />
            </span>
          </div>
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <span className="inline-flex items-center gap-2 rounded-2xl gradient-accent px-5 py-3 text-sm font-semibold text-bg-primary shadow-lg shadow-accent/25">
              {instagram.cta}
              <ArrowUpRight className="w-4 h-4 animate-bounce" />
            </span>
            <span className="text-text-secondary text-sm">
              {contact.instagramUsername}
            </span>
          </div>
          <div className="pt-4 border-t border-border/60 space-y-2">
            <p className="text-sm font-medium">{instagram.shootIdeaHeading}</p>
            <a
              href={contact.instagramDm}
              target="_blank"
              rel="noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="text-sm text-accent hover:underline"
            >
              {instagram.shootIdeaCta}
            </a>
          </div>
        </div>
      </a>
    </section>
  )
}