import { defineConfig } from 'vitepress';
import { navbar } from './navbar';
import { sidebar } from './sidebar';
import { withPwa } from '@vite-pwa/vitepress'

export default withPwa(defineConfig({
    // These are app level configs.
    lang: 'zh-CN',
    title: 'Augusの享楽',
    description: '吃什么 去哪玩',
    base: "/",
    lastUpdated: true,
    cleanUrls: true,
    head: [
        ['link', {
            rel: 'icon',
            href: '/logo.png',
        }],
        ["link", {
            rel: "stylesheet",
            href: "//unpkg.com/heti/umd/heti.min.css",
        },],
        // ['meta', { name: 'theme-color', content: '#3eaf7c' }],
        ['meta', {
            name: 'keywords',
            content: 'PWA, VitePress, Augus, Vite, Life, AugusMeow',
        }],
    ],
    // refer
    //  https://vitepress.dev/guide/sitemap-generation
    //  https://github.com/vite-pwa/vitepress/tree/main/examples
    sitemap: {
        hostname: 'https://augusmeow.github.io'
    },
    themeConfig: {
        logo: '/logo.png',
        nav: navbar,
        sidebar: sidebar,
        socialLinks: [
            { icon: 'github', link: 'https://github.com/DrAugus/draugus.github.io/tree/master/life' },
        ],
        editLink: {
            pattern: 'https://github.com/DrAugus/draugus.github.io/tree/master/life/:path',
            text: '在 GitHub 编辑',
        },

        outline: [2, 3],

        footer: {
            message: '吃好喝好 快乐地活下去',
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
        }
    },
    markdown: {
        container: {
            tipLabel: '提示',
            warningLabel: '警告',
            dangerLabel: '危险',
            infoLabel: '信息',
            detailsLabel: '详细信息'
        },
        math: true
    },
    // https://github.com/vite-pwa/vite-plugin-pwa/blob/main/docs/scripts/pwa.ts
    pwa: {
        outDir: '.vitepress/dist',
        registerType: 'prompt',
        includeManifestIcons: false,
        selfDestroying: true,
        manifest: {
            id: '/',
            name: 'Augusの享楽',
            short_name: 'Augusの享楽',
            description: 'Augusの享楽',
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
