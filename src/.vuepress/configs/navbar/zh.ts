const url_prefix = '';

const url_life = url_prefix + '/life';
const url_food = url_prefix + '/food';
const url_game = url_prefix + '/game';
const url_learn = url_prefix + '/learn';
const url_record = url_prefix + '/record';
const url_code = url_prefix + '/code';

export const navbar_zh = [
  url_prefix + "/",
  {
    text: "生活",
    link: url_life + '/',
  },
  {
    text: "干饭",
    link: url_food + '/',
  },
  {
    text: "原神",
    link: url_game + "/genshin/",
  },
  {
    text: '学习',
    children: [
      {
        text: '学术领域',
        link: url_learn + '/'
      },
      {
        text: '领域展开',
        children: [
          {
            text: '文',
            link: url_learn + '/arts/'
          },
          {
            text: '史',
            link: url_learn + '/history/'
          },
          {
            text: '语言',
            link: url_learn + '/language/'
          },
        ]
      },
    ]
  },
  {
    text: "记录",
    children: [
      {
        text: "铭记历史",
        link: url_record + "/history/",
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
    text: "开发",
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
    link: url_prefix + '/sponsor'
  },

]
