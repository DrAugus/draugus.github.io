<template>
    福彩刮刮乐
    <table>
        <thead>
            <tr>
                <th>代码</th>
                <th>金额</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(v, k, i) in welfare">
                <td> {{ k }}</td>
                <td> {{ v }}</td>
            </tr>
        </tbody>
    </table>
    体彩刮刮乐
    <table>
        <thead>
            <tr>
                <th>代码</th>
                <th>金额</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(v, k, i) in sports">
                <td> {{ k }}</td>
                <td> {{ v }}</td>
            </tr>
        </tbody>
    </table>
</template>

<script setup lang="ts">
import { DATA_LOTTERY } from "../../data/lottery";
const welfare = DATA_LOTTERY.welfare;
const sports = DATA_LOTTERY.sports;
</script>

<style scoped>
.center {
    align-content: center;
    text-align: center;
}
</style>