const url_prefix = '/i18n/fr';

export const navbar_fr: Partial<any> = [
  {
    text: 'Domicile',
    link: url_prefix + '/home/'
  },
  {
    text: 'La vie',
    link: url_prefix + '/life'
  },
  {
    text: "Code",
    children: [
      {
        text: 'audition',
        children: [
          {
            text: 'Entretien du programmeur',
            link: url_prefix + '/code/audition/'
          },
        ]
      },
    ]
  },
  {
    text: 'Liens',
    children: [
      {
        text: 'Famille royale',
        children: [
          {
            text: 'Famille Windsor',
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
            text: 'Jeu',
            link: 'https://augusmeow.cn/list/genshin'
          },
        ]
      },
    ]
  },
  {
    text: 'Parrainer',
    link: url_prefix + '/life/statement/sponsor'
  },
]
