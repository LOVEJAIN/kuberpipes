import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { Media } from '@/components/Media'
import { Reveal } from '@/components/Reveal'
import { categories, type Category, type ProductItem } from '@/data/site'
import { cn } from '@/lib/utils'

/** First hyphen-delimited token of a tank slug is its brand, e.g. 'margo-150' -> 'margo'. */
function brandOf(item: ProductItem): string {
  return item.slug.split('-')[0]
}

function groupByBrand(items: ProductItem[]): { brand: string; items: ProductItem[] }[] {
  const order: string[] = []
  const groups = new Map<string, ProductItem[]>()
  for (const item of items) {
    const brand = brandOf(item)
    if (!groups.has(brand)) {
      groups.set(brand, [])
      order.push(brand)
    }
    groups.get(brand)!.push(item)
  }
  return order.map((brand) => ({ brand, items: groups.get(brand)! }))
}

function SkuCard({ item, category, delay }: { item: ProductItem; category: Category; delay: number }) {
  return (
    <Reveal delay={delay}>
      <Link
        to={`/products/${category.slug}`}
        className="group relative block aspect-[4/5] overflow-hidden rounded-lg bg-surface-dark"
      >
        <Media
          src={item.image}
          alt={item.name}
          label={`${item.name} (3:4)`}
          width={640}
          height={800}
          imgClassName="transition-transform duration-500 group-hover:scale-105"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent"
        />
        <div className="absolute inset-x-0 top-0 flex flex-wrap gap-2 p-4">
          {(item.meta ?? []).map((meta) => (
            <span key={meta} className="rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-foreground">
              {meta}
            </span>
          ))}
        </div>
        <div className="absolute inset-x-0 bottom-0 p-5">
          <p className="text-xs font-medium text-white/70 uppercase">{item.blurb}</p>
          <h3 className="mt-1 text-lg leading-snug text-white">{item.name}</h3>
        </div>
      </Link>
    </Reveal>
  )
}

function RangeMarquee({ items }: { items: string[] }) {
  const loop = [...items, ...items]

  return (
    <div className="marquee mt-10 mb-14 overflow-hidden border-y border-border bg-card py-3">
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

/** Water Tanks: grouped by brand — Margo, Gangapyari, Loft each get their own row. */
function TanksListing({ category }: { category: Category }) {
  const groups = groupByBrand(category.items)
  return (
    <div className="space-y-14">
      {groups.map(({ brand, items }) => (
        <div key={brand}>
          <div className="mb-6 flex items-baseline justify-between">
            <h3 className="text-2xl capitalize">{brand}</h3>
            <span className="text-muted-foreground text-sm">{items.length} sizes</span>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {items.map((item, i) => (
              <SkuCard key={item.slug} item={item} category={category} delay={(i % 4) * 80} />
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

/** Toe Puff Sheets: short catalogue, shown flat — no brand grouping needed. */
function SheetsListing({ category }: { category: Category }) {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {category.items.map((item, i) => (
        <SkuCard key={item.slug} item={item} category={category} delay={(i % 4) * 80} />
      ))}
    </div>
  )
}

export function Products() {
  const [activeSlug, setActiveSlug] = useState(categories[0].slug)
  const active = categories.find((c) => c.slug === activeSlug) ?? categories[0]

  return (
    <>
      <section className="bg-surface-alt py-20">
        <div className="container text-center">
          <Reveal className="mx-auto max-w-2xl">
            <p className="eyebrow mb-3">Our Products</p>
            <h1 className="text-4xl sm:text-5xl">Water Tanks &amp; Toe Puff Sheets</h1>
            <p className="text-body mt-5 text-lg leading-relaxed">
              Two factory lines serving different industries. Tap either option and the product
              catalogue below changes instantly.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Category tabs — no search box, just the two product lines. */}
      <section className="border-border bg-card border-b py-6">
        <div className="container flex flex-wrap justify-center gap-2">
          {categories.map((category) => (
            <button
              key={category.slug}
              type="button"
              onClick={() => setActiveSlug(category.slug)}
              aria-pressed={activeSlug === category.slug}
              className={cn(
                'rounded-full px-6 py-2.5 text-sm font-medium transition-colors',
                activeSlug === category.slug
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-surface-alt text-body hover:bg-accent',
              )}
            >
              {category.factoryLabel}: {category.name}
            </button>
          ))}
        </div>
      </section>

      {/* Active category's listing — structurally different per product line. */}
      <section className="bg-surface-alt section">
        <div className="container">
          <Reveal className="mx-auto mb-12 max-w-2xl text-center">
            <p className="text-primary text-sm font-semibold uppercase">{active.experience}</p>
            <p className="text-body leading-relaxed">{active.intro}</p>
            <Link
              to={`/products/${active.slug}`}
              className="text-primary mt-3 inline-flex items-center gap-2 text-sm font-medium hover:underline"
            >
              Full specs &amp; details <ArrowRight className="size-4" />
            </Link>
          </Reveal>

          <RangeMarquee items={active.marquee} />

          {active.slug === 'water-tanks' ? (
            <TanksListing category={active} />
          ) : (
            <SheetsListing category={active} />
          )}
        </div>
      </section>

      {/* Split CTA: solid accent panel beside an image panel. */}
      <section className="pb-24">
        <div className="container">
          <Reveal>
            <div className="grid overflow-hidden rounded-lg lg:grid-cols-2">
              <div className="bg-primary text-primary-foreground flex flex-col justify-center p-10 lg:p-14">
                <h2 className="text-primary-foreground text-3xl">Need a custom specification?</h2>
                <p className="mt-4 leading-relaxed opacity-90">
                  Capacities, densities, colours and sheet sizes can be produced to your
                  requirement on bulk orders. Send us your spec and we will come back with options.
                </p>
                <Link
                  to="/inquire"
                  className="btn bg-background text-foreground hover:bg-background/90 mt-8 self-start"
                >
                  Contact Our Team <ArrowRight className="size-4" />
                </Link>
              </div>
              <div className="bg-card min-h-[280px]">
                <Media
                  src="/images/factories/tank-factory.png"
                  alt="KuberPipes product range"
                  width={960}
                  height={560}
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
