import { cn } from '@/lib/utils'

/** Two-tone wordmark: "Kuber" in the text colour, "Pipes" in the accent. */
export function Logo({ className, onDark = false }: { className?: string; onDark?: boolean }) {
  return (
    <span className={cn('text-2xl font-extrabold', className)}>
      <span className={onDark ? 'text-background' : 'text-foreground'}>Kuber</span>
      <span className="text-primary">Pipes</span>
    </span>
  )
}
