export const NAVIGATION_ITEMS = [
  {
    name: 'Umbrellas',
    href: '/umbrellas',
    children: [
      { name: 'Classic', href: '/umbrellas/classic' },
      { name: 'Metro', href: '/umbrellas/metro' },
      { name: 'Coupe', href: '/umbrellas/coupe' },
      { name: 'Exec', href: '/umbrellas/exec' },
      { name: 'Sport', href: '/umbrellas/sport' },
    ]
  },
  {
    name: 'Collections',
    href: '/collections',
    children: [
      { name: 'Outdoor & Leisure Club', href: '/collections/outdoor-leisure' },
      { name: 'UV Coastal Collection', href: '/collections/uv-coastal' },
      { name: 'Studio Bon', href: '/collections/studio-bon' },
    ]
  },
  { name: 'About', href: '/about' },
  { name: 'Support', href: '/support' },
]

export const PRODUCT_COLORS = [
  { id: 'woodland-camo', name: 'Woodland Camo', value: '#2d3a2d', image: '/images/woodland-camo.jpg' },
  { id: 'classic-black', name: 'Classic Black', value: '#000000', image: '/images/classic-black.jpg' },
  { id: 'navy-blue', name: 'Navy Blue', value: '#1e3a8a', image: '/images/navy-blue.jpg' },
  
]