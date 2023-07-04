---
layoutClass: m-trip-place-layout
outline: [2, 3, 4]
sidebar: false
---

# 去哪儿

<script setup>
import ACardLinks from '../.vitepress/components/ACardLinks.vue'

import { TRIP_DATA } from '../.vitepress/data/trip/place'
</script>
<style src="../.vitepress/style/trip-place.scss"></style>

<ACardLinks v-for="{title, items} in TRIP_DATA" :title="title" :items="items"/>
