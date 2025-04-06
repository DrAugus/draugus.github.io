---
outline: [2, 4]
---
# 赶路 <a href="/trip/"><Badge type="tip" text="旅行主页↗" /></a>

到处跑，到处跑。旅途[消耗](/trip/bill)，接下来[去哪儿呢](../where)

<script setup>
import ACardLinks from '../../.vitepress/components/ACardLinks.vue'

import { CARD_JOURNEY_DATA } from '../../.vitepress/data/trip/journey'
</script>

<ACardLinks v-for="{title, items} in CARD_JOURNEY_DATA" :title="title" :items="items" />
