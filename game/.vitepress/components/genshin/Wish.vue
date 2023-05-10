<template>
  <div v-if="current.able">

    <h2>当前祈愿 
      <Badge :text="current.obj[0].ver" type="warning"></Badge>
    </h2>

    <h3 :style="getImgStyle()">
      <span v-for="(v, i) in current.obj">
        {{ v.name + modifyChar(v.wish5star) }}
      </span>
    </h3>

    <h3>{{ end }} 后结束</h3>
    <blockquote>祈愿周期：{{ current.obj[0].date }}</blockquote>

    <div v-for="(v, i) in current.obj">
      <img :src="v.src" @error="replaceImg">
    </div>

  </div>
  <div v-else>
    <h2>现在 暂无祈愿，敬请期待</h2>
  </div>

  <div v-if="future.able">

    <h2>未来祈愿</h2>

    <h3>{{ begin }} 后开始</h3>

    <ul>
      <li v-for="(v, i) in future.obj">
        <span class="f-w-600"> {{ modifyChar(v.wish5star) }} </span>
        <Badge :text="v.ver"></Badge>
        {{ v.date }}
        <span v-for="(vv, ii) in v.wish4star">
          {{ modifyChar(vv) }}
        </span>
      </li>
    </ul>

  </div>
  <div v-else>
    <h2>未来祈愿，等待更新</h2>
  </div>
</template>

<script>
import { modifyChar } from './characters';
import { current, future, wishDeadline, wishBegin } from "../wishRecent";

export default {
  name: "Wish",
  components: {
    wishDeadline,
    wishBegin,
  },
  data() {
    return {
      future,
      current,
      begin: new Date(),
      end: new Date(),
      modifyChar,
    };
  },
  methods: {
    replaceImg(event) {
      event.target.src = '/image/genshin/wish/_1.jpg'
    },
    getImgStyle() {
      let homeImg = []
      for (let v of current.obj) {
        homeImg.push('/image/genshin/characters/full/' + v.wish5star + '.png')
      }
      let objImg = { cnt: 0, src: '' }
      objImg.cnt = homeImg.length
      if (homeImg.length == 1) objImg.src = homeImg[0]
      if (homeImg.length == 2) objImg.src = `url(${homeImg[0]}),url(${homeImg[1]})`
      return {
        backgroundImage: objImg.src,
        backgroundSize: 'contain, contain',
        backgroundRepeat: 'no-repeat, no-repeat',
        backgroundPosition: 'left, right',
        height: '300px',
        width: '100%',
      }
    },
  },
  mounted() {
    let _this = this;
    this.timer1 = setInterval(() => {
      _this.begin = wishBegin();
    }, 1000);
    this.timer2 = setInterval(() => {
      _this.end = wishDeadline();
    }, 1000);
  },
  beforeDestroy() {
    if (this.timer1)
      clearInterval(this.timer1);
    if (this.timer2)
      clearInterval(this.timer2);
  },

};
</script>

<style scoped>
.f-w-600 {
  font-weight: 600;
}

.image-wrapper {
  overflow: auto;
  /* 解决浮动元素导致父元素高度塌陷的问题 */
}

.image-wrapper img {
  float: left;
  width: 50%;
  /* 每张图片宽度为容器的一半 */
  height: auto;
  /* 高度自适应 */
}
</style>
