import {navbar} from "vuepress-theme-hope";

const url_prefix = '';

const url_life = url_prefix + '/life';
const url_game = url_prefix + '/game';
const url_learn = url_prefix + '/learn';
const url_record = url_prefix + '/record';
const url_code = url_prefix + '/code';

export const navbar_zh = navbar([
  url_prefix + "/",
  {
    text: "生活",
    icon: 'bed',
    link: url_life + '/',
  },
  {
    text: "游戏",
    icon: 'gamepad',
    link: url_game + '/',
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
    text: "记录",
    icon: 'box',
    link: url_record + '/',
  },
  {
    text: "编码",
    icon: 'code',
    link: url_code + '/',
  },
  {
    text: '赞助',
    icon: 'euro-sign',
    link: url_prefix + '/sponsor'
  },

]);
