<template>

  <h2>成为Bot</h2>
  <ul>
    <li>Mon. 胖次打面团</li>
    <li>Tue. 漠漠家</li>
    <li>Wed. 秦味观</li>
    <li>Thu. 大芝小士</li>
    <li>Fri.</li>
  </ul>

  <h2>吃什么选一个吧</h2>

  <span ref="choiceFromAll"></span>

  <h2>具体吃什么</h2>

  <span ref="choiceFromDetails"></span>

  <h2>下馆子去咯</h2>

  <div v-for="(value, key, index) in outdoor">
    <h3>{{ key }}</h3>
    <div v-if="value.good">
      <u>推荐</u>
      <ul>
        <li v-for="(k,i) in value.good">{{ k }}</li>
      </ul>
    </div>
    <div v-if="value.bad">
      <u>真的别点</u>
      <ul>
        <li v-for="(k,i) in value.bad">{{ k }}</li>
      </ul>
    </div>
  </div>


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

export default {
  name: "Food",
  components: {
    Typed,
  },
  data() {
    return {
      blockFood: foodInfo.外卖.拉黑,
      outdoor: foodInfo.下馆子,
    };
  },
  methods: {
    get() {
      let all = [];
      let details = [];
      let allType = foodInfo.外卖.分类;
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
      return {
        all,
        details
      };
    }
  },
  async mounted() {
    const typed = new Typed(this.$refs.choiceFromAll, {
      strings: this.get().all,
      startDelay: 300,
      typeSpeed: 150,
      loop: true,
      backSpeed: 50
    });
    const typed2 = new Typed(this.$refs.choiceFromDetails, {
      strings: this.get().details,
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
