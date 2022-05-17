import type {SidebarConfig} from '@vuepress/theme-default'

export const main: SidebarConfig = {
  '/': [
    {
      text: 'Guide',
      collapsible: false,
      children: [
        '/life/',
        '/life/features-overview',
      ]
    },

    {
      text: 'Feature',
      collapsible: false,
      children: [
        '/life/features/feat-temp',
      ],
    },

    {
      text: 'FAQ',
      collapsible: false,
      children: [
        "/life/FAQ/wrong-temp",
      ],
    },

    {
      text: 'Code',
      collapsible: false,
      children: [
        "/code",
      ],
    },
  ],

  '/i18n/zh/': [
    {
      text: '开始使用',
      collapsible: false,
      children: [
        '/i18n/zh/life/',
        '/i18n/zh/life/features-overview',
      ]
    },

    {
      text: '功能指南',
      collapsible: false,
      children: [
        '/i18n/zh/life/features/feat-temp',
      ],
    },

    {
      text: '常见问题',
      collapsible: false,
      children: [
        "/i18n/zh/life/FAQ/wrong-temp",
      ],
    },

    {
      text: '编程指南',
      collapsible: false,
      children: [
        "/i18n/zh/code",
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

  '/i18n/zh/development': [
    {
      text: "开发指南",
      collapsible: false,
      children: [
        '/i18n/zh/development/struct',
      ]
    }
  ],

  '/i18n/zh/code': [
    {
      text: "编程指南",
      collapsible: false,
      children: [
        '/i18n/zh/code/',
        '/i18n/zh/code/audition/',
        '/i18n/zh/code/audition/problems',
        '/i18n/zh/code/audition/cpp',
        '/i18n/zh/code/audition/algorithm',
        '/i18n/zh/code/audition/os',
        '/i18n/zh/code/audition/network_protocol',
        '/i18n/zh/code/audition/database',
        '/i18n/zh/code/audition/java',
        '/i18n/zh/code/audition/front_end',
        '/i18n/zh/code/audition/sys_design',
        '/i18n/zh/code/audition/non_tech',
      ]
    }
  ],
}
