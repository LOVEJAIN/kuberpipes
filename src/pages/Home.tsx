
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Award, Check, Factory, Layers, PackageCheck, Recycle, ShieldCheck, Waves } from 'lucide-react'
import { CtaBand } from '@/components/CtaBand'
import { Media } from '@/components/Media'
import { Reveal } from '@/components/Reveal'
import { SectionHeading } from '@/components/SectionHeading'
import { categories, company, whatsappHref } from '@/data/site'
import { cn } from '@/lib/utils'

const features = [
  {
    Icon: Award,
    title: 'Virgin Material Only',
    body: 'We mould with virgin polymer rather than reprocessed scrap, which is what keeps strength and colour consistent.',
  },
  {
    Icon: ShieldCheck,
    title: 'Batch Consistency',
    body: 'Every batch is checked against the same reference so repeat orders match the ones before them.',
  },
  {
    Icon: Factory,
    title: 'In-House Manufacturing',
    body: 'Moulding, finishing and quality control happen under one roof, so we control lead times directly.',
  },
  {
    Icon: Recycle,
    title: 'Built to Last',
    body: 'Products are specified for long service life, reducing replacement cost over the years.',
  },
]

const commitments = [
  'Two established product lines under one roof',
  'Bulk and contract supply for manufacturers',
  'Direct technical support from our team',
]

