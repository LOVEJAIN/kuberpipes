import { Link, Navigate, useParams } from 'react-router-dom'
import { ArrowRight, Check, ChevronRight, FileText, Mail, MapPin, Phone } from 'lucide-react'
import { Media } from '@/components/Media'
import { Reveal } from '@/components/Reveal'
import { categories, company, getCategory } from '@/data/site'

function RangeMarquee({ items }: { items: string[] }) {
  const loop = [...items, ...items]

  return (
    <div className="marquee overflow-hidden border-y border-border bg-card py-3">
      <div className="marquee-track flex w-max items-center gap-3">
        {loop.map((item, index) => (
          <span
            key={`${item}-${index}`}
            className="shrink-0 rounded-full bg-surface-alt px-4 py-2 text-sm font-semibold text-foreground"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}

export function CategoryDetail() {
  const { slug } = useParams()
  const category = slug ? getCategory(slug) : undefined

  if (!category) return <Navigate to="/products" replace />

  const others = categories.filter((c) => c.slug !== category.slug)

  return (
    <>
      {/* Category cover makes the selected factory immediately recognisable. */}
      <section
        className="relative overflow-hidden border-b border-border bg-surface-dark py-14"
      >
        {category.coverImage && (
          <Media
            src={category.coverImage}
            alt=""
            width={1600}
            height={640}
            className="absolute inset-0"
            imgClassName="object-center"
            priority
          />
        )}
        <div aria-hidden className="absolute inset-0 bg-surface-dark/75" />
        <div className="container relative">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-background/75">
            <Link to="/" className="hover:text-primary">
              Home
            </Link>
            <ChevronRight className="size-3.5" />
            <Link to="/products" className="hover:text-primary">
              Products
            </Link>
            <ChevronRight className="size-3.5" />
            <span className="text-background">{category.name}</span>
          </nav>

          <div className="mt-6 flex flex-wrap items-end justify-between gap-6">
            <div>
              <h1 className="text-background text-4xl sm:text-5xl">{category.name}</h1>
              <p className="mt-3 text-lg text-background/80">{category.tagline}</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link to="/inquire" className="btn-primary px-6 py-3 text-sm uppercase">
                Inquire Now
              </Link>
              <a
                href={company.brochureHref}
                className="btn-outline px-6 py-3 text-sm uppercase"
                target="_blank"
                rel="noreferrer"
              >
                <FileText className="size-4" /> Brochure
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Intro split with the floating badge pill on the image. */}
      <section className="py-16">
        <div className="container grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <p className="text-body text-lg leading-relaxed">{category.intro}</p>
          </Reveal>
          <Reveal delay={120}>
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
              <Media
                src={category.image}
                alt={category.name}
                label={`${category.name} hero (4:3)`}
                width={960}
                height={720}
              />
              <span className="bg-card text-primary absolute top-4 right-4 rounded-full px-4 py-1.5 text-xs font-semibold shadow-sm">
                {category.badge}
              </span>
            </div>
          </Reveal>
        </div>
      </section>

      <RangeMarquee items={category.marquee} />

      {/* Specification table + highlight chips. */}
      <section className="section">
        <div className="container">
          <h2 className="text-primary text-center text-3xl">Technical Data</h2>
          <Reveal className="mt-12">
            <div className="card-surface overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead className="bg-surface-alt">
                  <tr>
                    {category.specColumns.map((col) => (
                      <th key={col} className="text-foreground px-5 py-3 font-semibold">
                        {col}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {category.specRows.map((row) => (
                    <tr key={row[category.specColumns[0]]} className="border-border border-t">
                      {category.specColumns.map((col, i) => (
                        <td
                          key={col}
                          className={i === 0 ? 'text-foreground px-5 py-3 font-medium' : 'text-body px-5 py-3'}
                        >
                          {row[col] ?? '—'}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {category.highlights.map((highlight) => (
                <div key={highlight.label} className="bg-surface-alt rounded-md px-5 py-3 text-sm">
                  <span className="text-foreground font-semibold">{highlight.label}:</span>{' '}
                  <span className="text-body">{highlight.value}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Benefits checklist. */}
      <section className="bg-surface-alt section">
        <div className="container">
          <h2 className="text-primary text-center text-3xl">Key Benefits</h2>
          <div className="mx-auto mt-12 grid max-w-4xl gap-5 sm:grid-cols-2">
            {category.benefits.map((benefit, i) => (
              <Reveal key={benefit} delay={i * 80}>
                <div className="flex items-start gap-3">
                  <Check className="text-primary mt-0.5 size-5 shrink-0" />
                  <span className="text-body">{benefit}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Installation steps (tanks) or applications (sheets). */}
      <section className="section">
        <div className="container">
          <h2 className="text-primary text-center text-3xl">{category.usageTitle}</h2>
          <div className="mx-auto mt-12 max-w-3xl space-y-6">
            {category.usage.map((step, i) => (
              <Reveal key={step.title} delay={i * 80}>
                <div className="flex gap-5">
                  <span className="bg-accent text-accent-foreground flex size-9 shrink-0 items-center justify-center rounded-full text-sm font-semibold">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="text-lg">{step.title}</h3>
                    <p className="text-body mt-1 leading-relaxed">{step.detail}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Cross-sell to the other line. */}
      <section className="bg-surface-alt section">
        <div className="container">
          <h2 className="text-primary text-center text-3xl">Explore Our Other Range</h2>
          <div className="mx-auto mt-12 grid max-w-3xl gap-6">
            {others.map((other) => (
              <Reveal key={other.slug}>
                <Link
                  to={`/products/${other.slug}`}
                  className="card-surface group hover:shadow-card grid overflow-hidden transition-shadow sm:grid-cols-2"
                >
                  <div className="aspect-[16/10]">
                    <Media
                      src={other.image}
                      alt={other.name}
                      label={`${other.name} (16:10)`}
                      width={720}
                      height={450}
                      imgClassName="transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-col justify-center p-7">
                    <h3 className="text-xl">{other.name}</h3>
                    <p className="text-body mt-2 leading-relaxed">{other.tagline}</p>
                    <span className="text-primary mt-4 inline-flex items-center gap-2 text-sm font-medium">
                      Learn More
                      <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Dark contact strip. */}
      <section className="bg-surface-dark py-16">
        <div className="container text-center">
          <h2 className="text-background text-3xl">Need more information?</h2>
          <p className="text-background/70 mt-3">
            Our team can help you pick the right specification for your requirement.
          </p>
          <div className="text-background/80 mt-7 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm">
            <a href={`tel:${company.phone.replace(/\s/g, '')}`} className="flex items-center gap-2">
              <Phone className="text-primary size-4" /> {company.phone}
            </a>
            {company.email && (
              <a href={`mailto:${company.email}`} className="flex items-center gap-2">
                <Mail className="text-primary size-4" /> {company.email}
              </a>
            )}
            <span className="flex items-center gap-2">
              <MapPin className="text-primary size-4" /> {company.addressLines.join(', ')}
            </span>
          </div>
        </div>
      </section>
    </>
  )
}
