import {navbar} from "vuepress-theme-hope";

const url_prefix = '';

export const navbar_en = navbar([
  "/",
  "/home",
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
    icon: 'euro-sign',
    link: url_prefix + '/sponsor'
  },
])
