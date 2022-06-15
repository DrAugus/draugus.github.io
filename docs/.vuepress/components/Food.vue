<template>
  <h2>吃什么选一个吧</h2>

  <span ref="choiceFromAll"></span>

  <h2>具体吃什么</h2>

  <span ref="choiceFromDetails"></span>

  <h2>真的不能吃</h2>
  <ul>
    <li v-for="(item, index) in blockFood">
      {{ item }}
    </li>
  </ul>

</template>

<script>

import Typed from "typed.js";
import foodInfo from "../data/food.json";

let allType = foodInfo.外卖.分类;

let all = [];
let details = [];
for (let objMainType in allType) {
  // 大类别
  all.push(objMainType);
  if (allType[objMainType].constructor === Object) {
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

export default {
  data() {
    return {
      blockFood
    };
  },
  mounted() {
    const typed = new Typed(this.$refs.choiceFromAll, {
      strings: all,
      startDelay: 300,
      typeSpeed: 150,
      loop: true,
      backSpeed: 50
    });
    const typed2 = new Typed(this.$refs.choiceFromDetails, {
      strings: details,
      startDelay: 300,
      typeSpeed: 100,
      loop: true,
      backSpeed: 50
    });
  }
};

</script>

<style scoped>

</style>