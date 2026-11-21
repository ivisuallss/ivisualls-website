import { Film } from 'lucide-react'
import { useState } from 'react'

interface ServiceImageProps {
  src: string
  alt: string
  className?: string
}

export function ServiceImage({ src, alt, className = 'h-40 w-full object-cover' }: ServiceImageProps) {
  const [failed, setFailed] = useState(false)

  if (failed) {
    return (
      <div
        className={`${className} gradient-accent/20 bg-bg-elevated flex items-center justify-center border-b border-border`}
        aria-label={alt}
      >
        <Film className="w-10 h-10 text-accent opacity-80" />
      </div>
    )
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      loading="lazy"
      onError={() => setFailed(true)}
    />
  )
}