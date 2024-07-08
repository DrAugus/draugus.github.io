---
layoutClass: a-home-layout
title: ${{ getWishNameStr(GameName.Genshin) }}时间轴
outline: false
aside: false
sidebar: false
doc: false
footer: false
---


<Timeline />
  
<script setup>
import Timeline from "../.vitepress/components/genshin/Timeline.vue";
import { GameName, getWishNameStr } from "../.vitepress/components/utils";
</script>

<style scoped>

</style>

<style src="../.vitepress/components/modifyHome.scss"></style>
