import { format, parseISO, startOfDay } from 'date-fns'

export function formatBookingDate(dateStr: string): string {
  if (!dateStr) return ''
  try {
    return format(parseISO(dateStr), 'd MMMM yyyy')
  } catch {
    return dateStr
  }
}

export function isPastDate(dateStr: string): boolean {
  try {
    return startOfDay(parseISO(dateStr)) < startOfDay(new Date())
  } catch {
    return true
  }
}

export function displayOptional(value?: string): string {
  const v = value?.trim()
  return v ? v : 'Not Provided'
}