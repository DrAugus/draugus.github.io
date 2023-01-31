export default defineNuxtConfig({
  extends: '@nuxt-themes/docus',
  experimental: {
    payloadExtraction: false,
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