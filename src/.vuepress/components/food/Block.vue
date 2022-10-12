<template>

  <ul>
    <li v-for="(item, index) in blockFood">
      {{ item }}
    </li>
  </ul>

</template>

<script>

import foodInfo from "../../data/food.json";

export default {
  name: "Food-Block",
  components: {
  },
  data() {
    return {
      title: "block",
      blockFood: foodInfo.外卖.拉黑,
    };
  },
  methods: {
  },
};

</script>

<style scoped>

</style>
