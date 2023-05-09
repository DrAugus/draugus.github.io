---
layout: home
title: 跃迁时间轴
hero:
  name: 
---


<Timeline :WISH="WISH" :CHARACTER="CHARACTER" :WISH_TEXT=1 />

<script setup>

import { WISH } from "../.vitepress/components/hsr/wish";
import { CHARACTER } from "../.vitepress/components/hsr/characters";

import "../.vitepress/components/hsr/hsr.scss";

import Timeline from "../.vitepress/components/Timeline.vue";
</script>
