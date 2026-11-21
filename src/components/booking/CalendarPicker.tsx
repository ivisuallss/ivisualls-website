import {
  addMonths,
  eachDayOfInterval,
  endOfMonth,
  endOfWeek,
  format,
  isSameDay,
  isSameMonth,
  parseISO,
  startOfMonth,
  startOfWeek,
  subMonths,
} from 'date-fns'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useMemo, useState } from 'react'
import { isPastDate } from '../../lib/format'

interface CalendarPickerProps {
  selectedDate: string
  blockedDates: string[]
  onSelect: (isoDate: string) => void
}

export function CalendarPicker({
  selectedDate,
  blockedDates,
  onSelect,
}: CalendarPickerProps) {
  const initial = selectedDate ? parseISO(selectedDate) : new Date()
  const [viewMonth, setViewMonth] = useState(startOfMonth(initial))

  const days = useMemo(() => {
    const start = startOfWeek(startOfMonth(viewMonth), { weekStartsOn: 0 })
    const end = endOfWeek(endOfMonth(viewMonth), { weekStartsOn: 0 })
    return eachDayOfInterval({ start, end })
  }, [viewMonth])

  const selected = selectedDate ? parseISO(selectedDate) : null

  return (
    <div className="card-surface p-4">
      <div className="flex items-center justify-between mb-4">
        <button
          type="button"
          className="p-2 rounded-xl border border-border hover:border-accent transition-colors"
          onClick={() => setViewMonth(subMonths(viewMonth, 1))}
          aria-label="Previous month"
        >
          <ChevronLeft className="w-5 h-5 text-accent" />
        </button>
        <p className="font-medium text-text-main">
          {format(viewMonth, 'MMMM yyyy')}
        </p>
        <button
          type="button"
          className="p-2 rounded-xl border border-border hover:border-accent transition-colors"
          onClick={() => setViewMonth(addMonths(viewMonth, 1))}
          aria-label="Next month"
        >
          <ChevronRight className="w-5 h-5 text-accent" />
        </button>
      </div>

      <div className="grid grid-cols-7 gap-1 text-center text-xs text-text-muted mb-2">
        {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((d) => (
          <span key={d}>{d}</span>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-1">
        {days.map((day) => {
          const iso = format(day, 'yyyy-MM-dd')
          const inMonth = isSameMonth(day, viewMonth)
          const isSelected = selected && isSameDay(day, selected)
          const blocked = blockedDates.includes(iso)
          const past = isPastDate(iso)
          const disabled = !inMonth || past || blocked

          return (
            <button
              key={iso}
              type="button"
              disabled={disabled}
              onClick={() => onSelect(iso)}
              className={`aspect-square rounded-full text-sm transition-all ${
                !inMonth
                  ? 'text-transparent pointer-events-none'
                  : isSelected
                    ? 'gradient-accent text-bg-primary font-semibold scale-105'
                    : blocked
                      ? 'text-text-muted line-through opacity-40'
                      : past
                        ? 'text-text-muted opacity-30'
                        : 'text-text-main hover:bg-bg-elevated'
              }`}
            >
              {format(day, 'd')}
            </button>
          )
        })}
      </div>
    </div>
  )
}