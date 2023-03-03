<template>
    <div v-for="(v, k) in charMap">
        {{ modifyChar(v[0]) }} : {{ v[1].length }}
    </div>

    <table>
        <tbody>

            <tr>
                <td> 2</td>
                <td> 2</td>
                <td> 2</td>
            </tr>

            <tr>
                <td> 2</td>
                <td> 2</td>
                <td> 2</td>
            </tr>

        </tbody>

    </table>
</template>

<script>
import { defineComponent } from 'vue'

import { WISH } from "./wish";
// import { CHARACTER } from "./characters";
import dayjs from "dayjs";
import { modifyChar } from './characters';


const wishLength = WISH.characters.length
const characters = WISH.characters

let versions = []
let sort = false

const process = () => {
    let _versions = []
    for (const wish of characters) {
        if (_versions[wish.version] === undefined) {
            _versions[wish.version] = 0;
        }
        _versions[wish.version]++
    }

    versions = Object.entries(_versions).map(([ver, len]) => ({
        ver,
        len,
    }))

}

console.log(WISH)

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
    // console.log("charMap", charMap);
    return charMap;
}

let charMap = filterChar();

export default defineComponent({
    name: "GenshinUpTable",
    props: {},
    data() {
        return {
            charMap,
            modifyChar,
        }
    },
})


</script>