export default defineNuxtConfig({
  extends: '@nuxt-themes/docus',
  // experimental: {
  //   payloadExtraction: false,
  // },
  app: {
    baseURL: '/docus/',
  },
  runtimeConfig: {
    public: {
      algolia: {
        applicationId: '',
        apiKey: '',
        langAttribute: 'lang',
        docSearch: {
          indexName: 'draugusio'
        }
      }
    }
  },
  content: {
    highlight: {
      preload: [
        'js', 'ts', 'html', 'css', 'vue',
        'cpp', 'py', 'sql', 'c',
        'diff', 'shell', 'markdown',
        'docker',
        'json', 'yaml', 'bash', 'ini'
      ]
    },
  },
})