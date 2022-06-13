const url_prefix = '/i18n/de';
export const navbar_de: Partial<any> = [
  url_prefix + "/",
  url_prefix + "/home",
  {
    text: 'Leben',
    link: url_prefix + '/life'
  },
  {
    text: "Code",
    children: [
      {
        text: 'Vorsprechen',
        children: [
          {
            text: 'Programmierterview',
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
        text: 'Königliche Familie',
        children: [
          {
            text: 'Windsor-Familie',
            link: 'https://augusmeow.cn/RoyalFamily/'
          },
        ]
      },
      {
        text: 'Blog',
        children: [
          {
            text: 'bolg',
            link: 'https://augusmeow.cn/'
          },
          {
            text: 'Spiel',
            link: 'https://augusmeow.cn/list/genshin'
          },
        ]
      },
    ]
  },
  {
    text: 'Sponsor',
    link: url_prefix + '/life/statement/sponsor'
  },
]
