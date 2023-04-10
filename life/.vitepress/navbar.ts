export const navbar = [
  { text: '导航', link: 'https://augusmeow.github.io/' },
  { text: '吃点儿', link: '/eat/', activeMatch: '/eat/' },
  {
    text: '旅行',
    items: [
      { text: '介绍', link: '/trip/' },
      { text: '国内', link: '/trip/china/', activeMatch: '/trip/china/' },
      { text: '国外', link: '/trip/abroad/', activeMatch: '/trip/abroad/' },
    ]
  },

]