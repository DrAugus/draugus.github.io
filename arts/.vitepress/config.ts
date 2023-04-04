import { defineConfig } from 'vitepress'
import { navbar } from './navbar'
import { sidebar } from './sidebar'

export default defineConfig({
    // These are app level configs.
    title: 'Augus Arts',
    description: 'Arts',
    base: "/arts/",
    lastUpdated: true,
    cleanUrls: true,
    head: [
        ['link', {
            rel: 'icon',
            href: '/favicon.ico',
        }],
        ["link", {
            rel: "stylesheet",
            href: "//unpkg.com/heti/umd/heti.min.css",
        },],
        ['meta', { name: 'theme-color', content: '#ff64b9' }],
    ],
    themeConfig: {
        logo: '/logo/logo.jpg',
        nav: navbar,
        sidebar: sidebar,
        socialLinks: [
            { icon: 'github', link: 'https://github.com/DrAugus/draugus.github.io/tree/master/arts' },
        ],
        editLink: {
            pattern: 'https://github.com/DrAugus/draugus.github.io/tree/master/arts/:path',
            text: '在 Github 编辑',
        },
        footer: {
            message: 'Released under the MIT License.',
            copyright: 'Copyright © 2023-present Augus'
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
            indexName: 'augusmeowio'
        },
    }
})
