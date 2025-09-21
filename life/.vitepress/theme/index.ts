import { useData } from 'vitepress'
import Theme from 'vitepress/theme'
import { h, watch } from 'vue'
import AsideSponsors from './components/AsideSponsors.vue'
import ReloadPrompt from './components/ReloadPrompt.vue'

import './style/rainbow.scss'
import './style/var.css'

let homePageStyle: HTMLStyleElement | undefined


export default {
  ...Theme,
  Layout: () => {
    const props: Record<string, any> = {}
    // 获取 frontmatter
    const { frontmatter } = useData()

    /* 添加自定义 class */
    if (frontmatter.value?.layoutClass) {
      props.class = frontmatter.value.layoutClass
    }

    return h(Theme.Layout, props, {
      'aside-bottom': () => h(AsideSponsors),
      'layout-bottom': () => h(ReloadPrompt),
    })
  },

  enhanceApp({ app, router }) {
    // 客户端逻辑
    if (typeof window !== 'undefined') {
      watch(
        () => router.route.data.relativePath,
        () => updateHomePageStyle(location.pathname === '/'),
        { immediate: true }
      )
    }
  },
}

function updateHomePageStyle(value: boolean) {
  if (value) {
    if (homePageStyle) return
    homePageStyle = document.createElement('style')
    homePageStyle.innerHTML = `
    :root {
      animation: rainbow 12s linear infinite;
    }`
    document.body.appendChild(homePageStyle)
  } else {
    if (!homePageStyle) return
    homePageStyle.remove()
    homePageStyle = undefined
  }
}