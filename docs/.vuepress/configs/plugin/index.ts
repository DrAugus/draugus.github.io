import {PluginConfig} from "@vuepress/core/lib/types/plugin";

export const main: PluginConfig[] = [
  [
    '@vuepress/plugin-search',
    {
      locales: {
        '/': {
          placeholder: 'search',
          hotKeys: ['/']
        },
        '/i18n/zh/': {
          placeholder: '搜索',
          hotKeys: ['/i18n/zh/']
        },
        '/i18n/de/': {
          placeholder: 'Suche',
          hotKeys: ['/i18n/de/']
        },
        '/i18n/fr/': {
          placeholder: 'chercher',
          hotKeys: ['/i18n/fr/']
        },
        '/i18n/it/': {
          placeholder: 'ricerca',
          hotKeys: ['/i18n/it/']
        },
        '/i18n/kr/': {
          placeholder: '검색',
          hotKeys: ['/i18n/kr/']
        },
      }
    }
  ],
  [
    "vuepress-plugin-clipboard",
    {
      align: "top"
    }
  ],
  [
    "vuepress-plugin-giscus",
    {
      repo: "DrAugus/Augus",
      repoId: "R_kgDOHV19bA",
      category: "Announcements",
      categoryId: "DIC_kwDOHV19bM4CPJQy"
    }
  ],
]
