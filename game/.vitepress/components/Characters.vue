<template>
  <br />

  <div class="filter-container">
    <div class="filter-title"> 稀有度 </div>
    <div class="filter-info">
      <span v-for="(v, i) in star">
        <a @click="filterStar(v)">{{ getRarityName(GAME_NAME, v) }}</a>
      </span>
      <span>
        <a @click="filterExclusive(1)">{{ '限定' }}</a>
      </span>
    </div>
  </div>

  <div class="filter-container" v-if="World">
    <div class="filter-title"> {{ getCategoriesName(GAME_NAME) }}</div>
    <div class="filter-info">
      <span v-for="(v, k, i) in World">
        <a @click="filterWorld(v.id)">{{ v.name }}</a>
      </span>
    </div>
  </div>

  <div class="filter-container" v-if="ELEMENT">
    <div class="filter-title"> 元素</div>
    <div class="filter-info">
      <div v-for="(v, k, i) in ELEMENT">
        <a @click="filterEle(v.id)">
          <img :src="`/image/${gameName}/elements/${replaceAndLow(v.id)}.png`" :alt="v.id" :width="25">
        </a>
      </div>
    </div>
  </div>

  <div class="filter-container" v-if="WEAPON">
    <div class="filter-title"> 战斗</div>
    <div class="filter-info">
      <div v-for="(v, k, i) in WEAPON">
        <a @click="filterWeapon(v.id)">
          <div v-if="GAME_NAME === GameName.Genshin">
            <span> {{ v.name }}</span>
          </div>
          <div v-else>
            <img :src="`/image/${gameName}/elements/${(v.id).replace('The ', '').toLowerCase()}.png`" :width="30"
              :alt="v.name">
          </div>
        </a>

      </div>
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
      }" :game="GAME_NAME">

    </CharModal>

  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

import CharModal from "./CharModal.vue";
import { objFilter, replaceAndLow, getGameNameStr, getRarityName, getProtagonistName, getCategoriesName, GameName } from "./utils";

import { Characters } from './type';

const props = defineProps<{
  CHARACTER: Characters,
  GAME_NAME: GameName,
  CITY?: Object,
  CAMP?: Object,
  ELEMENT: Object,
  WEAPON: Object,
}>();

const isHover = ref(false);

const World = props.CITY || props.CAMP;

let info = ref(props.CHARACTER);
const star = [4, 5];

const lenChar = props.CHARACTER ? Object.getOwnPropertyNames(props.CHARACTER).length : 0;
let lenFilterChar = ref(lenChar);

const gameName = getGameNameStr(props.GAME_NAME);
const protagonist = getProtagonistName(props.GAME_NAME);

function filterEle(ele) {
  info.value = objFilter(props.CHARACTER, details => details.ele.id == ele);
  lenFilterChar.value = Object.getOwnPropertyNames(info.value).length;
}
function filterWeapon(w) {
  info.value = objFilter(props.CHARACTER, details => details.weapon.id == w);
  lenFilterChar.value = Object.getOwnPropertyNames(info.value).length;
}
function filterWorld(c) {
  if (props.CITY) {
    info.value = objFilter(props.CHARACTER, details => details.city.id == c);
  }
  if (props.CAMP) {
    info.value = objFilter(props.CHARACTER, details => details.camp.id == c);
  }
  lenFilterChar.value = Object.getOwnPropertyNames(info.value).length;
}
function filterStar(s) {
  info.value = objFilter(props.CHARACTER, details => details.star == s);
  lenFilterChar.value = Object.getOwnPropertyNames(info.value).length;
}
function filterExclusive(e) {
  info.value = objFilter(props.CHARACTER, details => details.event_exclusive == e);
  lenFilterChar.value = Object.getOwnPropertyNames(info.value).length;
}
function all() {
  info.value = props.CHARACTER;
  lenFilterChar.value = Object.getOwnPropertyNames(info.value).length;
}

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
  /* justify-content: center; */

}

.filter-info img {
  margin-left: 5px;
  margin-right: 3px;
}

.filter-info span {
  margin-left: 5px;
  margin-right: 3px;
}

.character-info {
  display: flex;
  flex-wrap: wrap;
}
</style>
