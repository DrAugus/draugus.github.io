// import {docsearchPlugin} from '@vuepress/plugin-docsearch'
import {PluginConfig} from 'vuepress'
import {googleAnalyticsPlugin} from '@vuepress/plugin-google-analytics'

export const plugin:PluginConfig = [
  // docsearchPlugin({
  //   appId: 'VM6JVT5NK4',
  //   apiKey: 'c0461d06c52659dbb87959e913623e9b',
  //   indexName: 'draugusio',
  //   locales: {
  //     '/': {
  //       placeholder: '搜索',
  //       translations: {
  //         button: {
  //           buttonText: '搜索',
  //         },
  //       },
  //     },
  //     '/i18n/en/': {
  //       placeholder: 'Search',
  //       translations: {
  //         button: {
  //           buttonText: 'Search',
  //         },
  //       },
  //     },
  //     '/i18n/kr/': {
  //       placeholder: '검색',
  //       translations: {
  //         button: {
  //           buttonText: '검색',
  //         },
  //       },
  //     },
  //     '/i18n/it/': {
  //       placeholder: 'ricerca',
  //       translations: {
  //         button: {
  //           buttonText: 'ricerca',
  //         },
  //       },
  //     },
  //     '/i18n/fr/': {
  //       placeholder: 'chercher',
  //       translations: {
  //         button: {
  //           buttonText: 'chercher',
  //         },
  //       },
  //     },
  //     '/i18n/de/': {
  //       placeholder: 'Suche',
  //       translations: {
  //         button: {
  //           buttonText: 'Suche',
  //         },
  //       },
  //     },
  //   },
  // }),
  googleAnalyticsPlugin({
    id: "G-4HT2V3H3E4",
  }),
]
