import { PACKAGES, SERVICES } from '../config/business'
import type { Package, Service } from '../types'

export function getServices(): Service[] {
  return SERVICES.filter((s) => s.enabled).sort(
    (a, b) => a.sortOrder - b.sortOrder,
  )
}

export function getServiceBySlug(slug: string): Service | undefined {
  return SERVICES.find((s) => s.slug === slug)
}

export function getPackages(serviceId?: string): Package[] {
  const list = PACKAGES.filter((p) => p.enabled)
  return serviceId ? list.filter((p) => p.serviceId === serviceId) : list
}

export function getPackageById(id: string): Package | undefined {
  return PACKAGES.find((p) => p.id === id)
}