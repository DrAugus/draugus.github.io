<template>
    <table>
        <tr>
            <th>省</th>
            <th>市</th>
            <th @click="sort()">探索度</th>
        </tr>
        <tr v-for="(v, k, i) in cityInfo">
            <td :colspan="v.name == '市辖区' ? 2 : ''">{{ v.province }} </td>
            <td v-if="v.name != '市辖区'">{{ v.name }}</td>
            <td>{{ v.explore }}</td>
        </tr>

    </table>
</template>
  
<script>

import city from "../../data/trip/china.json";

let obj = {}
// const cityInfo = Object.values(city)
let cityInfo = [];
Object.values(city).forEach((arr) => {
    arr.forEach((cc) => { if (cc.explore != "") cityInfo.push(cc) });
});
console.log(cityInfo)


export default {
    name: "ChinaList",
    components: {
    },
    data() {
        return {
            cityInfo,
        };
    },
    methods: {
        compareStr(a, b) {
            if (a == b) return 0
            if (a == '' && b != '') return 1
            if (a != '' && b == '') return -1

            return parseInt(a) - parseInt(b)
        },
        sort() {
            if (Math.floor(Math.random() * 20) % 2)
                this.cityInfo = this.cityInfo.sort((a, b) =>
                    this.compareStr(a.explore, b.explore))
            else
                this.cityInfo = this.cityInfo.sort((a, b) =>
                    this.compareStr(b.explore, a.explore))
        },
    },
};

</script>
  
<style scoped>
th {
    text-align: center;
}

td {
    text-align: center;
}
</style>
  