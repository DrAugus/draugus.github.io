import {defineUserConfig} from 'vuepress'
import type {DefaultThemeOptions} from 'vuepress'
import {sidebar} from './configs'

const site_url = "https://augusmeow.cn/"

export default defineUserConfig<DefaultThemeOptions>({
  head: [
    ["link", {rel: "icon", href: "/logo/favicon.ico"}],
    ["script", {src: "https://cdn.jsdelivr.net/npm/cfga@1.0.3", async: true}],
  ],
  base:"/Augus/",
  lang: 'en-US',
  title: 'AUGUS',
  description: 'Record Everything',
  locales: {
    // 键名是该语言所属的子路径
    // 作为特例，默认语言可以使用 '/' 作为其路径。
    '/': {
      lang: 'en-US',
      title: 'AUGUS',
      description: 'Record Everything'
    },
    '/i18n/fr/': {
      lang: 'fr-FR',
      title: 'AUGUS',
      description: 'Tout enregistrer'
    },
    '/i18n/de/': {
      lang: 'de-DE',
      title: 'AUGUS',
      description: 'Alles aufzeichnen'
    },
    '/i18n/it/': {
      lang: 'it-IT',
      title: 'AUGUS',
      description: 'Registra tutto'
    },
    '/i18n/kr/': {
      lang: 'kr-KR',
      title: 'AUGUS',
      description: '모든 것을 기록'
    },
    '/i18n/zh/': {
      lang: 'zh-CN',
      title: 'AUGUS',
      description: '记录一切'
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
            text: 'Links',
            children: [
              {
                text: 'Royal Family',
                children: [
                  {
                    text: 'Windsor Family',
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
            text: 'Sponsor',
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
      '/i18n/zh/': {
        navbar: [
          {
            text: '主页',
            link: '/i18n/zh/home/'
          },
          {
            text: "帮助文档",
            link: '/i18n/zh/documents'
          },
          {
            text: "编程",
            children: [
              {
                text: '面试',
                children: [
                  {
                    text: '面试题解',
                    link: '/i18n/zh/code/audition/'
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
            link: '/i18n/zh/documents/statement/sponsor.md'
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
