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
  ]
]
