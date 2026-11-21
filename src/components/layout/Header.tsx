import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Button } from '../ui/Button'
import { Logo } from '../ui/Logo'

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/about', label: 'About Us' },
  { to: '/contact', label: 'Contact Us' },
]

export function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-bg-primary/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 md:px-6">
        <Logo />

        <nav className="hidden md:flex items-center gap-8 text-sm text-text-secondary">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                isActive ? 'text-accent' : 'hover:text-text-main transition-colors'
              }
            >
              {item.label}
            </NavLink>
          ))}
          <Button to="/book" className="!py-2.5 !px-5">
            Book Now →
          </Button>
        </nav>

        <div className="flex items-center gap-3 md:hidden">
          <Button
            to="/book"
            className="!py-2 !px-4 !text-xs hidden min-[380px]:inline-flex"
          >
            Book
          </Button>
          <button
            type="button"
            className="p-2 rounded-xl border border-border text-text-main"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-bg-secondary px-4 py-4 space-y-3">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="block py-2 text-text-secondary hover:text-accent"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Button to="/book" fullWidth onClick={() => setOpen(false)}>
            Book Now →
          </Button>
        </div>
      )}
    </header>
  )
}