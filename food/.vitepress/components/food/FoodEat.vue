<template>
  <h2>推荐餐厅</h2>

  <Badge v-for="(v, i) in (allTag)" :text="v" type="info" />



  <div v-for="(v, k, i) in mainMeal">

    <h3>{{ k }}
      <Badge v-for="(vv, ii) in displayInfo(v.tag)" :text="vv" type="info" />
    </h3>
    <p v-if="v.good">
      <span v-if="v.good">
        <span class="strong">推荐：</span>
        <Badge v-for="(vv, ii) in displayInfo(v.good)" :text="vv" type="tip" />
        <br>
      </span>
      <span v-if="v.bad">
        <span class="strong">差评：</span>
        <Badge v-for="(vv, ii) in displayInfo(v.bad)" :text="vv" type="danger" />
        <br>
      </span>
      <span v-if="v.tip">
        <span class="strong">提示：</span>
        <Badge v-for="(vv, ii) in displayInfo(v.tip)" :text="vv" type="warning" />
      </span>
    </p>


  </div>
</template>

<script>

import foodInfo from "../../data/food/eat.json";

const mainMeal = foodInfo.main_meal
// console.log(mainMeal)

let allTag = []
Object.values(mainMeal).forEach((v) => {
  let splitTag = v.tag.split(',')
  allTag = [...allTag, ...splitTag]
});
allTag = allTag.filter(Boolean)
allTag = [...new Set(allTag)];
// console.log(allTag)

const filterObject = (obj, callback) =>
  Object.fromEntries(Object.entries(obj)
    .filter(([key, val]) => callback(val, key)));

export default {
  name: "Food-Eat",
  data() {
    return {
      mainMeal,
      allTag,
    };
  },
  methods: {
    filterTag(tag) {
      this.mainMeal = filterObject(mainMeal, (v) => v.tag == tag)
      // console.log("filterTag", tag, this.mainMeal)
    },
    displayInfo(tag) {
      return tag.split(',')
    },
  },
};

</script>

<style scoped>
.strong {
  font-weight: 500;
}
</style>
