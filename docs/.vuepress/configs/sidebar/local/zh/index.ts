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
    text: '功能',
    collapsible: false,
    children: [
      url_prefix + '/life/features/feat-temp',
    ],
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