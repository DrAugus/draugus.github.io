---
layout: home
title: 祈愿时间轴
hero:
  name: 
---


<Timeline :WISH="WISH" :CHARACTER="CHARACTER" :WISH_TEXT=0 />

<script setup>

import { WISH } from "../.vitepress/components/genshin/wish";
import { CHARACTER } from "../.vitepress/components/genshin/characters";

import "../.vitepress/components/genshin/genshin.scss";

import Timeline from "../.vitepress/components/Timeline.vue";
</script>
