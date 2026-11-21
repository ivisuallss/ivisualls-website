import { BOOKING_STEPS } from '../../types'

export function ProgressSteps({ currentIndex }: { currentIndex: number }) {
  return (
    <div className="flex flex-wrap gap-2 text-xs text-text-muted mb-6">
      {BOOKING_STEPS.map((step, idx) => {
        const active = idx === currentIndex
        const done = idx < currentIndex
        return (
          <span
            key={step}
            className={`rounded-full px-3 py-1 border transition-colors ${
              active
                ? 'border-accent text-accent bg-accent/10'
                : done
                  ? 'border-success/40 text-success'
                  : 'border-border'
            }`}
          >
            {step}
          </span>
        )
      })}
    </div>
  )
}