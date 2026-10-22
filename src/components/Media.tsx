import { ImageIcon } from 'lucide-react'
import { cn } from '@/lib/utils'

type MediaProps = {
  /** Drop a real image path here and the placeholder disappears. */
  src?: string
  alt: string
  /** Shown inside the placeholder so it is obvious which asset is missing. */
  label?: string
  className?: string
  imgClassName?: string
  width?: number
  height?: number
  priority?: boolean
  fit?: 'cover' | 'contain'
}

function optimizedSource(src: string, width: number, height?: number, fit = 'cover') {
  if (import.meta.env.DEV) return src

  const params = new URLSearchParams({ url: src, w: String(width), fm: 'webp', q: '72' })
  if (height) {
    params.set('h', String(height))
    params.set('fit', fit)
  }

  return `/.netlify/images?${params.toString()}`
}

export function Media({
  src,
  alt,
  label,
  className,
  imgClassName,
  width = 1200,
  height,
  priority = false,
  fit = 'cover',
}: MediaProps) {
  if (src) {
    return (
      <img
        src={optimizedSource(src, width, height, fit)}
        alt={alt}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        fetchPriority={priority ? 'high' : 'auto'}
        className={cn('block h-full w-full', fit === 'contain' ? 'object-contain' : 'object-cover', className, imgClassName)}
      />
    )
  }

  return (
    <div
      role="img"
      aria-label={alt}
      className={cn(
        'bg-accent text-accent-foreground/70 flex h-full w-full flex-col items-center justify-center gap-2 p-4 text-center',
        className,
      )}
    >
      <ImageIcon className="size-6 opacity-60" aria-hidden />
      <span className="text-xs font-medium">{label ?? alt}</span>
    </div>
  )
}
