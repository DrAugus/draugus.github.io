<template>
    <p>
        次数 <a @click="sorted(0)">递增</a> | <a @click="sorted(1)">递减</a>
    </p>

    <div v-for="(v, k) in modify5starWishInfo">
        {{ v.name }} : {{ v.times }}
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { GameName, filterObject } from "./utils";

const props = defineProps<{
    WISH: WishAll,
    CHARACTER: Characters,
    GAME_NAME: GameName,
}>();

const sorted = (type) => {
    modify5starWishInfo.value = (modify5starWishInfo.value.sort((a, b) =>
        !type ?
            a.times - b.times :
            b.times - a.times
    ));
};

const all5star = Object.values(props.CHARACTER).filter(character => character.star === 5).map(obj => obj.id);
// console.log('all5star', all5star)

let modify5starWishData = {};

const modify5starWish = (char) => {
    for (let c of char) {
        modify5starWishData[c] = [];
        for (let w of props.WISH.characters) {
            let idx = w.wish5star.indexOf(c);
            if (idx !== -1) {
                let obj = {};
                obj.name = w.name[idx];
                obj.image = w.image[idx];
                obj.shortName = w.wish5star[idx];
                obj.start = w.start;
                obj.end = w.end;
                obj.version = w.version;

                modify5starWishData[c].push(obj);
            }
        }
    }
};

modify5starWish(all5star);
// filter null
modify5starWishData = filterObject(modify5starWishData, v => v.length);

// console.log('modify5starWishData', modify5starWishData)

let modify5starWishInfo = ref([]);
Object.values(modify5starWishData).forEach((v) => {
    let shortName = v[0].shortName;
    let obj = {};

    obj.id = shortName;
    obj.name = props.CHARACTER[shortName].name;
    obj.times = v.length;

    modify5starWishInfo.value.push(obj);
});
// console.log('modify5starWishInfo', modify5starWishInfo)

</script>