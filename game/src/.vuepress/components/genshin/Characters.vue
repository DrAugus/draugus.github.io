<template>

  <h2> 国家分类 <a @click="all">all</a></h2>
  <br>
  <span v-for="(v, k) in city">
    <a @click="filterCity(k)">{{ v + " " }}</a>
  </span>

  <h2> 元素分类 <a @click="all">all</a></h2>
  <br>
  <div class="genshin-element">
    <div v-for="(v, k) in elementStr">
      <img :src="'https://github.com/DrAugus/data/blob/master/game/genshin/elements/' + v + '.png?raw=true'" alt="{{v}}"
        @click="filterEle(k)">
    </div>
  </div>

  <h2> 武器分类 <a @click="all">all</a></h2>
  <br>
  <span v-for="(v, k) in weapon">
    <a @click="filterWeapon(k)">{{ v + " " }}</a>
  </span>

  <h2 @click="all"> 全部角色 </h2>
  <p> 当前共计收录 {{ lenChar }} 名角色</p>

  <div class="character-info">

    <Modal v-for="(value, key, index) in info" :info="{
      name: value.name,
      prefix: value.prefix,
      id: value.id,
      intro: value.intro,
    }"></Modal>

    <!-- </div> -->

  </div>

</template>

<script>

import { CHARACTER } from "./characters";
import Modal from "./Modal.vue";
import { CityZH, ElementString, WeaponZH } from "./utils";
import { objFilter } from "../utils";

const lenChar = Object.getOwnPropertyNames(CHARACTER).length

export default {
  name: "Characters",
  components: { Modal },
  data() {
    return {
      info: CHARACTER,
      elementStr: ElementString,
      city: CityZH,
      weapon: WeaponZH,
      showModal: false,
      lenChar,
    };
  },
  mounted() {

  },
  methods: {
    filterEle(ele) {
      this.info = objFilter(CHARACTER, details => details.ele == ele);
    },
    filterWeapon(w) {
      this.info = objFilter(CHARACTER, details => details.weapon == w);
    },
    filterCity(c) {
      this.info = objFilter(CHARACTER, details => details.city == c);
    },
    all() {
      this.info = CHARACTER;
    }
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
