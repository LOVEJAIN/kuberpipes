import { useState, type FormEvent } from 'react'
import { Clock, Mail, MapPin, Phone, Send } from 'lucide-react'
import { Media } from '@/components/Media'
import { Reveal } from '@/components/Reveal'
import { SectionHeading } from '@/components/SectionHeading'
import { categories, company, whatsappHref } from '@/data/site'

const faqs = [
  {
    q: 'What is your minimum order quantity?',
    a: 'MOQ varies by product and capacity — some tanks ship from just a few units, others require a fuller pallet quantity. Check the specific product listing or ask our team for your exact requirement.',
  },
  {
    q: 'Do you supply outside Delhi?',
    a: 'Yes. Dispatch depends on product size, order quantity and transport availability. Share your city and requirement so the team can confirm the best option.',
  },
  {
    q: 'Can products be customised?',
    a: 'Yes — capacities, densities, colours and sheet sizes can be produced to your requirement on bulk orders. Send us your spec and we will come back with options.',
  },
  {
    q: 'What warranty do you offer?',
    a: 'Margo tanks carry a warranty of up to 10 years; Gangapyari and Pragati tanks carry a 5-year warranty.',
  },
  {
    q: 'How are orders delivered?',
    a: 'Orders are coordinated directly after the product, quantity and location are confirmed. Bulk tank orders and sheet orders may use different transport arrangements.',
  },
  {
    q: 'Do you supply samples?',
    a: 'Samples can be discussed for footwear sheet grades and selected tank enquiries. Call or send a WhatsApp message with your target specification.',
  },
]

