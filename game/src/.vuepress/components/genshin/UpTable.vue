<template>
    <table>
        <tbody class="table-center">

            <tr>
                <td v-for="(v, i) in versions" :colspan="v.len"> {{ v.ver }}</td>
            </tr>

            <tr v-for="(v, i) in rows">
                <td class="td-w-h" v-for="(vv, ii) in v">
                    <span v-if="vv.l"> {{ vv.l }}</span>
                    <img v-if="vv.char" :src="composeSrc(vv.char)">
                </td>
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
import { composeSrc, parseDayjs, formatDayjs } from "./utils";


const wishLength = WISH.characters.length
const characters = WISH.characters

let versions = []
let rows = [[]];
let names = [{ name: '', length: 0 }];
let sort = false

const process = () => {
    let _versions = []
    let _chars5 = {};
    let _chars4 = {};
    let _rows5 = [];
    let _rows4 = [];
    let _names5 = [];
    let _names4 = [];

    let pos5 = 0;
    let pos4 = 0;
    let len = 0

    for (const wish of characters) {
        if (_versions[wish.version] === undefined) {
            _versions[wish.version] = 0;
        }
        _versions[wish.version]++


        for (const ch of Object.keys(_chars5)) {
            _chars5[ch].length++;
            _names5[_chars5[ch].pos].length++;
            _rows5[_chars5[ch].pos][len] = { l: _chars5[ch].length, m: 15 };
        }
        for (const ch of Object.keys(_chars4)) {
            _chars4[ch].length++;
            _names4[_chars4[ch].pos].length++;
            _rows4[_chars4[ch].pos][len] = { l: _chars4[ch].length, m: 9 };
        }


        const char = wish.wish5star


        if (_chars5[char] === undefined) {
            _chars5[char] = {
                pos: pos5,
                length: 0,
            };
            _names5[pos5] = { name: char, length: 0 };
            _rows5[pos5] = [...new Array(len).fill({ l: '' }), { char, l: 0 }];
            pos5++;
        } else {
            _rows5[_chars5[char].pos][len] = { char, l: 0 };
            _names5[_chars5[char].pos].length = 0;
            _chars5[char].length = 0;

        }

        len++;
    }

    versions = Object.entries(_versions).map(([ver, len]) => ({
        ver,
        len,
    }))
    rows = [..._rows5, new Array(wishLength).fill({ l: '' }), ..._rows4, new Array(wishLength).fill({ l: '' })];
    names = [..._names5, { name: '', length: 0 }, ..._names4, { name: '', length: 0 }];

}

process();

console.log(wishLength)
console.log(versions)
console.log(rows)
console.log(names)

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
            versions,
            rows,
            names,
            composeSrc,
        }
    },
})


</script>

<style>
.table-center {
    text-align: center;
}

.td-w-h {
    width: 30px;
    height: 30px;
}
</style>

<style>
.theme-default-content {
    max-width: unset !important;
}
</style>
