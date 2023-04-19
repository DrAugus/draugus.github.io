export const navbar = [
  { text: '导航', link: 'https://augusmeow.github.io/' },
  { text: '吃点儿', link: '/eat/', activeMatch: '^/eat' },
  {
    text: '旅行',
    items: [
      { text: '介绍', link: '/trip/' },
      {
        text: '去哪', items: [
          { text: '国内', link: '/trip/china/' },
          { text: '国外', link: '/trip/abroad/' },
        ]
      },
    ],
    activeMatch: '^/trip',
  },
  {
    text: '文科',
    items: [
      { text: '语言', link: '/arts/language/' },
      { text: '经济', link: '/arts/economics/' },
      { text: '历史', link: '/arts/history/' },
      { text: '乐理', link: '/arts/music/' },
      {
        text: '语文',
        items: [
          { text: '檄文', link: '/arts/xiwen/' },
          { text: '文章', link: '/arts/article/' },
        ],
      },
    ],
    activeMatch: '^/arts',
  },

]