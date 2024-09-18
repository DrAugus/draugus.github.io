<script setup lang="ts">
import json from "../../data/genshin/rscs-unique.json";
import { City } from "./utils";
import { CHARACTER } from "./characters";

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
        <h3>{{ k }}</h3>
        <div v-for="(vv, ii) in v">
            {{ vv }}
        </div>
    </div>
</template>