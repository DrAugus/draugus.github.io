<template>
  <p> 稀有度 <a @click="all">(全)</a><br />

    <span v-for="(v, i) in star">
      <a @click="filterStar(v)">{{ v + "🌟" }}</a>
    </span>
  </p>

  <p> 世界 <a @click="all">(全)</a><br />

    <span v-for="(v, k, i) in city">
      <a @click="filterCity(v.id)">{{ v.name + "  " }}</a>
    </span>
  </p>

  <p> 元素 <a @click="all">(全)</a><br />

  <div class="genshin-element">
    <div v-for="(v, k, i) in elementStr">
      <a @click="filterEle(v.id)">
        <img :src="`/image/${gameName}/elements/${replaceAndLow(v.id)}.png`" :alt="v.id" :width="25">
      </a>
    </div>
  </div>

  </p>

  <p> 战斗 <a @click="all">(全)</a><br />

    <span v-for="(v, k, i) in weapon">
      <a @click="filterWeapon(v.id)">{{ v.name + " " }}</a>
    </span>
  </p>
  <hr>
  <p @click="all"> 全部角色 </p>
  <p> 当前共计收录 {{ lenChar }} 名角色(不包含旅行者)</p>
  <!-- <p> 筛选了 {{ lenFilterChar }} 名角色</p> -->



  <div class="character-info">

    <CharModal v-for="(value, key, index) in info" :info="{
      name: value.name,
      prefix: value.prefix,
      id: value.id,
      intro: value.intro,
      star: value.star,
      ele: value.ele.id,
    }" :game="gameName">

    </CharModal>

  </div>
</template>

<script>

import CharModal from "./CharModal.vue";
import { objFilter, replaceAndLow, getGameName } from "./utils";

// let lenFilterChar = lenChar
export default {
  name: "Characters",
  components: { CharModal },
  data() {
    return {
      info: this.Character,
      elementStr: this.Element,
      city: this.City,
      weapon: this.Weapon,
      showModal: false,
      star: [4, 5],
      lenChar: this.Character ? Object.getOwnPropertyNames(this.Character).length : 0,
      // lenFilterChar,
      replaceAndLow,
      gameName: getGameName(this.Game)
    };
  },
  props: { Character: Object, City: Object, Element: Object, Weapon: Object, Game: 0 },
  async mounted() {
    this.lenFilterChar = Object.getOwnPropertyNames(this.info).length
  },
  methods: {
    filterEle(ele) {
      this.info = objFilter(this.Character, details => details.ele.id == ele);
    },
    filterWeapon(w) {
      this.info = objFilter(this.Character, details => details.weapon.id == w);
    },
    filterCity(c) {
      this.info = objFilter(this.Character, details => details.city.id == c);
    },
    filterStar(s) {
      this.info = objFilter(this.Character, details => details.star == s);
    },
    all() {
      this.info = this.Character;
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
}</style>
