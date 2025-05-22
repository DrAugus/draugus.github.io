# 亚洲

欢迎来到亚洲

<script setup>
import ACardLinks from '../../../.vitepress/components/ACardLinks.vue'

import { TRIP_ASIA_DATA } from '../../../.vitepress/data/trip/place'
</script>
<style src="../../../.vitepress/style/layout-card.scss"></style>

<ACardLinks v-for="{title, items} in TRIP_ASIA_DATA" :title="title" :items="items"/>
