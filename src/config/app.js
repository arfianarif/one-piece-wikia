export const API_JIKAN = 'https://api.jikan.moe/v4'

export const API_ONEPIECE = 'https://api.api-onepiece.com/v2'

export const APP_NAVIGATIONS = [
  {
    id: 'home',
    label: 'home',
    slug: '/',
    children: [],
  },
  {
    id: 'world',
    label: 'world',
    slug: '/world',
    children: [
      {
        id: 'locations',
        label: 'locations',
        slug: '/world/locations',
      },
      {
        id: 'characters',
        label: 'characters',
        slug: '/world/characters',
      },
    ],
  },
]
