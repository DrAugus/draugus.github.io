import {PluginConfig} from "@vuepress/core/lib/types/plugin";

const {googleAnalyticsPlugin} = require("@vuepress/plugin-google-analytics");
const {searchPlugin} = require('@vuepress/plugin-search')

export const main: PluginConfig = [
  searchPlugin({
    locales: {
      '/i18n/en/': {
        placeholder: 'search',
        hotKeys: ['/i18n/en/']
      },
      '/': {
        placeholder: 'ๆ็ดข',
        hotKeys: ['/']
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
        placeholder: '๊ฒ์',
        hotKeys: ['/i18n/kr/']
      },
    }
  }),
  googleAnalyticsPlugin({
    id: "G-4HT2V3H3E4",
  }),
]
