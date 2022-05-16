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
        '/documents/features/feat-temp.md',
      ],
    },

    {
      text: '常见问题',
      collapsible: false,
      children: [
        "/documents/FAQ/wrong-temp.md",
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
}
