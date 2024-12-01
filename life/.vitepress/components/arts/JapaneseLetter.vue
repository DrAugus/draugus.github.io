<template>
    <TitleFormat :title="'五十音'" :number="2"></TitleFormat>

    <table>
        <thead>
            <tr>
                <th></th>
                <th class="head-letter" v-for="(v, i) in row1"> {{ v }}</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(v, i) in hira2d">
                <td class="head-letter" v-if="i != hira2d.length - 1">{{ v[0] }}</td>
                <td v-else></td>
                <td v-for="(vv, ii) in v">
                    {{ vv }} <br />
                    <span class="kana">{{ kana2d[i][ii] }} </span>
                    <span class="pron">{{ pron2d[i][ii] }}</span>
                </td>
            </tr>
        </tbody>
    </table>

    <TitleFormat :title="'ALL'" :number="2"></TitleFormat>

    <details>
        <summary>
            平假名 hira
        </summary>

        <ul class="letter-list">
            <li class="module-modal" v-for="(v, i ) in pronAll">

                <img v-if="v" :src="getImgSrc('hira', v)" :alt="v" />

            </li>
        </ul>

    </details>


    <details>
        <summary>
            片假名 kana
        </summary>

        <ul class="letter-list">
            <li class="module-modal" v-for="(v, i ) in pronAll">

                <img v-if="v" :src="getImgSrc('kana', v)" :alt="v" />

            </li>
        </ul>

    </details>
</template>

<script setup lang="ts">
import japanese from "../../data/language/japanese.json";
import { computed } from 'vue';
import { slugify } from '@mdit-vue/shared';
import TitleFormat from "../TitleFormat.vue";

const hira: string[] = japanese.hira;
const kana: string[] = japanese.kana;
const pron: string[] = japanese.pron;
const pronAll: string[] = japanese.pron_all.flat();

let hira2d: string[][] = [];
let kana2d: string[][] = [];
let pron2d: string[][] = [];
const sliceSize = 5;
const getChar = () => {
    for (let i = 0; i < hira.length; i += sliceSize) {
        hira2d.push(hira.slice(i, i + sliceSize));
        kana2d.push(kana.slice(i, i + sliceSize));
        pron2d.push(pron.slice(i, i + sliceSize));
    }
    // console.log('hira2d', hira2d)
    // console.log('kana2d', kana2d)
    // console.log('pron2d', pron2d)
};
getChar();

let col1: string[] = [];
let row1: string[] = [];
const getTable = () => {
    for (let i in hira) {
        const index = Number(i);
        if (index < 5) row1.push(hira[index]);
        if (index % 5 === 0) col1.push(hira[index]);
    }
    // console.log(col1, row1)
};
getTable();


const getImgSrc = (dir, s) => {
    let pre = "/img/language/japanese/" + dir;
    let res = `${pre}/${s}.png`;
    return res;
};

</script>

<style scoped>
tr td,
tr th {
    text-align: center;
}

.head-letter {
    color: #67caa4
}

.kana {
    color: rgb(130, 130, 130);
    font-size: 7px;

}

.pron {
    color: rgb(130, 130, 130);
    font-size: 7px;
}

.letter-list {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
}

ol,
ul {
    padding: 0;
    list-style: none;
}

.letter-list li {
    width: 17.5%;
    margin-bottom: 2.5%;
}

.module-modal {
    cursor: pointer;
}

li img {
    -webkit-transition: .2s;
    transition: .2s;
    opacity: 1;
    border: 2px solid #67caa4;

}

img {

    vertical-align: bottom;
    border-style: none;
}
</style>