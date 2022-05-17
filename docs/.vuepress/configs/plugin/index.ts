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
          placeholder: 'search',
          hotKeys: ['/i18n/zh/']
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
