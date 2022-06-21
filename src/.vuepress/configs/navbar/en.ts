import {navbar} from "vuepress-theme-hope";

const url_prefix = '/i18n/en';

export const navbar_en = navbar([
  url_prefix + "/",
  url_prefix+ "/home",
  {
    text: "Life",
    icon: 'bed',
    link: url_prefix + '/life'
  },
  {
    text: "Learn",
    icon: 'book',
    children: [
      {
        text: 'Code',
        link: url_prefix + '/code/'
      },
      {
        text: 'Learn',
        link: url_prefix + '/learn/'
      },
    ]
  },
  {
    text: 'Links',
    icon: 'democrat',
    children: [
      {
        text: 'Royal Family',
        children: [
          {
            text: 'Windsor Family',
            link: 'https://draugus.github.io/RoyalFamily/'
          },
        ]
      },
      {
        text: 'Blog',
        children: [
          {
            text: 'Bolg',
            link: 'https://draugus.github.io/'
          },
          {
            text: 'Genshin',
            link: 'https://draugus.github.io/list/genshin'
          },
        ]
      },
    ]
  },
  {
    text: 'Sponsor',
    icon: 'euro-sign',
    link: url_prefix + '/sponsor'
  },
])
