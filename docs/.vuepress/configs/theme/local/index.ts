import {LocaleConfig} from "@vuepress/shared";

export const website = "https://augusmeow.cn/"

export const theme_local: LocaleConfig = {

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
                link: website + 'RoyalFamily/'
              },
            ]
          },
          {
            text: 'Blog',
            children: [
              {
                text: 'bolg',
                link: website + ''
              },
              {
                text: 'genshin',
                link: website + 'list/genshin'
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
                link: website + 'RoyalFamily/'
              },
            ]
          },
          {
            text: '博客',
            children: [
              {
                text: '博文',
                link: website + ''
              },
              {
                text: '原神',
                link: website + 'list/genshin'
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

}