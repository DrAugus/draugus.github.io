import {navbar} from "vuepress-theme-hope";

const url_prefix = '';

const url_life = url_prefix + '/life';
const url_learn = url_prefix + '/learn';
const url_social = url_prefix + '/social';

export const navbar_zh = navbar([
  url_prefix + "/",
  url_prefix + "/home",
  {
    text: "生活",
    icon:'bed',
    children: [
      {
        text: 'Apple',
        link: url_life + '/tech/'
      },
      {
        text: '游戏',
        link: url_life + '/game/'
      },
      {
        text: '旅行',
        link: url_life + '/trip/'
      },
      {
        text: '记忆',
        link: url_life + '/memory/'
      },
    ]
  },
  {
    text: '学习',
    icon:'book',
    children: [
      {
        text: '艺术',
        link: url_learn + '/art/'
      },
      {
        text: '面试',
        link: url_learn + '/code/audition/'
      },
      {
        text: '开发此项目',
        link: url_learn + '/development'
      },
    ]
  },
  {
    text: '社会',
    icon:'diagnoses',
    children: [
      {
        text: '事故',
        link: url_social + '/accident/'
      },
      {
        text: '战争',
        link: url_social + '/war/'
      },
      {
        text: "人物",
        link: url_social + '/biography/',
      },
    ]
  },
  {
    text: '外链',
    icon:'democrat',
    children: [
      {
        text: '原神',
        link: 'https://draugus.github.io/list/genshin'
      },
      {
        text: '英国王室',
        children: [
          {
            text: '温莎',
            link: 'https://draugus.github.io/RoyalFamily/'
          },
        ]
      },
      {
        text: '博客',
        children: [
          {
            text: '博文',
            link: 'https://draugus.github.io/blog/'
          },
        ]
      },
    ]
  },
  {
    text: '赞助',
    icon:'euro-sign',
    link: url_prefix + '/sponsor'
  },

]);