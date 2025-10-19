# 去哪儿<a href="/trip/"><Badge type="tip" text="旅行主页↗" /></a>

走过蓝色星球，[旅途记录(游记)](../travelogue/)，[探索(去过哪里)](../explore)驻足，或是[飞行](../flying/)，或是[赶路](../journey/)……  
本篇介绍各地的旅行推荐、美食推荐、玩法推荐。如果没有记录，则可能没去过，或是不推荐

<script setup>
import ACardLinks from '../../.vitepress/components/ACardLinks.vue'

import { TRIP_DATA } from '../../.vitepress/data/trip/place'
</script>

<ACardLinks v-for="{title, items} in TRIP_DATA" :title="title" :items="items"/>
