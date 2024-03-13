<template>

  <div v-if="current.able">

    <h2>当前限定祈愿
      <Badge :text="current.obj[0].ver" type="warning"></Badge>
    </h2>

    <blockquote>祈愿周期：{{ current.obj[0].date }}</blockquote>

    <div v-for="(v, i) in current.obj">
      <h3>
        活动期间，下列限定五星角色的祈愿获取概率将大幅提升！ <br />
        <span v-for="(vv, ii) in v.name">
          <span :class="'ele-text-' + getCharElement(v.wish5star[ii], CHARACTER).id">
            {{ combineQuoteZh(v.name[ii]) + '祈愿：' + combineQuoteZh(combineChar(v.wish5star[ii], CHARACTER)) }}
          </span>
          <Badge :text="v.image[ii] == 1 ? '首次up' : `第${v.image[ii]}次up`" :type="v.image[ii] == 1 ? 'tip' : 'warning'">
          </Badge>
          <br />
        </span>
      </h3>
      四星角色
      <span v-for="(vv, ii) in v.wish4star">
        <span :class="'ele-text-' + getCharElement(vv, CHARACTER).id">
          {{ combineQuoteZh(combineChar(vv, CHARACTER)) }}
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
    <h2>现在，暂无限定祈愿，敬请期待</h2>
  </div>


  <div v-if="future.able">

    <h2>未来祈愿</h2>

    <h3>限定祈愿 {{ begin }} 后开始</h3>

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
    <h2>未来限定祈愿，等待更新</h2>
  </div>

  <div v-if="currentChronicled.able">

    <h2>当前集录祈愿
      <Badge :text="currentChronicled.obj[0].ver" type="warning"></Badge>
    </h2>

    <blockquote>祈愿周期：{{ currentChronicled.obj[0].date }}</blockquote>

    <div v-for="(v, i) in currentChronicled.obj">
      <h3>
        活动期间，下列限定五星角色/武器的祈愿获取概率将大幅提升！ <br />
        {{ combineQuoteZh(v.name[0]) + '祈愿：' }} <br />
        <span v-for="(vv, ii) in v.wish5star?.characters">
          <span :class="'ele-text-' + getCharElement(vv, CHARACTER).id">
            {{ combineQuoteZh(combineChar(vv, CHARACTER)) }}
          </span>
        </span>
        <br />
        <span v-for="(vv, ii) in v.wish5star?.weapons">
          {{ `"${vv}" ` }}
        </span>
      </h3>
      四星角色
      <span v-for="(vv, ii) in v.wish4star?.characters">
        <span :class="'ele-text-' + getCharElement(vv, CHARACTER).id">
          {{ combineQuoteZh(combineChar(vv, CHARACTER)) }}
        </span>
      </span>
      的祈愿获取概率将大幅提升！
      <br />
      四星武器
      <span v-for="(vv, ii) in v.wish4star?.weapons">
        {{ `"${vv}" ` }}
      </span>
      的祈愿获取概率将大幅提升！

    </div>

    <!-- <div class="bg-height" :style="imgStyle"></div> -->

    <h3>{{ end }} 后结束</h3>


    <div v-for="(v, i) in currentChronicled.obj">
      <div v-for="(vv, ii) in v.src" :key="ii">
        <img :src="vv" @error="replaceImg">
      </div>
    </div>

  </div>
  <div v-else>
    <h2>现在，暂无集录祈愿，敬请期待</h2>
  </div>


</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue";
import { getCharName, combineChar, getCharElement, getImgStyle, combineQuoteZh } from '../utils';
import { CHARACTER } from './characters';
import { current, future, wishDeadline, wishBegin, wishBeginChronicled, wishDeadlineChronicled, currentChronicled } from "./wishRecent";

import "./genshin.scss";



let begin = ref('');
let end = ref('');
let beginChronicled = ref('');
let endChronicled = ref('');
let imgStyle = getImgStyle(current, 0);

function replaceImg(event) {
  event.target.src = '/image/genshin/wish/_1.jpg';
}

let timer1: number = -1;
let timer2: number = -1;
let timer3: number = -1;
let timer4: number = -1;

onMounted(async () => {
  timer1 = setInterval(() => {
    begin.value = wishBegin();
  }, 1000);
  timer2 = setInterval(() => {
    end.value = wishDeadline();
  }, 1000);
  timer3 = setInterval(() => {
    beginChronicled.value = wishBeginChronicled();
  }, 1000);
  timer4 = setInterval(() => {
    endChronicled.value = wishDeadlineChronicled();
  }, 1000);
});


onUnmounted(() => {
  if (timer1) clearInterval(timer1);
  if (timer2) clearInterval(timer2);
  if (timer3) clearInterval(timer3);
  if (timer4) clearInterval(timer4);
});

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
