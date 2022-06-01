import {SidebarConfigArray} from "@vuepress/theme-default/lib/shared/nav";
import {sidebar} from "vuepress-theme-hope";

const url_prefix = ''

const sidebar_en_life = [
  {
    text: 'Life',
    collapsible: false,
    children: [
      url_prefix + '/life/',
      url_prefix + '/life/features-overview',
    ]
  },
  {
    text: 'Social',
    collapsible: false,
    children: [
      url_prefix + '/life/social/',
    ]
  },
  {
    text: 'Accident',
    collapsible: false,
    children: [
      url_prefix + '/life/social/accident/2018-Chongqing-bus-crash',
      url_prefix + '/life/social/accident/2020-Anshun-bus-crash',
      url_prefix + '/life/social/accident/2022-China-Eastern-Airlines-Flight-5735',
    ]
  },
  {
    text: 'Memory',
    collapsible: false,
    children: [
      url_prefix + '/life/memory/',
    ]
  },
  {
    text: 'FAQ',
    collapsible: false,
    children: [
      url_prefix + '/life/FAQ/wrong-temp',
    ],
  },
]

const sidebar_en_code = [
  {
    text: 'Code',
    collapsible: false,
    children: [
      url_prefix + '/code/',
      url_prefix + '/code/audition/',
    ]
  },
  {
    text: 'Audition',
    collapsible: false,
    children: [
      url_prefix + '/code/audition/problems',
      url_prefix + '/code/audition/cpp',
      url_prefix + '/code/audition/algorithm',
      url_prefix + '/code/audition/os',
      url_prefix + '/code/audition/network_protocol',
      url_prefix + '/code/audition/database',
      url_prefix + '/code/audition/java',
      url_prefix + '/code/audition/front_end',
      url_prefix + '/code/audition/sys_design',
      url_prefix + '/code/audition/non_tech',
    ]
  },
]

const sidebar_en_development = [
  {
    text: 'Guide',
    collapsible: false,
    children: []
  },
  {
    text: 'Structure',
    collapsible: false,
    children: [
      url_prefix + '/development/struct',
    ],
  },
]


export const sidebar_en = sidebar({
  '/': [],
  '/life': sidebar_en_life,
  '/code': sidebar_en_code,
  '/development': sidebar_en_development,
})