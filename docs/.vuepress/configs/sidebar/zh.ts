import {sidebar} from "vuepress-theme-hope";

const url_prefix = '/i18n/zh';

const url_learn = url_prefix + '/learn';
const url_life = url_prefix + '/life';
const url_social = url_prefix + '/social';

const life_default = [
  {
    text: '生活',
    collapsible: false,
    children: [
      url_life + '/',
      url_life + '/features-overview',
    ]
  },
  {
    text: '小猫',
    collapsible: false,
    children: [
      url_life + '/cat',
    ]
  },
]

const sidebar_zh_life_tech = [
  life_default[0],
  {
    text: "Apple",
    collapsible: false,
    children: [
      url_life + '/tech/apple/',
      url_life + '/tech/apple/calendar',
      url_life + '/tech/apple/reflect',
      url_life + '/tech/apple/price',
    ]
  },
]

const sidebar_zh_life_game = [
  life_default[0],
  {
    text: "游戏",
    collapsible: false,
    children: [
      url_life + '/game/',
    ]
  },
]

const sidebar_zh_life_memory = [
  life_default[0],
  {
    text: '回忆',
    collapsible: false,
    children: []
  },
]

const sidebar_zh_life_trip = [
  life_default[0],
  {
    text: "旅行",
    collapsible: false,
    children: [
      url_life + '/trip/Beijing',
      url_life + '/trip/Chengdu',
      url_life + '/trip/Chongqing',
      url_life + '/trip/Hangzhou',
      url_life + '/trip/Nanjing',
      url_life + '/trip/Suzhou',
      url_life + '/trip/Xiamen',
    ]
  },
]

const learn_default = [{
  text: '学习',
  collapsible: false,
  children: [
    url_learn + '/',
    url_learn + '/FAQ/wrong-temp',
    url_learn + '/FAQ/QA',
  ]
}]

const sidebar_zh_learn_art = [
  learn_default[0],
  {
    text: '艺术',
    collapsible: false,
    children: [
      url_learn + '/art/',
      url_learn + '/art/music_theory',
    ],
  },
]

const sidebar_zh_learn_development = [
  learn_default[0],
  {
    text: '项目设计',
    collapsible: false,
    children: [
      url_learn + '/development/course',
      url_learn + '/development/struct',
    ]
  },
]

const sidebar_zh_learn_code = [
  learn_default[0],
  {
    text: '代码',
    collapsible: false,
    children: [
      url_learn + '/code/',
    ]
  },
  {
    text: '面试',
    collapsible: false,
    children: [
      url_learn + '/code/audition/',
      url_learn + '/code/audition/problems',
      url_learn + '/code/audition/cpp',
      url_learn + '/code/audition/algorithm',
      url_learn + '/code/audition/os',
      url_learn + '/code/audition/network_protocol',
      url_learn + '/code/audition/database',
      url_learn + '/code/audition/java',
      url_learn + '/code/audition/front_end',
      url_learn + '/code/audition/sys_design',
      url_learn + '/code/audition/non_tech',
    ]
  },
  {
    text: '指南',
    collapsible: false,
    children: []
  },
  {
    text: '架构',
    collapsible: false,
    children: [
      url_learn + '/development/course',
      url_learn + '/development/struct',
    ],
  },
]

const sidebar_zh_learn_language = [
  learn_default[0],
  {
    text: '语言',
    collapsible: false,
    children: [
      url_learn + '/language/',
    ],
  },
]

const social_default = [{
  text: '社会',
  collapsible: false,
  children: [
    url_social + '/',
  ]
}]

const sidebar_zh_social_accident = [
  social_default[0],

  {
    text: '事故',
    collapsible: false,
    children: [
      url_social + '/accident/',
      url_social + '/accident/2018-Chongqing-bus-crash',
      url_social + '/accident/2020-Anshun-bus-crash',
      url_social + '/accident/2022-China-Eastern-Airlines-Flight-5735',
    ]
  },
]

const sidebar_zh_social_biography = [
  social_default[0],
  {
    text: "人物",
    collapsible: false,
    children: [
      url_social + '/biography/donald/',
      url_social + '/biography/donald/ivanka',
      url_social + '/biography/taylor',
      url_social + '/biography/taylor/2022NYU',
    ]
  },

]

const sidebar_zh_social_war = [
  social_default[0],
  {
    text: "战争",
    collapsible: false,
    children: [
      url_social + '/war/',
    ]
  },

]

export const sidebar_zh = sidebar({
  '/i18n/zh/': ["", "home", "slide"],

  '/i18n/zh/life/': [life_default[0], life_default[1], '/i18n/zh/life/tech', '/i18n/zh/life/game', '/i18n/zh/life/memory', '/i18n/zh/life/trip'],

  '/i18n/zh/life/tech': sidebar_zh_life_tech,
  '/i18n/zh/life/game': sidebar_zh_life_game,
  '/i18n/zh/life/memory': sidebar_zh_life_memory,
  '/i18n/zh/life/trip': sidebar_zh_life_trip,

  '/i18n/zh/learn/': [learn_default[0], '/i18n/zh/learn/art', '/i18n/zh/learn/development', '/i18n/zh/learn/code', '/i18n/zh/learn/language'],

  '/i18n/zh/learn/art': sidebar_zh_learn_art,
  '/i18n/zh/learn/development': sidebar_zh_learn_development,
  '/i18n/zh/learn/code': sidebar_zh_learn_code,
  '/i18n/zh/learn/language': sidebar_zh_learn_language,

  '/i18n/zh/social/': [social_default[0], '/i18n/zh/social/accident', '/i18n/zh/social/biography', '/i18n/zh/social/war'],

  '/i18n/zh/social/accident': sidebar_zh_social_accident,
  '/i18n/zh/social/biography': sidebar_zh_social_biography,
  '/i18n/zh/social/war': sidebar_zh_social_war,
})