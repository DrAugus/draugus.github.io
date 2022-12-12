<template>

  <h2> 国家分类 <a @click="all">all</a></h2>

  <span v-for="(v,k) in city">
    <a @click="filterCity(k)">{{ v + " " }}</a>
  </span>

  <h2> 元素分类 <a @click="all">all</a></h2>

  <div class="genshin-element">
    <div v-for="(v,k) in elementStr">
      <img
          :src="'https://github.com/DrAugus/data/blob/master/game/genshin/elements/'+ v+ '.png?raw=true'"
          alt="{{v}}" @click="filterEle(k)">
    </div>
  </div>

  <h2> 武器分类 <a @click="all">all</a></h2>

  <span v-for="(v,k) in weapon">
    <a @click="filterWeapon(k)">{{ v + " " }}</a>
  </span>

  <h2 @click="all"> 全部角色 </h2>

  <div class="character-info">

    <div v-for="(value, key, index) in info">

      <Modal :info="{
        name:value.name,
        prefix:value.prefix,
        id:value.id,
        intro:value.intro,
        }"></Modal>

    </div>

  </div>

</template>

<script>

import {CHARACTER} from "./characters";
import Modal from "./GenshinModal.vue";
import {CityZH, ElementString, WeaponZH} from "./utils";
import {objFilter} from "../utils";

export default {
  name: "Characters",
  components: {Modal},
  data() {
    return {
      info: CHARACTER,
      elementStr: ElementString,
      city: CityZH,
      weapon: WeaponZH,
      showModal: false,
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
  display: grid;
  grid-template-columns: auto auto auto auto;
}

</style>
