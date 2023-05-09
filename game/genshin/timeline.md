---
layout: home
title: 祈愿时间轴
hero:
  name: 
---


<GenshinTimeline :WISH="WISH" :CHARACTER="CHARACTER" />

<script setup>

import { WISH } from "../.vitepress/components/genshin/wish";
import { CHARACTER } from "../.vitepress/components/genshin/characters";

import GenshinTimeline from "../.vitepress/components/genshin/Timeline.vue";
</script>
