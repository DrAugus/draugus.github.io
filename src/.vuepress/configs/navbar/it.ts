const url_prefix = '/i18n/it';
export const navbar_it = [
  url_prefix + "/",
  url_prefix + "/home",
  {
    text: 'Vita',
    link: url_prefix + '/life'
  },
  {
    text: "Codice",
    children: [
      {
        text: 'Provino',
        children: [
          {
            text: 'Intervista al programmatore',
            link: url_prefix + '/code/audition/'
          },
        ]
      },
    ]
  },
  {
    text: 'Link',
    children: [
      {
        text: 'Famiglia reale',
        children: [
          {
            text: 'Famiglia Windsor',
            link: 'https://draugus.github.io/RoyalFamily/'
          },
        ]
      },
      {
        text: 'Blog',
        children: [
          {
            text: 'Blog',
            link: 'https://draugus.github.io/'
          },
          {
            text: 'Gioco',
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
