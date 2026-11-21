import { Link } from 'react-router-dom'

export function Logo({ className = '' }: { className?: string }) {
  return (
    <Link
      to="/"
      className={`inline-flex items-center gap-1 text-lg font-semibold tracking-tight text-text-main ${className}`}
      aria-label="i.visuallss home"
    >
      <span className="text-accent">i</span>
      <span>.visuallss</span>
      <span
        className="ml-0.5 text-[10px] text-accent leading-none"
        aria-hidden
      >
        ⌝
      </span>
    </Link>
  )
}