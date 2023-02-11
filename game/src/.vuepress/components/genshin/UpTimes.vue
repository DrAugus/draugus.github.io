<template>
    <div v-for="(v, k) in charMap">
        {{ modifyChar(v[0]) }} : {{ v[1].length }}
    </div>
</template>

<script>
import { defineComponent } from 'vue'

import { WISH } from "./wish";
// import { CHARACTER } from "./characters";
// import { formatDate } from "./utils";
import dayjs from "dayjs";
import { modifyChar } from './characters';

const filterChar = () => {
    let charMap = new Map();
    for (let wish of WISH.characters) {
        //当前时间在祈愿起始时间前
        let startBefore = dayjs().isBefore(wish.start, "second");
        if (startBefore) break;

        let wish5star = wish.wish5star;
        let obj = {
            start: wish.start,
            end: wish.end,
            ver: wish.version
        };
        if (charMap.has(wish5star)) {
            let obj2 = charMap.get(wish5star);
            charMap.set(wish5star, [...obj2, obj]);
        } else {
            charMap.set(wish5star, [obj]);
        }
    }
    console.log("charMap", charMap);
    return charMap;
}

let charMap = filterChar();

export default defineComponent({
    name: "GenshinUpTimes",
    props: {},
    data() {
        return {
            charMap,
            modifyChar,
        }
    },
})


</script>