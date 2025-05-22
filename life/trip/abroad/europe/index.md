# 欧洲

欢迎来到欧洲

当前资产不够去欧洲，未来可期，近期不再考虑了

<script setup>
import ACardLinks from '../../../.vitepress/components/ACardLinks.vue'

import { TRIP_EUROPE_DATA } from '../../../.vitepress/data/trip/place'
</script>
<style src="../../../.vitepress/style/layout-card.scss"></style>

<ACardLinks v-for="{title, items} in TRIP_EUROPE_DATA" :title="title" :items="items"/>
