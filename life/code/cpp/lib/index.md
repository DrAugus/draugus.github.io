---
layoutClass: m-nav-layout
outline: [2, 4]
---

# CPP LIBS

<script setup>
import ACardLinks from '../../../.vitepress/components/ACardLinks.vue'

import { CPP_LIBS_DATA } from '../../../.vitepress/data/cpplibs'
</script>
<style src="../../../.vitepress/style/nav.scss"></style>

<ACardLinks v-for="{title, items} in CPP_LIBS_DATA" :title="title" :items="items" :long="true" />
