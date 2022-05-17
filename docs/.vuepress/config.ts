import {defineUserConfig} from 'vuepress'
import type {DefaultThemeOptions} from 'vuepress'
import {sidebar, themeInfo, plugin, siteLocalConfig} from './configs'

export default defineUserConfig<DefaultThemeOptions>({
  head: [
    ["link", {rel: "icon", href: "/logo/favicon.ico"}],
    ["script", {src: "https://cdn.jsdelivr.net/npm/cfga@1.0.3", async: true}],
  ],
  base: "/Augus/",
  lang: 'en-US',
  title: 'AUGUS',
  description: 'Record Everything',
  locales: siteLocalConfig.main,
  theme: '@vuepress/theme-default',
  themeConfig: {
    logo: '/logo/ico.jpg',
    locales: themeInfo.theme_local,
    repo: 'DrAugus/Augus',
    docsRepo: 'DrAugus/Augus',
    docsBranch: 'main',
    docsDir: 'docs',
    sidebar: sidebar.main,
    editLink: true,
    contributors: true,
    lastUpdated: true,
  },
  plugins: plugin.main,
})
