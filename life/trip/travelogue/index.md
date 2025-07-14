---
outline: [2, 4]
---
# 游记<a href="/trip/"><Badge type="tip" text="旅行主页↗" /></a>

旅行的美好应该被记录下来。旅途[消耗](/trip/bill)，接下来[去哪儿呢](../where/)？已经[开拓的地方](../explore)……

写好游记，按照格式。游记页：日期、写好周几天气，列出出发前的计划，而后展示实际游记。将推荐的去处，整理到[去哪儿](../where/)页面。

<script setup>
import ACardLinks from '../../.vitepress/components/ACardLinks.vue'

import { CARD_TRAVELOGUE_DATA } from '../../.vitepress/data/trip/travelogue'
</script>

<ACardLinks v-for="{title, items} in CARD_TRAVELOGUE_DATA" :title="title" :items="items" />
