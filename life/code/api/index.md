# API

## api 重定向

### vue

```js [vue.config.js]
// vue.config.js
module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'https://en.wikipedia.org',
        changeOrigin: true
      }
    }
  }
}
```

### vitepress

```js [vite.config.js]
// vite.config.js
module.exports = {
  server: {
    proxy: {
      '/api': {
        target: 'https://en.wikipedia.org',
        changeOrigin: true
      }
    }
  }
}
```
