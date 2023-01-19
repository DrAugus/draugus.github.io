export default defineNuxtConfig({
  extends: '@nuxt-themes/docus',
  experimental: {
    payloadExtraction: false,
  },
  app: {
    baseURL: '/code/',
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
})