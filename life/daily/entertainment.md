---
layoutClass: layout-card
outline: [2, 4]
---

# 看剧

<script setup>
import ACardLinks from '../.vitepress/components/ACardLinks.vue'

import { change2card } from '../.vitepress/data/entertainment'
</script>
<style src="../.vitepress/style/layout-card.scss"></style>

<ACardLinks v-for="{title, items} in change2card()" :title="title" :items="items" :target="'blank'" />
