<template>
  <h2>推荐餐厅</h2>

  <ul>
    <li>吃什么选一个吧: <span ref="choiceFromAll"></span></li>
    <li>具体吃什么: <span ref="choiceFromDetails"></span></li>
  </ul>


  <p>
    选什么呢<br>
    <a v-for="(v, i) in (allTag)" @click="filterTag(v)">
      <Badge :text="v" type="info" />
    </a>
  </p>


  <p>在哪里吃呢<br>
    <a v-for="(v, i) in (places)" @click="filterPlace(v)">
      <Badge :text="v" type="info" />
    </a>
  </p>


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
import Typed from "typed.js";
import foodInfo from "../../data/food/eat.json";

const cleanRepeat = (arr) => [...new Set(arr.filter(Boolean))]


const mainMeal = foodInfo.main_meal
// console.log(mainMeal)

let allTag = []
Object.values(mainMeal).forEach((v) => {
  let splitTag = v.tag.split(',')
  allTag = [...allTag, ...splitTag]
});
allTag = cleanRepeat(allTag)
// console.log(allTag)

let places = []
Object.values(mainMeal).forEach((v) => {
  let split = v.place.split(',')
  places = [...places, ...split]
});
places = cleanRepeat(places)

const filterObject = (obj, callback) =>
  Object.fromEntries(Object.entries(obj)
    .filter(([key, val]) => callback(val, key)));

export default {
  name: "Food-Eat",
  components: {
    Typed,
  },
  data() {
    return {
      mainMeal,
      allTag,
      places,
    };
  },
  methods: {
    get() {
      let all = [];
      let details = [];
      const allType = mainMeal;

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
    },

    filterTag(tag) {
      this.mainMeal = filterObject(mainMeal, (v) => v.tag.indexOf(tag) !== -1)
      // console.log("filterTag", tag, this.mainMeal)
    },
    filterPlace(p) {
      this.mainMeal = filterObject(mainMeal, (v) => v.place.indexOf(p) !== -1)
    },
    displayInfo(tag) {
      return tag.split(',')
    },
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
  },

};

</script>

<style scoped>
.strong {
  font-weight: 500;
}
</style>
