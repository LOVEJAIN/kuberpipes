import { cn } from '@/lib/utils'

/** Two-tone wordmark: "Kuber" in the text colour, "Pipes" in the accent. */
export function Logo({ className, onDark = false }: { className?: string; onDark?: boolean }) {
  return (
    <span className={cn('inline-flex items-center gap-2 text-2xl font-extrabold', className)}>
      <img src="/images/gg-group-logo.png" alt="GG Group" width={44} height={48} className="h-12 w-11 shrink-0 object-contain" />
      <span>
      <span className={onDark ? 'text-background' : 'text-foreground'}>Kuber</span>
      <span className="text-primary">Pipes</span>
      </span>
    </span>
  )
}
