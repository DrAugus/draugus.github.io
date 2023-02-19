import { defineConfig } from 'vitepress'
import { sidebar } from './sidebar'

export default defineConfig({
    // These are app level configs.
    title: 'Augus Article',
    description: 'Article',
    base: "/article/",
    lastUpdated: true,
    cleanUrls: 'without-subfolders',
    head: [
        ['link', {
            rel: 'icon',
            href: '/favicon.ico',
        }],
        ['meta', { name: 'theme-color', content: '#ff64b9' }],
    ],
    themeConfig: {
        logo: '/logo/logo.jpg',
        sidebar: sidebar,
        socialLinks: [
            { icon: 'github', link: 'https://github.com/DrAugus/' },
        ],
        editLink: {
            pattern: 'https://github.com/DrAugus/draugus.github.io/tree/master/article/:path',
            text: 'Suggest changes to this page',
        },
        footer: {
            message: 'Released under the MIT License.',
            copyright: 'Copyright © 2023-present Augus'
        },

    }
})
