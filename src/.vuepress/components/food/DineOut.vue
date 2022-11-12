<template>

  <div v-for="(value, key, index) in outdoor">
    <h3>{{ key }}</h3>
    <div v-if="value.good">
      <span class="underline">推荐</span>
      <ul>
        <li v-for="(k,i) in value.good">{{ k }}</li>
      </ul>
    </div>
    <div v-if="value.bad">
      <span class="underline">不建议尝试</span>
      <ul>
        <li v-for="(k,i) in value.bad">{{ k }}</li>
      </ul>
    </div>
  </div>

</template>

<script>

import foodInfo from "../../data/food.json";

export default {
  name: "Food-DineOut",
  components: {
  },
  data() {
    return {
      title: "下馆子去咯",
      outdoor: foodInfo.下馆子,
    };
  },
  methods: {
  },
};

</script>

<style scoped>
.underline {
  text-decoration: underline;
}
</style>
