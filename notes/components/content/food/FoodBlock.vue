<template>

  <ul>
    <li v-for="(item, index) in blockFood">
      {{ item.split(",")[0] }} {{ item.split(",")[1] }}
    </li>
  </ul>

</template>

<script>

import foodInfo from "~/assets/json/food.json";

export default {
  name: "Food-Block",
  components: {
  },
  data() {
    return {
      title: "block",
      blockFood: foodInfo.blacklist,
    };
  },
  methods: {
  },
};

</script>

<style scoped>

</style>
