import { useData } from 'vitepress'
import Theme from 'vitepress/theme'
import { h } from 'vue'
import AsideSponsors from './components/AsideSponsors.vue'
import ReloadPrompt from './components/ReloadPrompt.vue'

import './style/rainbow.scss'
import './style/var.css'

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
}
