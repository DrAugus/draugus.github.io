---
layoutClass: layout-card
outline: [2, 4]
sidebar: false
---

# 去哪儿<a href="/trip/"><Badge type="tip" text="旅行主页↗" /></a>

走过蓝色星球，[旅途记录](./travelogue/)，[探索](./explore)驻足

<script setup>
import ACardLinks from '../.vitepress/components/ACardLinks.vue'

import { TRIP_DATA } from '../.vitepress/data/trip/place'
</script>
<style src="../.vitepress/style/layout-card.scss"></style>

<ACardLinks v-for="{title, items} in TRIP_DATA" :title="title" :items="items"/>
