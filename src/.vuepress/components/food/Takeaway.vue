<template>

  <h2>commend cafeteria</h2>

  <ul>
    <li v-for="(v, i) in Object.keys(takeawayInfo)">
      <a href="#">{{ v }}</a>
    </li>
  </ul>
  <Badge text="ohhhhhh" type="info" />
  <Card v-for="(v, k, i) in takeawayInfo" :info="{
    title: k,
    subtitle: displayMenu(v.good),
    text: v.tip,
  }"></Card>

</template>

<script>

import foodInfo from "../../data/food.json";
import { filterObject } from "../utils"
import Card from "../Card.vue";

const takeaway = foodInfo.外卖
console.log(takeaway)

let allTag = []
Object.values(takeaway).forEach((v) => {
  let splitTag = v.tag.split(',')
  allTag = [...allTag, ...splitTag]
});
allTag = allTag.filter(Boolean)
console.log(allTag)

export default {
  name: "Food-Random",
  components: { Card },
  data() {
    return {
      takeawayInfo: takeaway
    };
  },
  methods: {
    filterTag(tag) {
      this.takeawayInfo = filterObject(takeaway, (v) => v.tag == tag)
      console.log("filterTag", tag, this.takeawayInfo)
    },
    displayTag(tag) {
      return tag.split(',')
    },
    // m = good, or normal, or bad
    displayMenu(m) {
      if (m.length < 0 || m[0] == "") return
      let arr = []
      for (let v of m) {
        // name, price
        let s = v.split(',')
        arr.push(s)
      }
      console.log(arr)
      return arr
    },
  },
};

</script>

<style scoped>

</style>