export function Inquire() {
  const [sent, setSent] = useState(false)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = new FormData(event.currentTarget)
    const message = [
      'Hello KuberPipes, I want to enquire about your products.',
      `Name: ${form.get('name') || ''}`,
      `Email: ${form.get('email') || ''}`,
      `Phone: ${form.get('phone') || ''}`,
      `Company: ${form.get('company') || ''}`,
      `Interest: ${form.get('interest') || ''}`,
      `Message: ${form.get('message') || ''}`,
    ]
      .filter((line) => !line.endsWith(': '))
      .join('\n')
    window.open(whatsappHref(message), '_blank', 'noopener,noreferrer')
    setSent(true)
  }

  const contactCards = [
    { Icon: Phone, title: 'Phone', lines: [company.phone, company.phone2], action: { label: 'Call us', href: `tel:${company.phone.replace(/\s/g, '')}` } },
    ...(company.email
      ? [{ Icon: Mail, title: 'Email', lines: [company.email], action: { label: 'Send email', href: `mailto:${company.email}` } }]
      : []),
    {
      Icon: MapPin,
      title: 'Address',
      lines: [...company.addressLines],
      action: {
        label: 'Get directions',
        href: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(company.addressLines.join(', '))}`,
      },
    },
    { Icon: Clock, title: 'Working Hours', lines: [...company.hours] },
  ]

  return (
    <>
      <section className="bg-surface-alt py-20">
        <div className="container text-center">
          <Reveal className="mx-auto max-w-2xl">
            <p className="eyebrow mb-3">Contact Us</p>
            <h1 className="text-4xl sm:text-5xl">Send a product enquiry</h1>
            <p className="text-body mt-5 text-lg leading-relaxed">
              Ask for tank capacity, toe-puff sheet thickness, MOQ, pricing or dispatch details.
              The form opens WhatsApp with your message ready to send.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-16">
        <div className="container grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {contactCards.map(({ Icon, title, lines, action }, i) => (
            <Reveal key={title} delay={i * 80}>
              <div className="card-surface flex h-full flex-col p-6">
                <div className="bg-accent text-accent-foreground mb-4 flex size-11 items-center justify-center rounded-full">
                  <Icon className="size-5" />
                </div>
                <h3 className="text-lg">{title}</h3>
                <div className="text-body mt-2 flex-1 space-y-1 text-sm">
                  {lines.map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                </div>
                {action && (
                  <a href={action.href} className="text-primary mt-4 text-sm font-medium hover:underline">
                    {action.label}
                  </a>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Form card with the accent top border, beside a location card. */}
      <section className="bg-surface-alt section">
        <div className="container grid items-start gap-8 lg:grid-cols-2">
          <Reveal>
            <div className="card-surface border-t-primary overflow-hidden border-t-4 p-8">
              <div className="bg-accent text-accent-foreground mx-auto mb-4 flex size-12 items-center justify-center rounded-full">
                <Mail className="size-5" />
              </div>
              <h2 className="text-center text-2xl">Get in touch</h2>
              <p className="text-body mt-2 text-center text-sm">
                Tell us what you need. This static form opens WhatsApp with your enquiry ready to send.
              </p>

              {sent ? (
                <p className="bg-accent text-accent-foreground mt-8 rounded-md p-6 text-center text-sm">
                  Thanks. A WhatsApp enquiry window has opened with your details ready to send.
                </p>
              ) : (
                <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field label="Full Name" name="name" placeholder="Your name" required />
                    <Field label="Email Address" name="email" type="email" placeholder="you@example.com" required />
                    <Field label="Phone Number" name="phone" type="tel" placeholder="+91 00000 00000" />
                    <Field label="Company Name" name="company" placeholder="Your company" />
                  </div>

                  <div>
                    <label htmlFor="interest" className="text-foreground mb-1.5 block text-sm font-medium">
                      Product Interest
                    </label>
                    <select
                      id="interest"
                      name="interest"
                      className="border-input bg-background focus:ring-ring w-full rounded-md border px-3 py-2.5 text-sm outline-none focus:ring-2"
                    >
                      <option>General Inquiry</option>
                      {categories.map((category) => (
                        <option key={category.slug}>{category.name}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="text-foreground mb-1.5 block text-sm font-medium">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      placeholder="Tell us about your requirement..."
                      className="border-input bg-background placeholder:text-muted-foreground focus:ring-ring w-full rounded-md border px-3 py-2.5 text-sm outline-none focus:ring-2"
                    />
                  </div>

                  <button type="submit" className="btn-primary w-full">
                    <Send className="size-4" /> Send on WhatsApp
                  </button>
                </form>
              )}
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="card-surface overflow-hidden">
              <div className="aspect-[4/3]">
              <Media
                src="/images/about/facility-floor.jpg"
                alt="Our location"
                width={960}
                height={720}
              />
              </div>
              <div className="p-8">
                <h2 className="text-2xl">Visit our facility</h2>
                <p className="text-body mt-3 leading-relaxed">
                  {company.addressLines.join(', ')}. Visitors are welcome during working hours —
                  please call ahead so we can make time for you.
                </p>
                <p className="text-primary mt-4 flex items-center gap-2 text-sm font-medium">
                  <Clock className="size-4" /> {company.hours[0]}
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="FAQs"
            title="Frequently asked questions"
            subtitle="Answers to what most customers ask before placing an order."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {faqs.map((faq, i) => (
              <Reveal key={faq.q} delay={(i % 2) * 100}>
                <div className="card-surface h-full p-6">
                  <h3 className="text-lg">{faq.q}</h3>
                  <p className="text-body mt-2 text-sm leading-relaxed">{faq.a}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

type FieldProps = {
  label: string
  name: string
  type?: string
  placeholder?: string
  required?: boolean
}

function Field({ label, name, type = 'text', placeholder, required }: FieldProps) {
  return (
    <div>
      <label htmlFor={name} className="text-foreground mb-1.5 block text-sm font-medium">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        className="border-input bg-background placeholder:text-muted-foreground focus:ring-ring w-full rounded-md border px-3 py-2.5 text-sm outline-none focus:ring-2"
      />
    </div>
  )
}
