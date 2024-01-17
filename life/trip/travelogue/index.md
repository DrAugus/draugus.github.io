# 游记

旅行的美好应该被记录下来。

<ul>
    <li v-for="(v, i) in linkData" v-html="v"></li>
</ul>

<script setup lang="ts">
import {modifyTravelogue} from '../../.vitepress/data/trip/travelogue'

const linkStr = (text, link) => `<a href=${link}>${text}</a>`;
const data = modifyTravelogue();
const linkData = data.map(v =>
    linkStr(v.text, v.link)
)
</script>
