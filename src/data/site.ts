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
  hours: ['Every day: 9:00 AM – 9:00 PM', 'Open Monday through Sunday'],
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
    badge: 'ISI certified · Food-grade virgin LDPE',
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
        blurb: 'White, virgin food-grade Food-grade virgin LDPE — 5-yr warranty',
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
      { Brand: 'Margo', Layers: '2 / 3', Material: 'Food-grade virgin LDPE', Colour: 'Black', Warranty: 'Up to 10 years' },
      { Brand: 'Gangapyari', Layers: '2 / 3', Material: 'Food-grade virgin LDPE', Colour: 'White', Warranty: '5 years' },
      { Brand: 'Loft Tank', Layers: '3', Material: 'Food-grade virgin LDPE', Colour: 'White', Warranty: '—' },
    ],
    highlights: [
      { label: 'Material', value: 'Food-grade virgin LDPE' },
      { label: 'Pricing', value: 'Contact us for pricing' },
    ],
    benefits: [
      'Black, UV-stabilised Margo tanks block sunlight, resisting algae growth and extending tank life',
      'White Gangapyari tanks are moulded from virgin food-grade polymer, safe for drinking water',
      'Triple-layer insulated construction keeps stored water noticeably cooler through the day',
      'Seamless one-piece roto-moulded construction — no joints, no leaks',
      'Loft tanks share the same 3-layer build in a compact profile — UV-resistant outer shell, reinforced middle layer, food-grade inner layer — sized for lofts, kitchens and bathrooms where a standard tank won’t fit',
    ],
    usageTitle: '',
    usage: [],
    items: [
      { slug: 'margo-500', name: '500 Litre Margo Water Storage Tank', blurb: '2-Layer · Black', image: '/images/products/margo-black-cutout.png', meta: ['500 L', '2 Layer', 'Black'] },
      { slug: 'margo-500-triple', name: '500 Litre Margo Water Storage Tank', blurb: '3-Layer · Black', image: '/images/products/margo-hero-underwater.png', meta: ['500 L', '3 Layer', 'Black'] },
      { slug: 'margo-750', name: '750 Litre Margo Water Storage Tank', blurb: '2-Layer · Black', image: '/images/products/margo-black-1000l.jpg', meta: ['750 L', '2 Layer', 'Black'] },
      { slug: 'margo-750-triple', name: '750 Litre Margo Water Storage Tank', blurb: '3-Layer · Black', image: '/images/products/margo-black-cutout.png', meta: ['750 L', '3 Layer', 'Black'] },
      { slug: 'margo-1000', name: '1000 Litre Margo Water Storage Tank', blurb: '2-Layer · Black', image: '/images/products/margo-hero-underwater.png', meta: ['1000 L', '2 Layer', 'Black'] },
      { slug: 'margo-1000-triple', name: '1000 Litre Margo Water Storage Tank', blurb: '3-Layer · Black', image: '/images/products/margo-black-1000l.jpg', meta: ['1000 L', '3 Layer', 'Black'] },
      { slug: 'margo-1500', name: '1500 Litre Margo Water Storage Tank', blurb: '2-Layer · Black', image: '/images/products/margo-black-cutout.png', meta: ['1500 L', '2 Layer', 'Black'] },
      { slug: 'margo-1500-triple', name: '1500 Litre Margo Water Storage Tank', blurb: '3-Layer · Black', image: '/images/products/margo-hero-underwater.png', meta: ['1500 L', '3 Layer', 'Black'] },
      { slug: 'margo-2000', name: '2000 Litre Margo Water Storage Tank', blurb: '2-Layer · Black', image: '/images/products/margo-black-1000l.jpg', meta: ['2000 L', '2 Layer', 'Black'] },
      { slug: 'margo-2000-triple', name: '2000 Litre Margo Water Storage Tank', blurb: '3-Layer · Black', image: '/images/products/margo-black-cutout.png', meta: ['2000 L', '3 Layer', 'Black'] },
      { slug: 'margo-3000', name: '3000 Litre Margo Water Storage Tank', blurb: '2-Layer · Black', image: '/images/products/margo-hero-underwater.png', meta: ['3000 L', '2 Layer', 'Black'] },
      { slug: 'margo-3000-triple', name: '3000 Litre Margo Water Storage Tank', blurb: '3-Layer · Black', image: '/images/products/margo-black-1000l.jpg', meta: ['3000 L', '3 Layer', 'Black'] },
      { slug: 'margo-5000', name: '5000 Litre Margo Water Storage Tank', blurb: '2-Layer · Black', image: '/images/products/margo-black-cutout.png', meta: ['5000 L', '2 Layer', 'Black'] },
      { slug: 'margo-10000', name: '10000 Litre Margo Water Storage Tank', blurb: '2-Layer · Black', image: '/images/products/margo-hero-underwater.png', meta: ['10000 L', '2 Layer', 'Black'] },
      { slug: 'gangapyari-500', name: '500 Litre Gangapyari Water Storage Tank', blurb: '2-Layer · White', image: '/images/products/gangapyari-white-cutout.png', meta: ['500 L', '2 Layer', 'White'] },
      { slug: 'gangapyari-500-triple', name: '500 Litre Gangapyari Water Storage Tank', blurb: '3-Layer · White', image: '/images/products/gangapyari-rooftop.png', meta: ['500 L', '3 Layer', 'White'] },
      { slug: 'gangapyari-750', name: '750 Litre Gangapyari Water Storage Tank', blurb: '2-Layer · White', image: '/images/products/gangapyari-white-detail.jpg', meta: ['750 L', '2 Layer', 'White'] },
      { slug: 'gangapyari-750-triple', name: '750 Litre Gangapyari Water Storage Tank', blurb: '3-Layer · White', image: '/images/products/gangapyari-white-cutout.png', meta: ['750 L', '3 Layer', 'White'] },
      { slug: 'gangapyari-1000', name: '1000 Litre Gangapyari Water Storage Tank', blurb: '2-Layer · White', image: '/images/products/gangapyari-rooftop.png', meta: ['1000 L', '2 Layer', 'White'] },
      { slug: 'gangapyari-1000-triple', name: '1000 Litre Gangapyari Water Storage Tank', blurb: '3-Layer · White', image: '/images/products/gangapyari-white-detail.jpg', meta: ['1000 L', '3 Layer', 'White'] },
      { slug: 'gangapyari-1500', name: '1500 Litre Gangapyari Water Storage Tank', blurb: '2-Layer · White', image: '/images/products/gangapyari-white-cutout.png', meta: ['1500 L', '2 Layer', 'White'] },
      { slug: 'gangapyari-1500-triple', name: '1500 Litre Gangapyari Water Storage Tank', blurb: '3-Layer · White', image: '/images/products/gangapyari-rooftop.png', meta: ['1500 L', '3 Layer', 'White'] },
      { slug: 'gangapyari-2000', name: '2000 Litre Gangapyari Water Storage Tank', blurb: '2-Layer · White', image: '/images/products/gangapyari-white-detail.jpg', meta: ['2000 L', '2 Layer', 'White'] },
      { slug: 'gangapyari-2000-triple', name: '2000 Litre Gangapyari Water Storage Tank', blurb: '3-Layer · White', image: '/images/products/gangapyari-white-cutout.png', meta: ['2000 L', '3 Layer', 'White'] },
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
    name: 'Toe Puff Sheets & Rolls',
    tagline: 'Toe puff in sheets and rolls with your required thickness and quality',
    intro: 'Non-woven fabric toe puff material for footwear manufacturing, supplied in sheet and roll form to suit your required thickness and quality. Sheets use spunbond or spunlace fabric; rolls use polydull fabric and are available in black and white.',
    badge: 'Non-woven fabric toe puff',
    factoryLabel: 'Footwear materials',
    experience: 'Spunbond/spunlace sheets and black or white polydull rolls.',
    image: '/images/products/toe-puff-material-rolls.jpg',
    coverImage: '/images/factories/footwear-factory.png',
    variants: [
      { name: 'Toe Puff Sheets', blurb: 'Spunbond/spunlace fabric, 0.3-1.2 mm', image: '/images/products/toe-puff-white.png' },
      { name: 'Toe Puff Rolls', blurb: 'Polydull fabric, black and white, 0.4-1 mm', image: '/images/products/toe-puff-black.png' },
    ],
    specColumns: ['Format', 'Fabric', 'Thickness', 'Colour'],
    specRows: [
      { Format: '0.3 mm Sheets', Fabric: 'Spunbond / spunlace', Thickness: '0.3 mm', Colour: 'Confirm with our team' },
      { Format: '0.4 mm Sheets', Fabric: 'Spunbond / spunlace', Thickness: '0.4 mm', Colour: 'Confirm with our team' },
      { Format: '0.5 mm Sheets', Fabric: 'Spunbond / spunlace', Thickness: '0.5 mm', Colour: 'Confirm with our team' },
      { Format: '0.6 mm Sheets', Fabric: 'Spunbond / spunlace', Thickness: '0.6 mm', Colour: 'Confirm with our team' },
      { Format: '0.7 mm Sheets', Fabric: 'Spunbond / spunlace', Thickness: '0.7 mm', Colour: 'Confirm with our team' },
      { Format: '0.8 mm Sheets', Fabric: 'Spunbond / spunlace', Thickness: '0.8 mm', Colour: 'Confirm with our team' },
      { Format: '0.9 mm Sheets', Fabric: 'Spunbond / spunlace', Thickness: '0.9 mm', Colour: 'Confirm with our team' },
      { Format: '1 mm Sheets', Fabric: 'Spunbond / spunlace', Thickness: '1 mm', Colour: 'Confirm with our team' },
      { Format: '1.1 mm Sheets', Fabric: 'Spunbond / spunlace', Thickness: '1.1 mm', Colour: 'Confirm with our team' },
      { Format: '1.2 mm Sheets', Fabric: 'Spunbond / spunlace', Thickness: '1.2 mm', Colour: 'Confirm with our team' },
      { Format: '0.4 mm Rolls', Fabric: 'Polydull', Thickness: '0.4 mm', Colour: 'Black / white' },
      { Format: '0.6 mm Rolls', Fabric: 'Polydull', Thickness: '0.6 mm', Colour: 'Black / white' },
      { Format: '0.7 mm Rolls', Fabric: 'Polydull', Thickness: '0.7 mm', Colour: 'Black / white' },
      { Format: '0.8 mm Rolls', Fabric: 'Polydull', Thickness: '0.8 mm', Colour: 'Black / white' },
      { Format: '1 mm Rolls', Fabric: 'Polydull', Thickness: '1 mm', Colour: 'Black / white' },
    ],
    highlights: [
      { label: 'Sheets', value: '0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1, 1.1 and 1.2 mm' },
      { label: 'Rolls', value: '0.4, 0.6, 0.7, 0.8 and 1 mm, black and white' },
    ],
    benefits: [
      'Sheet and roll formats to suit production requirements',
      'A choice of thicknesses for your required quality',
      'Spunbond or spunlace fabric for sheets',
      'Polydull fabric rolls available in black and white',
    ],
    usageTitle: 'Toe Puff for Footwear Manufacturing',
    usage: [
      { title: 'Sheet format', detail: 'Non-woven toe puff sheets using spunbond or spunlace fabric, with thickness options from 0.3 to 1.2 mm.' },
      { title: 'Roll format', detail: 'Polydull fabric toe puff rolls in black and white, available in 0.4, 0.6, 0.7, 0.8 and 1 mm.' },
      { title: 'Your production requirements', detail: 'Select the format and thickness to suit your required quality, and discuss specifications with our team.' },
    ],
    items: [
      { slug: 'sheet-0-3', name: '0.3 mm Toe Puff Sheet', blurb: 'Non-woven · Spunbond / spunlace fabric', image: '/images/products/toe-puff-white.png', meta: ['0.3 mm', 'Sheets'] },
      { slug: 'sheet-0-4', name: '0.4 mm Toe Puff Sheet', blurb: 'Non-woven · Spunbond / spunlace fabric', image: '/images/products/toe-puff-sheet.png', meta: ['0.4 mm', 'Sheets'] },
      { slug: 'sheet-0-5', name: '0.5 mm Toe Puff Sheet', blurb: 'Non-woven · Spunbond / spunlace fabric', image: '/images/products/toe-puff-white.png', meta: ['0.5 mm', 'Sheets'] },
      { slug: 'sheet-0-6', name: '0.6 mm Toe Puff Sheet', blurb: 'Non-woven · Spunbond / spunlace fabric', image: '/images/products/toe-puff-sheet.png', meta: ['0.6 mm', 'Sheets'] },
      { slug: 'sheet-0-7', name: '0.7 mm Toe Puff Sheet', blurb: 'Non-woven · Spunbond / spunlace fabric', image: '/images/products/toe-puff-white.png', meta: ['0.7 mm', 'Sheets'] },
      { slug: 'sheet-0-8', name: '0.8 mm Toe Puff Sheet', blurb: 'Non-woven · Spunbond / spunlace fabric', image: '/images/products/toe-puff-sheet.png', meta: ['0.8 mm', 'Sheets'] },
      { slug: 'sheet-0-9', name: '0.9 mm Toe Puff Sheet', blurb: 'Non-woven · Spunbond / spunlace fabric', image: '/images/products/toe-puff-white.png', meta: ['0.9 mm', 'Sheets'] },
      { slug: 'sheet-1', name: '1 mm Toe Puff Sheet', blurb: 'Non-woven · Spunbond / spunlace fabric', image: '/images/products/toe-puff-sheet.png', meta: ['1 mm', 'Sheets'] },
      { slug: 'sheet-1-1', name: '1.1 mm Toe Puff Sheet', blurb: 'Non-woven · Spunbond / spunlace fabric', image: '/images/products/toe-puff-white.png', meta: ['1.1 mm', 'Sheets'] },
      { slug: 'sheet-1-2', name: '1.2 mm Toe Puff Sheet', blurb: 'Non-woven · Spunbond / spunlace fabric', image: '/images/products/toe-puff-sheet.png', meta: ['1.2 mm', 'Sheets'] },
      { slug: 'roll-0-4-black', name: '0.4 mm Black Toe Puff Roll', blurb: 'Polydull fabric', image: '/images/products/toe-puff-black.png', meta: ['0.4 mm', 'Rolls', 'Black'] },
      { slug: 'roll-0-4-white', name: '0.4 mm White Toe Puff Roll', blurb: 'Polydull fabric', image: '/images/products/toe-puff-material-rolls.jpg', meta: ['0.4 mm', 'Rolls', 'White'] },
      { slug: 'roll-0-6-black', name: '0.6 mm Black Toe Puff Roll', blurb: 'Polydull fabric', image: '/images/products/toe-puff-black.png', meta: ['0.6 mm', 'Rolls', 'Black'] },
      { slug: 'roll-0-6-white', name: '0.6 mm White Toe Puff Roll', blurb: 'Polydull fabric', image: '/images/products/toe-puff-material-rolls.jpg', meta: ['0.6 mm', 'Rolls', 'White'] },
      { slug: 'roll-0-7-black', name: '0.7 mm Black Toe Puff Roll', blurb: 'Polydull fabric', image: '/images/products/toe-puff-black.png', meta: ['0.7 mm', 'Rolls', 'Black'] },
      { slug: 'roll-0-7-white', name: '0.7 mm White Toe Puff Roll', blurb: 'Polydull fabric', image: '/images/products/toe-puff-material-rolls.jpg', meta: ['0.7 mm', 'Rolls', 'White'] },
      { slug: 'roll-0-8-black', name: '0.8 mm Black Toe Puff Roll', blurb: 'Polydull fabric', image: '/images/products/toe-puff-black.png', meta: ['0.8 mm', 'Rolls', 'Black'] },
      { slug: 'roll-0-8-white', name: '0.8 mm White Toe Puff Roll', blurb: 'Polydull fabric', image: '/images/products/toe-puff-material-rolls.jpg', meta: ['0.8 mm', 'Rolls', 'White'] },
      { slug: 'roll-1-black', name: '1 mm Black Toe Puff Roll', blurb: 'Polydull fabric', image: '/images/products/toe-puff-black.png', meta: ['1 mm', 'Rolls', 'Black'] },
      { slug: 'roll-1-white', name: '1 mm White Toe Puff Roll', blurb: 'Polydull fabric', image: '/images/products/toe-puff-material-rolls.jpg', meta: ['1 mm', 'Rolls', 'White'] },
    ],
    marquee: ['0.3 mm Sheets', '0.4 mm Sheets', '0.5 mm Sheets', '0.6 mm Sheets', '0.7 mm Sheets', '0.8 mm Sheets', '0.9 mm Sheets', '1 mm Sheets', '1.1 mm Sheets', '1.2 mm Sheets', '0.4 mm Rolls · Black / White', '0.6 mm Rolls · Black / White', '0.7 mm Rolls · Black / White', '0.8 mm Rolls · Black / White', '1 mm Rolls · Black / White'],
  },
]

export const getCategory = (slug: string) => categories.find((c) => c.slug === slug)

export const whatsappHref = (message: string) =>
  `https://wa.me/${company.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent(message)}`
