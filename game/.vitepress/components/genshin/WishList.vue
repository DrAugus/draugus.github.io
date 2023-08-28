<template>
  <br />
  <a @click="sortLast">最近排序</a> |
  <a @click="sortEarly">最远排序</a>
  <br><br>

  <div v-for="(v, i) in wishChar" :key="i">

    <div class="wish-container">
      <span class="wish-version" v-bind:title="getWishDate(v.start, v.end)">{{ v.version }}</span>
      <div class="outer-container">

        <div v-for="(vv, ii) in v.wish5star" :key="ii">
          <div class="char-container">
            <div class="char-avatar" :style="{ backgroundColor: '#b47b48' }">
              <img :src="getCharAvatar(vv)" :alt="vv" @error="replaceImg">
              <div class="ele-corner" :style="{ backgroundImage: `url(/image/genshin/elements/${getCharEle(vv)}.png)` }">
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
              <div class="ele-corner" :style="{ backgroundImage: `url(/image/genshin/elements/${getCharEle(vv)}.png)` }">
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
</template>
  
<script>

import { WISH } from "./wish";
import { CHARACTER } from "./characters";
import { composeSrc } from "./utils";
import { replaceAndLow, compareDayjs, formatDayjs } from "../utils";

const wishChar = WISH.characters


export default {
  name: "WishList",
  data() {
    return {
      wishChar,
    };
  },
  methods: {
    sortLast() {
      this.wishChar = this.wishChar.sort((a, b) => compareDayjs(a.end, b.end))
    },
    sortEarly() {
      this.wishChar = this.wishChar.sort((a, b) => compareDayjs(b.end, a.end))
    },

    replaceImg(event) {
      event.target.src = '/image/genshin/characters/paimon_faq.png'
    },
    getCharAvatar(id) {
      return composeSrc(replaceAndLow(id))
    },
    getCharNameZh(id) {
      return CHARACTER[replaceAndLow(id)]?.name
    },
    getCharEle(id) {
      return CHARACTER[replaceAndLow(id)]?.ele.id
    },
    getWishDate(s, e) {
      return formatDayjs(s) + ' ~ ' + formatDayjs(e)
    },
  },
  async mounted() {
    // default
    this.sortEarly()
  }
};
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
    margin-top: unset;
  }

  .wish-version {
    font-size: 15px;
    font-weight: 500;
  }

}
</style>
  
  