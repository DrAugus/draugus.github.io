---
layout: home
title: Augus
titleTemplate: 游戏
hero:
  name: 游戏人生
  text: 近期活动
  tagline: 原神 崩坏·星穹铁道
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
features:
  - title: 祈愿信息展示一
    icon:
      src: /image/genshin/characters/klee.png
      width: 32px
      height: 32px   
    details: 原神祈愿信息。以列表形式展示，仅展示版本、概率 UP 提升的角色的头像，包含限定祈愿和集录祈愿
    link: /genshin/wish-info  
    # linkText: 看看往哪冲
  - title: 祈愿信息展示二
    icon:
      src: /image/genshin/characters/yae_miko.png
      width: 32px
      height: 32px   
    details: 原神祈愿信息。以列表形式展示，仅展示版本、概率 UP 提升的角色的名字、祈愿时间段，仅包含限定祈愿
    link: /genshin/wish-info1  
  - title: 祈愿信息展示三
    icon:
      src: /image/genshin/characters/lynette.png
      width: 32px
      height: 32px   
    details: 原神祈愿信息。以表格形式展示，仅展示版本、祈愿时间段、祈愿宣传图、5星角色 UP 次数，仅包含限定祈愿
    link: /genshin/wish-info2      
  - title: 跃迁信息展示一
    icon:
      src: /image/hsr/characters/acheron.png
      width: 32px
      height: 32px   
    details: 星穹铁道跃迁信息。以列表形式展示，仅展示版本、概率 UP 提升的角色的头像，仅包含限定跃迁
    link: /hsr/wish-info  
    # linkText: 看看往哪冲
  - title: 跃迁信息展示二
    icon:
      src: /image/hsr/characters/guinaifen.png
      width: 32px
      height: 32px   
    details: 星穹铁道跃迁信息。以列表形式展示，仅展示版本、概率 UP 提升的角色的名字、跃迁时间段，仅包含限定跃迁
    link: /hsr/wish-info1  
  - title: 跃迁信息展示三
    icon:
      src: /image/hsr/characters/ruan_mei.png
      width: 32px
      height: 32px   
    details: 星穹铁道跃迁信息。以表格形式展示，仅展示版本、跃迁时间段、跃迁宣传图、5星角色 UP 次数，仅包含限定跃迁
    link: /hsr/wish-info2         
---


---
<Events />

<script setup>
// import EventsWish from "./.vitepress/components/EventsWish.vue";
import Events from "./.vitepress/components/Events.vue";
</script>
