---
layout: home
title: 祈愿时间轴
hero:
  name: 
---


<Timeline :WISH="WISH" :CHARACTER="CHARACTER" />

<script setup>

import { WISH } from "../.vitepress/components/genshin/wish";
import { CHARACTER } from "../.vitepress/components/genshin/characters";
// import { ElementString } from "../.vitepress/components/genshin/utils";

import Timeline from "../.vitepress/components/Timeline.vue";
</script>
