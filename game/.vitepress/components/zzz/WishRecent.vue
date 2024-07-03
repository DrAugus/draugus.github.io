<template>
  <div v-if="current.able">

    <h2>当前调频
      <Badge :text="current.obj[0].ver" type="warning"></Badge>
    </h2>

    <blockquote>调频周期：{{ current.obj[0].date }}</blockquote>
    <div v-for="(v, i) in current.obj">
      <h3>
        活动期间，下列限定五星角色调频成功概率限时提升 <br />

        <span v-for="(vv, ii) in v.name">
          {{ combineQuoteZh(v.name[ii]) + getCharName(v.wish5star[ii], CHARACTER) }}
          <Badge :text="v.image[ii] == 1 ? '首次up' : `第${v.image[ii]}次up`" :type="v.image[ii] == 1 ? 'tip' : 'warning'">
          </Badge>
          <br />
        </span>

      </h3>
      四星角色
      <span v-for="(vv, ii) in v.wish4star">
        {{ '「' + getCharName(vv, CHARACTER) + '」' }}
      </span>
      调频成功概率限时提升
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
    <h2>现在 暂无调频，敬请期待</h2>
  </div>

  <div v-if="future.able">

    <h2>未来调频</h2>

    <h3>{{ begin }} 后开始</h3>

    <ul>
      <li v-for="(v, i) in future.obj">
        <span class="f-w-600"> <span v-for="(vv, ii) in v.wish5star">
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
    <h2>未来调频，等待更新</h2>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue";
import { combineQuoteZh, getCharName, getImgStyle, GameName } from '../utils';
import { CHARACTER } from './characters';
import { current, future, wishDeadline, wishBegin } from "./wishRecent";


let timer1: number = -1;
let timer2: number = -1;

let begin = ref('');
let end = ref('');

onMounted(async () => {
  timer1 = setInterval(() => {
    begin.value = wishBegin();
  }, 1000);
  timer2 = setInterval(() => {
    end.value = wishDeadline();
  }, 1000);
});


onUnmounted(() => {
  if (timer1) clearInterval(timer1);
  if (timer2) clearInterval(timer2);
});

const imgStyle = getImgStyle(current, GameName.ZZZ);

function replaceImg(event) {
  event.target.src = '/image/genshin/wish/_1.jpg';
}

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
