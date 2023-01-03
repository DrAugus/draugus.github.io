export default defineNuxtConfig({
  extends: '@nuxt-themes/docus',
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
    documentDriven: true,
    highlight: {
      theme: {
        dark: 'github-dark',
        default: 'github-light'
      },
      preload: [
        'js', 'ts', 'html', 'css', 'vue',
        'cpp', 'py', 'sql', 'c',
        'diff', 'shell', 'markdown',
        'docker',
        'json', 'yaml', 'bash', 'ini'
      ]
    },
    navigation: {
      fields: ['icon', 'titleTemplate', 'aside']
    }
  },
})