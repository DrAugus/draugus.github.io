---
layoutClass: layout-card
outline: [2, 4]
---

# 链接收录

<script setup>
import ACardLinks from './.vitepress/components/ACardLinks.vue'

import { NAV_DATA } from './.vitepress/data/nav'
</script>
<style src="./.vitepress/style/layout-card.scss"></style>

<ACardLinks v-for="{title, items} in NAV_DATA" :title="title" :items="items" :target="'blank'" />

----

> 参考[茂茂](https://notes.fe-mm.com/nav)
