<template>
    <!-- <button :on-click="sortOrder()">sort</button> -->

    <table>
        <tbody class="table-center">

            <tr>
                <td v-for="(v, i) in versions" :colspan="v.len" class="td-font">
                    {{ v.ver }}</td>
                <td></td>
            </tr>

            <tr v-for="(v, i) in rows">
                <td class="td-w-h" v-for="(vv, ii) in v" :style="{ background: getColor(vv.l, vv.m) }">
                    <span v-if="vv.l" class="td-font"> {{ vv.l }}</span>
                    <img v-if="vv.char" :src="composeCharSrc(WISH_TEXT, vv.char)">
                </td>
                <td :style="{ textAlign: 'left', whiteSpace: 'nowrap' }">
                    {{ getCharName(names[i].name, CHARACTER) }}
                </td>
                <td :style="{ textAlign: 'center', whiteSpace: 'nowrap' }">
                    {{ i + 1 }}
                </td>
            </tr>

        </tbody>
    </table>
</template>

<script>
import { defineComponent } from 'vue'

import dayjs from "dayjs";
import { getCharName, composeCharSrc, replaceAndLow, GameName } from './utils';


const getColor = (index, max) => {
    if (index === '') return 'none';
    const hue = ((max - index) / max) * 100;
    return `hsl(${hue}, 60%, 70%)`;
}

let charMap = new Map();
let versions = []
let rows = [[]];
let names = [{ name: '', length: 0 }];

export default defineComponent({
    name: "GenshinUpTable",
    props: {
        WISH: {
            type: Object,
            required: true,
        },
        CHARACTER: {
            type: Object,
            required: true,
        },
        // 0 genshin 1 hsr
        WISH_TEXT: {
            type: Number,
            required: true,
            default: GameName.Genshin
        },
    },
    data() {
        return {
            charMap,
            getCharName,
            versions,
            rows,
            names,
            composeCharSrc,
            getColor,
            // sortOrder,
        }
    },
    mounted() {
        const wishLength = this.WISH.characters.length
        const characters = this.WISH.characters

        let versions = []
        let rows = [[]];
        let names = [{ name: '', length: 0 }];

        let __rows5;
        let __rows4;
        let __names5;
        let __names4;

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


                for (let char of wish.wish5star) {
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
                }

                for (let char of wish.wish4star) {
                    const modifyChar = replaceAndLow(char)
                    if (_chars4[modifyChar] === undefined) {
                        _chars4[modifyChar] = {
                            pos: pos4,
                            length: 0,
                        };
                        _names4[pos4] = { name: modifyChar, length: 0 };
                        _rows4[pos4] = [...new Array(len).fill({ l: '' }), { char, l: 0 }];
                        pos4++;
                    } else {
                        _rows4[_chars4[modifyChar].pos][len] = { char, l: 0 };
                        _names4[_chars4[modifyChar].pos].length = 0;
                        _chars4[modifyChar].length = 0;
                    }
                }


                len++;
            }

            versions = Object.entries(_versions).map(([ver, len]) => ({
                ver,
                len,
            }))

            __rows5 = _rows5;
            __rows4 = _rows4;
            __names5 = _names5;
            __names4 = _names4;

            rows = [..._rows5, new Array(wishLength).fill({ l: '' }), ..._rows4, new Array(wishLength).fill({ l: '' })];
            names = [..._names5, { name: '', length: 0 }, ..._names4, { name: '', length: 0 }];

        }

        process();

        this.versions = versions
        this.rows = rows
        this.names = names

        const sortOrder = () => {
            process()

            sort = !sort;
            if (!sort) {
                rows = [...__rows5, new Array(wishLength).fill({ l: '' }), ...__rows4];
                names = [...__names5, { name: '', length: 0 }, ...__names4];
                return;
            }
            const _rows5 = [...__rows5].sort((a, b) => b[wishLength - 1].l - a[wishLength - 1].l);
            const _rows4 = [...__rows4].sort((a, b) => b[wishLength - 1].l - a[wishLength - 1].l);
            const _names5 = [...__names5].sort((a, b) => b.length - a.length);
            const _names4 = [...__names4].sort((a, b) => b.length - a.length);

            rows = [..._rows5, new Array(wishLength).fill({ l: '' }), ..._rows4, new Array(wishLength).fill({ l: '' })];
            names = [..._names5, { name: '', length: 0 }, ..._names4, { name: '', length: 0 }];


        }

        // console.log('wishLength', wishLength)
        // console.log('versions', versions)
        // console.log('rows', rows)
        // console.log('names', names)

        const filterChar = () => {
            let charMap = new Map();
            for (let wish of this.WISH.characters) {
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

        this.charMap = filterChar();

    }
})


</script>

<style>
.table-center {
    text-align: center;
}

.td-font {
    font-weight: 600;
}

.td-w-h {
    width: 2rem;
    height: 2rem;
    min-width: 2rem;
    min-height: 2rem;
    text-align: center;
    position: relative;
    padding: unset
}

.td-w-h img {
    width: 100%;
    height: 100%;
    object-position: center;
    -o-object-fit: cover;
    object-fit: cover;
    display: block;
    /* vertical-align: middle; */
}
</style>

<style scoped>
.theme-default-content {
    max-width: unset !important;
}

.vp-doc th,
.vp-doc td {
    padding: unset;
}
</style>
