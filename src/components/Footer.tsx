import { Link } from 'react-router-dom'
import { ChevronRight, Mail, MapPin, Phone } from 'lucide-react'
import { categories, company, navLinks } from '@/data/site'
import { Logo } from './Logo'

/* Brand marks are inlined because lucide-react v1 no longer ships brand icons. */
const socials = [
  {
    label: 'Facebook',
    href: '#',
    path: 'M14 9h3V6h-3c-2.2 0-4 1.8-4 4v2H8v3h2v7h3v-7h3l1-3h-4v-2a1 1 0 0 1 1-1Z',
  },
  {
    label: 'Instagram',
    href: '#',
    path: 'M12 2.2c-2.7 0-3 0-4.1.06-1 .05-1.8.2-2.4.45a4.8 4.8 0 0 0-1.8 1.15A4.8 4.8 0 0 0 2.6 5.6c-.25.6-.4 1.3-.45 2.4C2.1 9 2.1 9.4 2.1 12s0 3 .06 4.1c.05 1 .2 1.8.45 2.4a4.8 4.8 0 0 0 1.15 1.8 4.8 4.8 0 0 0 1.8 1.15c.6.25 1.3.4 2.4.45 1.1.05 1.4.06 4.1.06s3 0 4.1-.06c1-.05 1.8-.2 2.4-.45a5 5 0 0 0 2.95-2.95c.25-.6.4-1.3.45-2.4.05-1.1.06-1.4.06-4.1s0-3-.06-4.1c-.05-1-.2-1.8-.45-2.4a4.8 4.8 0 0 0-1.15-1.8 4.8 4.8 0 0 0-1.8-1.15c-.6-.25-1.3-.4-2.4-.45C15 2.2 14.7 2.2 12 2.2Zm0 1.8c2.7 0 3 0 4 .06.97.04 1.5.2 1.85.34.47.18.8.4 1.15.75.35.35.57.68.75 1.15.14.35.3.88.34 1.85.05 1 .06 1.3.06 4s0 3-.06 4c-.04.97-.2 1.5-.34 1.85-.18.47-.4.8-.75 1.15-.35.35-.68.57-1.15.75-.35.14-.88.3-1.85.34-1 .05-1.3.06-4 .06s-3 0-4-.06c-.97-.04-1.5-.2-1.85-.34a3.1 3.1 0 0 1-1.15-.75 3.1 3.1 0 0 1-.75-1.15c-.14-.35-.3-.88-.34-1.85-.05-1-.06-1.3-.06-4s0-3 .06-4c.04-.97.2-1.5.34-1.85.18-.47.4-.8.75-1.15.35-.35.68-.57 1.15-.75.35-.14.88-.3 1.85-.34 1-.05 1.3-.06 4-.06Zm0 3.06a4.94 4.94 0 1 0 0 9.88 4.94 4.94 0 0 0 0-9.88Zm0 8.14a3.2 3.2 0 1 1 0-6.4 3.2 3.2 0 0 1 0 6.4Zm6.3-8.34a1.15 1.15 0 1 1-2.3 0 1.15 1.15 0 0 1 2.3 0Z',
  },
  {
    label: 'LinkedIn',
    href: '#',
    path: 'M7.2 9.5H4.6V20h2.6V9.5ZM5.9 4a1.6 1.6 0 1 0 0 3.2 1.6 1.6 0 0 0 0-3.2ZM20 20h-2.6v-5.5c0-1.4-.5-2.3-1.7-2.3-.9 0-1.5.6-1.7 1.2-.1.2-.1.6-.1.9V20H9.3V9.5h2.6V11c.4-.6 1.1-1.6 2.9-1.6 2.1 0 3.2 1.3 3.2 4.2V20Z',
  },
]

export function Footer() {
  return (
    <footer className="bg-surface-dark text-background/70 pt-16 pb-8">
      <div className="container grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo onDark />
          <p className="mt-4 max-w-xs text-sm leading-relaxed">
            Manufacturer of roto-moulded water storage tanks and heat-activated toe puff sheets for footwear.
          </p>
          <div className="mt-6 flex gap-3">
            {socials.map(({ label, href, path }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="border-background/20 hover:bg-primary hover:border-primary hover:text-background flex size-9 items-center justify-center rounded-full border transition-colors"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="size-4" aria-hidden>
                  <path d={path} />
                </svg>
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-background mb-5 text-lg">Quick Links</h3>
          <ul className="space-y-3 text-sm">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link to={link.to} className="hover:text-background flex items-center gap-2 transition-colors">
                  <ChevronRight className="text-primary size-4" />
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-background mb-5 text-lg">Our Products</h3>
          <ul className="space-y-3 text-sm">
            {categories.map((category) => (
              <li key={category.slug}>
                <Link
                  to={`/products/${category.slug}`}
                  className="hover:text-background flex items-center gap-2 transition-colors"
                >
                  <ChevronRight className="text-primary size-4" />
                  {category.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-background mb-5 text-lg">Contact Us</h3>
          <ul className="space-y-4 text-sm">
            <li className="flex gap-3">
              <MapPin className="text-primary mt-0.5 size-4 shrink-0" />
              <span>
                {company.addressLines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </span>
            </li>
            <li className="flex gap-3">
              <Phone className="text-primary mt-0.5 size-4 shrink-0" />
              <span className="flex flex-col">
                <a href={`tel:${company.phone.replace(/\s/g, '')}`} className="hover:text-background">
                  {company.phone}
                </a>
                <a href={`tel:${company.phone2.replace(/\s/g, '')}`} className="hover:text-background">
                  {company.phone2}
                </a>
              </span>
            </li>
            <li className="flex gap-3">
              <Mail className="text-primary mt-0.5 size-4 shrink-0" />
              {company.email ? (
                <a href={`mailto:${company.email}`} className="hover:text-background">
                  {company.email}
                </a>
              ) : (
                <a href={company.brochureHref} className="hover:text-background">
                  Download product brochure
                </a>
              )}
            </li>
          </ul>
        </div>
      </div>

      <div className="border-background/10 container mt-12 border-t pt-8 text-center text-sm">
        © {new Date().getFullYear()} {company.name}. All rights reserved.
      </div>
    </footer>
  )
}
