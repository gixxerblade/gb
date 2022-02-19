interface Link {
  id: number,
  url: string,
  name: string,
}
export const links: Link[] = [
  {
    id: 0,
    url: '/',
    name: 'Home'
  },
  {
    id: 1,
    url: '/about',
    name: 'About',
  },
  {
    id: 2,
    url: '/contact',
    name: 'Contact'
  }
]
