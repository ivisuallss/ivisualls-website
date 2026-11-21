import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import type { BookingDraft } from '../types'

const STORAGE_KEY = 'ivisuals_booking_draft'

const emptyDraft = (): BookingDraft => ({
  serviceId: '',
  serviceTitle: '',
  eventType: '',
  packageId: '',
  packageName: '',
  packagePrice: 0,
  packagePriceLabel: '',
  eventDate: '',
  eventTime: '',
  location: '',
  fullName: '',
  mobile: '',
  whatsapp: '',
  email: '',
  additionalRequirements: '',
  instagram: '',
  referenceLink: '',
  extraInstructions: '',
  consent: false,
})

function loadDraft(): BookingDraft {
  try {
    const raw = sessionStorage.getItem(STORAGE_KEY)
    if (raw) return { ...emptyDraft(), ...JSON.parse(raw) }
  } catch {
    /* ignore */
  }
  return emptyDraft()
}

interface BookingContextValue {
  draft: BookingDraft
  updateDraft: (patch: Partial<BookingDraft>) => void
  resetDraft: () => void
  clearSessionDraft: () => void
  preselectService: (serviceId: string, serviceTitle: string) => void
}

const BookingContext = createContext<BookingContextValue | null>(null)

export function BookingProvider({ children }: { children: ReactNode }) {
  const [draft, setDraft] = useState<BookingDraft>(loadDraft)

  const persist = useCallback((next: BookingDraft) => {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(next))
  }, [])

  const updateDraft = useCallback(
    (patch: Partial<BookingDraft>) => {
      setDraft((prev) => {
        const next = { ...prev, ...patch }
        persist(next)
        return next
      })
    },
    [persist],
  )

  const resetDraft = useCallback(() => {
    const next = emptyDraft()
    setDraft(next)
    persist(next)
  }, [persist])

  const clearSessionDraft = useCallback(() => {
    sessionStorage.removeItem(STORAGE_KEY)
    setDraft(emptyDraft())
  }, [])

  const preselectService = useCallback(
    (serviceId: string, serviceTitle: string) => {
      updateDraft({
        serviceId,
        serviceTitle,
        eventType: '',
        packageId: '',
        packageName: '',
        packagePrice: 0,
        packagePriceLabel: '',
      })
    },
    [updateDraft],
  )

  const value = useMemo(
    () => ({
      draft,
      updateDraft,
      resetDraft,
      clearSessionDraft,
      preselectService,
    }),
    [draft, updateDraft, resetDraft, clearSessionDraft, preselectService],
  )

  return (
    <BookingContext.Provider value={value}>{children}</BookingContext.Provider>
  )
}

export function useBooking() {
  const ctx = useContext(BookingContext)
  if (!ctx) throw new Error('useBooking must be used within BookingProvider')
  return ctx
}