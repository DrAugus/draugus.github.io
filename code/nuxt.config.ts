export default defineNuxtConfig({
  extends: '@nuxt-themes/docus',
  runtimeConfig: {
    public: {
      content: {
        api: {
          baseURL: '/site-code/',
        }
      },
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
})