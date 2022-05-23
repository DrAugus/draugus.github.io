import {SidebarConfigArray} from "@vuepress/theme-default/lib/shared/nav";

const url_prefix = '/i18n/zh'

export const sidebar_zh_life: SidebarConfigArray = [
  {
    text: '生活',
    collapsible: false,
    children: [
      url_prefix + '/life/',
      url_prefix + '/life/features-overview',
    ]
  },
  {
    text: "旅行",
    collapsible: true,
    children: [
      url_prefix + '/life/trip/Beijing',
      url_prefix + '/life/trip/Chengdu',
      url_prefix + '/life/trip/Chongqing',
      url_prefix + '/life/trip/Hangzhou',
      url_prefix + '/life/trip/Nanjing',
      url_prefix + '/life/trip/Suzhou',
      url_prefix + '/life/trip/Xiamen',
    ]
  },
  {
    text: '事故',
    collapsible: false,
    children: [
      url_prefix + '/life/social/accident/2018-Chongqing-bus-crash',
      url_prefix + '/life/social/accident/2020-Anshun-bus-crash',
      url_prefix + '/life/social/accident/2022-China-Eastern-Airlines-Flight-5735',
    ]
  },
  {
    text: '回忆',
    collapsible: false,
    children: []
  },
  {
    text: '问题',
    collapsible: false,
    children: [
      url_prefix + '/life/FAQ/wrong-temp',
    ],
  },
]

export const sidebar_zh_code: SidebarConfigArray = [
  {
    text: '代码',
    collapsible: false,
    children: [
      url_prefix + '/code/',
      url_prefix + '/code/audition/',
    ]
  },
  {
    text: '面试',
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

export const sidebar_zh_development: SidebarConfigArray = [
  {
    text: '指南',
    collapsible: false,
    children: []
  },
  {
    text: '架构',
    collapsible: false,
    children: [
      url_prefix + '/development/struct',
    ],
  },
]

export const sidebar_zh_biography: SidebarConfigArray = [
  {
    text: "特朗普家族",
    collapsible: false,
    children: [
      url_prefix + '/biography/donald/',
      url_prefix + '/biography/donald/ivanka',
    ]
  }
]