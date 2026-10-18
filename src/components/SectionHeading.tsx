import { cn } from '@/lib/utils'
import { Reveal } from './Reveal'

type SectionHeadingProps = {
  eyebrow?: string
  title: string
  subtitle?: string
  align?: 'center' | 'left'
  className?: string
}

/** Eyebrow → heading → supporting copy stack that opens most sections. */
export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  className,
}: SectionHeadingProps) {
  return (
    <Reveal
      className={cn(
        align === 'center' ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl text-left',
        className,
      )}
    >
      {eyebrow && <p className="eyebrow mb-3">{eyebrow}</p>}
      <h2 className="text-3xl sm:text-4xl">{title}</h2>
      {subtitle && <p className="text-body mt-4 leading-relaxed">{subtitle}</p>}
    </Reveal>
  )
}
