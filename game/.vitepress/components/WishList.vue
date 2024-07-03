<template>

  <TitleFormat :title="'限定' + wishName" :number="2"></TitleFormat>
  <p>
    <a @click="sortLast">最近排序</a> |
    <a @click="sortEarly">最远排序</a>
  </p>

  <div v-for="(v, i) in refWishChar" :key="i">

    <div class="wish-container">
      <span class="wish-version" v-bind:title="getWishDate(v.start, v.end)">{{ v.version }}</span>
      <div class="outer-container">

        <div v-for="(vv, ii) in v.wish5star" :key="ii">
          <div class="char-container">
            <div class="char-avatar" :style="{ backgroundColor: '#b47b48' }">
              <img :src="getCharAvatar(vv)" :alt="vv" @error="replaceImg">
              <div class="ele-corner"
                :style="{ backgroundImage: `url(/image/${gameName}/elements/${getCharEle(vv)}.png)` }">
              </div>
            </div>
            <div class="char-name">
              <span class="wish-name">{{ getCharNameZh(vv) }}</span>
            </div>
          </div>
        </div>

        <div v-for="(vv, ii) in v.wish4star" :key="ii">
          <div class="char-container">
            <div class="char-avatar" :style="{ backgroundColor: '#77609a' }">
              <img :src="getCharAvatar(vv)" :alt="vv" @error="replaceImg">
              <div class="ele-corner"
                :style="{ backgroundImage: `url(/image/${gameName}/elements/${getCharEle(vv)}.png)` }">
              </div>
            </div>
            <div class="char-name">
              <span class="wish-name">{{ getCharNameZh(vv) }}</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>


  <div v-if="refChronicled">
    <TitleFormat :title="'集录' + wishName" :number="2"></TitleFormat>

    <p>
      <a @click="sortLastChronicled">最近排序</a> |
      <a @click="sortEarlyChronicled">最远排序</a>
    </p>

    <div v-for="(v, i) in refChronicled" :key="i">

      <div class="wish-container">
        <span class="wish-version" v-bind:title="getWishDate(v.start, v.end)">{{ v.version }}</span>
        <div class="outer-container">

          <div v-for="(vv, ii) in v.wish5star?.characters" :key="ii">
            <div class="char-container">
              <div class="char-avatar" :style="{ backgroundColor: '#b47b48' }">
                <img :src="getCharAvatar(vv)" :alt="vv" @error="replaceImg">
                <div class="ele-corner"
                  :style="{ backgroundImage: `url(/image/${gameName}/elements/${getCharEle(vv)}.png)` }">
                </div>
              </div>
              <div class="char-name">
                <span class="wish-name">{{ getCharNameZh(vv) }}</span>
              </div>
            </div>
          </div>

          <div v-for="(vv, ii) in v.wish4star?.characters" :key="ii">
            <div class="char-container">
              <div class="char-avatar" :style="{ backgroundColor: '#77609a' }">
                <img :src="getCharAvatar(vv)" :alt="vv" @error="replaceImg">
                <div class="ele-corner"
                  :style="{ backgroundImage: `url(/image/${gameName}/elements/${getCharEle(vv)}.png)` }">
                </div>
              </div>
              <div class="char-name">
                <span class="wish-name">{{ getCharNameZh(vv) }}</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>

</template>

<script setup lang="ts">

import { onMounted, computed, ref } from "vue";
import { Characters, WishAll } from "./type";
import { replaceAndLow, composeCharSrc, compareDayjs, formatDayjs, GameName, getGameName, getWishName } from "./utils";
import TitleFormat from "./TitleFormat.vue";

const props = defineProps<{
  WISH: WishAll,
  CHARACTER: Characters,
  WISH_TEXT: GameName,
}>();

const refGameName = computed(() => {
  return props.WISH_TEXT ?? 'Genshin'; // 使用逻辑或操作符 ?? 来提供默认值  
});

const wishChar = props.WISH.characters;
const gameName = getGameName(refGameName.value);
const wishName = getWishName(refGameName.value);
const chronicled = props.WISH.chronicled;

let refWishChar = ref(wishChar);
let refChronicled = ref(chronicled);

const sortLast = () => {
  refWishChar.value = refWishChar.value.sort((a, b) => compareDayjs(a.end, b.end));
};
const sortEarly = () => {
  refWishChar.value = refWishChar.value.sort((a, b) => compareDayjs(b.end, a.end));
};

const sortLastChronicled = () => {
  refChronicled.value = refChronicled.value?.sort((a, b) => compareDayjs(a.end, b.end));
};
const sortEarlyChronicled = () => {
  refChronicled.value = refChronicled.value?.sort((a, b) => compareDayjs(b.end, a.end));
};

const replaceImg = (event) => {
  event.target.src = '/image/genshin/characters/paimon_faq.png';
};
const getCharAvatar = (id) => {
  return composeCharSrc(props.WISH_TEXT, id);
};
const getCharNameZh = (id) => {
  return props.CHARACTER[replaceAndLow(id)]?.name;
};
const getCharEle = (id) => {
  return replaceAndLow(props.CHARACTER[replaceAndLow(id)]?.ele.id);
};
const getWishDate = (s, e) => {
  return formatDayjs(s) + ' ~ ' + formatDayjs(e);
};

onMounted(async () => {
  sortEarly();
  sortEarlyChronicled();
})


</script>

<style scoped>
.wish-container {
  display: flex;
  width: 100%;
  /* height: 100px; */
  background-color: #e5e5e5;
  padding: 10px;
  border-radius: 10px;
  margin-bottom: 10px;
}



.wish-name {
  font-size: 18px;
  font-weight: 800;
}


.avatar {
  width: 20%;
  margin-bottom: 20px;
  max-width: 100%;
  max-height: 100%;
}

.description {
  text-align: center;
}

.wish-version {
  display: flex;
  width: 10%;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: 900;
}


.outer-container {
  display: flex;
  flex-wrap: wrap;
  width: 95%;
}

.char-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100px;
  /* height: 300px; */
  padding-bottom: 5px;
  margin-right: 5px;
  margin-bottom: 5px;
  border-radius: 10px;
  background-color: lightgray;
}

.char-avatar {
  width: 100px;
  height: 100px;
  /* border-radius: 50%; */
  /* background-color: #b47b48; */
  position: relative;
  /* border-radius: 10px; */
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

.char-avatar img {
  object-position: center;
  -o-object-fit: cover;
  object-fit: cover;
  height: 100%;
  width: 100%;
}

.ele-corner {
  position: absolute;
  top: 0;
  left: 0;
  width: 30px;
  height: 30px;
  /* background-image: url("/image/genshin/characters/paimon_faq.png"); */
  background-size: cover;
}

.char-name {
  margin-top: 5px;
  text-align: center;
}


@media screen and (max-width: 768px) {
  .char-container {
    width: 55px;
    padding-bottom: unset;
  }

  .char-avatar {
    width: 55px;
    height: 55px;
  }


  .ele-corner {
    width: 15px;
    height: 15px;
  }

  .wish-name {
    font-size: 8px;
    font-weight: 700;
    white-space: nowrap;
  }

  .char-name {
    margin-top: -8px;
    margin-bottom: -2px;
  }

  .wish-version {
    font-size: 15px;
    font-weight: 500;
  }

}
</style>