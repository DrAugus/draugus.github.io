<template>
  首次出场
  复刻次数
  间隔时间
  复刻时间

</template>

<script>
import {WISH} from "./wish";

const get5Star = () => {
  let character = WISH.characters;
  let set = new Set();
  for (let ch of character) {
    set.add(ch.wish5star);
  }
  console.log(set);
  return set;
};

const changeWishObj = () => {
  let character = WISH.characters;
  const res = new Map();
};


export default {
  name: "Fork",
  data() {
    return {};
  },
  methods: {},
};
</script>

<style scoped>

</style>
