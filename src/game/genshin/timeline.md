---
home: true
title: 祈愿时间轴
heroImage: https://github.com/DrAugus/data/blob/master/game/genshin/ys.png?raw=true
heroText: 祈愿时间轴
tagline: 全部祈愿信息
actions:
- text: 返回上级
  link: /game/genshin
- text: 当前祈愿
  link: /game/genshin/wish
  type: primary
---


<GenshinTimeline />

<script setup lang="ts">
import GenshinTimeline from "@GenshinTimeline";
</script>

<style>
.home.project{
  max-width: unset !important;
}
.hero-info {
  text-align: center !important;
}
</style>