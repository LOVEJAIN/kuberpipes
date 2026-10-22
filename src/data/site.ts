/**
 * Single source of truth for navigation, contact details and both product
 * lines. Swap the placeholder copy and add `image` paths as assets arrive.
 */

export const company = {
  name: 'KuberPipes',
  tagline: 'Engineered plastics for storage and footwear',
  foundedYear: 1998,
  phone: '+91 98110 84784',
  phone2: '+91 98110 66213',
  whatsapp: '+91 98110 84784',
  email: '',
  brochureHref: '/brochures/kuberpipes-product-catalog.pdf',
  addressLines: ['C-332, 333, 334, DSIIDC Narela', 'Delhi'],
  hours: ['Monday–Saturday: 9:00 AM – 6:00 PM', 'Sunday: Closed'],
} as const

export const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Products', to: '/products' },
  { label: 'About Us', to: '/about' },
  { label: 'Inquire', to: '/inquire' },
] as const

export type SpecRow = Record<string, string>

export type ProductVariant = {
  name: string
  blurb: string
  image?: string
}

export type ProductItem = {
  slug: string
  name: string
  blurb: string
  image?: string
  meta?: string[]
}

export type Category = {
  slug: string
  name: string
  tagline: string
  /** Long-form intro shown beside the hero image on the detail page. */
  intro: string
  badge: string
  factoryLabel: string
  experience: string
  image?: string
  coverImage?: string
  /** Cards shown in the "models" / "grades" row. */
  variants: ProductVariant[]
  /** Column order is taken from these keys. */
  specColumns: string[]
  specRows: SpecRow[]
  /** Two short key/value chips rendered under the spec table. */
  highlights: { label: string; value: string }[]
  benefits: string[]
  /** Numbered list — installation steps for tanks, applications for sheets. */
  usageTitle: string
  usage: { title: string; detail: string }[]
  /** Cards for the products grid on /products. */
  items: ProductItem[]
  marquee: string[]
}

