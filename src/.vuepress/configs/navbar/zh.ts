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
    text: "原神",
    link: url_game + "/genshin/",
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
