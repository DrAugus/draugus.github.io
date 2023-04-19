---
layoutClass: m-nav-layout
outline: [2, 3, 4]
---

<script setup>
import MNavLinks from './nav/components/MNavLinks.vue'

import { NAV_DATA } from './nav/data'
</script>
<style src="./nav/index.scss"></style>

# 链接收录

> 参考[茂茂](https://notes.fe-mm.com/nav)

<MNavLinks v-for="{title, items} in NAV_DATA" :title="title" :items="items"/>
