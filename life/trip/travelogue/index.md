---
outline: [2, 4]
---
# 游记

旅行的美好应该被记录下来。旅途[消耗](/trip/bill)，接下来[去哪儿呢](../where)

<script setup>
import ACardLinks from '../../.vitepress/components/ACardLinks.vue'

import { CARD_TRAVELOGUE_DATA } from '../../.vitepress/data/trip/travelogue'
</script>

<ACardLinks v-for="{title, items} in CARD_TRAVELOGUE_DATA" :title="title" :items="items" />
