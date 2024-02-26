---
outline: [2, 4]
---
# 游记

旅行的美好应该被记录下来。

<script setup>
import ACardLinks from '../../.vitepress/components/ACardLinks.vue'

import { TRAVELOGUE_DATA } from '../../.vitepress/data/trip/travelogueCard'
</script>

<ACardLinks v-for="{title, items} in TRAVELOGUE_DATA" :title="title" :items="items" />
