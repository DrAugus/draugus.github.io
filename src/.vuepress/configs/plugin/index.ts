import {docsearchPlugin} from '@vuepress/plugin-docsearch'
import { PluginConfig } from 'vuepress'
import {googleAnalyticsPlugin} from '@vuepress/plugin-google-analytics'

export const main:PluginConfig = [
  docsearchPlugin({
    appId: 'FYSTNJLMWZ',
    apiKey: '15ca6881fc750ff0327aac7c0f47d7df',
    indexName: 'augusmeow',
    locales: {
      '/': {
        placeholder: '搜索',
        translations: {
          button: {
            buttonText: '搜索',
          },
        },
      },
      '/i18n/en/': {
        placeholder: 'Search',
        translations: {
          button: {
            buttonText: 'Search',
          },
        },
      },
      '/i18n/kr/': {
        placeholder: '검색',
        translations: {
          button: {
            buttonText: '검색',
          },
        },
      },
      '/i18n/it/': {
        placeholder: 'ricerca',
        translations: {
          button: {
            buttonText: 'ricerca',
          },
        },
      },
      '/i18n/fr/': {
        placeholder: 'chercher',
        translations: {
          button: {
            buttonText: 'chercher',
          },
        },
      },
      '/i18n/de/': {
        placeholder: 'Suche',
        translations: {
          button: {
            buttonText: 'Suche',
          },
        },
      },
    },
  }),
  googleAnalyticsPlugin({
    id: "G-4HT2V3H3E4",
  }),
]
