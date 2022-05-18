import {SidebarConfigArray} from "@vuepress/theme-default/lib/shared/nav";

const url_prefix = '/i18n/kr'

export const sidebar_kr_life: SidebarConfigArray = [
  {
    text: 'Life',
    collapsible: false,
    children: [
      url_prefix + '/life/',
      url_prefix + '/life/features-overview',
    ]
  },
  {
    text: 'Feature',
    collapsible: false,
    children: [
      url_prefix + '/life/features/feat-temp',
    ],
  },
  {
    text: 'FAQ',
    collapsible: false,
    children: [
      url_prefix + '/life/FAQ/wrong-temp',
    ],
  },
]

export const sidebar_kr_code: SidebarConfigArray = [
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

export const sidebar_kr_development: SidebarConfigArray = [
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