<template>
    <TitleFormat :title="title" :number=2 />
    <span>计数 {{ items.length }}</span>
    <p>
        <span v-for="item in items" :key="item.text" class="item-item">
            <a :style="getCourseStyle()" :href="item.link">{{ item.text }}</a>
        </span>
    </p>
</template>

<script setup lang="ts">
import { LinkName } from '../type';
import { hslToRgb, rgbToHex } from "../utils";
import TitleFormat from "./TitleFormat.vue";

const props = defineProps<{
    title: string,
    intro?: LinkName,
    items: LinkName[]
}>();

function getRandomSize() {
    // 返回一个随机字体大小（例如，16px 到 32px 之间）  
    return `${Math.floor(Math.random() * 17) + 16}px`;
}
function getRandomColor() {
    // // 返回一个随机颜色  
    // const letters = '0123456789ABCDEF';
    // let color = '#';
    // for (let i = 0; i < 6; i++) {
    //     color += letters[Math.floor(Math.random() * 16)];
    // }
    // return color;

    const hue = Math.floor(Math.random() * 360);
    const saturation = 80;
    const lightness = 60;

    const { r, g, b } = hslToRgb(hue, saturation, lightness);
    return rgbToHex(r, g, b);
}
function getCourseStyle() {
    // 根据课程ID返回随机的样式对象  
    return {
        fontSize: getRandomSize(),
        color: getRandomColor(),
        textDecoration: 'unset',
        textUnderlineOffset: 'unset'
    };
}
</script>

<style scoped>
.item-item {
    margin: 10px 2px;
}
</style>