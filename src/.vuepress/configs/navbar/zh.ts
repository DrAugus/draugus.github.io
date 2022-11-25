import { navbar } from "vuepress-theme-hope";

const url_prefix = '';

const url_life = url_prefix + '/life';
const url_food = url_prefix + '/food';
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
    text: "干饭",
    icon: 'cookie-bite',
    link: url_food + '/',
  },
  {
    text: "游戏",
    icon: 'gamepad',
    children: [
      {
        text: "原神",
        link: url_game + "/genshin/",
      },
    ]
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
      },
      {
        text: "工具",
        children: [
          {
            text: '工具使用',
            icon: 'bong',
            link: url_learn + '/tools/'
          },
        ]
      },

    ]
  },
  {
    text: "记录",
    icon: 'box',
    children: [
      {
        text: "意外事故",
        link: url_record + "/accident/",
      },
      {
        text: "健康生活",
        link: url_record + "/health/",
      },
      {
        text: "铭记历史",
        link: url_record + "/history/",
      },
      {
        text: "花草树木",
        link: url_record + "/plant/",
      },
      {
        text: "远离战争",
        link: url_record + "/war/",
      },
      {
        text: "偷乐",
        children: [
          {
            text: "乐",
            link: url_record + "/funny/",
          },
        ]
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
