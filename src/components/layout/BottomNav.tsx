import { Film, Home, Info, Mail } from 'lucide-react'
import { NavLink } from 'react-router-dom'

const items = [
  { to: '/', label: 'Home', icon: Home },
  { to: '/services', label: 'Services', icon: Film },
  { to: '/about', label: 'About', icon: Info },
  { to: '/contact', label: 'Contact', icon: Mail },
]

export function BottomNav() {
  return (
    <nav
      className="fixed bottom-0 inset-x-0 z-40 border-t border-border bg-bg-secondary/95 backdrop-blur-md md:hidden pb-[env(safe-area-inset-bottom)]"
      aria-label="Main navigation"
    >
      <ul className="grid grid-cols-4">
        {items.map(({ to, label, icon: Icon }) => (
          <li key={to}>
            <NavLink
              to={to}
              className={({ isActive }) =>
                `flex flex-col items-center gap-1 py-3 text-xs transition-colors ${
                  isActive ? 'text-accent' : 'text-text-muted hover:text-text-secondary'
                }`
              }
            >
              <Icon className="w-5 h-5" strokeWidth={1.75} />
              {label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}