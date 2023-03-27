<template>
  <h2>吃什么选一个吧</h2>

  <span ref="choiceFromAll"></span>

  <h2>具体吃什么</h2>

  <span ref="choiceFromDetails"></span>
</template>

<script>

import Typed from "typed.js";
import foodInfo from "../../data/food/eat.json";

export default {
  name: "Food-Random",
  components: {
    Typed,
  },
  data() {
    return {
    };
  },
  methods: {
    get() {
      let all = [];
      let details = [];
      let allType = foodInfo;
      for (let objMainType in allType) {
        // // 大类别
        // all.push(objMainType);
        let subObj = allType[objMainType]
        if (subObj.constructor === Object) {
          for (let objSubType in subObj) {
            // 小类别
            all.push(objSubType);
            if (objSubType.constructor === Object) {
              details = details.concat(objSubType.good)
            }
            else {
              details = details.concat(objSubType)
            }


            // 小类别里的详细推荐
            // details = details.concat(allType[objMainType][objSubType]);
          }
        } else {
          // snack
          details = details.concat(allType.snacks);
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

<style scoped></style>
