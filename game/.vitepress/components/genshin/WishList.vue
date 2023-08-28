<template>
  <!-- <h2>最近出场角色 情报</h2> -->
  <!-- todo 点击角色 再展示 曾经出场的 时间段 -->

  <a @click="sortLast">最近排序</a> |
  <a @click="sortEarly">最远排序</a>
  <br><br>

  <div v-for="(v, i) in wishChar" :key="i">

    <div class="wish-container">
      <span class="tt1-ver">{{ v.version }}</span>
      <div class="outer-container">


        <div v-for="(vv, ii) in v.wish5star" :key="ii">
          <div class="tt1-container">
            <div class="tt1-avatar" :style="{ backgroundColor: '#b47b48' }">
              <img :src="getCharAvatar(vv)" :alt="vv" @error="replaceImg">
              <div class="tt1-image-corner"
                :style="{ backgroundImage: `url(/image/genshin/elements/${getCharEle(vv)}.png)` }"></div>
            </div>
            <div class="tt1-description">
              <span class="wish-name">{{ getCharNameZh(vv) }}</span>
            </div>
          </div>
        </div>

        <div v-for="(vv, ii) in v.wish4star" :key="ii">
          <div class="tt1-container">
            <div class="tt1-avatar" :style="{ backgroundColor: '#77609a' }">
              <img :src="getCharAvatar(vv)" :alt="vv" @error="replaceImg">
              <div class="tt1-image-corner"
                :style="{ backgroundImage: `url(/image/genshin/elements/${getCharEle(vv)}.png)` }"></div>

            </div>
            <div class="tt1-description">
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
import { replaceAndLow, compareDayjs } from "../utils";


const wishChar = WISH.characters



export default {
  name: "Fork",
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
  },
  async mounted() {
    this.selectedFork = ""
    this.selectedLastChar = ""
    // default
    this.sortEarly()
  }
};
</script>
  
<style scoped>
.underline {
  text-decoration: underline;
}

.date {
  font-family: 'Lora', 'Times New Roman', serif;
  font-style: italic;
}

.choose {
  color: rgb(242, 109, 109);
}

.always-here {
  color: rgb(106, 177, 52);
}

.fork-current {
  color: rgb(177, 80, 48);
}

.fork-future {
  color: rgb(69, 183, 236);
}

.wish-img {
  width: 36px;
  border-radius: 9999px;
}

.wish-container {
  display: flex;
  width: 100%;
  /* height: 100px; */
  background-color: #e5e5e5;
  padding: 10px;
  /* border-radius: 9999px; */
  margin-bottom: 10px;
}

.wish-avatar {
  display: flex;
  flex-wrap: wrap;
  /* 允许换行 */
  justify-content: space-between;

  width: 80px;
  /* background-color: #ccc; */
  /* height: 50%; */
  /* border-radius: 9999px; */
  margin-left: 20px;
}

.wish-info {
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 10px;
}

.wish-name {
  font-size: 18px;
  font-weight: 800;
}

.wish-version {
  font-size: 16px;
  color: #999;
}

.wish-duration {
  font-size: 14px;
  color: #999;
}



.avatar-container {
  display: flex;
  flex-wrap: wrap;
  /* 允许换行 */
  justify-content: space-between;
  /* 水平间距均匀分布 */
}

.avatar {
  width: 20%;
  /* 每个头像容器占据20%的宽度，一行最多显示5个 */
  margin-bottom: 20px;
  /* 下方的间距 */
  max-width: 100%;
  max-height: 100%;
}

.description {
  text-align: center;
}

.tt1-ver {
  display: flex;
  width: 10%;
}


.outer-container {
  display: flex;
  flex-wrap: wrap;
  width: 95%;
}

.tt1-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100px;
  /* height: 300px; */
  padding-bottom: 5px;
  margin-right: 5px;

  margin-bottom: 5px;
  /* 添加间距 */
  border-radius: 10px;
  background-color: lightgray;
}

.tt1-avatar {
  width: 100px;
  height: 100px;
  /* border-radius: 50%; */
  /* background-color: #b47b48; */
  position: relative;
  /* border-radius: 10px; */
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

.tt1-image-corner {
  position: absolute;
  top: 0;
  left: 0;
  width: 30px;
  height: 30px;
  /* background-image: url("/image/genshin/characters/paimon_faq.png"); */
  background-size: cover;
}

.tt1-description {
  margin-top: 5px;
  text-align: center;
}
</style>
  
  