<script setup lang="ts">
import { ALG_COMPLEXITY } from '../data/code/algSortComplexity';
import { Complexity } from '../type';

const objMap: Map<string, Complexity[]> = new Map();

ALG_COMPLEXITY.forEach(obj => {
    // 如果键已经存在，将对象添加到对应的数组中
    if (objMap.has(obj.type)) {
        objMap.get(obj.type)!.push(obj);
    } else {
        // 如果键不存在，创建一个新数组并将对象添加进去
        objMap.set(obj.type, [obj]);
    }
});

function strStable(stable: boolean) {
    return stable ? "稳定" : "不稳定";
}

</script>

<template>

    <table>
        <thead>
            <tr>
                <th rowspan="2">类别</th>
                <th rowspan="2">排序方法</th>
                <th colspan="3">时间复杂度</th>
                <th>空间复杂度</th>
                <th rowspan="2">稳定性</th>
            </tr>
            <tr>
                <th>平均情况</th>
                <th>最好情况</th>
                <th>最坏情况</th>
                <th>辅助存储</th>
            </tr>
        </thead>
        <tbody>
            <template v-for="(mapData, key) in objMap">
                <tr>
                    <td v-if="mapData[1].length > 1" :rowspan="mapData[1].length">{{ mapData[0] }}</td>
                    <td :colspan="mapData[1][0].method == mapData[1][0].type ? 2 : 0"> {{ mapData[1][0].method }}</td>
                    <td>O({{ mapData[1][0].time.best }})</td>
                    <td>O({{ mapData[1][0].time.average }}) </td>
                    <td>O({{ mapData[1][0].time.worst }})</td>
                    <td>O({{ mapData[1][0].space }})</td>
                    <td> {{ strStable(mapData[1][0].stable) }}</td>
                </tr>

                <tr v-for="(value, index) in mapData[1].slice(1)" :key="index">
                    <td> {{ value.method }}</td>
                    <td> O({{ value.time.best }})</td>
                    <td>O( {{ value.time.average }})</td>
                    <td> O({{ value.time.worst }})</td>
                    <td> O({{ value.space }})</td>
                    <td> {{ strStable(value.stable) }}</td>
                </tr>
            </template>
        </tbody>
    </table>

</template>

<style lang="css" scoped>
th,
td {
    text-align: center;
}
</style>