<template>
  <br />

  <div class="filter-container">
    <div class="filter-title"> 稀有度 </div>
    <div class="filter-info">
      <span v-for="(v, i) in star">
        <a @click="filterStar(v)">{{ v + "🌟" }}</a>
      </span>
      <a @click="filterExclusive(1)">{{ '限定' }}</a>
    </div>
  </div>

  <div class="filter-container" v-if="city">
    <div class="filter-title"> 世界</div>
    <div class="filter-info">
      <span v-for="(v, k, i) in city">
        <a @click="filterCity(v.id)">{{ v.name }}</a>
        <span v-if="i !== Object.getOwnPropertyNames(city).length - 1">{{ ' · ' }}</span>
      </span>
    </div>
  </div>

  <div class="filter-container" v-if="elementStr">
    <div class="filter-title"> 元素</div>
    <div class="filter-info">
      <div class="genshin-element">
        <div v-for="(v, k, i) in elementStr">
          <a @click="filterEle(v.id)">
            <img :src="`/image/${gameName}/elements/${replaceAndLow(v.id)}.png`" :alt="v.id" :width="25">
          </a>
        </div>
      </div>
    </div>
  </div>

  <div class="filter-container" v-if="weapon">
    <div class="filter-title"> 战斗</div>
    <div class="filter-info">
      <span v-for="(v, k, i) in weapon">
        <a @click="filterWeapon(v.id)">

          <span v-if="Game">
            <img :src="`/image/${gameName}/elements/${(v.id).replace('The ', '').toLowerCase()}.png`" :width="30"
              alt="{{1}}">
          </span>
          {{ v.name }}</a>
        <span v-if="i !== Object.getOwnPropertyNames(weapon).length - 1">{{ ' · ' }}</span>
      </span>
    </div>
  </div>



  <h3> <a @click="all"> 全部角色 </a></h3>
  <span> 当前共计收录 {{ lenChar }} 名角色(不包含{{ protagonist }})</span> <br />
  <span v-if="lenChar !== lenFilterChar"> 筛选了 {{ lenFilterChar }} 名角色</span>



  <div class="character-info">

    <CharModal v-for="(value, key, index) in info" :info="{
        name: value.name,
        prefix: value.prefix,
        id: value.id,
        intro: value.intro,
        star: value.star,
        ele: value.ele,
        weapon: value.weapon,
      }" :game="Game">

    </CharModal>

  </div>
</template>

<script>

import CharModal from "./CharModal.vue";
import { objFilter, replaceAndLow, getGameNameStr } from "./utils";

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
      lenFilterChar: this.Character ? Object.getOwnPropertyNames(this.Character).length : 0,
      replaceAndLow,
      gameName: getGameNameStr(this.Game),
      protagonist: this.Game ? '开拓者' : '旅行者',
    };
  },
  props: { Character: Object, City: Object, Element: Object, Weapon: Object, Game: 0 },
  async mounted() {

  },
  methods: {
    filterEle(ele) {
      this.info = objFilter(this.Character, details => details.ele.id == ele);
      this.lenFilterChar = Object.getOwnPropertyNames(this.info).length;
    },
    filterWeapon(w) {
      this.info = objFilter(this.Character, details => details.weapon.id == w);
      this.lenFilterChar = Object.getOwnPropertyNames(this.info).length;
    },
    filterCity(c) {
      this.info = objFilter(this.Character, details => details.city.id == c);
      this.lenFilterChar = Object.getOwnPropertyNames(this.info).length;
    },
    filterStar(s) {
      this.info = objFilter(this.Character, details => details.star == s);
      this.lenFilterChar = Object.getOwnPropertyNames(this.info).length;
    },
    filterExclusive(e) {
      this.info = objFilter(this.Character, details => details.event_exclusive == e);
      this.lenFilterChar = Object.getOwnPropertyNames(this.info).length;
    },
    all() {
      this.info = this.Character;
      this.lenFilterChar = Object.getOwnPropertyNames(this.info).length;
    },
  }
};
</script>

<style scoped>
.filter-container {
  display: flex;
  width: 100%;
  /* height: 100px; */
  background-color: #e5e5e5;
  padding: 10px;
  /* border-radius: 9999px; */
  margin-bottom: 10px;
  border-radius: 10px;
}

.filter-title {
  font-size: 18px;
  font-weight: 800;
  justify-content: center;
}

.filter-info {
  display: flex;
  width: 80%;
  font-weight: 600;
  justify-content: center;
}

.genshin-element {
  display: flex;
}

.character-info {
  display: flex;
  flex-wrap: wrap;
}
</style>
