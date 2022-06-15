<template>
  <h2>吃什么选一个吧</h2>

  {{ all }}

  <h2>具体吃什么</h2>

  {{ details }}

  <h2>真的不能吃</h2>
  <ul>
    <li v-for="(item, index) in blockFood">
      {{ item }}
    </li>
  </ul>

</template>

<script setup lang="ts">

import foodInfo from '../data/food.json'

let allType = foodInfo.外卖.分类;

let all = [];
let details = [];
for (let objMainType in allType) {
  // 大类别
  all.push(objMainType);
  if (allType[objMainType].constructor == Object) {
    for (let objSubType in allType[objMainType]) {
      // 小类别
      all.push(objSubType);
      // 小类别里的详细推荐
      details = details.concat(allType[objMainType][objSubType]);
    }
  } else {
    // 没有小类别 直接是 详细的美食推荐
    details = details.concat(allType[objMainType]);
  }
}

let blockFood = foodInfo.外卖.拉黑;

</script>

<style scoped>

</style>