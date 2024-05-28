---
outline: [2, 4]
---
# 编程

<script setup>
import ACardLinks from '../.vitepress/components/ACardLinks.vue'

import { DIR_CODE } from '../.vitepress/data/dirCode'
</script>

<ACardLinks v-for="{title, items} in DIR_CODE" :title="title" :items="items" />
