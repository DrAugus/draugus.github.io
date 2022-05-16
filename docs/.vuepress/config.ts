import {defineUserConfig} from 'vuepress'
import type {DefaultThemeOptions} from 'vuepress'
import {sidebar} from './configs'

export default defineUserConfig<DefaultThemeOptions>({
  // 站点配置
  head: [
    ["link", {rel: "icon", href: "/logo/favicon.ico"}],
    ["script", {src: "https://cdn.jsdelivr.net/npm/cfga@1.0.3", async: true}],
  ],
  lang: 'en-US',
  title: 'Docs',
  description: 'only docs base',

  // 主题和它的配置
  theme: '@vuepress/theme-default',
  themeConfig: {
    logo: '/logo/ico.jpg',
    navbar: [
      {
        text: '主页',
        link: '/home/'
      },
      {
        text: "帮助文档",
        link: '/documents'
      },
      {
        text: '外链',
        children: [
          {
            text: 'Royal Family',
            children: [
              {
                text: 'House of Windsor Family',
                link: 'https://augusmeow.cn/RoyalFamily/'
              },
            ]
          },
          {
            text: 'Blog',
            children: [
              {
                text: 'bolg',
                link: 'https://augusmeow.cn/'
              },
              {
                text: 'genshin',
                link: 'https://augusmeow.cn/list/genshin'
              },
            ]
          },
        ]
      },
      {
        text: '赞助',
        link: '/documents/statement/sponsor.md'
      },
    ],
    sidebar: sidebar.main,
    repo: 'DrAugus/',
    editLink: true,
    editLinkText: '编辑此页',
    docsRepo: 'DrAugus/docs_base',
    docsBranch: 'main',
    docsDir: 'docs',
    contributors: false,
    lastUpdated: false,
    contributorsText: 'contributors',
    lastUpdatedText: 'last updated',
    tip: 'tip',
    warning: 'warning',
    danger: 'danger',
    notFound: ["NOT FOUND"],
    backToHome: 'back to home',
  },
  plugins: [
    [
      '@vuepress/plugin-search',
      {
        locales: {
          '/': {
            placeholder: 'search',
            hotKeys: ['/']
          }
        }
      }
    ],
    [
      "vuepress-plugin-clipboard",
      {
        align: "top"
      }
    ]
  ]
})
