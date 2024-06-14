---
outline: false
sidebar: false
lastUpdated: false
editLink: false
---

# 最近更新

<script setup>
import ACardLinks from './.vitepress/components/ACardLinks.vue'

import { RECENT_PAGE } from './.vitepress/data/recentUpdate'
</script>

<ACardLinks v-for="{title, items} in RECENT_PAGE" :title="title" :items="items" />
