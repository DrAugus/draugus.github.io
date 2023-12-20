<template>
  <div v-if="current.able">

    <h2>当前祈愿
      <Badge :text="current.obj[0].ver" type="warning"></Badge>
    </h2>

    <blockquote>祈愿周期：{{ current.obj[0].date }}</blockquote>

    <div v-for="(v, i) in current.obj">
      <h3>
        活动期间，下列限定五星角色的祈愿获取概率将大幅提升！ <br />
        <span v-for="(vv, ii) in v.name">
          <span :class="'ele-text-' + getCharElement(v.wish5star[ii], CHARACTER).id">
            {{ v.name[ii] + '祈愿：' + combineChar(v.wish5star[ii], CHARACTER) }}
          </span>
          <Badge :text="v.image[ii] == 1 ? '首次up' : `第${v.image[ii]}次up`" :type="v.image[ii] == 1 ? 'tip' : 'warning'">
          </Badge>
          <br />
        </span>
      </h3>
      四星角色
      <span v-for="(vv, ii) in v.wish4star">
        <span :class="'ele-text-' + getCharElement(vv, CHARACTER).id">
          {{ '「' + combineChar(vv, CHARACTER) + '」' }}
        </span>
      </span>
      的祈愿获取概率将大幅提升！


    </div>

    <!-- <div class="bg-height" :style="imgStyle"></div> -->

    <h3>{{ end }} 后结束</h3>


    <div v-for="(v, i) in current.obj">
      <div v-for="(vv, ii) in v.src" :key="ii">
        <img :src="vv" @error="replaceImg">
      </div>
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
        <span class="f-w-600">
          <span v-for="(vv, ii) in v.wish5star">
            {{ getCharName(vv, CHARACTER) }}
            <span v-if="ii !== v.wish5star.length - 1">{{ '+ ' }}</span>
          </span>
        </span>
        <Badge :text="v.ver"></Badge>
        {{ v.date }}
        <span v-for="(vv, ii) in v.wish4star">
          {{ getCharName(vv, CHARACTER) }}
        </span>
      </li>
    </ul>

  </div>
  <div v-else>
    <h2>未来祈愿，等待更新</h2>
  </div>
</template>

<script>
import { getCharName, combineChar, getCharElement, getImgStyle } from '../utils';
import { CHARACTER } from './characters';
import { current, future, wishDeadline, wishBegin } from "./wishRecent";

import "./genshin.scss";

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
      getCharName,
      getCharElement,
      combineChar,
      CHARACTER,
      imgStyle: getImgStyle(current, 0),
    };
  },
  methods: {
    replaceImg(event) {
      event.target.src = '/image/genshin/wish/_1.jpg';
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
.bg-height {
  height: 200px;
}

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
