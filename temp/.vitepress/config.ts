import { defineConfig } from 'vitepress';

export default defineConfig({
    // These are app level configs.
    title: 'Augus',
    description: 'nothing',
    base: "/",
    lastUpdated: true,
    cleanUrls: true,
    head: [
        // ['link', {
        //   rel: 'icon',
        //   href: '/favicon.ico',
        // }],
        ['meta', { name: 'theme-color', content: '#3c8772' }],
    ],
    themeConfig: {
        logo: '/logo/logo.jpg',
        // nav: [],
        // sidebar: [],
        socialLinks: [
            { icon: 'github', link: 'https://github.com/DrAugus/resume' },
        ],
        // editLink: {
        //   pattern: 'https://github.com/DrAugus/resume/:path',
        //   text: '在 GitHub 编辑',
        // },
        footer: {
            //   message: 'Released under the MIT License.',
            //   copyright: 'Copyright © 2019-present Augus'
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
    }
});