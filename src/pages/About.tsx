import { Compass, Handshake, Leaf, ShieldCheck, Target, Users } from 'lucide-react'
import { CtaBand } from '@/components/CtaBand'
import { Media } from '@/components/Media'
import { Reveal } from '@/components/Reveal'
import { SectionHeading } from '@/components/SectionHeading'
import { company } from '@/data/site'

const stats = [
  { value: `${new Date().getFullYear() - company.foundedYear}+`, label: 'Years of Experience' },
  { value: '100-10000 L', label: 'Tank Range' },
]

const values = [
  {
    Icon: Users,
    title: 'Customer Focus',
    body: 'We listen to water-storage buyers and footwear manufacturers, matching capacity, material grade and processing needs to their applications.',
  },
  {
    Icon: ShieldCheck,
    title: 'Quality First',
    body: 'Our goal is to make products that exceed applicable BIS standards through careful material selection, testing and continuous improvement.',
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
    body: 'We improve rotational moulding and footwear-sheet formulations to deliver reliable tank construction, uniform sheet thickness and dependable shaping performance.',
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
    body: 'Our roots lie in practical polymer manufacturing: understanding raw materials, refining processes and building lasting relationships with customers.',
  },
  {
    year: 'Water storage',
    title: 'Tank range expands',
    body: 'Our water-storage work centres on rotational moulding, with material selection and process refinement supporting Margo, Gangapyari and compact loft tanks.',
  },
  {
    year: 'Footwear',
    title: 'Toe puff sheet line grows',
    body: 'Our experience with polymers also serves footwear manufacturing through Toe Puff and Ping Pong sheets and rolls, with attention to uniform thickness, smooth finish and heat-activated shaping.',
  },
  {
    year: 'Today',
    title: 'Progress through research',
    body: 'Our direction is continued investment in R&D and improved processing across both industries, working towards consistent quality, efficient material use and products that meet evolving customer needs.',
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
              {company.name} Pvt. Ltd. manufactures water-storage tanks and Toe Puff and Ping Pong
              sheets and rolls for the footwear industry. Our focus is good-quality polymer
              products, supported by research, careful material selection and consistent processing.
              From rotationally moulded Margo and Gangapyari tanks to footwear sheets with uniform
              thickness and a smooth finish, we work towards performance that exceeds applicable
              BIS standards and meets our customers' everyday needs.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <div className="card-surface shadow-card aspect-[4/3] overflow-hidden">
              <Media
                src="/images/factories/footwear-factory.png"
                alt="KuberPipes footwear materials facility"
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
        <div className="container grid gap-5 sm:grid-cols-2">
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
              body: 'To manufacture dependable water-storage tanks and footwear materials through disciplined material selection, consistent processing and responsive technical support.',
            },
            {
              Icon: Compass,
              title: 'Our Vision',
              body: 'To make high-quality polymer products that exceed applicable BIS standards, advancing both water storage and footwear manufacturing through research, technology and responsible resource use.',
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
            subtitle="The standards we bring to every tank, sheet and roll, from material selection to finished product."
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
