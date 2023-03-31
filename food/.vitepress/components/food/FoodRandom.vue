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
      const allType = foodInfo.main_meal;

      let allTag = []
      Object.values(allType).forEach((v) => {
        let splitTag = v.tag.split(',')
        allTag = [...allTag, ...splitTag]
      });
      allTag = allTag.filter(Boolean)
      allTag = [...new Set(allTag)];
      // console.log(allTag)

      all = allTag;

      details = Object.keys(allType);
      // console.log(details)
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
      typeSpeed: 200,
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
