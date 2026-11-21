import { Camera, Clapperboard, Film, Sparkles, type LucideIcon } from 'lucide-react'
import { Button } from '../components/ui/Button'
import { BUSINESS } from '../config/business'

const approachIcons: LucideIcon[] = [Camera, Clapperboard, Film, Sparkles]

export function AboutPage() {
  const { about, brand, experienceTagline } = BUSINESS

  return (
    <div className="px-4 py-8 max-w-3xl mx-auto space-y-8">
      <header className="text-center space-y-2">
        <p className="text-sm text-text-muted">About {brand}</p>
        <h1 className="font-serif-display text-3xl">{brand}</h1>
        <p className="text-accent">{experienceTagline}</p>
      </header>

      <p className="text-text-secondary text-center leading-relaxed">
        {about.intro}
      </p>

      <div className="grid grid-cols-3 gap-3 text-center">
        {[
          { icon: Camera, label: 'Creative Shots' },
          { icon: Sparkles, label: 'Modern Tools' },
          { icon: Film, label: 'Your Moments' },
        ].map(({ icon: Icon, label }) => (
          <div key={label} className="card-surface p-4">
            <Icon className="w-6 h-6 text-accent mx-auto mb-2" />
            <p className="text-xs font-medium">{label}</p>
          </div>
        ))}
      </div>

      <section className="card-surface p-6 space-y-3">
        <h2 className="font-serif-display text-xl">{about.vision.heading}</h2>
        {about.vision.body.split('\n\n').map((para) => (
          <p
            key={para.slice(0, 40)}
            className="text-sm text-text-secondary leading-relaxed"
          >
            {para}
          </p>
        ))}
      </section>

      <section className="card-surface p-6 space-y-4">
        <h2 className="font-serif-display text-xl">{about.approach.heading}</h2>
        <p className="text-sm text-text-secondary whitespace-pre-line">
          {about.approach.intro}
        </p>
        <div className="grid gap-3 sm:grid-cols-2">
          {about.approach.steps.map((step, idx) => {
            const Icon = approachIcons[idx] ?? Sparkles
            return (
              <div
                key={step.title}
                className="rounded-2xl border border-border bg-bg-secondary p-4"
              >
                <Icon className="w-5 h-5 text-accent mb-2" />
                <p className="font-medium text-sm">{step.title}</p>
                <p className="text-xs text-text-muted mt-1">{step.description}</p>
              </div>
            )
          })}
        </div>
        <p className="text-sm text-text-secondary">{about.approach.closing}</p>
      </section>

      <section className="card-surface p-5">
        <h2 className="font-medium mb-2">Why choose us</h2>
        <p className="text-sm text-text-secondary">{about.whyChoose}</p>
      </section>

      <div className="text-center space-y-3">
        <h2 className="font-serif-display text-xl">
          Let&apos;s Create Something Special
        </h2>
        <Button to="/book">Book Now</Button>
      </div>
    </div>
  )
}