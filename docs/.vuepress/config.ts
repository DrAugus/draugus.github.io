import {defineUserConfig} from 'vuepress'
import type {DefaultThemeOptions} from 'vuepress'
import {sidebar} from './configs'

const site_url = "https://augusmeow.cn/"

export default defineUserConfig<DefaultThemeOptions>({
  head: [
    ["link", {rel: "icon", href: "/logo/favicon.ico"}],
    ["script", {src: "https://cdn.jsdelivr.net/npm/cfga@1.0.3", async: true}],
  ],
  lang: 'en-US',
  title: 'Docs',
  description: 'only docs base',
  locales: {
    // 键名是该语言所属的子路径
    // 作为特例，默认语言可以使用 '/' 作为其路径。
    '/': {
      lang: 'en-US', // 将会被设置为 <html> 的 lang 属性
      title: 'Docs',
      description: 'only docs base'
    },
    '/zh/': {
      lang: 'zh-CN',
      title: '文档',
      description: '基础文档生成'
    }
  },
  theme: '@vuepress/theme-default',
  themeConfig: {
    logo: '/logo/ico.jpg',

    locales: {
      '/': {
        navbar: [
          {
            text: 'Home',
            link: '/home/'
          },
          {
            text: "Docs",
            link: '/documents'
          },
          {
            text: "Code",
            children: [
              {
                text: 'audition',
                children: [
                  {
                    text: 'code audition',
                    link: '/code/audition/'
                  },
                ]
              },
            ]
          },
          {
            text: 'links',
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
            text: 'sponsor',
            link: '/documents/statement/sponsor.md'
          },
        ],
        selectText: 'Languages',
        label: 'English',
        editLinkText: 'edit',
        contributorsText: 'contributors',
        lastUpdatedText: 'last updated',
        tip: 'tip',
        warning: 'warning',
        danger: 'danger',
        notFound: ["NOT FOUND"],
        backToHome: 'back to home',
      },
      '/zh/': {
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
                text: '英国王室',
                children: [
                  {
                    text: '温莎',
                    link: site_url + 'RoyalFamily/'
                  },
                ]
              },
              {
                text: '博客',
                children: [
                  {
                    text: '博文',
                    link: site_url + ''
                  },
                  {
                    text: '原神',
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
        selectText: '选择语言',
        label: '简体中文',
        editLinkText: '编辑此页',
        contributorsText: '贡献者',
        lastUpdatedText: '上次更新',
        tip: '提示',
        warning: '告警',
        danger: '危险',
        notFound: ["未找到"],
        backToHome: '返回主页',
      }
    },
    repo: 'DrAugus/docs_base',
    docsRepo: 'DrAugus/docs_base',
    docsBranch: 'main',
    docsDir: 'docs',
    sidebar: sidebar.main,
    editLink: true,
    contributors: true,
    lastUpdated: true,
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
