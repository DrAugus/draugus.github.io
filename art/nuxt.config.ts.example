export default defineNuxtConfig({
  extends: '@nuxt-themes/docus',
  // https://github.com/nuxt/framework/discussions/7691
  // You can use new experimental.payloadExtraction: false 
  // flag in nuxt.config to opt-out as well.
  experimental: {
    payloadExtraction: false,
  },
  app: {
    baseURL: '/art/',
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