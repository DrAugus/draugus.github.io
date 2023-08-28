<template>
    <p>
        次数 <a @click="sort(0)">递增</a> | <a @click="sort(1)">递减</a>
    </p>

    <div v-for="(v, k) in modify5starWishInfo">
        {{ v.name }} : {{ v.times }}
    </div>
</template>

<script>
import { defineComponent } from 'vue'

import { WISH } from "./wish";
import { CHARACTER } from "./characters";
import { modifyChar, filterObject } from "../utils";



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



let modify5starWishInfo = []
Object.values(modify5starWishData).forEach(function (v) {
    let shortName = v[0].shortName
    let obj = {}

    obj.id = shortName
    obj.name = CHARACTER[shortName].name
    obj.times = v.length

    modify5starWishInfo.push(obj)
});
console.log('modify5starWishInfo', modify5starWishInfo)


export default defineComponent({
    name: "GenshinUpTimes",
    props: {},
    data() {
        return {
            modify5starWishInfo,
        }
    },
    methods: {
        sort(type) {
            this.modify5starWishInfo = (this.modify5starWishInfo.sort((a, b) =>
                !type ?
                    a.times - b.times :
                    b.times - a.times
            ))

        },
    },
})


</script>