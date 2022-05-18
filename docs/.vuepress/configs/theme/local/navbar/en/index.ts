export const navbar_en: Partial<any> = [
  {
    text: 'Home',
    link: '/home/'
  },
  {
    text: "Life",
    link: '/life'
  },
  {
    text: "Code",
    children: [
      {
        text: 'Audition',
        children: [
          {
            text: 'Code Everything',
            link: '/code/'
          },
          {
            text: 'Code Audition',
            link: '/code/audition/'
          },
        ]
      },
    ]
  },
  {
    text: 'Links',
    children: [
      {
        text: 'Royal Family',
        children: [
          {
            text: 'Windsor Family',
            link: 'https://augusmeow.cn/RoyalFamily/'
          },
        ]
      },
      {
        text: 'Blog',
        children: [
          {
            text: 'Bolg',
            link: 'https://augusmeow.cn/'
          },
          {
            text: 'Genshin',
            link: 'https://augusmeow.cn/list/genshin'
          },
        ]
      },
    ]
  },
  {
    text: 'Sponsor',
    link: '/sponsor'
  },
]
