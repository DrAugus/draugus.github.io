import { defineConfig, UserConfig } from 'vitepress';

// Extend UserConfig to include the 'pwa' property
interface ExtendedUserConfig extends UserConfig {
    pwa?: Record<string, any>;
}
import { navbar } from './navbar';
import { sidebar } from './sidebar';
import { withPwa } from '@vite-pwa/vitepress'

const ogUrl = 'https://augusmeow.github.io'

export default withPwa(defineConfig(<ExtendedUserConfig>{
    // These are app level configs.
    lang: 'zh-CN',
    title: 'Augusの享楽',
    description: '吃什么 去哪玩',
    base: "/",
    lastUpdated: true,
    cleanUrls: true,
    head: [
        // ['meta', { name: 'theme-color', content: '#3eaf7c' }],
        ['link', { rel: 'icon', href: '/logo.png', }],
        ["link", { rel: "stylesheet", href: "//unpkg.com/heti/umd/heti.min.css", },],
        ['meta', { name: 'author', content: 'Augus' }],
        ['meta', {
            name: 'keywords',
            content: 'PWA, VitePress, Augus, Vite, Life, AugusMeow, Trip, Travel, 旅行',
        }],
        ['meta', { property: 'og:type', content: 'website' }],
        ['meta', { property: 'og:title', content: 'Augusの享楽' }],
        ['meta', { property: 'og:description', content: '吃什么 去哪玩' }],
        ['meta', { property: 'og:url', content: ogUrl }],
        ['link', { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' }],
    ],
    // refer
    //  https://vitepress.dev/guide/sitemap-generation
    //  https://github.com/vite-pwa/vitepress/tree/main/examples
    sitemap: {
        hostname: ogUrl
    },
    themeConfig: {
        logo: '/logo.png',
        nav: navbar,
        sidebar: sidebar,
        socialLinks: [
            {
                icon: {
                    svg: '<svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-heart icon-sponsor mr-1 v-align-middle color-fg-sponsors anim-pulse-in">    <path d="m8 14.25.345.666a.75.75 0 0 1-.69 0l-.008-.004-.018-.01a7.152 7.152 0 0 1-.31-.17 22.055 22.055 0 0 1-3.434-2.414C2.045 10.731 0 8.35 0 5.5 0 2.836 2.086 1 4.25 1 5.797 1 7.153 1.802 8 3.02 8.847 1.802 10.203 1 11.75 1 13.914 1 16 2.836 16 5.5c0 2.85-2.045 5.231-3.885 6.818a22.066 22.066 0 0 1-3.744 2.584l-.018.01-.006.003h-.002ZM4.25 2.5c-1.336 0-2.75 1.164-2.75 3 0 2.15 1.58 4.144 3.365 5.682A20.58 20.58 0 0 0 8 13.393a20.58 20.58 0 0 0 3.135-2.211C12.92 9.644 14.5 7.65 14.5 5.5c0-1.836-1.414-3-2.75-3-1.373 0-2.609.986-3.029 2.456a.749.749 0 0 1-1.442 0C6.859 3.486 5.623 2.5 4.25 2.5Z"></path></svg>'
                },
                link: 'https://github.com/sponsors/DrAugus'
            },
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
    // https://vite-pwa-org.netlify.app/frameworks/vitepress.html
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
                    src: 'home-192x192.png',
                    sizes: '192x192',
                    type: 'image/png',
                },
                {
                    src: 'home-512x512.png',
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
