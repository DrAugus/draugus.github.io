<template>
  <p> 稀有分类 <a @click="all">(全)</a></p>

  <span v-for="(v, i) in star">
    <a @click="filterStar(v)">{{ v + "🌟" }}</a>
  </span>

  <p> 国家分类 <a @click="all">(全)</a></p>

  <span v-for="(v, k, i) in city">
    <a @click="filterCity(v.id)">{{ v.name + " " }}</a>
  </span>

  <p> 元素分类 <a @click="all">(全)</a></p>

  <div class="genshin-element">
    <div v-for="(v, k, i) in elementStr">
      <a @click="filterEle(v.id)">
        <img :src="'/image/genshin/elements/' + v.id + '.png'" alt="{{v.id}}">
      </a>
    </div>
  </div>

  <p> 武器分类 <a @click="all">(全)</a></p>

  <span v-for="(v, k, i) in weapon">
    <a @click="filterWeapon(v.id)">{{ v.name + " " }}</a>
  </span>

  <p @click="all"> 全部角色 </p>
  <p> 当前共计收录 {{ lenChar }} 名角色(不包含旅行者)</p>
  <!-- <p> 筛选了 {{ lenFilterChar }} 名角色</p> -->
  <hr>


  <div class="character-info">

    <Modal v-for="(value, key, index) in info" :info="{
      name: value.name,
      prefix: value.prefix,
      id: value.id,
      intro: value.intro,
      star: value.star,
      ele: value.ele.id,
    }"></Modal>

  </div>
</template>

<script>

import { CHARACTER } from "./characters";
import Modal from "./Modal.vue";
import { City, Element, Weapon } from "./utils";
import { objFilter } from "../utils";

const lenChar = Object.getOwnPropertyNames(CHARACTER).length
// let lenFilterChar = lenChar
export default {
  name: "Characters",
  components: { Modal },
  data() {
    return {
      info: CHARACTER,
      elementStr: Element,
      city: City,
      weapon: Weapon,
      showModal: false,
      star: [4, 5],
      lenChar,
      // lenFilterChar,
    };
  },
  async mounted() {
    this.lenFilterChar = Object.getOwnPropertyNames(this.info).length
  },
  methods: {
    filterEle(ele) {
      this.info = objFilter(CHARACTER, details => details.ele.id == ele);
    },
    filterWeapon(w) {
      this.info = objFilter(CHARACTER, details => details.weapon.id == w);
    },
    filterCity(c) {
      this.info = objFilter(CHARACTER, details => details.city.id == c);
    },
    filterStar(s) {
      this.info = objFilter(CHARACTER, details => details.star == s);
    },
    all() {
      this.info = CHARACTER;
    },
  }
};
</script>

<style scoped>
.genshin-element {
  display: flex;
}

.character-info {
  display: flex;
  flex-wrap: wrap;
}
</style>
