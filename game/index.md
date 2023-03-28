---
layout: home
title: Augus
titleTemplate: 游戏
hero:
  name: 当然是原神啦
  text: 近期活动
  image:
    src: /image/home.jpg
    alt: none
  actions:
    - theme: brand
      text: 复刻祈愿
      link: /game/genshin/fork
    - theme: alt
      text: 当前祈愿
      link: /game/genshin/wish
features:
  - title: 绷不住
    details: 预制
---

<GenshinEvents />

<script setup>
import GenshinEvents from "./.vitepress/components/genshin/Events.vue";
</script>
