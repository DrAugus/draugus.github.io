import {defineUserConfig} from 'vuepress'
import type {DefaultThemeOptions} from 'vuepress'
import {sidebar} from './configs'

const site_url = "https://augusmeow.cn/"

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
        text: "编程",
        children: [
          {
            text: '面试',
            children: [
              {
                text: '面试题解',
                link: '/code/audition/'
              },
            ]
          },
        ]
      },
      {
        text: '外链',
        children: [
          {
            text: 'Royal Family',
            children: [
              {
                text: 'House of Windsor Family',
                link: site_url + 'RoyalFamily/'
              },
            ]
          },
          {
            text: 'Blog',
            children: [
              {
                text: 'bolg',
                link: site_url + ''
              },
              {
                text: 'genshin',
                link: site_url + 'list/genshin'
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
    contributors: true,
    lastUpdated: true,
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
