const url_prefix = '';
export const navbar_en: Partial<any> = [
  {
    text: 'Home',
    link: url_prefix + '/home/'
  },
  {
    text: "Life",
    link: url_prefix + '/life'
  },
  {
    text: "Code",
    children: [
      {
        text: 'Audition',
        children: [
          {
            text: 'Code Everything',
            link: url_prefix + '/code/'
          },
          {
            text: 'Code Audition',
            link: url_prefix + '/code/audition/'
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
    link: url_prefix + '/sponsor'
  },
]
