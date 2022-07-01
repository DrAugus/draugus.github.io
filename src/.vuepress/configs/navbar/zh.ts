import {navbar} from "vuepress-theme-hope";

const url_prefix = '';

const url_life = url_prefix + '/life';
const url_learn = url_prefix + '/learn';
const url_social = url_prefix + '/social';

export const navbar_zh = navbar([
  url_prefix + "/",
  {
    text: "生活",
    icon: 'bed',
    link: url_life + '/',
  },
  {
    text: '学习',
    icon: 'book',
    children: [
      {
        text: '学术领域',
        icon: 'award',
        link: url_learn + '/'
      },
      {
        text: '领域展开',
        children: [
          {
            text: '人文',
            icon: 'egg',
            link: url_learn + '/humanities/'
          },
          {
            text: '社会',
            icon: 'binoculars',
            link: url_learn + '/social-science/'
          },
          {
            text: '自然',
            icon: 'bong',
            link: url_learn + '/natural-science/'
          },
          {
            text: '形式',
            icon: 'code-branch',
            link: url_learn + '/formal-science/'
          },
          {
            text: '应用',
            icon: 'chart-line',
            link: url_learn + '/applied-science/'
          },
        ]
      }
    ]
  },
  {
    text: '社会',
    icon: 'diagnoses',
    link: url_social + '/',
  },
  {
    text: '外链',
    icon: 'democrat',
    children: [
      {
        text: '原神',
        link: 'https://draugus.github.io/genshin'
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
    icon: 'euro-sign',
    link: url_prefix + '/sponsor'
  },

]);
