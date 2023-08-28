<template>
    <p>
        次数 <a @click="sort(0)">递增</a> | <a @click="sort(1)">递减</a>
    </p>

    <div v-for="(v, k) in charMap">
        {{ modifyChar(v[0], CHARACTER) }} : {{ v[1].length }}
    </div>
</template>

<script>
import { defineComponent } from 'vue'

import { WISH } from "./wish";
import { CHARACTER } from "./characters";
import { parseDayjs, modifyChar,filterObject } from "../utils";
import dayjs from "dayjs";



const all5star = Object.values(CHARACTER).filter(character => character.star === 5).map(obj => obj.id);
// console.log('all5star', all5star)

let modify5starWishData = {}


const modify5starWish = (char) => {
    for (let c of char) {
        modify5starWishData[c] = []
        for (let w of WISH.characters) {
            let idx = w.wish5star.indexOf(c)
            if (idx !== -1) {
                let obj = {}
                obj.name = w.name[idx]
                obj.image = w.image[idx]
                obj.shortName = w.wish5star[idx]
                obj.start = w.start
                obj.end = w.end
                obj.version = w.version

                modify5starWishData[c].push(obj)
            }
        }
    }
}

modify5starWish(all5star)
// filter null
modify5starWishData = filterObject(modify5starWishData, v => v.length)

console.log('modify5starWishData', modify5starWishData)


const filterChar = () => {
    let charMap = new Map();
    for (let wish of WISH.characters) {
        //当前时间在祈愿起始时间前
        let start = parseDayjs(wish.start)
        let end = parseDayjs(wish.end)
        let startBefore = dayjs().isBefore(start, "second");
        if (startBefore) break;

        let wish5star = wish.wish5star;
        let obj = {
            start: start,
            end: end,
            ver: wish.version
        };
        if (charMap.has(wish5star)) {
            let obj2 = charMap.get(wish5star);
            charMap.set(wish5star, [...obj2, obj]);
        } else {
            charMap.set(wish5star, [obj]);
        }
    }
    // console.log("charMap", charMap);
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
            CHARACTER,
        }
    },
    methods: {
        sort(type) {
            this.charMap = (Array.from(charMap).sort((a, b) =>
                !type ?
                    a[1].length - b[1].length :
                    b[1].length - a[1].length
            ))
        },
    },
})


</script>