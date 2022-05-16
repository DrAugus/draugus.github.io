import type {SidebarConfig} from '@vuepress/theme-default'

export const main: SidebarConfig = {
  '/': [
    {
      text: '开始使用',
      collapsible: false,
      children: [
        '/documents/',
        '/documents/features-overview',
      ]
    },

    {
      text: '功能指南',
      collapsible: false,
      children: [
        '/documents/features/feat-temp',
      ],
    },

    {
      text: '常见问题',
      collapsible: false,
      children: [
        "/documents/FAQ/wrong-temp",
      ],
    },

    {
      text: '编程指南',
      collapsible: false,
      children: [
        "/code",
      ],
    },
  ],

  '/development': [
    {
      text: "开发指南",
      collapsible: false,
      children: [
        '/development/struct',
      ]
    }
  ],

  '/code': [
    {
      text: "编程指南",
      collapsible: false,
      children: [
        '/code/',
        '/code/audition/',
        '/code/audition/problems',
        '/code/audition/cpp',
        '/code/audition/algorithm',
        '/code/audition/os',
        '/code/audition/network_protocol',
        '/code/audition/database',
        '/code/audition/java',
        '/code/audition/front_end',
        '/code/audition/sys_design',
        '/code/audition/non_tech',
      ]
    }
  ],
}
