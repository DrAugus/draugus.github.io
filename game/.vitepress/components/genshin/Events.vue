<template>
    <HomeFeature :msg="msg"></HomeFeature>
</template>

<script>
import HomeFeature from '../HomeFeature.vue';
import { defineComponent } from 'vue'
import { current, future } from '../wishRecent'
import { modifyChar } from './characters';

// title 5 star
// body time and 4 star
// console.log(current)

const modify4char = (arr) => {
    // 可能不是 arr 不知道四星是什么
    if (!Array.isArray(arr)) return ""
    return arr.map((v, i, a) => {
        if (v == "") return ""
        // console.log(v)
        return modifyChar(v)
    })
}

const getEventWish = (wishInfo, arr) => {
    let lenWish = wishInfo.index.length
    // console.log(lenWish)
    for (let i = 0; i < lenWish; ++i) {
        if (i > 5) break;
        let title = wishInfo.obj[i].name + ' ' + modifyChar(wishInfo.obj[i].wish5star)
        let body = [
            wishInfo.obj[i].ver + ' ',
            modify4char(wishInfo.obj[i].wish4star),
            wishInfo.obj[i].date
        ]
        // console.log(title, body)
        arr.push([title, body])
    }
}

let wishCurrent = []
let wishFuture = []
getEventWish(current, wishCurrent)
getEventWish(future, wishFuture)

// console.log("wishCurrent", wishCurrent)
// console.log("wishFuture", wishFuture)
let temp = [
    ["复刻期待", ["todo"]],
    ["活动1", ["todo"]],
    ["活动2", ["todo"]],
    ["活动3", ["todo"]],
    ["活动4", ["todo"]],
]

const msg = [
    ...wishCurrent,
    ...wishFuture,
    ...temp
]

export default defineComponent({
    name: "Events",
    components: {
        HomeFeature,
    },
    data() {
        return {
            msg,
        }
    },
})
</script> 


<style scoped>
.wish-current {
    color: rgb(74, 191, 138);
}

.wish-future {
    color: rgb(74, 191, 138);
}
</style>