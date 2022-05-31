import {SidebarConfigArray} from "@vuepress/theme-default/lib/shared/nav";

const url_prefix = '/i18n/zh';

const url_blog = url_prefix + '/blog';
const url_learn = url_prefix + '/learn';
const url_life = url_prefix + '/life';
const url_social = url_prefix + '/social';

const life_default: SidebarConfigArray = [{
  text: '生活',
  collapsible: false,
  children: [
    url_life + '/',
    url_life + '/features-overview',
  ]
}]

export const sidebar_zh_life_tech: SidebarConfigArray = [
  life_default[0],
  {
    text: "Apple",
    collapsible: false,
    children: [
      url_life + '/tech/apple/',
      url_life + '/tech/apple/calendar',
      url_life + '/tech/apple/reflect',
    ]
  },
]

export const sidebar_zh_life_game: SidebarConfigArray = [
  life_default[0],
  {
    text: "游戏",
    collapsible: false,
    children: [
      url_life + '/game/',
    ]
  },
]

export const sidebar_zh_life_memory: SidebarConfigArray = [
  life_default[0],
  {
    text: '回忆',
    collapsible: false,
    children: []
  },
]

export const sidebar_zh_life_trip: SidebarConfigArray = [
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

const learn_default: SidebarConfigArray = [{
  text: '学习',
  collapsible: false,
  children: [
    url_learn + '/',
    url_learn + '/FAQ/wrong-temp',
  ]
}]

export const sidebar_zh_learn_art: SidebarConfigArray = [
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

export const sidebar_zh_learn_development: SidebarConfigArray = [
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

export const sidebar_zh_learn_code: SidebarConfigArray = [
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

export const sidebar_zh_learn_language: SidebarConfigArray = [
  learn_default[0],
  {
    text: '语言',
    collapsible: false,
    children: [
      url_learn + '/language/',
    ],
  },
]

const social_default: SidebarConfigArray = [{
  text: '社会',
  collapsible: false,
  children: [
    url_social + '/',
  ]
}]

export const sidebar_zh_social_accident: SidebarConfigArray = [
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

export const sidebar_zh_social_biography: SidebarConfigArray = [
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

export const sidebar_zh_social_war: SidebarConfigArray = [
  social_default[0],
  {
    text: "战争",
    collapsible: false,
    children: [
      url_social + '/war/',
    ]
  },

]

export const sidebar_zh_blog: SidebarConfigArray = [
  {
    text: "博客",
    collapsible: false,
    children: [
      url_blog + '/',
      url_blog + '/nanyang2shenyang',
    ]
  },
  {
    text: '散记',
    collapsible: false,
    children: [
      url_blog + '/linux',
      url_blog + '/stroll',
    ],
  },
]
