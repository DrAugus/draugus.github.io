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
            text: '文学',
            icon: 'egg',
            link: url_learn + '/arts/'
          },
          {
            text: '史学',
            icon: 'binoculars',
            link: url_learn + '/history/'
          },
          {
            text: '语言',
            icon: 'code-branch',
            link: url_learn + '/language/'
          },
          {
            text: '理学',
            icon: 'bong',
            link: url_learn + '/science/'
          },
        ]
      }
    ]
  },
  {
    text: "记录",
    icon: 'box',
    children: [
      {
        text: "accident",
        link: url_record + "/accident/",
      },
      {
        text: "health",
        link: url_record + "/health/",
      },
      {
        text: "history",
        link: url_record + "/history/",
      },
      {
        text: "plant",
        link: url_record + "/plant/",
      },
      {
        text: "war",
        link: url_record + "/war/",
      },
      {
        text: "乐",
        link: url_record + "/funny/",
      },
    ],
  },
  {
    text: "编码",
    icon: 'code',
    children: [
      {
        text: '立即开发',
        link: url_code + '/development/'
      },
      {
        text: '疑难解答',
        link: url_code + '/FAQ/'
      },
      {
        text: '面试指南',
        link: url_code + '/interview/'
      },
      {
        text: '配环境',
        link: url_code + '/config-env'
      },
      {
        text: '未来',
        link: url_code + '/future/'
      },
      {
        text: 'Lua',
        link: url_code + '/lua/'
      },
      {
        text: 'Latex',
        link: url_code + '/latex'
      },
    ]
  },
  {
    text: '赞助',
    icon: 'euro-sign',
    link: url_prefix + '/sponsor'
  },

]);
