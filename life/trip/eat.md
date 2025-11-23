---
aside: false
outline: false
lastUpdated: false
sidebar: false
---

# 吃啥

<Food :foods="foodAll" :all=true />

<script setup>
import { foodAll } from "../.vitepress/data/trip/food";
import Food from "../.vitepress/components/trip/FoodAll.vue";
</script>
