import { Outlet, ScrollRestoration } from 'react-router-dom'
import { FloatingInstagram } from '../home/FloatingInstagram'
import { BottomNav } from './BottomNav'
import { Header } from './Header'

export function MainLayout() {
  return (
    <div className="min-h-dvh flex flex-col bg-bg-primary">
      <ScrollRestoration />
      <Header />
      <main className="flex-1 pb-24 md:pb-12">
        <Outlet />
      </main>
      <BottomNav />
      <FloatingInstagram />
    </div>
  )
}