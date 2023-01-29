<template>

<div v-for="(item, index) in cookbook">
  <div v-if="item.name">
    <h2>{{item.name}}</h2>
    <p>{{item.raw}}</p>
    <ol>
      <li v-for="(v,i) in item.flow">{{v}}</li>
    </ol>
  </div>
</div>


</template>

<script>

import foodInfo from "~/assets/json/food.json";

function split_raw(raw) {
  if(raw.indexOf("|") === -1) return raw;
  let arr = raw.split("|");
  return arr;
}

export default {
  name: "Food-Cookbook",
  components: {
  },
  data() {
    return {
      cookbook: foodInfo.cookbook,// name raw flow source
      split_raw,
    };
  },
};

</script>

<style scoped>

</style>
