---
outline: [2, 4]
---

# 库

<script setup>
import ACardLinks from '../../.vitepress/components/ACardLinks.vue'

import { LIBS_DATA } from '../../.vitepress/data/libs'
</script>

<ACardLinks v-for="{title, items} in LIBS_DATA" :title="title" :items="items" :long="true" />
