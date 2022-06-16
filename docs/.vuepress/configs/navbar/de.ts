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
            link: 'https://draugus.github.io/RoyalFamily/'
          },
        ]
      },
      {
        text: 'Blog',
        children: [
          {
            text: 'bolg',
            link: 'https://draugus.github.io/'
          },
          {
            text: 'Spiel',
            link: 'https://draugus.github.io/list/genshin'
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
