import { defineConfig } from 'vitepress'
import { navbar_zh } from './navbar'
import { sidebar_zh } from './sidebar'

export default defineConfig({
  // These are app level configs.
  title: 'Augus Game',
  description: 'Game',
  base: "/",
  lastUpdated: true,
  cleanUrls: true,
  head: [
    ['link', {
      rel: 'icon',
      href: '/favicon.ico',
    }],
    ['meta', { name: 'theme-color', content: '#3c8772' }],
  ],
  themeConfig: {
    logo: '/logo/logo.jpg',
    nav: navbar_zh,
    sidebar: sidebar_zh,
    socialLinks: [
      { icon: 'github', link: 'https://github.com/DrAugus/draugus.github.io/tree/master/game' },
    ],
    editLink: {
      pattern: 'https://github.com/DrAugus/draugus.github.io/tree/master/game/:path',
      text: '在 Github 编辑',
    },
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2019-present Augus'
    },
    lastUpdatedText: '上次更新',
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },
    darkModeSwitchLabel: '主题色切换',
    sidebarMenuLabel: '菜单',
    returnToTopLabel: '返回顶部',
    langMenuLabel: '切换语言',
  }
})