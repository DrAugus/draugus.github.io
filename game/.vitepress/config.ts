import { defineConfig } from 'vitepress';
import { navbar_zh } from './navbar';
import { sidebar_zh } from './sidebar';
import { withPwa } from '@vite-pwa/vitepress'

const ogUrl = 'https://draugus.github.io'

export default withPwa(defineConfig({
  // These are app level configs.
  lang: 'zh-CN',
  title: 'Augus Game',
  description: '原神启动',
  base: "/",
  lastUpdated: true,
  cleanUrls: true,
  head: [
    // ['meta', { name: 'theme-color', content: '#3c8772' }],
    ['link', { rel: 'icon', href: '/favicon.ico', }],
    ['meta', { name: 'author', content: 'Augus' }],
    ['meta', {
      name: 'keywords',
      content: 'PWA, VitePress, Augus, Vite, Game, AugusMeow, 游戏, 原神, Genshin Impact, Genshin, 崩坏星穹铁道, ZZZ, 祈愿, 抽卡, banner',
    }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: 'AugusのGame' }],
    ['meta', { property: 'og:description', content: '原神启动' }],
    ['meta', { property: 'og:url', content: ogUrl }],
    ['link', { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' }],
  ],
  sitemap: {
    hostname: ogUrl
  },
  themeConfig: {
    logo: '/logo/logo.jpg',
    nav: navbar_zh,
    sidebar: sidebar_zh,
    socialLinks: [
      { icon: 'github', link: 'https://github.com/DrAugus/draugus.github.io/tree/master/game' },
    ],
    editLink: {
      pattern: 'https://github.com/DrAugus/draugus.github.io/tree/master/game/:path',
      text: '在 GitHub 编辑',
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
    outlineTitle: '本页内容',

    algolia: {
      appId: 'TMOT9B7BHV',
      apiKey: '8870d1a7427df92c33d2db21368d01d1',
      indexName: 'augusmeowio',
      placeholder: '搜索',
      translations: {
        button: {
          buttonText: '搜索',
          buttonAriaLabel: '搜索'
        },
        modal: {
          searchBox: {
            resetButtonTitle: '清除查询条件',
            resetButtonAriaLabel: '清除查询条件',
            cancelButtonText: '取消',
            cancelButtonAriaLabel: '取消'
          },
          startScreen: {
            recentSearchesTitle: '搜索历史',
            noRecentSearchesText: '没有搜索历史',
            saveRecentSearchButtonTitle: '保存至搜索历史',
            removeRecentSearchButtonTitle: '从搜索历史中移除',
            favoriteSearchesTitle: '收藏',
            removeFavoriteSearchButtonTitle: '从收藏中移除'
          },
          errorScreen: {
            titleText: '无法获取结果',
            helpText: '你可能需要检查你的网络连接'
          },
          footer: {
            selectText: '选择',
            navigateText: '切换',
            closeText: '关闭',
            searchByText: '搜索提供者'
          },
          noResultsScreen: {
            noResultsText: '无法找到相关结果',
            suggestedQueryText: '你可以尝试查询',
            reportMissingResultsText: '你认为该查询应该有结果？',
            reportMissingResultsLinkText: '点击反馈'
          }
        }
      }
    },
  },
  markdown: {
    container: {
      tipLabel: '提示',
      warningLabel: '警告',
      dangerLabel: '危险',
      infoLabel: '信息',
      detailsLabel: '详细信息'
    },
  },
  pwa: {
    outDir: '.vitepress/dist',
    registerType: 'prompt',
    includeManifestIcons: false,
    selfDestroying: true,
    manifest: {
      id: '/',
      name: 'AugusのGame',
      short_name: 'AugusのGame',
      description: '原神启动',
      theme_color: '#ffffff',
      icons: [
        {
          src: 'home.png',
          sizes: '192x192',
          type: 'image/png',
        },
        {
          src: 'home.png',
          sizes: '512x512',
          type: 'image/png',
        },
      ],
    },
    workbox: {
      globPatterns: ['**/*.{css,js,html,svg,png,ico,txt,woff2}'],
      maximumFileSizeToCacheInBytes: 20971520, // 10Mb
      runtimeCaching: [
        {
          urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
          handler: 'CacheFirst',
          options: {
            cacheName: 'google-fonts-cache',
            expiration: {
              maxEntries: 10,
              maxAgeSeconds: 60 * 60 * 24 * 365, // <== 365 days
            },
            cacheableResponse: {
              statuses: [0, 200],
            },
          },
        },
        {
          urlPattern: /^https:\/\/fonts\.gstatic\.com\/.*/i,
          handler: 'CacheFirst',
          options: {
            cacheName: 'gstatic-fonts-cache',
            expiration: {
              maxEntries: 10,
              maxAgeSeconds: 60 * 60 * 24 * 365, // <== 365 days
            },
            cacheableResponse: {
              statuses: [0, 200],
            },
          },
        },
        {
          urlPattern: /^https:\/\/cdn\.jsdelivr\.net\/.*/i,
          handler: 'NetworkFirst',
          options: {
            cacheName: 'jsdelivr-images-cache',
            expiration: {
              maxEntries: 10,
              maxAgeSeconds: 60 * 60 * 24 * 7, // <== 7 days
            },
            cacheableResponse: {
              statuses: [0, 200],
            },
          },
        },
      ],
    },
  },
}));