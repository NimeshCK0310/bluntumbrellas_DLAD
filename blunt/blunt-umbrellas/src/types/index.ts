export interface Product {
  id: string
  name: string
  slug: string
  price: number
  images: ProductImage[]
  colors: ProductColor[]
  description: string
  features: string[]
  specs: ProductSpecs
  collection?: string
}

export interface ProductImage {
  id: string
  url: string
  alt: string
  isPrimary: boolean
}

export interface ProductColor {
  id: string
  name: string
  value: string
  image: string
}

export interface ProductSpecs {
  openDiameter: string
  closedLength: string
  weight: string
  coverage: string
}

export interface NavigationItem {
  name: string
  href: string
  children?: NavigationItem[]
}

export interface Collection {
  id: string
  name: string
  description: string
  image: string
  slug: string
  products: Product[]
}