function ProductMarquee({ items, tone = 'light' }: { items: string[]; tone?: 'light' | 'dark' }) {
  const loop = [...items, ...items]

  return (
    <div
      className={cn(
        'marquee w-full min-w-0 max-w-full shrink-0 overflow-hidden border-y py-3',
        tone === 'dark'
          ? 'border-background/15 bg-surface-dark text-background'
          : 'border-border bg-card text-foreground',
      )}
    >
      <div className="marquee-track flex w-max items-center gap-3">
        {loop.map((item, index) => (
          <span
            key={`${item}-${index}`}
            className={cn(
              'shrink-0 rounded-full px-4 py-2 text-sm font-semibold',
              tone === 'dark' ? 'bg-background/10' : 'bg-surface-alt',
            )}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}

function ProductSwitcher() {
  const [activeSlug, setActiveSlug] = useState(categories[0].slug)
  const active = categories.find((category) => category.slug === activeSlug) ?? categories[0]
  const isTanks = active.slug === 'water-tanks'
  const visibleItems = active.items.slice(0, isTanks ? 6 : 5)
  const stats = isTanks
    ? [
        ['100-10000 L', 'Tank capacities'],
        ['2 & 3 layer', 'Tank construction'],
        ['Rooftop + loft', 'Use cases'],
      ]
    : [
        ['0.3-1.8 mm', 'Thickness range'],
        ['40" x 60"', 'Sheet size'],
        ['Heat activated', 'Production fit'],
      ]

  return (
    <section className="bg-surface-alt py-14 lg:py-18">
      <div className="container">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
          <div className="min-w-0" data-testid="product-switcher-intro">
            <p className="eyebrow mb-3">Two Factories, One Name</p>
            <h2 className="max-w-xl text-2xl leading-tight sm:text-4xl">Tap a product line to experience the range</h2>
            <p className="text-body mt-4 leading-relaxed">
              KuberPipes serves two different markets: roto-moulded tanks for water storage and
              toe-puff sheets for footwear manufacturers. The switcher keeps both lines visible
              without mixing their specifications.
            </p>

            <div className="mt-7 grid grid-cols-1 gap-3">
              {categories.map((category) => (
                <button
                  key={category.slug}
                  type="button"
                  onClick={() => setActiveSlug(category.slug)}
                  className={cn(
                    'rounded-lg border p-5 text-left transition-all',
                    activeSlug === category.slug
                      ? 'border-primary bg-primary text-primary-foreground shadow-card'
                      : 'border-border bg-card text-foreground hover:border-primary/50',
                  )}
                >
                  <span
                    className={cn(
                      'mb-3 inline-flex rounded-full px-3 py-1 text-xs font-semibold',
                      activeSlug === category.slug
                        ? 'bg-background/15 text-primary-foreground'
                        : 'bg-surface-alt text-primary',
                    )}
                  >
                    {category.factoryLabel}
                  </span>
                  <span className="block text-sm font-semibold uppercase">{category.name}</span>
                  <span
                    className={cn(
                      'mt-2 block text-sm leading-relaxed',
                      activeSlug === category.slug ? 'text-primary-foreground/85' : 'text-body',
                    )}
                  >
                    {category.tagline}
                  </span>
                  <span
                    className={cn(
                      'mt-3 block text-xs font-medium',
                      activeSlug === category.slug
                        ? 'text-primary-foreground/75'
                        : 'text-muted-foreground',
                    )}
                  >
                    {category.experience}
                  </span>
                </button>
              ))}
            </div>
          </div>

          <div className="relative min-w-0 lg:min-h-[560px]" data-testid="product-switcher-panel">
            <div className="flex min-w-0 flex-col overflow-hidden rounded-lg border border-border bg-card shadow-card lg:absolute lg:inset-0">
              <div className="flex min-h-0 min-w-0 flex-1 flex-col">
                <div className="relative aspect-[16/10] shrink-0 overflow-hidden bg-surface-alt lg:aspect-auto lg:h-[42%]">
                  <Media
                    src={active.image}
                    alt={active.name}
                    width={720}
                    height={540}
                    imgClassName="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 hover:scale-105"
                  />
                </div>

                <div
                  className="kp-scrollable min-h-0 min-w-0 flex-1 p-6 sm:p-7 lg:overflow-y-auto"
                  data-testid="product-switcher-details"
                >
                  <span className="text-primary text-xs font-semibold uppercase">{active.badge}</span>
                  <h3 className="mt-3 text-2xl">{active.name}</h3>
                  <p className="text-body mt-3 text-sm leading-relaxed">{active.intro}</p>

                  <div className="mt-6 grid gap-3 sm:grid-cols-3">
                    {stats.map(([value, label]) => (
                      <div key={label} className="rounded-md bg-surface-alt p-3">
                        <span className="text-foreground block text-sm font-bold">{value}</span>
                        <span className="text-muted-foreground text-xs">{label}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    {visibleItems.map((item) => (
                      <div key={item.slug} className="rounded-md border border-border bg-background p-3">
                        <p className="text-foreground text-sm font-semibold">{item.name}</p>
                        <p className="text-muted-foreground mt-1 text-xs">{item.blurb}</p>
                      </div>
                    ))}
                  </div>

                  <Link
                    to={`/products/${active.slug}`}
                    className="text-primary mt-6 inline-flex items-center gap-2 text-sm font-semibold hover:underline"
                  >
                    View full range <ArrowRight className="size-4" />
                  </Link>
                </div>
              </div>

              <ProductMarquee items={active.marquee} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export function Home() {
  const years = new Date().getFullYear() - company.foundedYear

  return (
    <>
      <section className="overflow-hidden pt-10 pb-12 lg:pt-16 lg:pb-16">
        <div className="container grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
          <Reveal>
            <p className="eyebrow mb-4">Two factories under one trusted name</p>
            <h1 className="text-4xl sm:text-5xl lg:text-display">
              KuberPipes for <span className="text-primary">water tanks and toe puff sheets</span>
            </h1>
            <p className="text-body mt-6 max-w-lg text-lg leading-relaxed">
              Visitors can move between both product lines in one website: rooftop and loft tanks
              for water storage, and heat-activated toe puff sheets for footwear production.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/products" className="btn-primary">
                Explore Products <ArrowRight className="size-4" />
              </Link>
              <a
                href={whatsappHref('Hello KuberPipes, I want a quote for your products.')}
                target="_blank"
                rel="noreferrer"
                className="btn-outline"
              >
                Request a Quote
              </a>
            </div>
            <div className="mt-8 grid max-w-xl gap-3 sm:grid-cols-3">
              {[
                ['100-10000 L', 'Tank range'],
                ['0.3-1.8 mm', 'Sheet thickness'],
              ].map(([value, label]) => (
                <div key={label} className="rounded-lg border border-border bg-card p-4">
                  <span className="text-foreground block text-lg font-bold">{value}</span>
                  <span className="text-muted-foreground text-xs font-medium uppercase">{label}</span>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="ml-auto grid w-full max-w-xl gap-4 sm:grid-cols-2 sm:[grid-auto-rows:1fr]">
              <Link
                to="/products/water-tanks"
                className="group relative aspect-[3/4] overflow-hidden rounded-lg bg-surface-alt shadow-card"
              >
                <Media
                  src="/images/hero/tank-layers.png"
                  alt="KuberPipes two-layer and three-layer tanks"
                  width={720}
                  height={900}
                  priority
                  imgClassName="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                  <Waves className="mb-3 size-6" />
                  <h2 className="text-2xl text-white">Water Tanks</h2>
                  <p className="mt-2 text-sm text-white/80">Margo, Gangapyari, Pragati and Loft models.</p>
                </div>
              </Link>

              <Link
                to="/products/topuf-sheets"
                className="group relative aspect-[3/4] overflow-hidden rounded-lg bg-surface-alt shadow-card"
              >
                <Media
                  src="/images/products/toe-puff-diagram.png"
                  alt="Toe puff sheet grades"
                  width={720}
                  height={900}
                  priority
                  imgClassName="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                  <Layers className="mb-3 size-6" />
                  <h2 className="text-2xl text-white">Toe Puff Sheets</h2>
                  <p className="mt-2 text-sm text-white/80">Thermoplastic, PU-coated and thickness options.</p>
                </div>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <ProductSwitcher />

      <section className="bg-surface-alt section">
        <div className="container">
          <SectionHeading
            eyebrow="Why Choose Us"
            title="What sets us apart"
            subtitle="The things our customers tell us keep them coming back."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map(({ Icon, title, body }, i) => (
              <Reveal key={title} delay={i * 100}>
                <div className="card-surface h-full p-7">
                  <div className="bg-accent text-accent-foreground mb-5 flex size-12 items-center justify-center rounded-full">
                    <Icon className="size-5" />
                  </div>
                  <h3 className="text-lg">{title}</h3>
                  <p className="text-body mt-2 text-sm leading-relaxed">{body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <ProductMarquee items={[...categories[0].marquee.slice(0, 10), ...categories[1].marquee.slice(0, 8)]} tone="dark" />

      <section className="section">
        <div className="container grid items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <div className="relative">
              <div className="card-surface shadow-card aspect-[4/3] overflow-hidden">
                <Media
                  src="/images/about/facility-floor.jpg"
                  alt="Inside the KuberPipes facility"
                  width={960}
                  height={720}
                />
              </div>
              <div className="bg-primary text-primary-foreground absolute -right-4 -bottom-6 rounded-lg px-6 py-4 text-center shadow-lg">
                <span className="block text-3xl font-bold">{years}+</span>
                <span className="text-xs uppercase">Years of Experience</span>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <p className="eyebrow mb-3">About {company.name}</p>
            <h2 className="text-3xl sm:text-4xl">
              Manufacturing with intent since {company.foundedYear}
            </h2>
            <p className="text-body mt-5 leading-relaxed">
              {company.name} Pvt. Ltd. manufactures roto-moulded water storage tanks and loft
              tanks using advanced rotational moulding technology — polyethylene is heated and
              rotated inside a mould to form a seamless, one-piece tank with uniform wall
              thickness for superior strength and leak-proof performance.
            </p>
            <p className="text-body mt-4 leading-relaxed">
              Our range covers 2-layer and 3-layer tanks under the trusted MARGO, GANGAPYARI and
              PRAGATI names — selected models built to ISI standards — plus compact loft tanks for
              indoor spaces. Alongside water storage, we manufacture heat-activated toe puff
              sheets for the footwear industry, holding both lines to the same standard.
            </p>
            <ul className="mt-7 space-y-3">
              {commitments.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Check className="text-primary mt-0.5 size-5 shrink-0" />
                  <span className="text-body">{item}</span>
                </li>
              ))}
            </ul>
            <Link to="/about" className="text-primary mt-7 inline-flex items-center gap-2 font-medium hover:underline">
              Learn more about us <ArrowRight className="size-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="bg-surface-alt section">
        <div className="container">
          <SectionHeading
            eyebrow="Capabilities"
            title="Built for practical industrial supply"
            subtitle="The site is static, but the product paths are clear: tanks for storage buyers and toe-puff sheets for footwear units."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {[
              {
                Icon: Factory,
                title: 'Separate product focus',
                body: 'Each factory line keeps its own material, sizing and quality-control process, so buyers see the right details quickly.',
              },
              {
                Icon: Layers,
                title: 'Layer and thickness options',
                body: 'Tank layers, tank capacities and toe-puff sheet thicknesses are shown prominently for fast comparison.',
              },
              {
                Icon: PackageCheck,
                title: 'Bulk-ready enquiries',
                body: 'Visitors can move from any page to quote requests by phone or WhatsApp without needing an account.',
              },
            ].map(({ Icon, title, body }, i) => (
              <Reveal key={i} delay={i * 100}>
                <div className="card-surface h-full p-7">
                  <div className="bg-accent text-accent-foreground mb-5 flex size-12 items-center justify-center rounded-full">
                    <Icon className="size-5" />
                  </div>
                  <h3 className="text-lg">{title}</h3>
                  <p className="text-body mt-2 text-sm leading-relaxed">{body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Need a quote or a technical spec?"
        subtitle="Tell us what you need and our team will get back to you with pricing and availability."
        primary={{ label: 'Browse Products', to: '/products' }}
        secondary={{ label: 'Contact Us', to: '/inquire' }}
      />
    </>
  )
}