export const categories: Category[] = [
  {
    slug: 'water-tanks',
    name: 'Water Tanks',
    tagline: 'Roto-moulded water storage for homes, businesses and institutions',
    intro:
      'Kuber Pipes manufactures rotational moulded polyethylene water storage tanks for durability, hygiene and long service life. Our 2-layer and 3-layer MARGO and GANGAPYARI tanks are made using high-grade, UV-stabilised material, while compact loft tanks provide dependable storage where space is limited.',
    badge: 'ISI certified · Food-grade virgin LLDPE',
    factoryLabel: 'Water storage',
    experience: 'Choose by brand, capacity, layer count and rooftop or loft placement.',
    image: '/images/hero/tank-layers.png',
    coverImage: '/images/factories/tank-factory.png',
    variants: [
      {
        name: 'Margo',
        blurb: 'Black, UV-stabilised, ISI certified — up to 10-yr warranty',
        image: '/images/products/margo-black-cutout.png',
      },
      {
        name: 'Gangapyari',
        blurb: 'White, virgin food-grade LLDPE — 5-yr warranty',
        image: '/images/products/gangapyari-white-cutout.png',
      },
      {
        name: 'Triple Layer',
        blurb: 'Insulated middle layer keeps water cooler for longer',
        image: '/images/products/margo-black-1000l.jpg',
      },
      {
        name: 'Loft Tank',
        blurb: '3-layer construction, slim square/rectangular profile for tight overhead spaces',
        image: '/images/products/loft-100-cutout.png',
      },
    ],
    specColumns: ['Brand', 'Layers', 'Material', 'Colour', 'Warranty'],
    specRows: [
      { Brand: 'Margo', Layers: '2 / 3', Material: 'LLDPE', Colour: 'Black', Warranty: 'Up to 10 years' },
      { Brand: 'Gangapyari', Layers: '2 / 3', Material: 'LLDPE', Colour: 'White', Warranty: '5 years' },
      { Brand: 'Loft Tank', Layers: '3', Material: 'LLDPE', Colour: 'White', Warranty: '—' },
    ],
    highlights: [
      { label: 'Material', value: 'Food-grade virgin LLDPE' },
      { label: 'Pricing', value: 'Contact us for pricing' },
    ],
    benefits: [
      'Black, UV-stabilised Margo tanks block sunlight, resisting algae growth and extending tank life',
      'White Gangapyari tanks are moulded from virgin food-grade polymer, safe for drinking water',
      'Triple-layer insulated construction keeps stored water noticeably cooler through the day',
      'Seamless one-piece roto-moulded construction — no joints, no leaks',
      'Loft tanks share the same 3-layer build in a compact profile — UV-resistant outer shell, reinforced middle layer, food-grade inner layer — sized for lofts, kitchens and bathrooms where a standard tank won’t fit',
    ],
    usageTitle: 'Installation & Care',
    usage: [
      {
        title: 'Prepare a level base',
        detail:
          'Set the tank on a flat, continuously supported platform. Point loads on an uneven base are the most common cause of premature failure.',
      },
      {
        title: 'Fit inlet and outlet',
        detail:
          'Use the moulded fittings with appropriate gaskets. Keep the outlet clear of the tank floor so sediment can settle below it.',
      },
      {
        title: 'Secure against wind',
        detail: 'Strap empty or partially filled tanks on exposed rooftops before the first fill.',
      },
      {
        title: 'Clean periodically',
        detail:
          'Drain and scrub the interior every six months. Avoid abrasive tools that can score the inner surface.',
      },
    ],
    items: [
      { slug: 'margo-500', name: '500 Litre Margo Water Storage Tank', blurb: '2-Layer · Black', image: '/images/products/margo-black-1000l.jpg', meta: ['500 L', '2 Layer', 'Black'] },
      { slug: 'margo-500-triple', name: '500 Litre Margo Water Storage Tank', blurb: '3-Layer · Black', image: '/images/products/margo-black-1000l.jpg', meta: ['500 L', '3 Layer', 'Black'] },
      { slug: 'margo-750', name: '750 Litre Margo Water Storage Tank', blurb: '2-Layer · Black', image: '/images/products/margo-black-1000l.jpg', meta: ['750 L', '2 Layer', 'Black'] },
      { slug: 'margo-750-triple', name: '750 Litre Margo Water Storage Tank', blurb: '3-Layer · Black', image: '/images/products/margo-black-1000l.jpg', meta: ['750 L', '3 Layer', 'Black'] },
      { slug: 'margo-1000', name: '1000 Litre Margo Water Storage Tank', blurb: '2-Layer · Black', image: '/images/products/margo-black-1000l.jpg', meta: ['1000 L', '2 Layer', 'Black'] },
      { slug: 'margo-1000-triple', name: '1000 Litre Margo Water Storage Tank', blurb: '3-Layer · Black', image: '/images/products/margo-black-1000l.jpg', meta: ['1000 L', '3 Layer', 'Black'] },
      { slug: 'margo-1500', name: '1500 Litre Margo Water Storage Tank', blurb: '2-Layer · Black', image: '/images/products/margo-black-1000l.jpg', meta: ['1500 L', '2 Layer', 'Black'] },
      { slug: 'margo-1500-triple', name: '1500 Litre Margo Water Storage Tank', blurb: '3-Layer · Black', image: '/images/products/margo-black-1000l.jpg', meta: ['1500 L', '3 Layer', 'Black'] },
      { slug: 'margo-2000', name: '2000 Litre Margo Water Storage Tank', blurb: '2-Layer · Black', image: '/images/products/margo-black-1000l.jpg', meta: ['2000 L', '2 Layer', 'Black'] },
      { slug: 'margo-2000-triple', name: '2000 Litre Margo Water Storage Tank', blurb: '3-Layer · Black', image: '/images/products/margo-black-1000l.jpg', meta: ['2000 L', '3 Layer', 'Black'] },
      { slug: 'margo-3000', name: '3000 Litre Margo Water Storage Tank', blurb: '2-Layer · Black', image: '/images/products/margo-black-1000l.jpg', meta: ['3000 L', '2 Layer', 'Black'] },
      { slug: 'margo-3000-triple', name: '3000 Litre Margo Water Storage Tank', blurb: '3-Layer · Black', image: '/images/products/margo-black-1000l.jpg', meta: ['3000 L', '3 Layer', 'Black'] },
      { slug: 'margo-5000', name: '5000 Litre Margo Water Storage Tank', blurb: '2-Layer · Black', image: '/images/products/margo-black-1000l.jpg', meta: ['5000 L', '2 Layer', 'Black'] },
      { slug: 'margo-10000', name: '10000 Litre Margo Water Storage Tank', blurb: '2-Layer · Black', image: '/images/products/margo-black-1000l.jpg', meta: ['10000 L', '2 Layer', 'Black'] },
      { slug: 'gangapyari-500', name: '500 Litre Gangapyari Water Storage Tank', blurb: '2-Layer · White', image: '/images/products/gangapyari-white-detail.jpg', meta: ['500 L', '2 Layer', 'White'] },
      { slug: 'gangapyari-500-triple', name: '500 Litre Gangapyari Water Storage Tank', blurb: '3-Layer · White', image: '/images/products/gangapyari-white-detail.jpg', meta: ['500 L', '3 Layer', 'White'] },
      { slug: 'gangapyari-750', name: '750 Litre Gangapyari Water Storage Tank', blurb: '2-Layer · White', image: '/images/products/gangapyari-white-detail.jpg', meta: ['750 L', '2 Layer', 'White'] },
      { slug: 'gangapyari-750-triple', name: '750 Litre Gangapyari Water Storage Tank', blurb: '3-Layer · White', image: '/images/products/gangapyari-white-detail.jpg', meta: ['750 L', '3 Layer', 'White'] },
      { slug: 'gangapyari-1000', name: '1000 Litre Gangapyari Water Storage Tank', blurb: '2-Layer · White', image: '/images/products/gangapyari-white-detail.jpg', meta: ['1000 L', '2 Layer', 'White'] },
      { slug: 'gangapyari-1000-triple', name: '1000 Litre Gangapyari Water Storage Tank', blurb: '3-Layer · White', image: '/images/products/gangapyari-white-detail.jpg', meta: ['1000 L', '3 Layer', 'White'] },
      { slug: 'gangapyari-1500', name: '1500 Litre Gangapyari Water Storage Tank', blurb: '2-Layer · White', image: '/images/products/gangapyari-white-detail.jpg', meta: ['1500 L', '2 Layer', 'White'] },
      { slug: 'gangapyari-1500-triple', name: '1500 Litre Gangapyari Water Storage Tank', blurb: '3-Layer · White', image: '/images/products/gangapyari-white-detail.jpg', meta: ['1500 L', '3 Layer', 'White'] },
      { slug: 'gangapyari-2000', name: '2000 Litre Gangapyari Water Storage Tank', blurb: '2-Layer · White', image: '/images/products/gangapyari-white-detail.jpg', meta: ['2000 L', '2 Layer', 'White'] },
      { slug: 'gangapyari-2000-triple', name: '2000 Litre Gangapyari Water Storage Tank', blurb: '3-Layer · White', image: '/images/products/gangapyari-white-detail.jpg', meta: ['2000 L', '3 Layer', 'White'] },
      { slug: 'gangapyari-3000', name: '3000 Litre Gangapyari Water Storage Tank', blurb: '2-Layer · Black', image: '/images/products/gangapyari-black-1000l.jpg', meta: ['3000 L', '2 Layer', 'Black'] },
      { slug: 'gangapyari-3000-triple', name: '3000 Litre Gangapyari Water Storage Tank', blurb: '3-Layer · Black', image: '/images/products/gangapyari-black-1000l.jpg', meta: ['3000 L', '3 Layer', 'Black'] },
      { slug: 'loft-100', name: '100 Litre Loft Tank', blurb: 'Square · MOQ 30', image: '/images/products/loft-100.jpg', meta: ['100 L', 'Square', 'Loft'] },
      { slug: 'loft-200', name: '200 Litre Loft Tank', blurb: 'Rectangle · MOQ 25', image: '/images/products/loft-200.jpg', meta: ['200 L', 'Rectangle', 'Loft'] },
      { slug: 'loft-300', name: '300 Litre Loft Tank', blurb: 'Square · MOQ 20', image: '/images/products/loft-300.jpg', meta: ['300 L', 'Square', 'Loft'] },
      { slug: 'loft-400', name: '400 Litre Loft Tank', blurb: 'Square · MOQ 20', image: '/images/products/loft-300-cutout.png', meta: ['400 L', 'Square', 'Loft'] },
      { slug: 'loft-500', name: '500 Litre Loft Tank', blurb: 'Rectangle · MOQ 20', image: '/images/products/loft-200.jpg', meta: ['500 L', 'Rectangle', 'Loft'] },
    ],
    marquee: [
      '500 Litre Margo',
      '750 Litre Margo',
      '1000 Litre Margo',
      '1000 Litre Triple Layer',
      '500 Litre Gangapyari',
      '2000 Litre Gangapyari',
      '3000 Litre Triple Layer',
      '5000 Litre Margo · 2 Layer · Black',
      '10000 Litre Margo · 2 Layer · Black',
      '100 Litre Loft',
      '200 Litre Loft',
      '300 Litre Loft',
      '400 Litre Loft',
      '500 Litre Loft',
    ],
  },
  {
    slug: 'topuf-sheets',
    name: 'Toe Puff Sheets',
    tagline: 'Toe Puff and Ping Pong sheets and rolls for footwear manufacturing',
    intro:
      'Kuber Pipes manufactures Toe Puff and Ping Pong sheets and rolls for the footwear industry. Our materials are made for consistent quality, uniform thickness, smooth finish and dependable processing performance across modern shoe-production requirements.',
    badge: 'Toe Puff and Ping Pong sheets and rolls',
    factoryLabel: 'Footwear materials',
    experience: 'Choose by thickness, grade, heating response and shoe application.',
    image: '/images/products/toe-puff-diagram.png',
    coverImage: '/images/factories/footwear-factory.png',
    variants: [
      { name: 'Thermoplastic', blurb: 'Heat-moulded, permanent stiffness for sports & casual shoes' },
      { name: 'PU Coated', blurb: 'Flexible yet firm, low-bulk feel for formal footwear' },
      { name: 'Non-Woven', blurb: 'Lightweight, economical grade for budget footwear' },
      { name: 'Leather Board', blurb: 'Rigid traditional stiffener for classic dress shoes' },
    ],
    specColumns: ['Grade', 'Thickness', 'Softening Temp', 'Sheet Size'],
    specRows: [
      { Grade: 'Toe Puff Sheets', Thickness: '0.3 – 1.8 mm', 'Softening Temp': 'Application dependent', 'Sheet Size': 'Custom' },
      { Grade: 'Ping Pong Sheets', Thickness: '0.3 – 1.8 mm', 'Softening Temp': 'Application dependent', 'Sheet Size': 'Custom' },
      { Grade: 'Toe Puff Rolls', Thickness: '0.3 – 1.8 mm', 'Softening Temp': 'Application dependent', 'Sheet Size': 'Custom' },
    ],
    highlights: [
      { label: 'Formats', value: 'Sheets and rolls' },
      { label: 'Pricing', value: 'Contact us for pricing' },
    ],
    benefits: [
      'Consistent thickness, uniformity and smooth finish for dependable processing',
      'Available as Toe Puff and Ping Pong sheets and rolls for footwear manufacturing',
      'Custom material specifications can be developed for thickness, stiffness and flexibility requirements',
      'Continuous product development and testing for strength, adhesion and resilience',
    ],
    usageTitle: 'Where Toe Puffs Are Used',
    usage: [
      {
        title: 'Sports and casual sneakers',
        detail: 'Thermoplastic grades mould cleanly around curved toe profiles without cracking.',
      },
      {
        title: 'Formal and office footwear',
        detail: 'PU-coated sheets give a refined, low-bulk toe shape.',
      },
      {
        title: 'Safety and industrial footwear',
        detail: 'Rigid leather-board grades add extra protection under the upper.',
      },
      {
        title: 'Sandals and open-toe footwear',
        detail: 'Lightweight non-woven grades are used sparingly for structure without added stiffness.',
      },
    ],
    items: [
      { slug: 'thermoplastic', name: 'Thermoplastic Toe Puff Sheet', blurb: 'Heat-moulded, permanent shape retention', image: '/images/products/toe-puff-diagram.png', meta: ['0.6-1.2 mm', '70-90 C', 'Sports'] },
      { slug: 'pu-coated', name: 'PU Coated Toe Puff Sheet', blurb: 'Flexible yet firm, for formal footwear', image: '/images/products/toe-puff-material-rolls.jpg', meta: ['0.5-1.0 mm', 'Flexible', 'Formal'] },
      { slug: 'non-woven', name: 'Non-Woven Toe Puff Sheet', blurb: 'Lightweight, economical grade', image: '/images/products/toe-puff-material-rolls.jpg', meta: ['0.4-0.8 mm', 'Lightweight', 'Budget'] },
      { slug: 'leather-board', name: 'Leather Board Toe Puff Sheet', blurb: 'Rigid stiffener for classic dress shoes', image: '/images/products/toe-puff-diagram.png', meta: ['1.0-2.0 mm', 'Rigid', 'Dress shoes'] },
      { slug: 'coloured', name: 'Coloured Toe Puff Sheets', blurb: 'Matched to your reference sample', image: '/images/products/toe-puff-material-rolls.jpg', meta: ['Custom', 'Sample match', 'Bulk'] },
    ],
    marquee: [
      '0.4 mm Non-Woven',
      '0.5 mm PU Coated',
      '0.6 mm Thermoplastic',
      '0.8 mm Non-Woven',
      '1.0 mm PU Coated',
      '1.2 mm Thermoplastic',
      '1.5 mm Leather Board',
      '2.0 mm Leather Board',
      '40" x 60" Sheets',
      'Sample matched colours',
    ],
  },
]

export const getCategory = (slug: string) => categories.find((c) => c.slug === slug)

export const whatsappHref = (message: string) =>
  `https://wa.me/${company.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent(message)}`
