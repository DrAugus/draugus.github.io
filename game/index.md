---
layout: home
title: Augus
titleTemplate: 游戏
hero:
  name: 游戏人生
  text: 近期活动 抽卡
  tagline: <a href='/genshin/'>原神</a> <a href='/hsr/'>崩坏·星穹铁道</a> 鸣潮 无限暖暖
  image:
    src: /image/kafka-modified.png
    alt: none
  actions:
    - theme: brand
      text: 原神祈愿列表
      link: /genshin/wish-info  
    - theme: brand
      text: 原神祈愿时间轴
      link: /genshin/timeline
    - theme: brand
      text: 原神近期祈愿
      link: /genshin/wish-recent
    - theme: alt
      text: 星穹铁道祈愿列表
      link: /hsr/wish-info        
    - theme: alt
      text: 星穹铁道跃迁时间轴
      link: /hsr/timeline      
    - theme: alt
      text: 星穹铁道近期跃迁
      link: /hsr/wish-recent
    - theme: alt
      text: 原神角色列表
      link: /genshin/character       
    - theme: alt
      text: 星穹铁道角色列表
      link: /hsr/character                 
    - theme: alt
      text: 星穹铁道每日
      link: /hsr/daily
---


<Events />

<script setup>
// import EventsWish from "./.vitepress/components/EventsWish.vue";
import Events from "./.vitepress/components/Events.vue";
</script>
