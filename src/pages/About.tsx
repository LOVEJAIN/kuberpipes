import { Compass, Handshake, Leaf, ShieldCheck, Target, Users } from 'lucide-react'
import { CtaBand } from '@/components/CtaBand'
import { Media } from '@/components/Media'
import { Reveal } from '@/components/Reveal'
import { SectionHeading } from '@/components/SectionHeading'
import { company } from '@/data/site'

const stats = [
  { value: `${new Date().getFullYear() - company.foundedYear}+`, label: 'Years of Experience' },
  { value: '2', label: 'Dedicated Factories' },
  { value: '2', label: 'Product Lines' },
  { value: '100-10000 L', label: 'Tank Range' },
]

const values = [
  {
    Icon: Users,
    title: 'Customer Focus',
    body: 'We combine quality craftsmanship, innovation, and customer satisfaction to deliver water storage solutions that stand the test of time.',
  },
  {
    Icon: ShieldCheck,
    title: 'Quality First',
    body: 'Our products comply with government quality standards and carry the prestigious ISI certification on selected models.',
  },
  {
    Icon: Handshake,
    title: 'Clear Dealing',
    body: 'Buyers get direct product guidance, realistic order quantities and straightforward support before dispatch.',
  },
  {
    Icon: Target,
    title: 'Consistency',
    body: 'Repeat orders are matched against the same material and product references to keep sizing, colour and finish dependable.',
  },
  {
    Icon: Compass,
    title: 'Innovation',
    body: 'Every tank is manufactured using advanced rotational moulding technology and premium-grade raw materials for reliability and structural integrity.',
  },
  {
    Icon: Leaf,
    title: 'Long-Life Products',
    body: 'Durable tanks and footwear components reduce replacement cycles and keep material performance useful for longer.',
  },
]

const timeline = [
  {
    year: String(company.foundedYear),
    title: 'KuberPipes begins manufacturing',
    body: 'The company starts with a focus on practical polymer products for industrial and household use.',
  },
  {
    year: 'Water storage',
    title: 'Tank range expands',
    body: 'Roto-moulded Margo, Gangapyari, Pragati and loft tanks become the primary water-storage line.',
  },
  {
    year: 'Footwear',
    title: 'Toe puff sheet line grows',
    body: 'A separate product line serves shoe manufacturers with heat-activated stiffener sheets in multiple grades.',
  },
  {
    year: 'Today',
    title: 'Two specialised factories',
    body: 'Both product families operate under the same KuberPipes name while keeping their own process and buyer requirements.',
  },
]

export function About() {
  return (
    <>
      <section className="pt-12 pb-16">
        <div className="container grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <p className="eyebrow mb-3">About Us</p>
            <h1 className="text-4xl sm:text-5xl">
              {company.name}: manufacturing since {company.foundedYear}
            </h1>
            <p className="text-body mt-6 leading-relaxed">
              {company.name} Pvt. Ltd. is a trusted manufacturer of high-quality water storage
              tanks and loft tanks, built for modern households and commercial establishments.
              We specialise in 2-layer and 3-layer tanks, produced with advanced rotational
              moulding technology and premium-grade raw materials for superior strength, hygiene
              and long-lasting performance — every tank engineered to keep stored water safe from
              contamination and the elements.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <div className="card-surface shadow-card aspect-[4/3] overflow-hidden">
              <Media
                src="/images/about/facility-floor.jpg"
                alt="KuberPipes facility"
                width={960}
                height={720}
                priority
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Stat row — the last tile is filled, as on the reference. */}
      <section className="pb-20">
        <div className="container grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 80}>
              <div
                className={
                  i === stats.length - 1
                    ? 'bg-primary text-primary-foreground h-full rounded-lg p-6 text-center'
                    : 'card-surface h-full p-6 text-center'
                }
              >
                <span className="block text-3xl font-bold">{stat.value}</span>
                <span className={i === stats.length - 1 ? 'text-sm opacity-90' : 'text-muted-foreground text-sm'}>
                  {stat.label}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Mission / vision */}
      <section className="bg-surface-alt section">
        <div className="container grid gap-6 md:grid-cols-2">
          {[
            {
              Icon: Target,
              title: 'Our Mission',
              body: 'To provide dependable and efficient products that support the everyday water storage needs of homes, businesses, and institutions across the country.',
            },
            {
              Icon: Compass,
              title: 'Our Vision',
              body: 'To combine quality craftsmanship, innovation, and customer satisfaction, delivering water storage solutions that stand the test of time.',
            },
          ].map(({ Icon, title, body }, i) => (
            <Reveal key={title} delay={i * 120}>
              <div className="card-surface h-full p-8">
                <div className="bg-accent text-accent-foreground mb-5 flex size-12 items-center justify-center rounded-full">
                  <Icon className="size-5" />
                </div>
                <h2 className="text-2xl">{title}</h2>
                <p className="text-body mt-3 leading-relaxed">{body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Our Values"
            title="The principles that guide us"
            subtitle="What we hold every tank to, from raw material through to your rooftop."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {values.map(({ Icon, title, body }, i) => (
              <Reveal key={title} delay={(i % 3) * 100}>
                <div className="card-surface h-full p-7">
                  <div className="bg-accent text-accent-foreground mb-5 flex size-11 items-center justify-center rounded-full">
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

      {/* Timeline — centre line on desktop, single column on mobile. */}
      <section className="bg-surface-alt section">
        <div className="container">
          <SectionHeading eyebrow="Our Journey" title="A history of steady growth" />
          <div className="relative mx-auto mt-14 max-w-4xl">
            <div
              aria-hidden
              className="bg-primary/30 absolute top-0 bottom-0 left-4 w-px md:left-1/2 md:-translate-x-1/2"
            />
            <div className="space-y-8">
              {timeline.map((entry, i) => (
                <Reveal key={entry.title} delay={i * 100}>
                  <div
                    className={`relative pl-12 md:w-1/2 md:pl-0 ${
                      i % 2 === 0 ? 'md:pr-10' : 'md:ml-auto md:pl-10'
                    }`}
                  >
                    <span
                      aria-hidden
                      className={`bg-primary absolute top-6 left-[9px] size-3 rounded-full md:left-auto ${
                        i % 2 === 0 ? 'md:-right-1.5' : 'md:-left-1.5'
                      }`}
                    />
                    <div className="card-surface p-6">
                      <span className="text-primary text-sm font-semibold">{entry.year}</span>
                      <h3 className="mt-1 text-lg">{entry.title}</h3>
                      <p className="text-body mt-2 text-sm leading-relaxed">{entry.body}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        title="Ready to work with us?"
        subtitle="Whether you need standard stock or a custom specification, our team is ready to help."
        primary={{ label: 'Contact Us Today', to: '/inquire' }}
      />
    </>
  )
}
