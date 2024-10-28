<script setup lang="ts">
import json from "../../data/genshin/rscs-unique.json";
import { City } from "./utils";
import { CHARACTER } from "./characters";

// todo
// 设计头像 Components 便于其他界面使用

let showZH = {};
for (let city in json) {
    let zhCity: string = City[city].name;
    let zhCharas: string[] = []
    for (let chara of json[city]) {
        let zhChara: string = CHARACTER[chara].name;
        zhCharas.push(zhChara);
    }
    if (!zhCharas.length) {
        zhCharas.push("暂无")
    }
    showZH[zhCity] = zhCharas;
}

</script>
<template>
    <div v-for="(v, k, i) in showZH">
        <p>
            <span class="f-w-600"> {{ k + " " }}</span>
            <span v-for="(vv, ii) in v">
                {{ vv + " " }}
            </span>
        </p>
    </div>
</template>

<style lang="css" scoped>
.f-w-600 {
    font-weight: 600;
}
</style>