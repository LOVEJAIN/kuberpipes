import { Link } from 'react-router-dom'
import { Reveal } from './Reveal'

type CtaBandProps = {
  title: string
  subtitle: string
  primary?: { label: string; to: string }
  secondary?: { label: string; to: string }
}

/** Dark full-width band with a soft accent glow, used to close most pages. */
export function CtaBand({ title, subtitle, primary, secondary }: CtaBandProps) {
  return (
    <section className="bg-surface-dark relative overflow-hidden py-20">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          background:
            'radial-gradient(60% 80% at 50% 0%, hsl(var(--primary) / 0.45), transparent 70%)',
        }}
      />
      <Reveal className="relative">
        <div className="container text-center">
          <h2 className="text-background mx-auto max-w-2xl text-3xl sm:text-4xl">{title}</h2>
          <p className="text-background/70 mx-auto mt-4 max-w-2xl leading-relaxed">{subtitle}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            {primary && (
              <Link to={primary.to} className="btn-primary">
                {primary.label}
              </Link>
            )}
            {secondary && (
              <Link to={secondary.to} className="btn-on-dark">
                {secondary.label}
              </Link>
            )}
          </div>
        </div>
      </Reveal>
    </section>
  )
}
